import{a as Ce,c as ke,I as B}from"./Icon-BrGviInw.js";import{F as we,d as p,C as qe,x as R,y as Ie,h as O,z as _e,m as Se,p as $e,A as v,f as he,B as Oe,k as u,o as m,l as g,e as f,u as d,w as P,j as Be,D as Re,E as Pe,G as je,g as ze,H as Fe,n as Ee}from"./vue.esm-bundler-egrY_yfx.js";import{_ as j}from"./Badge-CByCDuKc.js";function be(e){return e?e.flatMap(a=>a.type===we?be(a.children):[a]):[]}const Me=p({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:a,slots:t}){return()=>{var c,$;if(!t.default)return null;const n=be(t.default()),i=n.findIndex(y=>y.type!==qe);if(i===-1)return n;const r=n[i];(c=r.props)==null||delete c.ref;const s=r.props?R(a,r.props):a;a.class&&(($=r.props)!=null&&$.class)&&delete r.props.class;const o=Ie(r,s);for(const y in s)y.startsWith("on")&&(o.props||(o.props={}),o.props[y]=s[y]);return n.length===1?o:(n[i]=o,n)}}}),Te=["area","img","input"],z=p({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:a,slots:t}){const n=e.asChild?"template":e.as;return typeof n=="string"&&Te.includes(n)?()=>O(n,a):n!=="template"?()=>O(e.as,a,{default:t.default}):()=>O(Me,a,{default:t.default})}});function Ne(e){var a;const t=_e(e);return(a=t==null?void 0:t.$el)!=null?a:t}function Ve(e,a){const t=`${e}Context`,n=Symbol(t);return[s=>{const o=Se(n,s);if(o||o===null)return o;throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},s=>($e(n,s),s)]}function F(){const e=Oe(),a=v(),t=he(()=>{var s,o;return["#text","#comment"].includes((s=a.value)==null?void 0:s.$el.nodeName)?(o=a.value)==null?void 0:o.$el.nextElementSibling:Ne(a)}),n=Object.assign({},e.exposed),i={};for(const s in e.props)Object.defineProperty(i,s,{enumerable:!0,configurable:!0,get:()=>e.props[s]});if(Object.keys(n).length>0)for(const s in n)Object.defineProperty(i,s,{enumerable:!0,configurable:!0,get:()=>n[s]});Object.defineProperty(i,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=i;function r(s){a.value=s,s&&(Object.defineProperty(i,"$el",{enumerable:!0,configurable:!0,get:()=>s instanceof Element?s:s.$el}),e.exposed=i)}return{forwardRef:r,currentRef:a,currentElement:t}}const[Ae,Je]=Ve("AvatarRoot"),De=p({__name:"AvatarRoot",props:{asChild:{type:Boolean},as:{default:"span"}},setup(e){return F(),Je({imageLoadingStatus:v("loading")}),(a,t)=>(m(),u(d(z),{"as-child":a.asChild,as:a.as},{default:g(()=>[f(a.$slots,"default")]),_:3},8,["as-child","as"]))}}),We=p({__name:"AvatarFallback",props:{delayMs:{default:0},asChild:{type:Boolean},as:{default:"span"}},setup(e){const a=e,t=Ae();F();const n=v(!1);let i;return P(t.imageLoadingStatus,r=>{r==="loading"&&(n.value=!1,a.delayMs?i=setTimeout(()=>{n.value=!0,clearTimeout(i)},a.delayMs):n.value=!0)},{immediate:!0}),(r,s)=>n.value&&d(t).imageLoadingStatus.value!=="loaded"?(m(),u(d(z),{key:0,"as-child":r.asChild,as:r.as},{default:g(()=>[f(r.$slots,"default")]),_:3},8,["as-child","as"])):Be("",!0)}});function Le(e,a){const t=v("idle"),n=v(!1),i=r=>()=>{n.value&&(t.value=r)};return Re(()=>{n.value=!0,P([()=>e.value,()=>a==null?void 0:a.value],([r,s])=>{if(!r)t.value="error";else{const o=new window.Image;t.value="loading",o.onload=i("loaded"),o.onerror=i("error"),o.src=r,s&&(o.referrerPolicy=s)}},{immediate:!0})}),Pe(()=>{n.value=!1}),t}const Ke=p({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{default:"img"}},emits:["loadingStatusChange"],setup(e,{emit:a}){const t=e,n=a,{src:i,referrerPolicy:r}=je(t);F();const s=Ae(),o=Le(i,r);return P(o,c=>{n("loadingStatusChange",c),c!=="idle"&&(s.imageLoadingStatus.value=c)},{immediate:!0}),(c,$)=>ze((m(),u(d(z),{role:"img","as-child":c.asChild,as:c.as,src:d(i),"referrer-policy":d(r)},{default:g(()=>[f(c.$slots,"default")]),_:3},8,["as-child","as","src","referrer-policy"])),[[Fe,d(o)==="loaded"]])}}),l=p({__name:"Avatar",props:{square:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},size:{default:"md"},class:{}},setup(e){const a=e,t=he(()=>a.square?"square":a.rounded?"rounded":"circle");return(n,i)=>(m(),u(d(De),{"data-slot":"avatar",class:Ee(d(Ce)(d(xe)({variant:t.value,size:n.size}),a.class))},{default:g(()=>[f(n.$slots,"default")]),_:3},8,["class"]))}});l.__docgenInfo={exportName:"default",displayName:"Avatar",type:1,props:[{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']},default:'"md"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"md" | "xs" | "sm" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/Avatar.vue"};const E=p({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(e){const a=e;return(t,n)=>(m(),u(d(We),R({"data-slot":"avatar-fallback"},a),{default:g(()=>[f(t.$slots,"default")]),_:3},16))}});E.__docgenInfo={exportName:"default",displayName:"AvatarFallback",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"delayMs",global:!1,description:"Useful for delaying rendering so it only appears for those with slower connections.",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"svg"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"delayMs",type:"number",description:"Useful for delaying rendering so it only appears for those with slower connections.",declarations:[],schema:"number"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"svg"','"ul"',{kind:"object",type:"{} & string"}]}}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/AvatarFallback.vue"};const M=p({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(e){const a=e;return(t,n)=>(m(),u(d(Ke),R({"data-slot":"avatar-image"},a),{default:g(()=>[f(t.$slots,"default")]),_:3},16))}});M.__docgenInfo={exportName:"default",displayName:"AvatarImage",type:1,props:[{name:"src",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"referrerPolicy",global:!1,description:"",tags:[],required:!1,type:"HTMLAttributeReferrerPolicy",declarations:[],schema:{kind:"enum",type:"HTMLAttributeReferrerPolicy",schema:['""','"no-referrer"','"no-referrer-when-downgrade"','"origin"','"origin-when-cross-origin"','"same-origin"','"strict-origin"','"strict-origin-when-cross-origin"','"unsafe-url"']}},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"svg"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"svg"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"src",type:"string",description:"",declarations:[],schema:"string"},{name:"referrerPolicy",type:"HTMLAttributeReferrerPolicy",description:"",declarations:[],schema:{kind:"enum",type:"HTMLAttributeReferrerPolicy",schema:['""','"no-referrer"','"no-referrer-when-downgrade"','"origin"','"origin-when-cross-origin"','"same-origin"','"strict-origin"','"strict-origin-when-cross-origin"','"unsafe-url"']}}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/AvatarImage.vue"};const xe=ke("bg-primary text-primary-foreground relative inline-flex items-center justify-center [&>img]:h-[inherit] [&>img]:w-[inherit] [&>img]:rounded-[inherit]",{variants:{variant:{circle:"rounded-full",square:"rounded-none",rounded:"rounded-sm"},size:{xs:"h-4 w-4 text-[8px]",sm:"h-6 w-6 text-xs",md:"h-8 w-8 text-base",lg:"h-10 w-10 text-xl",xl:"h-12 w-12 text-2xl"}},defaultVariants:{variant:"circle",size:"md"}});xe.__docgenInfo={exportName:"avatarVariants",displayName:"avatarVariants",type:2,props:[{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"square" | "rounded" | "circle"',declarations:[],schema:{kind:"enum",type:'"square" | "rounded" | "circle"',schema:['"square"','"rounded"','"circle"']}},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/index.ts"};const Qe={title:"UI/Avatar",component:l,tags:["autodocs"]},h={render:e=>({components:{Avatar:l},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{default:"J"}},b={render:e=>({components:{Avatar:l},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{class:"bg-blue-500 text-white",default:"J"}},A={render:e=>({components:{Avatar:l},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{rounded:!0,default:"J"}},x={render:e=>({components:{Avatar:l},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{square:!0,default:"J"}},C={render:e=>({components:{Avatar:l,Icon:B},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:'<Icon name="directions" filled size="md" class="text-primary-foreground" />'}},k={render:e=>({components:{Avatar:l,Badge:j},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:`
      J
      <Badge floating rounded class="bg-blue-600">2</Badge>
    `}},w={render:e=>({components:{Avatar:l,Icon:B,Badge:j},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-orange-500",size:"xl",square:!0,default:`
      <Icon name="directions" filled size="md" class="text-primary-foreground" />
      <Badge floating rounded class="bg-green-500"></Badge>
    `}},q={render:e=>({components:{Avatar:l},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:'<img src="https://cdn.quasar.dev/img/avatar.png" />'}},I={render:e=>({components:{Avatar:l,AvatarFallback:E,AvatarImage:M},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-cyan-500",size:"xl",default:`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar-fail.png" />
      <AvatarFallback>J</AvatarFallback>
    `}},_={render:e=>({components:{Avatar:l,AvatarFallback:E,AvatarImage:M,Badge:j},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-cyan-500",size:"xl",default:`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
      <AvatarFallback>J</AvatarFallback>
      <Badge floating class="bg-red-600">99+</Badge>
    `}},S={render:e=>({components:{Avatar:l,Icon:B},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{class:"h-24 w-24 text-6xl",default:'<Icon name="directions" filled size="xl" class="text-primary-foreground" />'}};var T,N,V;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(N=h.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var J,D,W;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(W=(D=b.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var L,K,H;A.parameters={...A.parameters,docs:{...(L=A.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(K=A.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var U,G,Q;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(G=x.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,re;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ie,le;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ce,pe;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,ge;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(me=_.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,ye,ve;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};const Xe=["Basic","BasisCustomColors","Rounded","Square","WithIcon","WithBadge","WithIconAndBadge","WithSimpleImg","WithImgFallback","WithImgFallbackAndBadge","CustomSize"];export{h as Basic,b as BasisCustomColors,S as CustomSize,A as Rounded,x as Square,k as WithBadge,C as WithIcon,w as WithIconAndBadge,I as WithImgFallback,_ as WithImgFallbackAndBadge,q as WithSimpleImg,Xe as __namedExportsOrder,Qe as default};
