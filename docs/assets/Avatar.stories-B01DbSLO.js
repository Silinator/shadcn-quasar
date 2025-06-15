import{c as he,a as be}from"./_plugin-vue_export-helper-CqjgSE-H.js";import{t as Ae,i as xe,p as ke,r as f,c as ge,g as Ce,d as p,a as m,o as u,w as g,b as y,u as d,e as $,f as we,h as qe,j as Ie,k as _e,l as $e,v as Re,n as Oe,m as ye}from"./iframe-Dqrhj4_V.js";import{P as R}from"./Primitive-rW7MFCUy.js";import{_ as O}from"./Badge-Dr4chZgp.js";import{I as B}from"./Icon-DPeEveKH.js";function Be(e){var a;const t=Ae(e);return(a=t==null?void 0:t.$el)!=null?a:t}function Se(e,a){const t=`${e}Context`,s=Symbol(t);return[n=>{const i=xe(s,n);if(i||i===null)return i;throw new Error(`Injection \`${s.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},n=>(ke(s,n),n)]}function S(){const e=Ce(),a=f(),t=ge(()=>{var n,i;return["#text","#comment"].includes((n=a.value)==null?void 0:n.$el.nodeName)?(i=a.value)==null?void 0:i.$el.nextElementSibling:Be(a)}),s=Object.assign({},e.exposed),r={};for(const n in e.props)Object.defineProperty(r,n,{enumerable:!0,configurable:!0,get:()=>e.props[n]});if(Object.keys(s).length>0)for(const n in s)Object.defineProperty(r,n,{enumerable:!0,configurable:!0,get:()=>s[n]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=r;function o(n){a.value=n,n&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>n instanceof Element?n:n.$el}),e.exposed=r)}return{forwardRef:o,currentRef:a,currentElement:t}}const[fe,Pe]=Se("AvatarRoot"),je=p({__name:"AvatarRoot",props:{asChild:{type:Boolean},as:{default:"span"}},setup(e){return S(),Pe({imageLoadingStatus:f("loading")}),(a,t)=>(u(),m(d(R),{"as-child":a.asChild,as:a.as},{default:g(()=>[y(a.$slots,"default")]),_:3},8,["as-child","as"]))}}),ze=p({__name:"AvatarFallback",props:{delayMs:{default:0},asChild:{type:Boolean},as:{default:"span"}},setup(e){const a=e,t=fe();S();const s=f(!1);let r;return $(t.imageLoadingStatus,o=>{o==="loading"&&(s.value=!1,a.delayMs?r=setTimeout(()=>{s.value=!0,clearTimeout(r)},a.delayMs):s.value=!0)},{immediate:!0}),(o,n)=>s.value&&d(t).imageLoadingStatus.value!=="loaded"?(u(),m(d(R),{key:0,"as-child":o.asChild,as:o.as},{default:g(()=>[y(o.$slots,"default")]),_:3},8,["as-child","as"])):we("",!0)}});function Fe(e,a){const t=f("idle"),s=f(!1),r=o=>()=>{s.value&&(t.value=o)};return qe(()=>{s.value=!0,$([()=>e.value,()=>a==null?void 0:a.value],([o,n])=>{if(!o)t.value="error";else{const i=new window.Image;t.value="loading",i.onload=r("loaded"),i.onerror=r("error"),i.src=o,n&&(i.referrerPolicy=n)}},{immediate:!0})}),Ie(()=>{s.value=!1}),t}const Me=p({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{default:"img"}},emits:["loadingStatusChange"],setup(e,{emit:a}){const t=e,s=a,{src:r,referrerPolicy:o}=_e(t);S();const n=fe(),i=Fe(r,o);return $(i,c=>{s("loadingStatusChange",c),c!=="idle"&&(n.imageLoadingStatus.value=c)},{immediate:!0}),(c,Ee)=>$e((u(),m(d(R),{role:"img","as-child":c.asChild,as:c.as,src:d(r),"referrer-policy":d(o)},{default:g(()=>[y(c.$slots,"default")]),_:3},8,["as-child","as","src","referrer-policy"])),[[Re,d(i)==="loaded"]])}}),l=p({__name:"Avatar",props:{square:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},size:{default:"md"},class:{}},setup(e){const a=e,t=ge(()=>a.square?"square":a.rounded?"rounded":"circle");return(s,r)=>(u(),m(d(je),{"data-slot":"avatar",class:Oe(d(he)(d(ve)({variant:t.value,size:s.size}),a.class))},{default:g(()=>[y(s.$slots,"default")]),_:3},8,["class"]))}});l.__docgenInfo={exportName:"default",displayName:"Avatar",type:1,props:[{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']},default:'"md"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"md" | "xs" | "sm" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/Avatar.vue"};const P=p({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(e){const a=e;return(t,s)=>(u(),m(d(ze),ye({"data-slot":"avatar-fallback"},a),{default:g(()=>[y(t.$slots,"default")]),_:3},16))}});P.__docgenInfo={exportName:"default",displayName:"AvatarFallback",type:1,props:[{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"input"','"button"','"a"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"svg"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"delayMs",global:!1,description:"Useful for delaying rendering so it only appears for those with slower connections.",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"input"','"button"','"a"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"svg"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"delayMs",type:"number",description:"Useful for delaying rendering so it only appears for those with slower connections.",declarations:[],schema:"number"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/AvatarFallback.vue"};const j=p({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(e){const a=e;return(t,s)=>(u(),m(d(Me),ye({"data-slot":"avatar-image"},a),{default:g(()=>[y(t.$slots,"default")]),_:3},16))}});j.__docgenInfo={exportName:"default",displayName:"AvatarImage",type:1,props:[{name:"src",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"referrerPolicy",global:!1,description:"",tags:[],required:!1,type:"HTMLAttributeReferrerPolicy",declarations:[],schema:{kind:"enum",type:"HTMLAttributeReferrerPolicy",schema:['""','"no-referrer"','"no-referrer-when-downgrade"','"origin"','"origin-when-cross-origin"','"same-origin"','"strict-origin"','"strict-origin-when-cross-origin"','"unsafe-url"']}},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"input"','"button"','"a"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"svg"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"input"','"button"','"a"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"svg"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"src",type:"string",description:"",declarations:[],schema:"string"},{name:"referrerPolicy",type:"HTMLAttributeReferrerPolicy",description:"",declarations:[],schema:{kind:"enum",type:"HTMLAttributeReferrerPolicy",schema:['""','"no-referrer"','"no-referrer-when-downgrade"','"origin"','"origin-when-cross-origin"','"same-origin"','"strict-origin"','"strict-origin-when-cross-origin"','"unsafe-url"']}}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/AvatarImage.vue"};const ve=be("bg-primary text-primary-foreground relative inline-flex items-center justify-center [&>img]:h-[inherit] [&>img]:w-[inherit] [&>img]:rounded-[inherit]",{variants:{variant:{circle:"rounded-full",square:"rounded-none",rounded:"rounded-sm"},size:{xs:"h-4 w-4 text-[8px]",sm:"h-6 w-6 text-xs",md:"h-8 w-8 text-base",lg:"h-10 w-10 text-xl",xl:"h-12 w-12 text-2xl"}},defaultVariants:{variant:"circle",size:"md"}});ve.__docgenInfo={exportName:"avatarVariants",displayName:"avatarVariants",type:2,props:[{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"rounded" | "square" | "circle"',declarations:[],schema:{kind:"enum",type:'"rounded" | "square" | "circle"',schema:['"rounded"','"square"','"circle"']}},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/index.ts"};const We={title:"UI/Avatar",component:l,tags:["autodocs"]},v={render:e=>({components:{Avatar:l},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{default:"J"}},h={render:e=>({components:{Avatar:l},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{class:"bg-blue-500 text-white",default:"J"}},b={render:e=>({components:{Avatar:l},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{rounded:!0,default:"J"}},A={render:e=>({components:{Avatar:l},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{square:!0,default:"J"}},x={render:e=>({components:{Avatar:l,Icon:B},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:'<Icon name="directions" filled size="md" class="text-primary-foreground" />'}},k={render:e=>({components:{Avatar:l,Badge:O},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:`
      J
      <Badge floating rounded class="bg-blue-600">2</Badge>
    `}},C={render:e=>({components:{Avatar:l,Icon:B,Badge:O},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-orange-500",size:"xl",square:!0,default:`
      <Icon name="directions" filled size="md" class="text-primary-foreground" />
      <Badge floating rounded class="bg-green-500"></Badge>
    `}},w={render:e=>({components:{Avatar:l},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:'<img src="https://cdn.quasar.dev/img/avatar.png" />'}},q={render:e=>({components:{Avatar:l,AvatarFallback:P,AvatarImage:j},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-cyan-500",size:"xl",default:`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar-fail.png" />
      <AvatarFallback>J</AvatarFallback>
    `}},I={render:e=>({components:{Avatar:l,AvatarFallback:P,AvatarImage:j,Badge:O},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-cyan-500",size:"xl",default:`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
      <AvatarFallback>J</AvatarFallback>
      <Badge floating class="bg-red-600">99+</Badge>
    `}},_={render:e=>({components:{Avatar:l,Icon:B},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{class:"h-24 w-24 text-6xl",default:'<Icon name="directions" filled size="xl" class="text-primary-foreground" />'}};var z,F,M;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Avatar v-bind="args">\${args.default}</Avatar>\`
  }),
  args: {
    default: \`J\`
  }
}`,...(M=(F=v.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var E,T,N;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Avatar v-bind="args">\${args.default}</Avatar>\`
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: \`J\`
  }
}`,...(N=(T=h.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var V,J,D;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Avatar v-bind="args">\${args.default}</Avatar>\`
  }),
  args: {
    rounded: true,
    default: \`J\`
  }
}`,...(D=(J=b.parameters)==null?void 0:J.docs)==null?void 0:D.source}}};var W,L,K;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Avatar v-bind="args">\${args.default}</Avatar>\`
  }),
  args: {
    square: true,
    default: \`J\`
  }
}`,...(K=(L=A.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var H,U,G;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      Icon
    },
    setup: () => ({
      args
    }),
    template: \`
      <Avatar v-bind="args">
        \${args.default}
      </Avatar>
    \`
  }),
  args: {
    class: 'bg-green-500',
    size: 'xl',
    default: \`<Icon name="directions" filled size="md" class="text-primary-foreground" />\`
  }
}`,...(G=(U=x.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Q,X,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      Badge
    },
    setup: () => ({
      args
    }),
    template: \`
      <Avatar v-bind="args">
        \${args.default}
      </Avatar>
    \`
  }),
  args: {
    class: 'bg-green-500',
    size: 'xl',
    default: \`
      J
      <Badge floating rounded class="bg-blue-600">2</Badge>
    \`
  }
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      Icon,
      Badge
    },
    setup: () => ({
      args
    }),
    template: \`
      <Avatar v-bind="args">
        \${args.default}
      </Avatar>
    \`
  }),
  args: {
    class: 'bg-orange-500',
    size: 'xl',
    square: true,
    default: \`
      <Icon name="directions" filled size="md" class="text-primary-foreground" />
      <Badge floating rounded class="bg-green-500"></Badge>
    \`
  }
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar
    },
    setup: () => ({
      args
    }),
    template: \`
      <Avatar v-bind="args">
        \${args.default}
      </Avatar>
    \`
  }),
  args: {
    class: 'bg-green-500',
    size: 'xl',
    default: \`<img src="https://cdn.quasar.dev/img/avatar.png" />\`
  }
}`,...(se=(te=w.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,oe,ie;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage
    },
    setup: () => ({
      args
    }),
    template: \`
      <Avatar v-bind="args">
        \${args.default}
      </Avatar>
    \`
  }),
  args: {
    class: 'bg-cyan-500',
    size: 'xl',
    default: \`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar-fail.png" />
      <AvatarFallback>J</AvatarFallback>
    \`
  }
}`,...(ie=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,de,ce;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage,
      Badge
    },
    setup: () => ({
      args
    }),
    template: \`
      <Avatar v-bind="args">
        \${args.default}
      </Avatar>
    \`
  }),
  args: {
    class: 'bg-cyan-500',
    size: 'xl',
    default: \`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
      <AvatarFallback>J</AvatarFallback>
      <Badge floating class="bg-red-600">99+</Badge>
    \`
  }
}`,...(ce=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,ue;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Avatar v-bind="args">\${args.default}</Avatar>\`
  }),
  args: {
    class: 'h-24 w-24 text-6xl',
    default: \`<Icon name="directions" filled size="xl" class="text-primary-foreground" />\`
  }
}`,...(ue=(me=_.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const Le=["Basic","BasisCustomColors","Rounded","Square","WithIcon","WithBadge","WithIconAndBadge","WithSimpleImg","WithImgFallback","WithImgFallbackAndBadge","CustomSize"];export{v as Basic,h as BasisCustomColors,_ as CustomSize,b as Rounded,A as Square,k as WithBadge,x as WithIcon,C as WithIconAndBadge,q as WithImgFallback,I as WithImgFallbackAndBadge,w as WithSimpleImg,Le as __namedExportsOrder,We as default};
