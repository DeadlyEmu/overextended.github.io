"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[992],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3645:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9496),r=n(5924);const i="tabItem_x3QN";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},537:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(6600),r=n(9496),i=n(5924),l=n(6885),o=n(6878),s=n(7496),u=n(8906);const c="tabList_HjGn",m="tabItem_R6JG";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:p,groupId:b,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,s.U)(),[N,w]=(0,r.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==N&&f.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,n=_.indexOf(t),a=f[n].value;a!==N&&(T(t),w(a),null!=b&&x(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>_.push(e),onKeyDown:E,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=n(6600),r=(n(9496),n(9613)),i=n(537),l=n(3645);const o={title:"Creating items"},s=void 0,u={unversionedId:"ox_inventory/Guides/creatingItems",id:"ox_inventory/Guides/creatingItems",title:"Creating items",description:"Defining item data",source:"@site/docs/ox_inventory/Guides/creatingItems.md",sourceDirName:"ox_inventory/Guides",slug:"/ox_inventory/Guides/creatingItems",permalink:"/docs/ox_inventory/Guides/creatingItems",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Guides/creatingItems.md",tags:[],version:"current",lastUpdatedAt:1667769987,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{title:"Creating items"},sidebar:"ox_inventory",previous:{title:"Guides",permalink:"/docs/ox_inventory/Guides/"},next:{title:"Building inventory UI",permalink:"/docs/ox_inventory/Guides/inventory_ui"}},c={},m=[{value:"Defining item data",id:"defining-item-data",level:2},{value:"Making the item usable",id:"making-the-item-usable",level:2},{value:"Client callbacks",id:"client-callbacks",level:3},{value:"Server callbacks",id:"server-callbacks",level:3},{value:"Creating container items",id:"creating-container-items",level:2}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"defining-item-data"},"Defining item data"),(0,r.kt)("p",null,"Before being able to see or use an item in game it ",(0,r.kt)("strong",{parentName:"p"},"must")," first be defined."),(0,r.kt)("p",null,"All of the items are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/data/items.lua")," file with key, value pairs.",(0,r.kt)("br",{parentName:"p"}),"\n","Key is the name (not the label) of an item and the value is a table containing the\noptions for the item."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Item options:")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"shared",label:"Shared",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- label: string\n-- weight: number (optional)\n-- stack: boolean (optional) -- If set to false will not allow the item to be stacked\n-- degrade: number (optional) -- The amount of time in minutes an item will degrade after\n-- close: boolean (optional) -- If set to false will not close the inventory on item use\n-- description: string (optional)\n-- consume: number (optional) -- Number of an item needed to use it, and removed after use (Default: 1)\n-- allowArmed: boolean (optional) -- If set to true will allow use of item while armed with a weapon\n-- client: table (optional)\n-- buttons: table (optional) -- Allows you to define custom context menu functions for the item\n"))),(0,r.kt)(l.Z,{value:"client",label:"Client",mdxType:"TabItem"},(0,r.kt)("p",null,"All values are optional."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- event: string -- Event to trigger after item use\n-- status: table -- Adjust esx_status values after use\n-- anim: table -- Animation during progress bar\n    -- dict: string\n    -- clip: string\n-- prop: table -- Attached prop during progress bar\n    -- model: string or hash\n    -- pos: table (x, y, z)\n    -- rot: table (x, y, z)\n-- disable: boolean -- Disables actions during progress bar\n-- usetime: number\n-- cancel: boolean -- If set to true the player can cancel item use\n-- add: function(total) -- Function that triggers when recieving an item (Returns total item count as `total`)\n-- remove: function(total) -- Function that triggers when removing an item (Returns total item count as `total`)\n"))),(0,r.kt)(l.Z,{value:"buttons",label:"Buttons",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- label: string,\n-- action: function(slot) -- Callback function when button is clicked in context menu, returns item slot\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"burger",label:"Burger",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    weight = 220,\n    stack = true,\n    close = true,\n    client = {\n        status = { hunger = 200000 },\n        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },\n        prop = {\n            model = 'prop_cs_burger_01',\n            pos = { x = 0.02, y = 0.02, y = -0.02},\n            rot = { x = 0.0, y = 0.0, y = 0.0}\n        },\n        usetime = 2500,\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"custom_burger",label:"Custom burger",mdxType:"TabItem"},(0,r.kt)("p",null,"A modified burger item, with a description and custom crafting table."),(0,r.kt)("p",null,"Combined with several new functions and events you could easily create your own crafting system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    description = 'Just what is the secret formula?'\n    weight = 220,\n    stack = true,\n    close = true,\n    client = {\n        status = { hunger = 200000 },\n        anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },\n        prop = {\n            model = 'prop_cs_burger_01',\n            pos = { x = 0.02, y = 0.02, y = -0.02},\n            rot = { x = 0.0, y = 0.0, y = 0.0}\n        },\n        usetime = 2500,\n    }\n    crafting = {\n        ['bun'] = 2,\n        ['ketchup'] = 1,\n        ['mustard'] = 1,\n        ['cheese'] = 1,\n        ['pickles'] = 1,\n        ['lettuce'] = 1,\n        ['tomato'] = 1,\n        ['onion'] = 1,\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"notify_burger",label:"Notify burger",mdxType:"TabItem"},(0,r.kt)("p",null,"A modified burger item, which gives you notifications on add and remove arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"['burger'] = {\n    label = 'Burger',\n    weight = 220,\n    stack = true,\n    consume = 0,\n    client = {\n        add = function(total)\n            if total > 0 then\n                lib.notify({description = 'Nice burger you got there!'})\n            end\n        end,\n\n        remove = function(total)\n            if total < 1 then\n                lib.notify({description = 'You lost all of your burgers!'})\n            end\n        end\n    }\n}\n")))),(0,r.kt)("h2",{id:"making-the-item-usable"},"Making the item usable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are using ESX, you can continue using ",(0,r.kt)("inlineCode",{parentName:"li"},"ESX.RegisterUsableItem"),"."),(0,r.kt)("li",{parentName:"ul"},"If you are using QBCore, you can continue using ",(0,r.kt)("inlineCode",{parentName:"li"},"QBCore.Functions.CreateUseableItem"),".")),(0,r.kt)("p",null,"Using the built-in system is more secure and provides much more functionality."),(0,r.kt)("h3",{id:"client-callbacks"},"Client callbacks"),(0,r.kt)("p",null,"Item callbacks can be added by defining an export (recommended), or by adding it to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/modules/items/client.lua#L33"},"items/client.lua"),"."),(0,r.kt)("p",null,"When defining ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/data/items.lua#L11"},"item data"),", adding client.export will trigger an event on item use.",(0,r.kt)("br",{parentName:"p"}),"\n","The correct formatting is ",(0,r.kt)("inlineCode",{parentName:"p"},"export = resourceName.exportName"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports('bandage', function(data, slot)\n    local playerPed = PlayerPedId()\n    local maxHealth = GetEntityMaxHealth(playerPed)\n    local health = GetEntityHealth(playerPed)\n\n    -- Does the ped need to heal? We can cancel the item from being used.\n    if health < maxHealth then\n        -- Triggers internal-code to correctly use items.\n        -- This adds security, removes the item on use, adds progressbar support, and is necessary for server callbacks.\n        exports.ox_inventory:useItem(data, function(data)\n            -- The server has verified the item can be used.\n            if data then\n                SetEntityHealth(playerPed, math.min(maxHealth, math.floor(health + maxHealth / 16)))\n                lib.notify({description = 'You feel better already'})\n            end\n        end)\n    else\n        -- Don't use the item\n        lib.notify({type = 'error', description = 'You don\\'t need a bandage right now'})\n    end\nend)\n")),(0,r.kt)("h3",{id:"server-callbacks"},"Server callbacks"),(0,r.kt)("p",null,"A callback function can be defined on the server to handle several events (usingItem, usedItem, buyItem).",(0,r.kt)("br",{parentName:"p"}),"\n","This can either be an export (recommended), or added to the bottom of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/modules/items/server.lua"},"items/server.lua"),".\nWhen defining ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/data/items.lua#L14"},"item data"),", adding server.export will trigger an event for the actions above.\nThe correct formatting is ",(0,r.kt)("inlineCode",{parentName:"p"},"export = resourceName.exportName"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"exports('bandage', function(event, item, inventory, slot, data)\n    -- Player is attempting to use the item.\n    if event == 'usingItem' then\n        local playerPed = GetPlayerPed(inventory.id)\n        local maxHealth = GetEntityMaxHealth(playerPed)\n        local health = GetEntityHealth(playerPed)\n\n        -- Check if the player needs to be healed.\n        if health >= maxHealth then\n            TriggerClientEvent('ox_lib:notify', inventory.id, {type = 'error', description = 'You don\\'t need a bandage right now'})\n\n            -- Returning 'false' will prevent the item from being used\n            return false\n        end\n\n        return\n    end\n\n    -- Player has finished using the item.\n    if event == 'usedItem' then\n        return TriggerClientEvent('ox_lib:notify', inventory.id, {description = 'You feel better already'})\n    end\n\n    -- Player is attempting to purchase the item.\n    if event == 'buying' then\n        return TriggerClientEvent('ox_lib:notify', inventory.id, {type = 'success', description = 'You bought a bandage'})\n    end\nend)\n")),(0,r.kt)("h2",{id:"creating-container-items"},"Creating container items"),(0,r.kt)("p",null,"Like with other items the item must first be registered."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"['paperbag'] = {\n    label = 'Paper Bag',\n    weight = 1,\n    stack = false,\n    close = false,\n    consume = 0\n},\n")),(0,r.kt)("p",null,"When registered you can define the item as a container under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Items.containers")," table in ",(0,r.kt)("inlineCode",{parentName:"p"},"/modules/items/sever.lua"),(0,r.kt)("br",{parentName:"p"}),"\n","The key for the container is the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," you gave it when registering the item.",(0,r.kt)("br",{parentName:"p"}),"\n","You can also define the number of slots, the maximum weight, blacklist and whitelist items."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"['name'] = {\n    -- size: {slots, maxWeight}\n        -- slots: number\n        -- maxWeight: number\n    -- blacklist: table (optional)\n        -- ['itemName'] = true\n    -- whitelist: table (optional)\n        -- ['itemName'] = true\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"['paperbag'] = {\n    size = {5, 1000},\n    blacklist = {\n        ['testburger'] = true -- No burgers!\n    }\n},\n")))}p.isMDXComponent=!0}}]);