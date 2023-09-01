"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[610],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(o),c=n,m=h["".concat(p,".").concat(c)]||h[c]||d[c]||r;return o?a.createElement(m,i(i({ref:t},l),{},{components:o})):a.createElement(m,i({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3322:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=o(7462),n=(o(7294),o(3905));const r={sidebar_position:5,title:"\u2b06\ufe0f Update Strategies",description:"Ways to use Shorebird to update your app"},i="\u2b06\ufe0f Update Strategies",s={unversionedId:"update-strategies",id:"update-strategies",title:"\u2b06\ufe0f Update Strategies",description:"Ways to use Shorebird to update your app",source:"@site/docs/update-strategies.md",sourceDirName:".",slug:"/update-strategies",permalink:"/update-strategies",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/update-strategies.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u2b06\ufe0f Update Strategies",description:"Ways to use Shorebird to update your app"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc26 Flutter Version",permalink:"/flutter-version"},next:{title:"\ud83c\udf93 Concepts",permalink:"/concepts"}},p={},u=[],l={toc:u},h="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\ufe0f-update-strategies"},"\u2b06\ufe0f Update Strategies"),(0,n.kt)("p",null,"By default, Shorebird checks for and silently installs any updates in the\nbackground on launch. It does this via a background thread to ensure that it\ndoes not affect the launch speed of your application. Updates installed via\nShorebird are then used on next launch of the app."),(0,n.kt)("p",null,"For most users, we recommend this default behavior as we believe it's generally\nbest for users to not have to think about whether or not they're running the\nlatest version of your app \u2013 things are just magically up to date."),(0,n.kt)("p",null,"However, Shorebird also provides you with the ability to control when updates\nare applied. Sometimes you may wish to prevent the user from using the app\nuntil they've updated to the latest version. For example, if you've made a\nbreaking change between your app and your server, or if you app communicates\nbetween peers and you've made a breaking change to the protocol."),(0,n.kt)("p",null,"For such cases, we've developed\n",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shorebird_code_push"},(0,n.kt)("inlineCode",{parentName:"a"},"package:shorebird_code_push")),",\nwhich enables programmatic control over the Shorebird updater. You can use this\npackage to check for updates at a time of your choosing and to prompt the user\nto update if you wish."),(0,n.kt)("p",null,"You may also wish to ",(0,n.kt)("em",{parentName:"p"},"disable")," this default update-on-launch behavior and\ninstead check for updates only at a time of your choosing."),(0,n.kt)("p",null,"To disable auto-update behavior, add this line to your ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird.yaml")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"auto_update: false\n")),(0,n.kt)("p",null,"You could imagine wanting to do this if you have a large number of users and\nwanted to control the rollout of updates (to only update some accounts at a time\nto reduce your server load, or reduce rollout risk, for example). Disabling the\ndefault auto-update behavior would allow you to instead check for and install\nupdates only when you want to."),(0,n.kt)("h1",{id:"triggering-updates-via-notification"},"Triggering updates via notification"),(0,n.kt)("p",null,"It is possible to trigger updates via push notifications."),(0,n.kt)("p",null,"Shorebird does not provide its own notification service, but it's possible to\nuse others, such as\n",(0,n.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging"},"Firebase Cloud Messaging (FCM)"),"\nto send a notification to your app, and then use that notification to trigger an\nupdate. Because these services typically allow you to target specific devices,\nyou could use this to trigger updates for specific users."),(0,n.kt)("p",null,"Any notification service which uses Dart (e.g. FCM) will also trigger the launch\nof the Flutter engine when the notification is delivered. When the Flutter\nengine is launched, the default auto-update behavior will run. Thus, when a\nnotification is received, the app will update if it is not already running."),(0,n.kt)("p",null,"More reliable however is to use the\n",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shorebird_code_push"},(0,n.kt)("inlineCode",{parentName:"a"},"package:shorebird_code_push")),"\nto trigger the update from within a notification handler."),(0,n.kt)("h1",{id:"patches-vs-releases"},"Patches vs. Releases"),(0,n.kt)("p",null,"Shorebird can only execute code (and thus run its patch logic) when the app is\nrunning. This means that, when a user downloads and launches your app for the\nfirst time, they will see the unpatched release version that was first published\nin the store. If you've published a patch, they will not see any patches until\nthey have opened the app at least twice. The first launch can check for (and\napply) new patches, but a second launch is required to boot from the patched code."),(0,n.kt)("p",null,"As discussed above, if it is important to your business to gate usage of your\napp on users having the latest code, it could be appropriate for you to\ncheck for updates as part of a login screen, or other launch gate. We do not\nyet offer an example of this, but\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/950"},"intend to add one"),'.\nChecking for updates does require a network connection. It would also be\npossible for you to only gate users if they\'ve not received a "no new version"\nmessage in within a certain amount of time.'),(0,n.kt)("p",null,"We intend for Shorebird to eventually support releasing to the app stores on\nyour behalf. At present, ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird patch"),' does not publish your a new "release"\nto the app store, so the patch will only be visible to users after they\'ve\nopened the app at least twice as discused above.'),(0,n.kt)("p",null,"Shorebird also does not yet automatically support deploying a patch across\nmultiple versions of your app, although this is possible with some automation.\nFor example, one could write a shell script which took a given git commit,\nchecked out your various release branches, cherry-picked that commit onto those\nbranches, and ran ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird patch")," for each of those branches. We would like\nto ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/860"},"support something like this"),"\nout of the box for you in the future, but do not yet."),(0,n.kt)("h1",{id:"how-should-shorebird-interact-with-other-update-systems-eg-in_app_update"},"How should Shorebird interact with other update systems (e.g. ",(0,n.kt)("inlineCode",{parentName:"h1"},"in_app_update"),")?"),(0,n.kt)("p",null,"For applications which are already enforcing users are always on the latest\nversion (e.g. with ",(0,n.kt)("inlineCode",{parentName:"p"},"in_app_update"),", a system on Android whereby the Play Store\nwill automatically prompt users to update your app), you will likely want to\nwrite some code to coordinate between Shorebird and your existing update system."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shorebird_code_push"},(0,n.kt)("inlineCode",{parentName:"a"},"package:shorebird_code_push")),"\ncan help you here. For example, with ",(0,n.kt)("inlineCode",{parentName:"p"},"in_app_update"),", you could use\n",(0,n.kt)("inlineCode",{parentName:"p"},"package:shorebird_code_push")," to check if the user has already applied the\nnecessary patch and ",(0,n.kt)("em",{parentName:"p"},"not")," then prompt them to update."),(0,n.kt)("p",null,"Shorebird patches are typically much smaller than full Play Store updates (e.g.\na few hundred bytes, or a few kilobytes), so it is likely better for your users\n(saves them data) if you can use Shorebird to deliver patches instead of\n",(0,n.kt)("inlineCode",{parentName:"p"},"in_app_update"),'. However, there are changes which Shorebird cannot make, such as\nchanges to "native" code (Java, Kotlin, Swift, ObjC), asset files (fonts,\nimages, etc.) or changes to the Flutter engine itself, so ',(0,n.kt)("inlineCode",{parentName:"p"},"in_app_update")," may\nbe the best solution in some cases. Again, you will want to write some code to\ncoordinate between Shorebird and your existing update system to make this\ndetermination."),(0,n.kt)("p",null,'Shorebird "patches" also do not change the version number of your app, so\n',(0,n.kt)("inlineCode",{parentName:"p"},"in_app_update")," will not see them as a new version. This is by design \u2013 patches\nare applied to releases, rather than being new releases themselves. This\ncan complicate your analytics/reporting code as you will have the case where\ne.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.1+13, patch 1")," has identical dart code to ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.1+13, no patches"),".\nYou can get the current booted patch number via ",(0,n.kt)("inlineCode",{parentName:"p"},"package:shorebird_code_push"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/shorebird_code_push/latest/shorebird_code_push_io/ShorebirdCodePush/currentPatchNumber.html"},"https://pub.dev/documentation/shorebird_code_push/latest/shorebird_code_push_io/ShorebirdCodePush/currentPatchNumber.html")),(0,n.kt)("p",null,"We would like to move to a world where Shorebird is push-to-deploy and you don't\nhave to think about the difference between a patch and a release, but we're\nlikely still several months away from such a world."),(0,n.kt)("p",null,'Shorebird also currently makes the guarantee that we do not see or store\nyour code. Implementing "push to deploy" may not be possible without source code\naccess, which is not a change we would make lightly.'),(0,n.kt)("h1",{id:"do-you-need-to-to-make-a-release-to-change-your-version-of-flutter"},"Do you need to to make a release to change your version of Flutter?"),(0,n.kt)("p",null,"Yes. Shorebird is only capable of patching Dart code, not native code. So\nnew versions of the Flutter engine (which is written in C++) cannot be patched\nvia ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird patch"),"."))}d.isMDXComponent=!0}}]);