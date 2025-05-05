import{d as R,b as j,e as D,f as W,n as E,u as m,o as O}from"./vue.esm-bundler-D4xhGFi4.js";import{c as F,a as K,I as c}from"./Icon-0jcEpUU6.js";const N=F("bg-primary text-primary-foreground inline-flex items-center justify-center [&>img]:h-[inherit] [&>img]:w-[inherit] [&>img]:rounded-[inherit]",{variants:{variant:{circle:"rounded-full",square:"rounded-none",rounded:"rounded-sm"},size:{xs:"h-4 w-4 text-[8px]",sm:"h-6 w-6 text-xs",md:"h-8 w-8 text-base",lg:"h-10 w-10 text-xl",xl:"h-12 w-12 text-2xl"}},defaultVariants:{variant:"circle",size:"md"}});N.__docgenInfo={exportName:"avatarVariants",displayName:"avatarVariants",type:2,props:[{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"square" | "rounded" | "circle"',declarations:[],schema:{kind:"enum",type:'"square" | "rounded" | "circle"',schema:['"square"','"rounded"','"circle"']}},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/index.ts"};const a=R({__name:"Avatar",props:{square:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},size:{default:"md"},class:{}},setup(e){const i=e,P=j(()=>i.square?"square":i.rounded?"rounded":"circle");return(u,U)=>(O(),D("div",{class:E(m(K)(m(N)({variant:P.value,size:u.size}),i.class))},[W(u.$slots,"default")],2))}});a.__docgenInfo={exportName:"default",displayName:"Avatar",type:1,props:[{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']},default:'"md"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"md" | "xs" | "sm" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/avatar/Avatar.vue"};const L={title:"UI/Avatar",component:a,tags:["autodocs"]},r={render:e=>({components:{Avatar:a},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{default:"J"}},s={render:e=>({components:{Avatar:a},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{class:"bg-blue-500 text-white",default:"J"}},n={render:e=>({components:{Avatar:a},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{rounded:!0,default:"J"}},t={render:e=>({components:{Avatar:a},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{square:!0,default:"J"}},o={render:e=>({components:{Avatar:a,Icon:c},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:'<Icon name="directions" filled size="md" class="text-primary-foreground" />'}},l={render:e=>({components:{Avatar:a,Icon:c},setup:()=>({args:e}),template:`
      <Avatar v-bind="args">
        ${e.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:'<img src="https://cdn.quasar.dev/img/avatar.png" />'}},d={render:e=>({components:{Avatar:a,Icon:c},setup(){return{args:e}},template:`<Avatar v-bind="args">${e.default}</Avatar>`}),args:{class:"h-24 w-24 text-6xl",default:'<Icon name="directions" filled size="xl" class="text-primary-foreground" />'}};var p,g,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,x,A;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var q,k,z;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(k=t.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var C,I,$;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...($=(I=o.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var S,w,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    default: \`<img src="https://cdn.quasar.dev/img/avatar.png" />\`
  }
}`,...(_=(w=l.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var V,B,J;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(B=d.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};const M=["Basic","BasisCustomColors","Rounded","Square","WithIcon","WithImg","CustomSize"];export{r as Basic,s as BasisCustomColors,d as CustomSize,n as Rounded,t as Square,o as WithIcon,l as WithImg,M as __namedExportsOrder,L as default};
