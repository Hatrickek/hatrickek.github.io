"use strict";(self.webpackChunkhatrickek_site=self.webpackChunkhatrickek_site||[]).push([[154],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||n;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=a(7462),r=(a(7294),a(3905));const n={slug:"oxylus-mac-port",title:"Porting Oxylus To MacOS",authors:["Hatrickek"],tags:["blog"]},i=void 0,s={permalink:"/blog/oxylus-mac-port",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/oxylus-mac-part/2023-03-29-oxylus-mac-port.md",source:"@site/blog/oxylus-mac-part/2023-03-29-oxylus-mac-port.md",title:"Porting Oxylus To MacOS",description:"In the middle of the night a Russian friend of mine a.k.a. Yugin thought of a great idea. His idea was to build Oxylus on",date:"2023-03-29T00:00:00.000Z",formattedDate:"March 29, 2023",tags:[{label:"blog",permalink:"/blog/tags/blog"}],readingTime:3.565,hasTruncateMarker:!1,authors:[{name:"Hatrickek",url:"https://github.com/Hatrickek",imageURL:"https://avatars.githubusercontent.com/u/89982837?v=4",key:"Hatrickek"}],frontMatter:{slug:"oxylus-mac-port",title:"Porting Oxylus To MacOS",authors:["Hatrickek"],tags:["blog"]},nextItem:{title:"Creating A Game With Oxylus",permalink:"/blog/oxylus-first-game"}},l={authorsImageUrls:[void 0]},u=[{value:"Dependencies",id:"dependencies",level:2},{value:"Modern C++",id:"modern-c",level:2}],h={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the middle of the night a Russian friend of mine a.k.a. Yugin thought of a great idea. His idea was to build Oxylus on\nhis macbook to see how many errors and problems he will face or if it was just going to build with no problems.",(0,r.kt)("br",{parentName:"p"}),"\n","Oh boy, were we clueless as hell.      "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Oh and if you think modern C++ is cross platform or just like to use the "modern" std features it has, this blog might change your thoughts on those topics \ud83d\ude05. ',(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/bkaradzic/2e39896bc7d8c34e042b"},"Also that"),".")),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"So he just cloned the repo and hit the build button first problem he encountered was of course the dependencies.",(0,r.kt)("br",{parentName:"p"}),"\n","Now everyone hates managing dependencies in C++. You can't find me a single person that likes to write CMake scripts to manage dependencies I bet. So people created alternatives like ",(0,r.kt)("a",{parentName:"p",href:"https://premake.github.io/"},"Premake")," that uses Lua and simple syntax to make stuff easier which I have used until I have thought about porting Oxylus to Mac. The reason I stopped using it was because how it was limiting the user to specific tools i.e if you are on windows you had to use Visual Studio to build the project or XCode on Mac. The thing is these tools suck a lot.",(0,r.kt)("br",{parentName:"p"}),"\n","So I rewrote my old CMake scripts and added the small dependencies I have as submodules and automated the build. Now with this way these modules were easily buildable as cross platform (at least for mac and windows).",(0,r.kt)("br",{parentName:"p"}),"\n","I had couple more dependencies to make as submodule though which were PhysX, KTX and Vulkan. PhysX is a very painful library to manage and I didn't really like working with it so I just decided to ditch it entirely and switch to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jrouwe/JoltPhysics"},"Jolt")," in the future. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KhronosGroup/KTX-Software"},"KTX")," had the same issue, it was huge; the repo had 6 different projects inside of it so I had to think of a way to not add it as a submodule but still make it automated with CMake. For this yugin came up with a nice solution which was just downloading the repo as a shallow zip copy and extracting it into the vendor directory. Now this worked perfectly and it made me left with the last dependency to make crossplatform: Vulkan. It was the easiest to build since CMake already had functions just for Vulkan i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/latest/module/FindVulkan.html"},"FindVulkan"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Now the project was ready to build on all platforms.",(0,r.kt)("br",{parentName:"p"}),"\n","Surely this was the only problem right?      "),(0,r.kt)("h2",{id:"modern-c"},"Modern C++"),(0,r.kt)("p",null,"Well, in my dreams... First error he had was coming from not so modern std function ",(0,r.kt)("inlineCode",{parentName:"p"},"std::ranges"),". Now seeing this made me question how that was an issue. After a 2 minute google search I have found that it wasn't even ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/719896"},"supported on mac clang"),"! Well thankfully I didn't use it that much so I rewrote the stuff I had wrote with it i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"ranges::view"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ranges::find_if")," etc.",(0,r.kt)("br",{parentName:"p"}),"\n","The next problem was similar. Now it was from ",(0,r.kt)("inlineCode",{parentName:"p"},"std::views"),"! Again ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/73628848/is-the-stdviews-namespace-not-available-in-xcodes-c?rq=1"},"the same issue"),". I had rewrite the code I have written with it. Surely this was all, right? Surely std is not that anti cross platform? Well you will be wrong.",(0,r.kt)("br",{parentName:"p"}),"\n","The infamous 'std::format' was my next enemy. With another short google search I found out that it was actually a big problem for every other platform and people had already made a miles better alternative called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fmtlib/fmt"},"fmt")," so I had to bring another dependency to my project for a feature that already exists in the std but is still not cross platform after 2 years it has been released. How NICE!\nThis was all the problems I had with standard library thankfully I didn't go crazy with modern C++ otherwise I'm sure this list would have had gone a lot longer."),(0,r.kt)("p",null,"My next and last stop was Vulkan. Since Vulkan is fairly cross platform and has verbose errors it was quite easy to run it on Mac with MoltenVK layer. Had to enable couple of layers and extension then bam it ran... Right? Nope. Molten was giving me a timeout error on some command buffer submission. Apparently I forgot to remove some semaphores on\nmy composite pipeline removed them aaand finally it was running. It only took us a couple of sleepless nights and tought us a great lesson..."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1022588581237248060/1090745806765699242/Annotation_2023-03-29_235941.png",alt:"Result"})))}d.isMDXComponent=!0}}]);