---
slug: oxylus-first-game
title: Creating A Game With Oxylus
authors: [Hatrickek]
tags: [blog]
---
I have decided to make a game with Oxylus to stress the engine, showcase the current features and find out what features I'm missing and implement them as well.

The game is going to be a [1985 Cyclone](https://en.wikipedia.org/wiki/Cyclone_(video_game)) remake in 3D. It looked simple and is enough to showcase almost all features
of the engine.
In this blog post I will show the steps I have taken while making the game so it's going to be something like a tutorial you would read for known engines like Unity, Unreal etc.

So let us begin...

## Project
Now first thing you will see when you launch the engine is going to be a project selection panel. First row is showing us the recent projects 
I have opened and below that buttons to load or create projects with a file dialog.
![Project Selector](projects.png)

Projects in Oxylus is just a yaml file specifying the name, start scene path, and asset directory:

```yml 
Project:
  Name: ProjectCyclone
  StartScene: "Scenes/Main.oxscene"
  AssetDirectory: "Assets"
```

## Scene 
Now we need assets to load for our scene. I have found a nice [helicopter model](https://sketchfab.com/3d-models/low-poly-helicopter-5bbed2de9baa4a13a7faa72653b78b64) 
from sketchfab. You can just download, drag and drop it to the editor. Oxylus will load every mesh and materials then create parented entities according to gltf node.
![Scene](scene.png)

And for now I will use a plane to have a ground. For the ground I will create a material and just make it have a green color. Then drag and drop it to the plane.
![Material](Material.gif)

## Systems
When we edit scenes seeing the result directly on runtime is very useful. So for this reason I have created a `HotReloadableScene` system using Oxylus Systems and Oxylus Event System.

Systems in Oxylus are inherited from the `System` interface.
```cpp
class System {
public:
  std::string Name;
  System() = default;
  System(std::string name) : Name(std::move(name)) {}
  virtual ~System() = default;
  virtual void OnInit() {};
  virtual void OnUpdate() {}
  virtual void OnUpdate(Scene* scene) {}
  virtual void OnShutdown() {};
  void SetDispatcher(EventDispatcher* dispatcher) { m_Dispatcher = dispatcher; }
protected:
  EventDispatcher* m_Dispatcher = nullptr;
};
```

Defining the `HotReloadableScene` system:
```cpp
void HotReloadableScenes::OnUpdate() {
  using namespace std::filesystem;
  if (last_write_time(m_ScenePath).time_since_epoch().count()
      != m_LastWriteTime.time_since_epoch().count()) {
    //File changed event
    m_Dispatcher->trigger<ReloadSceneEvent>();
    m_LastWriteTime = last_write_time(m_ScenePath);
  }
}
```
`m_Dispatcher->trigger<ReloadSceneEvent>();` is the way to simply trigger the `ReloadSceneEvent`. 

System event is listened on the `GameLayer` with `OnAttach` callback:
```cpp
void GameLayer::OnAttach(EventDispatcher& dispatcher) {
  dispatcher.sink<ReloadSceneEvent>().connect<&GameLayer::OnSceneReload>(*this);
}

bool GameLayer::OnSceneReload(ReloadSceneEvent&) {
  LoadScene();
  OX_CORE_INFO("Scene reloaded.");
  return true;
}
```

Then we add the system to the engine while creating the application:
```cpp
const auto app = new ProjectCyclone(spec);
app->PushLayer(new ::ProjectCyclone::GameLayer())
    .AddSystem<HotReloadableScenes>("Assets/Scenes/Main.oxscene");
```

![HotReloadableScenes](HotReloadableScene.gif)

## Gameplay

Now we can start working on the gameplay part and prove otherwise the famous phrase about engine devs 😛:    
> Give someone an engine and they'll make a game. Teach someone to make an engine and they'll never make anything.

I will start with creating a simple helicopter system to move the helicopter. And make the propellers turn around itself.   

We can either use the `ScriptableEntity` way or use "raw" ecs. I have picked the raw ecs way since we don't need any callbacks 
from the `ScriptableEntity` api.    

The component that will be added on helicopter entity.
```cpp
struct HeliComponent {
  float Speed = 5.0f; 
  float Fuel = 1.0f;  //1.0f = Full, 0.0f = Empty
  float Altitude = 0.0f;
};
```

By using the same way we have declared an engine system in the last section we now declare a system for the Helicopter entites.
```cpp
void HeliSystem::OnUpdate(Scene* scene) {
  auto& registery = scene->m_Registry;
    const auto view = registery.view<TransformComponent, HeliComponent>();
    for (const auto entity : view) {
      auto&& [transform, heli] = view.get<TransformComponent, HeliComponent>(entity);
  
      //Move horizontal
      if (Input::GetKeyDown(Key::W)) {
        transform.Translation.z += heli.Speed * Timestep::GetDeltaTime();
      }
      //...
      //Other keys
      //...

      //Move vertical
      if (Input::GetKeyDown(Key::Q) && heli.Altitude >= 0.2f) {
        transform.Translation.y -= heli.Speed * Timestep::GetDeltaTime();
      }
      else if (Input::GetKeyDown(Key::E) && heli.Altitude < 8.0f) {
        transform.Translation.y += heli.Speed * Timestep::GetDeltaTime();
      }

      heli.Fuel -= 0.1f * ImGui::GetIO().DeltaTime;
      heli.Altitude = transform.Translation.y;
  }
}
```

For rotating the propeller just getting the transform component and adding a constant value to y rotation would work for now. 

```cpp
auto ent = Oxylus::Entity { entity, m_Scene.get() };
ent.GetChild(1).GetComponent<Oxylus::TransformComponent>().Rotation.y += 5.0f;
```

Other gameplay element we could add is picking up crates from ground.   
Same way we have crated the heli system now we can create a system for crates.
```cpp
const auto heliView = scene->m_Registry.view<TransformComponent, HeliComponent>();
const auto crateView = scene->m_Registry.view<TransformComponent, CrateComponent>();
for (const auto entity : crateView) {
  auto&& [transform, crate] = crateView.get<TransformComponent, CrateComponent>(entity);
  const auto ent = Entity{entity, scene};
  constexpr float axisThreshold = 0.5f;
  //a simple intersection check
  for (const auto heliEntity : heliView) {
    auto&& [heliTransform, heli] = heliView.get<TransformComponent, HeliComponent>(heliEntity);
    if (std::abs(transform.Translation.x - heliTransform.Translation.x) < axisThreshold
        && std::abs(transform.Translation.y + 0.2f - heliTransform.Translation.y) < axisThreshold
        && std::abs(transform.Translation.z - heliTransform.Translation.z) < axisThreshold) {
      heli.CratesTaken += 1;
      scene->DestroyEntity(ent);
      break;
    }
  }
}
```
![Crates](https://cdn.discordapp.com/attachments/1022588581237248060/1088469165813268510/crates.gif)

As you can see the camera is static. The player is going to be wandering around the map a lot so we want to keep 
the helicopter always in focus. We can just snap the camera to a defined position everytime player move
but that wouldn't look good. So we can use `OxMath` API and create a simple camera system with smooth damping.
```cpp
m_LastCameraPosition = Math::SmoothDamp(m_LastCameraPosition,
                                        heliTransform.Translation,
                                        m_TranslationVelocity,
                                        TranslationDampening,
                                        10000.0f,
                                        Timestep::GetDeltaTime());
cameraTransform.Translation.x = m_LastCameraPosition.x;
cameraTransform.Translation.z = m_LastCameraPosition.z + 12.0f;
```
![SmootCam](https://cdn.discordapp.com/attachments/1022588581237248060/1090994911869943898/smoothcam.gif)

## UI 
For creating a game UI we can use `OxUI` api which uses Dear ImGui underneath for drawing and layouts.
Cyclone has a HUD that contains instrumentation which includes speed, altitude, fuel remaining and time remaining.
Additionally there is also information on the number of supply crates, whether the player's current view is North 
or South, information on wind force and a warning to the player of the cyclone's proximity and any approaching planes.     
For now I will just display altitude, remaining fuel and time.
```cpp
OxUI::BeginUI();
OxUI::ProgressBar("Time", Time);
OxUI::ProgressBar("Fuel", Heli.Fuel);
OxUI::Property("Altitude", "%.1f", Heli.Altitude);
OxUI::EndUI();
```
![UI](https://cdn.discordapp.com/attachments/1022588581237248060/1087718914886221904/image.png)

Keeping track of collected crates is just as simple as using glyphs as icons in a row:
```cpp
ImGui::Text(StringUtils::FromChar8T(ICON_MDI_CUBE));
```
![CratesUI](https://cdn.discordapp.com/attachments/1022588581237248060/1090992608567894056/Annotation_2023-03-30_163445.png)


# TO BE CONTINUED...