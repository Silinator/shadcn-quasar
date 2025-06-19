import{_ as n}from"./Button-m5-p7b8M.js";import{a as F,c as z}from"./utils-Dl4VZL6K.js";import{d as N,c as D,w as j,n as A,u as c,o as E,r as K}from"./iframe-Qclsnmki.js";import{P as T}from"./Primitive-C6XvU_OZ.js";import{I as U}from"./Icon-B0fxx1uN.js";import"./ripple-CsoxYJ_M.js";const a=N({__name:"ButtonGroup",props:{spread:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},flat:{type:Boolean,default:!1},unelevated:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},square:{type:Boolean,default:!1},push:{type:Boolean,default:!1},glossy:{type:Boolean,default:!1},stretch:{type:Boolean,default:!1},class:{},asChild:{type:Boolean,default:!1},as:{default:"div"}},setup(e){const p=e;return(t,H)=>(E(),D(c(T),{as:p.as,asChild:p.asChild,role:"group",class:A(c(F)(c(O)({spread:t.spread,outline:t.outline,flat:t.flat,unelevated:t.unelevated,rounded:t.rounded,square:t.square,push:t.push,glossy:t.glossy}),p.class))},{default:j(()=>[K(t.$slots,"default")]),_:3},8,["as","asChild","class"]))}});a.__docgenInfo={exportName:"default",displayName:"ButtonGroup",type:1,props:[{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"string",declarations:[],schema:"string",default:'"div"'},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"flat",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"unelevated",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"push",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"glossy",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"stretch",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"spread",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"as",type:"string",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"flat",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"unelevated",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"push",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"glossy",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"stretch",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"spread",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/buttonGroup/ButtonGroup.vue"};const O=z("relative inline-flex gap-0 whitespace-nowrap [&>*]:border-0 [&>*]:shadow-none [&>*]:active:transform-none [&>*]:active:shadow-none [&>*:not(:first-child)]:!rounded-l-none [&>*:not(:last-child)]:!rounded-r-none",{variants:{spread:{true:"[&>*]:w-auto [&>*]:max-w-full [&>*]:min-w-0 [&>*]:flex-[1000_1_0%]",false:""},outline:{true:"border border-current bg-transparent",false:""},flat:{true:"",false:""},unelevated:{true:"",false:""},rounded:{true:"rounded-full",false:"rounded-sm"},square:{true:"rounded-none",false:""},push:{true:"[&>*]:active:pt-0.75 [&>*]:active:pb-0.25 [&>*]:active:transition-[padding_.3s_cubic-bezier(.25,.8,.5,1)]",false:""},glossy:{true:"",false:""},stretch:{true:"self-stretch",false:""}},compoundVariants:[{flat:!1,unelevated:!1,outline:!1,push:!1,class:"shadow-md transition-shadow duration-300"}],defaultVariants:{spread:!1,outline:!1,flat:!1,unelevated:!1,rounded:!1,square:!1,push:!1,glossy:!1,stretch:!1}});O.__docgenInfo={exportName:"buttonGroupVariants",displayName:"buttonGroupVariants",type:2,props:[{name:"spread",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"flat",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"unelevated",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"push",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"glossy",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"stretch",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/buttonGroup/index.ts"};const Y={title:"UI/ButtonGroup",component:a,tags:["autodocs"]},s={render:e=>({components:{Button:n,ButtonGroup:a},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args">${e.default}</ButtonGroup>
    `}),args:{class:"",default:`
      <Button>Standard</Button>
      <Button>Standard</Button>
      <Button>Standard</Button>
    `}},o={render:e=>({components:{Button:n,ButtonGroup:a},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args">${e.default}</ButtonGroup>
    `}),args:{class:"",push:!0,default:`
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
    `}},r={render:e=>({components:{Button:n,ButtonGroup:a,Icon:U},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args">${e.default}</ButtonGroup>
    `}),args:{class:"",glossy:!0,default:`
      <Button glossy class="bg-yellow-600 text-white"><Icon name="timeline" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="visibility" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="update" size="sm"/>Glossy</Button>
    `}},l={render:e=>({components:{Button:n,ButtonGroup:a},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args">${e.default}</ButtonGroup>
    `}),args:{class:"text-lime-600",outline:!0,default:`
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
    `}},u={render:e=>({components:{Button:n,ButtonGroup:a},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args">${e.default}</ButtonGroup>
    `}),args:{class:"",rounded:!0,default:`
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
    `}},d={render:e=>({components:{Button:n,ButtonGroup:a},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args">${e.default}</ButtonGroup>
    `}),args:{class:"",flat:!0,default:`
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
    `}},i={render:e=>({components:{Button:n,ButtonGroup:a},setup(){return{args:e}},template:`
      <ButtonGroup v-bind="args">${e.default}</ButtonGroup>
    `}),args:{class:"w-full",spread:!0,default:`
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
    `}};var m,f,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    default: \`
      <Button>Standard</Button>
      <Button>Standard</Button>
      <Button>Standard</Button>
    \`
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,y,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    push: true,
    default: \`
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
    \`
  }
}`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var b,G,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    glossy: true,
    default: \`
      <Button glossy class="bg-yellow-600 text-white"><Icon name="timeline" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="visibility" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="update" size="sm"/>Glossy</Button>
    \`
  }
}`,...(w=(G=r.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var k,v,x;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: 'text-lime-600',
    outline: true,
    default: \`
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
    \`
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var q,C,S;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    rounded: true,
    default: \`
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
    \`
  }
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var P,$,R;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    flat: true,
    default: \`
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
    \`
  }
}`,...(R=($=d.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var I,_,V;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: 'w-full',
    spread: true,
    default: \`
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
    \`
  }
}`,...(V=(_=i.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const Z=["Standard","Push","Glossy","Outline","Rounded","Flat","Spread"];export{d as Flat,r as Glossy,l as Outline,o as Push,u as Rounded,i as Spread,s as Standard,Z as __namedExportsOrder,Y as default};
