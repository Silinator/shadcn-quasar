import{c as _e,I as l,a as we}from"./Icon-Cj4XEEEw.js";import{d as O,c as Ve,s as W,l as Ee,f as Pe,q as Ke,a as z,n as _,u as o,x as Oe,o as S,w as R,b as w,p as P,i as K,y as Ne}from"./iframe-HJjqy3jf.js";import{r as Ue}from"./ripple-CsoxYJ_M.js";import{P as We}from"./Primitive-DXfQsK0y.js";const n=O({directives:{ripple:Ue},__name:"Chip",props:{modelValue:{type:Boolean,default:!0},selected:{type:[Boolean,null],default:null},dense:{type:Boolean,default:!1},square:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},disable:{type:Boolean,default:!1},size:{},class:{},asChild:{type:Boolean,default:!1},as:{default:"div"}},emits:["update:modelValue","update:selected","click","remove"],setup(e,{emit:d}){const a=e,t=Ve(()=>a.disable===!1&&(a.clickable===!0||a.selected!==null)),r=d;function u(i){if(!t.value)return;const U=a.selected!==!0;r("update:selected",U),r("click",i)}function V(){r("update:modelValue",!1),r("remove")}P("onRemove",V);const c=W(a,"selected");P("chipSelected",c);const E=W(a,"disable");return P("chipDisable",E),(i,U)=>{const Re=Ke("ripple");return a.modelValue?Ee((S(),z(o(We),{key:0,as:a.as,asChild:a.asChild,role:t.value?"button":void 0,"aria-disabled":a.disable?"true":void 0,tabindex:t.value?0:void 0,onClick:u,onKeyup:Oe(u,["enter"]),class:_(o(_e)(o(Se)({dense:i.dense,square:i.square,outline:i.outline,size:i.size,isClickable:t.value,disable:E.value}),a.class))},{default:R(()=>[w(i.$slots,"default")]),_:3},8,["as","asChild","role","aria-disabled","tabindex","class"])),[[Re,{...a.ripple&&!a.disable?{}:{disabled:!0}}]]):Pe("",!0)}}});n.__docgenInfo={exportName:"default",displayName:"Chip",type:1,props:[{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"string",declarations:[],schema:"string",default:'"div"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"selected",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"null"},{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"ripple",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"clickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]},{name:"update:modelValue",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:modelValue", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"update:selected",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:selected", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"remove",description:"",tags:[],type:"[]",signature:'(event: "remove"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"string",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:"string"},{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"selected",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dense",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ripple",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clickable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"md" | "xs" | "sm" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/Chip.vue"};const p=O({__name:"ChipIcon",props:{name:{},iconSelected:{default:"check"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},setup(e){const d=K("chipSelected"),a=e;return(t,r)=>o(d)?(S(),z(o(l),{key:0,name:a.iconSelected,size:a.size,variant:a.variant,filled:a.filled,class:_(a.class)},{default:R(()=>[w(t.$slots,"default")]),_:3},8,["name","size","variant","filled","class"])):(S(),z(o(l),{key:1,name:a.name,variant:a.variant,filled:a.filled,size:a.size,class:_(a.class)},{default:R(()=>[w(t.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});p.__docgenInfo={exportName:"default",displayName:"ChipIcon",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"iconSelected",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"check"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"rounded"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"inherit"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"iconSelected",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipIcon.vue"};const N=O({__name:"ChipRemoveButton",props:{name:{default:"cancel"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},emits:["click"],setup(e,{emit:d}){const a=e,t=K("chipDisable"),r=K("onRemove"),u=d;function V(c){t!=null&&t.value||(u("click",c),r==null||r())}return(c,E)=>(S(),z(o(l),{onClick:Ne(V,["stop"]),role:"button",tabindex:"0",name:a.name,variant:a.variant,filled:a.filled,size:a.size,class:_(o(_e)("pointer-events-auto !-mr-2.5 cursor-pointer opacity-60 hover:opacity-100",a.class))},{default:R(()=>[w(c.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});N.__docgenInfo={exportName:"default",displayName:"ChipRemoveButton",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"inherit"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"rounded"'},{name:"name",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"cancel"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipRemoveButton.vue"};const Se=we("bg-primary-foreground text-primary relative m-1 inline-flex max-w-full items-center gap-2 outline-0 [&>i]:-m-1 [&>i]:text-[1.5em]",{variants:{dense:{true:"h-[1.5em] px-[0.4em] py-0",false:"h-[2em] px-[0.9em] py-[0.5em]"},square:{true:"rounded-lg",false:""},outline:{true:"text-primary border border-current bg-transparent",false:""},size:{xs:"text-[8px]",sm:"text-xs",md:"text-base",lg:"text-xl",xl:"text-2xl"},isClickable:{true:"cursor-pointer select-none focus:shadow-sm focus:outline-none",false:""},disable:{true:"cursor-not-allowed opacity-60",false:""}},compoundVariants:[{dense:!1,square:!1,class:"rounded-2xl"},{dense:!0,square:!1,class:"rounded-xl"}],defaultVariants:{dense:!1,square:!1,outline:!1,size:"md",isClickable:!1,disable:!1}});Se.__docgenInfo={exportName:"chipVariants",displayName:"chipVariants",type:2,props:[{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"isClickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/index.ts"};const{fn:s}=__STORYBOOK_MODULE_TEST__,Te={title:"UI/Chip",component:n,tags:["autodocs"]},m={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-blue-500 text-white",default:"#007ABF"}},h={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-orange-400 text-white",default:"Bookmark"}},f={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-red-500 text-white",square:!0,default:"Bookmark"}},g={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"text-emerald-500",outline:!0,default:"Bookmark"}},b={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"text-amber-700",outline:!0,square:!0,default:"Bookmark"}},y={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-rose-700 text-white",disable:!0,default:"Bookmark"}},C={render:e=>({components:{Chip:n},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-fuchsia-800 text-white",dense:!0,default:"Bookmark"}},v={render:e=>({components:{Chip:n,Icon:l},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
      <Chip v-bind="args" size="sm">${e.default}</Chip>
      <Chip v-bind="args" size="md">${e.default}</Chip>
      <Chip v-bind="args" size="lg">${e.default}</Chip>
      <Chip v-bind="args" size="xl">${e.default}</Chip>
      <br />
      <Chip v-bind="args" dense >${e.default}</Chip>
      <Chip v-bind="args" dense size="sm">${e.default}</Chip>
      <Chip v-bind="args" dense size="md">${e.default}</Chip>
      <Chip v-bind="args" dense size="lg">${e.default}</Chip>
      <Chip v-bind="args" dense size="xl">${e.default}</Chip>
    `}),args:{class:"bg-green-300 text-white",size:"xs",default:'<Icon filled name="bookmark" /> Bookmark'}},k={render:e=>({components:{Chip:n,Icon:l},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-green-300 text-white text-6xl",default:'<Icon filled name="bookmark" /> Bookmark'}},x={render:e=>({components:{Chip:n,Icon:l},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-purple-400",default:`
      <Icon name="bluetooth" />
      Bluetooth
    `}},q={render:e=>({components:{Chip:n,ChipIcon:p},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:s(),"onUpdate:selected":s(),class:"bg-lime-700",selected:!1,default:`
      <ChipIcon name="bluetooth"/>
      Bluetooth
    `}},B={render:e=>({components:{Chip:n,ChipIcon:p},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:s(),"onUpdate:selected":s(),class:"bg-gray-200",selected:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
    `}},$={render:e=>({components:{Chip:n,ChipIcon:p,ChipRemoveButton:N},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:s(),"onUpdate:selected":s(),onRemove:s(),"onUpdate:modelValue":s(),class:"bg-blue-400",selected:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `}},I={render:e=>({components:{Chip:n,ChipIcon:p,ChipRemoveButton:N},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:s(),"onUpdate:selected":s(),onRemove:s(),"onUpdate:modelValue":s(),class:"text-blue-600",selected:!0,outline:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `}};var D,j,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: \`#007ABF\`
  }
}`,...(M=(j=m.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var F,T,A;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-orange-400 text-white',
    default: \`Bookmark\`
  }
}`,...(A=(T=h.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var L,Y,G;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-red-500 text-white',
    square: true,
    default: \`Bookmark\`
  }
}`,...(G=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var H,J,Q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'text-emerald-500',
    outline: true,
    default: \`Bookmark\`
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'text-amber-700',
    outline: true,
    square: true,
    default: \`Bookmark\`
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-rose-700 text-white',
    disable: true,
    default: \`Bookmark\`
  }
}`,...(se=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,re,oe;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-fuchsia-800 text-white',
    dense: true,
    default: \`Bookmark\`
  }
}`,...(oe=(re=C.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,de;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
      <Chip v-bind="args" size="sm">\${args.default}</Chip>
      <Chip v-bind="args" size="md">\${args.default}</Chip>
      <Chip v-bind="args" size="lg">\${args.default}</Chip>
      <Chip v-bind="args" size="xl">\${args.default}</Chip>
      <br />
      <Chip v-bind="args" dense >\${args.default}</Chip>
      <Chip v-bind="args" dense size="sm">\${args.default}</Chip>
      <Chip v-bind="args" dense size="md">\${args.default}</Chip>
      <Chip v-bind="args" dense size="lg">\${args.default}</Chip>
      <Chip v-bind="args" dense size="xl">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-green-300 text-white',
    size: 'xs',
    default: \`<Icon filled name="bookmark" /> Bookmark\`
  }
}`,...(de=(le=v.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-green-300 text-white text-6xl',
    default: \`<Icon filled name="bookmark" /> Bookmark\`
  }
}`,...(ue=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,fe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-purple-400',
    default: \`
      <Icon name="bluetooth" />
      Bluetooth
    \`
  }
}`,...(fe=(he=x.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,be,ye;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-model:selected="args.selected" v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    class: 'bg-lime-700',
    selected: false,
    default: \`
      <ChipIcon name="bluetooth"/>
      Bluetooth
    \`
  }
}`,...(ye=(be=q.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Ce,ve,ke;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-model:selected="args.selected" v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    class: 'bg-gray-200',
    selected: true,
    default: \`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
    \`
  }
}`,...(ke=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var xe,qe,Be;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipIcon,
      ChipRemoveButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-model:selected="args.selected" v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    onRemove: fn(),
    'onUpdate:modelValue': fn(),
    class: 'bg-blue-400',
    selected: true,
    default: \`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    \`
  }
}`,...(Be=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:Be.source}}};var $e,Ie,ze;I.parameters={...I.parameters,docs:{...($e=I.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipIcon,
      ChipRemoveButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-model:selected="args.selected" v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    onRemove: fn(),
    'onUpdate:modelValue': fn(),
    class: 'text-blue-600',
    selected: true,
    outline: true,
    default: \`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    \`
  }
}`,...(ze=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:ze.source}}};const Ae=["Basic","BasisCustomColors","Square","Outline","OutlineSquared","disabled","dense","DiffrentSizes","CustomSize","BasisWithIcon","BasisWithChipIcon","BasisWithChipCustomIcon","BasisWithChipWithRemove","OutlinedWithChipWithRemove"];export{m as Basic,h as BasisCustomColors,B as BasisWithChipCustomIcon,q as BasisWithChipIcon,$ as BasisWithChipWithRemove,x as BasisWithIcon,k as CustomSize,v as DiffrentSizes,g as Outline,b as OutlineSquared,I as OutlinedWithChipWithRemove,f as Square,Ae as __namedExportsOrder,Te as default,C as dense,y as disabled};
