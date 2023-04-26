---
slug: oxylus-mac-port
title: Porting Oxylus To MacOS
authors: [Hatrickek]
tags: [blog]
---

My Russian friend Yugin had a brilliant idea in the middle of the night. His plan was to build Oxylus on his MacBook in order to see how many errors and problems he would encounter or if the build would go smoothly.  
Oh boy, were we clueless as hell.

> Oh and if you think modern C++ is cross platform or just like to use the "modern" std features it has, this blog might change your thoughts on those topics 😅. [Also that](https://gist.github.com/bkaradzic/2e39896bc7d8c34e042b).

## Dependencies

He cloned the repository and tried to build it, but encountered the first problem with dependencies. Managing dependencies in C++ is disliked by everyone, and writing CMake scripts to manage them is not a favorite task. However, some people have created alternatives like [Premake](https://premake.github.io/), which uses Lua and simple syntax to make it easier. I used Premake until I considered porting Oxylus to Mac, at which point I stopped using it because it was limiting users to specific tools (i.e., Visual Studio on Windows or XCode on Mac), which were not preferred. Instead, I rewrote my old CMake scripts and added small dependencies as submodules, which automated the build process. Using this approach, these modules were easily buildable as cross-platform (at least for Mac and Windows).
I rewrote my old CMake scripts, added the small dependencies as submodules, and automated the build process. This way, the modules were easily buildable as cross-platform for at least Mac and Windows.  
I had a couple more dependencies to add as submodules: PhysX, KTX, and Vulkan. However, PhysX was a very challenging library to manage, so I decided to abandon it altogether and switch to [Jolt](https://github.com/jrouwe/JoltPhysics) in the future. [KTX](https://github.com/KhronosGroup/KTX-Software) had a similar issue; the repository contained six different projects, making it difficult to add as a submodule. Yugin suggested a solution where we could download the repository as a shallow zip copy and extract it into the vendor directory. This worked perfectly and left me with just one last dependency to make cross-platform: Vulkan. Luckily, it was the easiest to build since CMake already had functions specifically for Vulkan, such as [FindVulkan](https://cmake.org/cmake/help/latest/module/FindVulkan.html).  
Now the project was in theory ready to build on all platforms.  
Surely these were the only problems, right?

## Modern C++

Well, I could only dream... The first error he encountered was related to the use of the not-so-modern std function `std::ranges`. Now seeing this made me question, how that was an issue. After a quick 2-minute Google search, I discovered that it wasn't even [supported on mac clang](https://developer.apple.com/forums/thread/719896)! Luckily, I hadn't used it extensively, so I rewrote the code that I had written using it, such as i.e. `ranges::view`, `ranges::find_if` etc.  
The next problem was similar. Now it was from `std::views`! Again [the same issue](https://stackoverflow.com/questions/73628848/is-the-stdviews-namespace-not-available-in-xcodes-c?rq=1). I had to rewrite the code I have written with it, but I thought that would be the end of it. Surely the standard library wasn't that anti-cross-platform? Well you would be wrong.  
I encountered the infamous `std::format` as my next enemy. After another quick Google search, I discovered that it was a big problem for other platforms as well, and that people had already created a much better alternative called [fmt](https://github.com/fmtlib/fmt). Therefore, I had to add another dependency to my project for a feature that already existed in the standard library but was still not cross-platform even after two years since its release. How NICE!
These were all the problems I had with the standard library. Thankfully, I didn't go crazy with modern C++ otherwise, I'm sure this list would have had gone a lot longer.

My next and final challenge was Vulkan. Since Vulkan is relatively cross-platform and has verbose error messages, it was relatively easy to run it on Mac with the MoltenVK layer. I had to enable a few layers and extensions, and then it should have worked... right? Unfortunately, I encountered a timeout error on some command buffer submission in MoltenVK. After some investigation, I discovered that I had forgotten to remove some semaphores in my composite pipeline. Once I removed them, it finally worked! However, it took a few sleepless nights and taught me a valuable lesson...

![Result](https://cdn.discordapp.com/attachments/1022588581237248060/1090745806765699242/Annotation_2023-03-29_235941.png)
