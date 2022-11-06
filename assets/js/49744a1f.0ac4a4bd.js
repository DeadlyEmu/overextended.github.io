"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6227],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(6600),r=(a(9496),a(9613));const o={},i=void 0,l={unversionedId:"ox_lib/Logger/Server",id:"ox_lib/Logger/Server",title:"Server",description:"Submit logs to Datadog",source:"@site/docs/ox_lib/Logger/Server.md",sourceDirName:"ox_lib/Logger",slug:"/ox_lib/Logger/Server",permalink:"/docs/ox_lib/Logger/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Logger/Server.md",tags:[],version:"current",lastUpdatedAt:1667769987,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{},sidebar:"ox_lib",previous:{title:"Shared",permalink:"/docs/ox_lib/Locale/Shared"},next:{title:"Points",permalink:"/docs/ox_lib/Points/Client"}},s={},u=[{value:"Submit logs to Datadog",id:"submit-logs-to-datadog",level:2},{value:"Submit logs to Grafana Loki",id:"submit-logs-to-grafana-loki",level:2},{value:"Grafana Cloud Setup (Easy)",id:"grafana-cloud-setup-easy",level:3},{value:"Grafana Self-Hosted Setup (Experience Required)",id:"grafana-self-hosted-setup-experience-required",level:3},{value:"Setting up Server Config",id:"setting-up-server-config",level:4},{value:"Inserting data",id:"inserting-data",level:4},{value:"Browsing Data",id:"browsing-data",level:4}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"submit-logs-to-datadog"},"Submit logs to Datadog"),(0,r.kt)("p",null,"Register an account with ",(0,r.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"datadog"),". Once registered you need to create an ",(0,r.kt)("a",{parentName:"p",href:"https://app.datadoghq.com/organization-settings/api-keys"},"API key"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Modify your ",(0,r.kt)("inlineCode",{parentName:"p"},"server.cfg")," with the newly generated API key and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/api/latest/logs/#send-logs"},"intake server"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"datadoghq.com"),(0,r.kt)("li",{parentName:"ul"},"us3.datadoghq.com"),(0,r.kt)("li",{parentName:"ul"},"us5.datadoghq.com"),(0,r.kt)("li",{parentName:"ul"},"datadoghq.eu")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'set datadog:key "yourapikey"\nset datadog:site "datadoghq.com"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"lib.logger(source, event, message, ...)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"source: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},"event: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"message: ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},"...: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("p",null,"Source is passed to ddsource and creates a tag. Could be playerId, identifier, -1, or server.",(0,r.kt)("br",{parentName:"p"}),"\n","Event is passed to ddservice and displays in the logs list.",(0,r.kt)("br",{parentName:"p"}),"\n","Additional arguments are converted into tags for additional filtering and search options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local vehicle = Ox.CreateVehicle(false, `sultanrs`, vec(-56.479122, -1116.870362, 26.432250, 0.000030517578))\nlib.logger(-1, 'CreateVehicle', json.encode(vehicle))\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/65407488/165902870-4c938da7-a068-4d19-af5b-20402c325e87.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/65407488/165902834-702a738d-9ae2-4725-ad85-8b8835115f7d.png",alt:"image"})),(0,r.kt)("h2",{id:"submit-logs-to-grafana-loki"},"Submit logs to Grafana Loki"),(0,r.kt)("p",null,"Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus. It is designed to be very cost effective and easy to operate. It does not index the contents of the logs, but rather a set of labels for each log stream."),(0,r.kt)("p",null,"You can take two routes with Grafana Loki:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana Cloud")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Has free tier with some restrictions"),(0,r.kt)("li",{parentName:"ul"},"Easy to manage"),(0,r.kt)("li",{parentName:"ul"},"Easier to setup"),(0,r.kt)("li",{parentName:"ul"},"Mostly Managed by Grafana")),(0,r.kt)("p",null,"Self-Host ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/get/?plcmt=top-nav&cta=downloads&tab=self-managed"},"Grafana Stack")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No imposed restrictions"),(0,r.kt)("li",{parentName:"ul"},"Requires own server"),(0,r.kt)("li",{parentName:"ul"},"Complicated to setup"),(0,r.kt)("li",{parentName:"ul"},"Self-Managed")),(0,r.kt)("h3",{id:"grafana-cloud-setup-easy"},"Grafana Cloud Setup (Easy)"),(0,r.kt)("p",null,"Once registered with Grafana Cloud, head to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/auth/sign-in/?plcmt=top-nav&cta=myaccount"},"My Account")," click your named stack (should be under Grafana Cloud section) and then click Details on the Loki section. Click Generate Now where it says password. Save the key for later. Save your user and url also, you don't need the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://")),(0,r.kt)("h3",{id:"grafana-self-hosted-setup-experience-required"},"Grafana Self-Hosted Setup (Experience Required)"),(0,r.kt)("p",null,"To setup a grafana instance you'll require docker, and knowledge on containers or kubernetes. Please find a guide to setup a grafana stack (min requirement grafana and grafana loki) and follow that. Once done, setup authentication and use the username and password securing your endpoint."),(0,r.kt)("p",null,"[*]"," Please note: By default self-hosted loki instances do not provide any authenication layers and will require an external authentication layer such as NGINX basic auth or Cloudflare Access. "),(0,r.kt)("h4",{id:"setting-up-server-config"},"Setting up Server Config"),(0,r.kt)("p",null,"Open your server.cfg and if you have previously used datadog logging, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"ox:logger")," tag to be loki if not add the following tags to your cfg."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'set ox:logger "loki"\nset loki:user "<insert your user>"\nset loki:key "<insert the api key or password>"\nset loki:endpoint "<insert loki url without http:// or https://>"\n')),(0,r.kt)("p",null,"Here is an example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'set ox:logger "loki"\nset loki:user "1337"\nset loki:key "alongcomplicatedsecurepassword"\nset loki:endpoint "logs.mywebsite.com"\n')),(0,r.kt)("h4",{id:"inserting-data"},"Inserting data"),(0,r.kt)("p",null,"The data can be inserted into Loki the same way as datadog so you can follow the log format from the above datadog section."),(0,r.kt)("h4",{id:"browsing-data"},"Browsing Data"),(0,r.kt)("p",null,"If you're unfamiliar with how to use Loki please follow an online guide or a youtube video. You can get quite indepth with what you can do, you can even track metrics and economic health all from logs."))}p.isMDXComponent=!0}}]);