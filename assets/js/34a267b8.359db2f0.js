"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2202],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Update",c={unversionedId:"oxmysql/Usage/update",id:"oxmysql/Usage/update",title:"Update",description:"Returns the number of affected rows by the query.",source:"@site/docs/oxmysql/Usage/update.md",sourceDirName:"oxmysql/Usage",slug:"/oxmysql/Usage/update",permalink:"/docs/oxmysql/Usage/update",editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/oxmysql/Usage/update.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Transaction",permalink:"/docs/oxmysql/Usage/transaction"},next:{title:"index",permalink:"/docs/ox_lib/"}},u={},p=[{value:"Lua",id:"lua",level:2},{value:"Callback",id:"callback",level:3},{value:"Promise",id:"promise",level:3},{value:"JavaScript",id:"javascript",level:2},{value:"Callback",id:"callback-1",level:3},{value:"Promise",id:"promise-1",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"update"},"Update"),(0,o.kt)("p",null,"Returns the number of affected rows by the query."),(0,o.kt)("h2",{id:"lua"},"Lua"),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Alias: exports.oxmysql:update\n-- Alias: MySQL.Async.update\n\nMySQL.Async.update('UPDATE users SET firstname = ? WHERE identifier = ? ', {newName, playerIdentifier}, function(affectedRows)\n    if affectedRows then\n        print(affectedRows)\n    end\nend)\n")),(0,o.kt)("h3",{id:"promise"},"Promise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Alias: exports.oxmysql:update_async\n-- Alias: MySQL.update\n\nCreateThread(function()\n    local affectedRows = MySQL.update.await('UPDATE users SET firstname = ? WHERE identifier = ? ', {newName, playerIdentifier})\n    if affectedRows then\n        print(affectedRows)\n    end\nend)\n")),(0,o.kt)("h2",{id:"javascript"},"JavaScript"),(0,o.kt)("h3",{id:"callback-1"},"Callback"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"exports.oxmysql.update('UPDATE users SET firstname = ? WHERE identifier = ? ', [newName, playerIdentifier], function(affectedRows) {\n  if (affectedRows)\n    console.log(affectedRows)\n})\n")),(0,o.kt)("h3",{id:"promise-1"},"Promise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setImmediate(async () => {\n  const id = exports.oxmysql.update_async('UPDATE users SET firstname = ? WHERE identifier = ? ', [newName, playerIdentifier]) {\n  if (affectedRows)\n    console.log(affectedRows)\n})\n")))}f.isMDXComponent=!0}}]);