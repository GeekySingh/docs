"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[588],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),l=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return o.createElement(d.Provider,{value:r},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),u=n,f=c["".concat(d,".").concat(u)]||c[u]||b[u]||i;return t?o.createElement(f,a(a({ref:r},p),{},{components:t})):o.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},112:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(7462),n=(t(7294),t(3905));const i={sidebar_position:6,slug:"crash-reporting",title:"Crash Reporting",sidebar_label:"\ud83d\ude91 Crash Reporting",description:"Use Shorebird with crash reporting tools"},a="Integrating with Crash Reporting Tools",s={unversionedId:"guides/crash-reporting",id:"guides/crash-reporting",title:"Crash Reporting",description:"Use Shorebird with crash reporting tools",source:"@site/docs/guides/crash-reporting.md",sourceDirName:"guides",slug:"/guides/crash-reporting",permalink:"/guides/crash-reporting",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/guides/crash-reporting.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"crash-reporting",title:"Crash Reporting",sidebar_label:"\ud83d\ude91 Crash Reporting",description:"Use Shorebird with crash reporting tools"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf4e iOS",permalink:"/guides/hybrid-app/ios"},next:{title:"\u2705 Continuous Integration",permalink:"/ci"}},d={},l=[{value:"Symbols for iOS",id:"symbols-for-ios",level:2},{value:"Symbols for Android",id:"symbols-for-android",level:2}],p={toc:l},c="wrapper";function b(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integrating-with-crash-reporting-tools"},"Integrating with Crash Reporting Tools"),(0,n.kt)("p",null,"Shorebird uses a fork of Flutter to build your app. This means we've built\nour own copy of Flutter's engine which means that the symbols included in\nthe Flutter.framework or libflutter.so are slightly different from the\nupstream Flutter engine."),(0,n.kt)("p",null,"If you would like to see C++ symbols from our fork of Flutter's engine in your crash reports, you will need to\nupload the symbols to your crash reporting tool."),(0,n.kt)("p",null,"Google provides instructions for how to integrate various crash reporting\ntools into your Flutter app:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/cookbook/maintenance/error-reporting"},"https://docs.flutter.dev/cookbook/maintenance/error-reporting")),(0,n.kt)("h1",{id:"getting-symbols-for-shorebirds-flutter-fork"},"Getting Symbols for Shorebird's Flutter Fork"),(0,n.kt)("p",null,"For a given Flutter version you will need the Flutter engine hash\nto download the symbols. This hash is displayed in ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird doctor"),"\noutput:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"% shorebird doctor\nShorebird 0.24.1 \u2022 git@github.com:shorebirdtech/shorebird.git\nFlutter 3.16.7 \u2022 revision ba46e8490348d6989283c9cff2b95727f0969d04\nEngine \u2022 revision 974eae888fdedd890b74c84e55a454bb7fcbd7de\n")),(0,n.kt)("p",null,"In this case, we're using ",(0,n.kt)("inlineCode",{parentName:"p"},"974eae888fdedd890b74c84e55a454bb7fcbd7de")," as the\nengine hash."),(0,n.kt)("h2",{id:"symbols-for-ios"},"Symbols for iOS"),(0,n.kt)("p",null,"Assuming engine hash ",(0,n.kt)("inlineCode",{parentName:"p"},"974eae888fdedd890b74c84e55a454bb7fcbd7de"),", the iOS symbols can be downloaded from the following URL:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://download.shorebird.dev/flutter_infra_release/flutter/974eae888fdedd890b74c84e55a454bb7fcbd7de/ios-release/Flutter.dSYM.zip"},"https://download.shorebird.dev/flutter_infra_release/flutter/974eae888fdedd890b74c84e55a454bb7fcbd7de/ios-release/Flutter.dSYM.zip")),(0,n.kt)("h2",{id:"symbols-for-android"},"Symbols for Android"),(0,n.kt)("p",null,"Assuming engine hash ",(0,n.kt)("inlineCode",{parentName:"p"},"974eae888fdedd890b74c84e55a454bb7fcbd7de"),", the Android symbols can be downloaded from the following URLs:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://download.shorebird.dev/flutter_infra_release/flutter/974eae888fdedd890b74c84e55a454bb7fcbd7de/android-arm64-release/symbols.zip"},"https://download.shorebird.dev/flutter_infra_release/flutter/974eae888fdedd890b74c84e55a454bb7fcbd7de/android-arm64-release/symbols.zip"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://download.shorebird.dev/flutter_infra_release/flutter/974eae888fdedd890b74c84e55a454bb7fcbd7de/android-arm-release/symbols.zip"},"https://download.shorebird.dev/flutter_infra_release/flutter/974eae888fdedd890b74c84e55a454bb7fcbd7de/android-arm-release/symbols.zip"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://download.shorebird.dev/flutter_infra_release/flutter/974eae888fdedd890b74c84e55a454bb7fcbd7de/android-x64-release/symbols.zip"},"https://download.shorebird.dev/flutter_infra_release/flutter/974eae888fdedd890b74c84e55a454bb7fcbd7de/android-x64-release/symbols.zip")))}b.isMDXComponent=!0}}]);