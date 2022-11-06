"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9830],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(6600),o=(n(9496),n(9613));const a={sidebar_position:2},i="Configuration",s={unversionedId:"ox_inventory/Getting Started/config",id:"ox_inventory/Getting Started/config",title:"Configuration",description:"You can add these settings directly to your 'server.cfg', or add them to a separate file (i.e. inventory.cfg) and call it with exec.",source:"@site/docs/ox_inventory/Getting Started/config.md",sourceDirName:"ox_inventory/Getting Started",slug:"/ox_inventory/Getting Started/config",permalink:"/docs/ox_inventory/Getting Started/config",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Getting Started/config.md",tags:[],version:"current",lastUpdatedAt:1667769987,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ox_inventory",previous:{title:"Common Issues",permalink:"/docs/ox_inventory/Getting Started/issues"},next:{title:"ESX",permalink:"/docs/ox_inventory/Getting Started/esx"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can add these settings directly to your 'server.cfg', or add them to a separate file (i.e. inventory.cfg) and call it with ",(0,o.kt)("inlineCode",{parentName:"p"},"exec"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Convars ",(0,o.kt)("strong",{parentName:"p"},"must")," be set before starting ox_inventory.")),(0,o.kt)("p",null,"The values below are ",(0,o.kt)("em",{parentName:"p"},"defaults")," and should not be explicitly set unless changing the value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'# Activate specific event handlers and functions (supported: ox, esx, qb, nd)\nsetr inventory:framework "esx"\n\n# Load specific language file from data/locales\nsetr ox:locale "en"\n\n# Number of slots for player inventories\nsetr inventory:slots 50\n\n# Maximum carry capacity for players, in grams (will be automatically converted to kilograms in-game)\nsetr inventory:weight 30000\n\n# Weapons will reload after reaching 0 ammo\nsetr inventory:autoreload false\n\n# Weapons must be aimed before shooting\nsetr inventory:aimedfiring false\n\n# Blur the screen while accessing the inventory\nsetr inventory:screenblur true\n\n# Trim whitespace from vehicle plates when checking owned vehicles\nsetr inventory:trimplate true\n\n# Integrated support for qtarget stashes, shops, etc\nsetr inventory:qtarget false\n\n# Default hotkeys to access primary and secondary inventories, and hotbar\nsetr inventory:keys ["F2", "K", "TAB"]\n\n# Enable control action when inventory is open\nsetr inventory:enablekeys [249]\n\n# Show a list of all nearby players when giving items\nsetr inventory:giveplayerlist true\n\n# Jobs with access to police armoury, evidence lockers, etc\nsetr inventory:police ["police", "sheriff"]\n\n# Item prices fluctuate in shops\nset inventory:randomprices true\n\n# Compare current version to latest release on GitHub\nset inventory:versioncheck true\n\n# Loot will randomly generate inside unowned vehicles and dumpsters\nset inventory:randomloot true\n\n# Minimum job grade to remove items from evidence lockers\nset inventory:evidencegrade 2\n\n# Stashes will be wiped after remaining unchanged for the given time\nset inventory:clearstashes "6 MONTH"\n\n# Set the contents of randomly generated inventories\n# [item name, minimum, maximum, loot chance]\nset inventory:vehicleloot [\n    ["cola", 1, 1],\n    ["water", 1, 1],\n    ["garbage", 1, 2, 50],\n    ["panties", 1, 1, 5],\n    ["money", 1, 50],\n    ["money", 200, 400, 5],\n    ["bandage", 1, 1]\n]\n\nset inventory:dumpsterloot [\n    ["mustard", 1, 1],\n    ["garbage", 1, 3],\n    ["money", 1, 10],\n    ["burger", 1, 1]\n]\n\n# Set datadog API key for inventory logging (https://app.datadoghq.com/organization-settings/api-keys)\nset datadog:key ""\n\n# Set server intake (https://docs.datadoghq.com/api/latest/logs/#send-logs)\nset datadog:site "datadoghq.com"\n\n# Set server hostname\nset datadog:hostname "FXServer"\n')))}p.isMDXComponent=!0}}]);