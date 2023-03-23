"use strict";(self.webpackChunkhatrickek_site=self.webpackChunkhatrickek_site||[]).push([[106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"oxylus-first-game",title:"Creating A Game With Oxylus",authors:["Hatrickek"],tags:["blog"]},i=void 0,s={permalink:"/blog/oxylus-first-game",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/oxylus-first-game/2023-03-19-oxylus-first-game.md",source:"@site/blog/oxylus-first-game/2023-03-19-oxylus-first-game.md",title:"Creating A Game With Oxylus",description:"I have decided to make a game with Oxylus to stress the engine, showcase the current features and find out what features I'm missing and implement them as well.",date:"2023-03-19T00:00:00.000Z",formattedDate:"March 19, 2023",tags:[{label:"blog",permalink:"/blog/tags/blog"}],readingTime:4.54,hasTruncateMarker:!1,authors:[{name:"Hatrickek",url:"https://github.com/Hatrickek",imageURL:"https://avatars.githubusercontent.com/u/89982837?v=4",key:"Hatrickek"}],frontMatter:{slug:"oxylus-first-game",title:"Creating A Game With Oxylus",authors:["Hatrickek"],tags:["blog"]},nextItem:{title:"Oxylus Engine - Introduction",permalink:"/blog/oxylus-engine-intro"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I have decided to make a game with Oxylus to stress the engine, showcase the current features and find out what features I'm missing and implement them as well."),(0,r.kt)("p",null,"The game is going to be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cyclone_(video_game)"},"1985 Cyclone")," remake in 3D. It looked simple and is enough to showcase almost all features\nof the engine.\nIn this blog post I will show the steps I have taken while making the game so it's going to be something like a tutorial you would read for known engines like Unity, Unreal etc."),(0,r.kt)("p",null,"So let us begin..."),(0,r.kt)("h1",{id:"project"},"Project"),(0,r.kt)("p",null,"Now first thing you will see when you launch the engine is going to be a project selection panel. First row is showing us the recent projects\nI have opened and below that buttons to load or create projects with a file dialog.\n",(0,r.kt)("img",{alt:"Project Selector",src:n(8860).Z,width:"1456",height:"971"})),(0,r.kt)("p",null,"Projects in Oxylus is just a yaml file specifying the name, start scene path, and asset directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'Project:\n  Name: ProjectCyclone\n  StartScene: "Scenes/Main.oxscene"\n  AssetDirectory: "Assets"\n')),(0,r.kt)("h1",{id:"scene"},"Scene"),(0,r.kt)("p",null,"Now we need assets to load for our scene. I have found a nice ",(0,r.kt)("a",{parentName:"p",href:"https://sketchfab.com/3d-models/low-poly-helicopter-5bbed2de9baa4a13a7faa72653b78b64"},"helicopter model"),"\nfrom sketchfab. You can just download, drag and drop it to the editor. Oxylus will load every mesh and materials then create parented entities according to gltf node.\n",(0,r.kt)("img",{alt:"Scene",src:n(4754).Z,width:"1920",height:"1048"})),(0,r.kt)("p",null,"And for now I will use a plane to have a ground. For the ground I will create a material and just make it have a green color. Then drag and drop it to the plane.\n",(0,r.kt)("img",{alt:"Material",src:n(9258).Z,width:"1911",height:"990"})),(0,r.kt)("h1",{id:"systems"},"Systems"),(0,r.kt)("p",null,"When we edit scenes seeing the result directly on runtime is very useful. So for this reason I have created a ",(0,r.kt)("inlineCode",{parentName:"p"},"HotReloadableScene")," system using Oxylus Systems and Oxylus Event System."),(0,r.kt)("p",null,"Systems in Oxylus are inherited from the ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class System {\npublic:\n  std::string Name;\n  System() = default;\n  System(std::string name) : Name(std::move(name)) {}\n  virtual ~System() = default;\n  virtual void OnInit() {};\n  virtual void OnUpdate() {}\n  virtual void OnUpdate(Scene* scene) {}\n  virtual void OnShutdown() {};\n  void SetDispatcher(EventDispatcher* dispatcher) { m_Dispatcher = dispatcher; }\nprotected:\n  EventDispatcher* m_Dispatcher = nullptr;\n};\n")),(0,r.kt)("p",null,"Defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"HotReloadableScene")," system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void HotReloadableScenes::OnUpdate() {\n  using namespace std::filesystem;\n  if (last_write_time(m_ScenePath).time_since_epoch().count()\n      != m_LastWriteTime.time_since_epoch().count()) {\n    //File changed event\n    m_Dispatcher->trigger<ReloadSceneEvent>();\n    m_LastWriteTime = last_write_time(m_ScenePath);\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"m_Dispatcher->trigger<ReloadSceneEvent>();")," is the way to simply trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReloadSceneEvent"),". "),(0,r.kt)("p",null,"System event is listened on the ",(0,r.kt)("inlineCode",{parentName:"p"},"GameLayer")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"OnAttach")," callback:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void GameLayer::OnAttach(EventDispatcher& dispatcher) {\n  dispatcher.sink<ReloadSceneEvent>().connect<&GameLayer::OnSceneReload>(*this);\n}\n\nbool GameLayer::OnSceneReload(ReloadSceneEvent&) {\n  LoadScene();\n  OX_CORE_INFO("Scene reloaded.");\n  return true;\n}\n')),(0,r.kt)("p",null,"Then we add the system to the engine while creating the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const auto app = new ProjectCyclone(spec);\napp->PushLayer(new ::ProjectCyclone::GameLayer())\n    .AddSystem<HotReloadableScenes>("Assets/Scenes/Main.oxscene");\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"HotReloadableScenes",src:n(5487).Z,width:"1856",height:"1080"})),(0,r.kt)("h1",{id:"gameplay"},"Gameplay"),(0,r.kt)("p",null,"Now we can start working on the gameplay part and prove otherwise the famous phrase about engine devs \ud83d\ude1b:    "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Give someone an engine and they'll make a game. Teach someone to make an engine and they'll never make anything.")),(0,r.kt)("p",null,"I will start with creating a simple helicopter system to move the helicopter. And make the propellers turn around itself.   "),(0,r.kt)("p",null,"We can either use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptableEntity"),' way or use "raw" ecs. I have picked the raw ecs way since we don\'t need any callbacks\nfrom the ',(0,r.kt)("inlineCode",{parentName:"p"},"ScriptableEntity")," api.    "),(0,r.kt)("p",null,"The component that will be added on helicopter entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct HeliComponent {\n  float Speed = 5.0f; \n  float Fuel = 1.0f;  //1.0f = Full, 0.0f = Empty\n  float Altitude = 0.0f;\n};\n")),(0,r.kt)("p",null,"By using the same way we have declared an engine system in the last section we now declare a system for the Helicopter entites."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void HeliSystem::OnUpdate(Scene* scene) {\n  auto& registery = scene->m_Registry;\n    const auto view = registery.view<TransformComponent, HeliComponent>();\n    for (const auto entity : view) {\n      auto&& [transform, heli] = view.get<TransformComponent, HeliComponent>(entity);\n  \n      //Move horizontal\n      if (Input::GetKeyDown(Key::W)) {\n        transform.Translation.z += heli.Speed * Timestep::GetDeltaTime();\n      }\n      //...\n      //Other keys\n      //...\n\n      //Move vertical\n      if (Input::GetKeyDown(Key::Q) && heli.Altitude >= 0.2f) {\n        transform.Translation.y -= heli.Speed * Timestep::GetDeltaTime();\n      }\n      else if (Input::GetKeyDown(Key::E) && heli.Altitude < 8.0f) {\n        transform.Translation.y += heli.Speed * Timestep::GetDeltaTime();\n      }\n\n      heli.Fuel -= 0.1f * ImGui::GetIO().DeltaTime;\n      heli.Altitude = transform.Translation.y;\n  }\n}\n")),(0,r.kt)("p",null,"For rotating the propeller just getting the transform component and adding a constant value to y rotation would work for now. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"auto ent = Oxylus::Entity { entity, m_Scene.get() };\nent.GetChild(1).GetComponent<Oxylus::TransformComponent>().Rotation.y += 5.0f;\n")),(0,r.kt)("p",null,"Other gameplay element we could add is picking up crates from ground.",(0,r.kt)("br",{parentName:"p"}),"\n","Same way we have crated the heli system now we can create a system for crates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"const auto heliView = scene->m_Registry.view<TransformComponent, HeliComponent>();\nconst auto crateView = scene->m_Registry.view<TransformComponent, CrateComponent>();\nfor (const auto entity : crateView) {\n  auto&& [transform, crate] = crateView.get<TransformComponent, CrateComponent>(entity);\n  //a simple intersection check\n  constexpr float axisThreshold = 0.5f;\n  for (const auto heliEntity : heliView) {\n    auto&& [heliTransform, heli] = heliView.get<TransformComponent, HeliComponent>(heliEntity);\n    if (std::abs(transform.Translation.x - heliTransform.Translation.x) < axisThreshold\n        && std::abs(transform.Translation.y + 0.2f - heliTransform.Translation.y) < axisThreshold\n        && std::abs(transform.Translation.z - heliTransform.Translation.z) < axisThreshold) {\n      heli.CratesTaken += 1;\n      const auto ent = Entity{entity, scene};\n      scene->DestroyEntity(ent);\n      break;\n    }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1022588581237248060/1088469165813268510/crates.gif",alt:"Crates"})),(0,r.kt)("h1",{id:"ui"},"UI"),(0,r.kt)("p",null,"For creating a game UI we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"OxUI")," api which uses Dear ImGui underneath for drawing and layouts.\nCyclone has a HUD that contains instrumentation which includes speed, altitude, fuel remaining and time remaining.\nAdditionally there is also information on the number of supply crates, whether the player's current view is North\nor South, information on wind force and a warning to the player of the cyclone's proximity and any approaching planes.",(0,r.kt)("br",{parentName:"p"}),"\n","For now I will just display altitude, remaining fuel and time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'OxUI::BeginUI();\nOxUI::ProgressBar("Time", Time);\nOxUI::ProgressBar("Fuel", Heli.Fuel);\nOxUI::Property("Altitude", "%.1f", Heli.Altitude);\nOxUI::EndUI();\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1022588581237248060/1087718914886221904/image.png",alt:"UI"})),(0,r.kt)("h1",{id:"to-be-continued"},"TO BE CONTINUED..."))}u.isMDXComponent=!0},5487:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/HotReloadableScene-ea8864b84a193f928a9de98660364022.gif"},9258:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Material-cc197c929ec15a8296c59330f7da4c0e.gif"},8860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/projects-b0b3986283f94cd186bd7383ea934f2a.png"},4754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scene-4f5ced15793fc365d964a742c0b91f70.png"}}]);