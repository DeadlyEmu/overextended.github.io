"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2433],{3645:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(9496),a=n(5924);const o="tabItem_x3QN";function r(e){let{children:t,hidden:n,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,r),hidden:n},t)}},537:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(6600),a=n(9496),o=n(5924),r=n(6885),l=n(6878),s=n(7496),d=n(8906);const u="tabList_HjGn",c="tabItem_R6JG";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:m,groupId:h,className:y}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,s.U)(),[w,T]=(0,a.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,d.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&v.some((t=>t.value===e))&&T(e)}const _=e=>{const t=e.currentTarget,n=N.indexOf(t),i=v[n].value;i!==w&&(I(t),T(i),null!=h&&x(h,String(i)))},B=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},y)},v.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:B,onFocus:_,onClick:_},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,r.Z)();return a.createElement(p,(0,i.Z)({key:String(t)},e))}},9910:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(9496);const a=e=>{const t={fontSize:"1.7rem",paddingRight:"left"===e.side&&"0.6rem",paddingLeft:"right"===e.side&&"0.6rem",verticalAlign:"center",display:"flex"};return i.createElement("div",{style:{width:"fit-content",height:"3rem",padding:"0.8rem",borderRadius:"0.2rem",verticalAlign:"baseline",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",color:"white",...e.style},className:"icon-button"},"left"===e.side&&i.createElement("div",{style:t},e.icon),i.createElement("div",null,e.children),"right"===e.side&&i.createElement("div",{style:t},e.icon))}},2338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=n(6600),a=(n(9496),n(9613)),o=n(9910),r=n(89);n(537),n(3645);const l={title:"Getting Started",sidebar_position:1,slug:"./../"},s=void 0,d={unversionedId:"ox_inventory/Getting Started/index",id:"ox_inventory/Getting Started/index",title:"Getting Started",description:"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,",source:"@site/docs/ox_inventory/Getting Started/index.md",sourceDirName:"ox_inventory/Getting Started",slug:"/ox_inventory/",permalink:"/docs/ox_inventory/",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Getting Started/index.md",tags:[],version:"current",lastUpdatedAt:1667769987,formattedLastUpdatedAt:"Nov 6, 2022",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,slug:"./../"},sidebar:"ox_inventory",previous:{title:"Inventory",permalink:"/docs/category/inventory"},next:{title:"Common Issues",permalink:"/docs/ox_inventory/Getting Started/issues"}},u={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"OxMySQL",id:"oxmysql",level:3},{value:"Ox Library",id:"ox-library",level:3},{value:"Optional Dependencies",id:"optional-dependencies",level:2},{value:"qtarget",id:"qtarget",level:3},{value:"NPWD",id:"npwd",level:3},{value:"Installation",id:"installation",level:2},{value:"Production Build",id:"production-build",level:3},{value:"Setup",id:"setup",level:3},{value:"Custom Framework",id:"custom-framework",level:4}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This resource is being designed with the intention of providing advanced functionality while remaining easy to use,\nhowever it is not recommended for beginners. You must possess a basic understanding of coding and the ability to read;\notherwise you ",(0,a.kt)("strong",{parentName:"p"},"should not")," install this resource.")),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"oxmysql"},"OxMySQL"),(0,a.kt)("p",null,"We utilise our own resource to communicate with MySQL databases via the node-mysql2 package.\nThe backend is actively maintained and updated unlike the package used by mysql-async, providing improved performance, security, and features.\nWe provide full backwards compatibility with mysql-async and build for the current Cfx architecture."),(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("a",{href:"https://www.github.com/overextended/oxmysql/releases/latest",style:{marginRight:"0.6rem"}},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,a.kt)("a",{href:"../oxmysql"},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,a.kt)("h3",{id:"ox-library"},"Ox Library"),(0,a.kt)("p",null,"Provides easily reusable functions that can be imported into your resource or called with exports."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Used in the inventory for")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SetInterval"),(0,a.kt)("li",{parentName:"ul"},"Server Callbacks"),(0,a.kt)("li",{parentName:"ul"},"Requesting models, animations, etc."),(0,a.kt)("li",{parentName:"ul"},"Marker management"),(0,a.kt)("li",{parentName:"ul"},"Notifications and progress bar")),(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("a",{href:"https://www.github.com/overextended/ox_lib/releases/latest",style:{marginRight:"0.6rem"}},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,a.kt)("a",{href:"../ox_lib"},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,a.kt)("h2",{id:"optional-dependencies"},"Optional Dependencies"),(0,a.kt)("p",null,"The resources listed under here ",(0,a.kt)("strong",{parentName:"p"},"aren't")," necessary for the inventory to work but still have full support."),(0,a.kt)("h3",{id:"qtarget"},"qtarget"),(0,a.kt)("p",null,"A high performance targeting solution based on bt-target, and the basis for qb-target.\nIt is being updated alongside Ox Inventory to improve support as well as add compatibility when using QBCore or migrating from bt-target.\nAll stashes and shops will utilise PolyZone's instead of markers to interact with them."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you wish to use it first you must ensure that qtarget is enabled in the resource convars.\nYou will need to enable compatibility manually by adjusting your config - more information provided below."),(0,a.kt)("p",{parentName:"admonition"},"You must start qtarget before the inventory and after your framework.")),(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("a",{href:"https://www.github.com/overextended/qtarget",style:{marginRight:"0.6rem"}},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,a.kt)("a",{href:"https://overextended.github.io/qtarget/"},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,a.kt)("h3",{id:"npwd"},"NPWD"),(0,a.kt)("p",null,"A standalone and feature-rich phone created by Project Error."),(0,a.kt)("p",null,"The inventory will handle disabling the phone when the player has no item, and supports toggling the phone through item use."),(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("a",{href:"https://www.github.com/project-error/npwd",style:{marginRight:"0.6rem"}},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub")),(0,a.kt)("a",{href:"https://projecterror.dev/docs"},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.DRM,{mdxType:"BsBookHalf"}),mdxType:"IconButton"},"Documentation"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"production-build"},"Production Build"),(0,a.kt)("p",null,"The user interface included with the source code must be compiled.",(0,a.kt)("br",{parentName:"p"}),"\n","You can compile it youself by following the ",(0,a.kt)("a",{parentName:"p",href:"./Guides/inventory_ui"},"build guide"),", otherwise download a production build below."),(0,a.kt)("div",{style:{width:"fit-content"}},(0,a.kt)("a",{href:"https://www.github.com/overextended/ox_inventory/releases/latest",style:{marginRight:"0.6rem"}},(0,a.kt)(o.Z,{side:"left",icon:(0,a.kt)(r.rFR,{mdxType:"BsGithub"}),mdxType:"IconButton"},"GitHub"))),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"If you are using a supported framework, refer to the dedicated guide in the navigation bar."),(0,a.kt)("h4",{id:"custom-framework"},"Custom Framework"),(0,a.kt)("p",null,"Integration between your framework and ox_inventory should be relatively simple if you aren't replacing and attempting to support backwards-compatibility with an existing inventory system."),(0,a.kt)("p",null,"You should first reference the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/modules/mysql/server.lua"},"mysql")," module and setup appropriate table and column names."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"    elseif shared.framework == 'myframework' then\n        playerTable = 'characters' -- table storing player / character data\n        playerColumn = 'charid'    -- primary key for identifying the character (i.e. identifier, citizenid, id)\n        vehicleTable = 'vehicles'  -- table storing owned vehicle data\n        vehicleColumn = 'id'       -- primary key for identifying the vehicle (i.e. plate, vin, id)\n    end\n")),(0,a.kt)("p",null,'You will need events and functions to handle licenses, owned vehicles, and job systems; these should be handled in the "bridge" module.'),(0,a.kt)("p",null,"If your framework doesn't have its own inventory system or you don't care about compatibility, it may be easier to refer to the incredibly barebones ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/tree/main/modules/bridge/ox"},"ox bridge")," (used by ox_core)."),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/tree/main/modules/bridge/esx"},"esx bridge")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/tree/main/modules/bridge/qb"},"qbcore bridge")," to get an idea of replacing existing inventories."),(0,a.kt)("p",null,"... todo: more information, work on a bridge template"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You should restart your server after the first startup to ensure everything has been correctly setup")))}m.isMDXComponent=!0}}]);