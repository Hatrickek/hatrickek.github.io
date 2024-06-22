---
slug: Oxylus Roadmap
title: Oxylus Roadmap
authors: [Hatrickek]
tags: [roadmap]
---

# Oxylus Engine Roadmap 🎯

## Graphics Features
- [x] GPU Culling
	- [x] Meshlet culling 
	- [x] Triangle culling
- [ ] 2D Renderer  
  - [ ] Bindless Batching 
  - [ ] 2D Lighting  
    - [ ] Shadows
    - [ ] Normal mapping
  - [ ] 2D Global Illumination
  - [ ] Orthographic camera
- [ ] Eye adaptation
- [ ] Chromatic abbreation and sharpening
- [ ] Lightmapping support
  -  [ ] Importing from https://github.com/Naxela/The_Lightmapper
- [ ] Iraddiance volumes support
	- [ ] Importing from Blender
- [x] Use (gltfpack)meshoptimizer
- [x] Anistropic textures
- [ ] Overhaul animations system
- [ ] Texture optimizations
	- [ ] Compression
		- [x] BC7
		- [ ] Make a tinyKTX lib maybe?
- [x] Atmosphere System from Unreal Engine 
	- [x] Multiscatter
	- [ ] Volumetric Clouds
- [x] Point light shadows
- [ ] Light culling
- [ ] Polished GPU/CPU particles
- [ ] https://pixelmischiefblog.wordpress.com/2016/11/25/bokeh-depth-of-field/
- [ ] vkCmdSetFragmentShadingRateKHR
- [ ] 3D text
## General Improvements
- [ ] Proper controller support
- [ ] Multiviewport system is half cooked
- [ ] Scene based RenderPipeline is half cooked
- [ ] Multiselect in scene hierarchy
- [ ] Extend Lua scripting further
	- [ ] Physics
		- [x] Raycasting
	- [ ] Events+
- [ ] Extend C++ scripting further
- [ ] ImGui external viewport windows
- [ ] [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear) for game UI (maybe) 
## Editor features
- [ ]  Inspector panel for content panel
	- [ ] Somehow show a list of externally loaded components
	- [ ] Material preview
	- [ ] Mesh preview
	- [ ] Lua script preview and editing
## Bug Fixes/Investigations
- [ ] When the requested instance version is 1.2 instead of 1.3 we get a weird StoreOp invalid val error 
## Bikeshedding
- [ ] Get rid of submodules
	- [ ] miniaudio
	- [ ] imguizmo
