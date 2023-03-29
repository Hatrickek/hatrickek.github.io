---
slug: oxylus-mac-port
title: Porting Oxylus To MacOS
authors: [Hatrickek]
tags: [blog]
---
In the middle of the night a Russian friend of mine a.k.a. Yugin thought of a great idea. His idea was to build Oxylus on 
his macbook to see how many errors and problems he will face or if it was just going to build with no problems.     
Oh boy, were we clueless as hell.      

> Oh and if you think modern C++ is cross platform or just like to use the "modern" std features it has, this blog might change your thoughts on those topics 😅. [Also that](https://gist.github.com/bkaradzic/2e39896bc7d8c34e042b).

## Dependencies
So he just cloned the repo and hit the build button first problem he encountered was of course the dependencies.     
Now everyone hates managing dependencies in C++. You can't find me a single person that likes to write CMake scripts to manage dependencies I bet. So people created alternatives like [Premake](https://premake.github.io/) that uses Lua and simple syntax to make stuff easier which I have used until I have thought about porting Oxylus to Mac. The reason I stopped using it was because how it was limiting the user to specific tools i.e if you are on windows you had to use Visual Studio to build the project or XCode on Mac. The thing is these tools suck a lot.     
So I rewrote my old CMake scripts and added the small dependencies I have as submodules and automated the build. Now with this way these modules were easily buildable as cross platform (at least for mac and windows).        
I had couple more dependencies to make as submodule though which were PhysX, KTX and Vulkan. PhysX is a very painful library to manage and I didn't really like working with it so I just decided to ditch it entirely and switch to [Jolt](https://github.com/jrouwe/JoltPhysics) in the future. [KTX](https://github.com/KhronosGroup/KTX-Software) had the same issue, it was huge; the repo had 6 different projects inside of it so I had to think of a way to not add it as a submodule but still make it automated with CMake. For this yugin came up with a nice solution which was just downloading the repo as a shallow zip copy and extracting it into the vendor directory. Now this worked perfectly and it made me left with the last dependency to make crossplatform: Vulkan. It was the easiest to build since CMake already had functions just for Vulkan i.e. [FindVulkan](https://cmake.org/cmake/help/latest/module/FindVulkan.html).  
Now the project was ready to build on all platforms.    
Surely this was the only problem right?      
## Modern C++
Well, in my dreams... First error he had was coming from not so modern std function `std::ranges`. Now seeing this made me question how that was an issue. After a 2 minute google search I have found that it wasn't even [supported on mac clang](https://developer.apple.com/forums/thread/719896)! Well thankfully I didn't use it that much so I rewrote the stuff I had wrote with it i.e. `ranges::view`
`ranges::find_if` etc.       
The next problem was similar. Now it was from `std::views`! Again [the same issue](https://stackoverflow.com/questions/73628848/is-the-stdviews-namespace-not-available-in-xcodes-c?rq=1). I had rewrite the code I have written with it. Surely this was all, right? Surely std is not that anti cross platform? Well you will be wrong.   
The infamous 'std::format' was my next enemy. With another short google search I found out that it was actually a big problem for every other platform and people had already made a miles better alternative called [fmt](https://github.com/fmtlib/fmt) so I had to bring another dependency to my project for a feature that already exists in the std but is still not cross platform after 2 years it has been released. How NICE!
This was all the problems I had with standard library thankfully I didn't go crazy with modern C++ otherwise I'm sure this list would have had gone a lot longer.

My next and last stop was Vulkan. Since Vulkan is fairly cross platform and has verbose errors it was quite easy to run it on Mac with MoltenVK layer. Had to enable couple of layers and extension then bam it ran... Right? Nope. Molten was giving me a timeout error on some command buffer submission. Apparently I forgot to remove some semaphores on 
my composite pipeline removed them aaand finally it was running. It only took us a couple of sleepless nights and tought us a great lesson...

![Result](https://cdn.discordapp.com/attachments/1022588581237248060/1090745806765699242/Annotation_2023-03-29_235941.png)