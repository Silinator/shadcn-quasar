import{d as T,e as F,f as j,n as E,u as p,o as K}from"./vue.esm-bundler-D4xhGFi4.js";import{c as W,a as z,I as U}from"./Icon-D_1PVx9a.js";const D=W("flex-inline bg-primary text-primary-foreground inline-flex min-h-3 items-center px-1.5 py-0.5 text-xs",{variants:{outline:{true:"bg-transparant text-primary border border-current",false:""},rounded:{true:"rounded-full",false:"rounded-md"},transparent:{true:"opacity-80",false:""},floating:{true:"cursor-inherit absolute -top-1 right-[-3px]",false:""},multiLine:{true:"wrap-break-word break-all",false:"whitespace-nowrap"},align:{top:"align-top",middle:"align-middle",bottom:"align-bottom"}},defaultVariants:{outline:!1,rounded:!1,transparent:!1,floating:!1,multiLine:!1,align:"middle"}});D.__docgenInfo={exportName:"badgeVariants",displayName:"badgeVariants",type:2,props:[{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"transparent",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"floating",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"multiLine",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"align",global:!1,description:"",tags:[],required:!1,type:'"middle" | "top" | "bottom"',declarations:[],schema:{kind:"enum",type:'"middle" | "top" | "bottom"',schema:['"middle"','"top"','"bottom"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/badge/index.ts"};const a=T({__name:"Badge",props:{outline:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},floating:{type:Boolean,default:!1},multiLine:{type:Boolean,default:!1},align:{default:"middle"},class:{}},setup(e){const P=e;return(n,G)=>(K(),F("div",{class:E(p(z)(p(D)({outline:n.outline,rounded:n.rounded,transparent:n.transparent,floating:n.floating,multiLine:n.multiLine,align:n.align}),P.class))},[j(n.$slots,"default")],2))}});a.__docgenInfo={exportName:"default",displayName:"Badge",type:1,props:[{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"transparent",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"floating",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"multiLine",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"align",global:!1,description:"",tags:[],required:!1,type:'"middle" | "top" | "bottom"',declarations:[],schema:{kind:"enum",type:'"middle" | "top" | "bottom"',schema:['"middle"','"top"','"bottom"']},default:'"middle"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"transparent",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"floating",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"multiLine",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"align",type:'"middle" | "top" | "bottom"',description:"",declarations:[],schema:{kind:"enum",type:'"middle" | "top" | "bottom"',schema:['"middle"','"top"','"bottom"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/badge/Badge.vue"};const M={title:"UI/Badge",component:a,tags:["autodocs"]},s={render:e=>({components:{Badge:a},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{default:"#007ABF"}},t={render:e=>({components:{Badge:a},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-orange-400 text-red-800",default:"7"}},r={render:e=>({components:{Badge:a,Icon:U},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-purple-400",default:'<Icon name="bluetooth" class="text-primary-foreground" />'}},o={render:e=>({components:{Badge:a},setup(){return{args:e}},template:`
      <div class="text-3xl">
        Text
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-blue-600",align:"top",default:"app v1.8.7"}},l={render:e=>({components:{Badge:a},setup(){return{args:e}},template:`
      <div class="text-3xl">
        Text
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-orange-600",transparent:!0,default:"app v1.8.7"}},d={render:e=>({components:{Badge:a},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"text-blue-600",outline:!0,default:"Outline"}},i={render:e=>({components:{Badge:a},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-red-600",rounded:!0,default:"Round"}},u={render:e=>({components:{Badge:a},setup(){return{args:e}},template:`
      <div class="flex items-center gap-2">
        Status
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-green-400",default:"app"}};var c,m,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Badge v-bind="args">\${args.default}</Badge>
    \`
  }),
  args: {
    default: \`#007ABF\`
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Badge v-bind="args">\${args.default}</Badge>
    \`
  }),
  args: {
    class: 'bg-orange-400 text-red-800',
    default: \`7\`
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,h,v;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Badge v-bind="args">\${args.default}</Badge>
    \`
  }),
  args: {
    class: 'bg-purple-400',
    default: \`<Icon name="bluetooth" class="text-primary-foreground" />\`
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var k,x,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="text-3xl">
        Text
        <Badge v-bind="args">\${args.default}</Badge>
      </div>
    \`
  }),
  args: {
    class: 'bg-blue-600',
    align: 'top',
    default: \`app v1.8.7\`
  }
}`,...(q=(x=o.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var C,$,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="text-3xl">
        Text
        <Badge v-bind="args">\${args.default}</Badge>
      </div>
    \`
  }),
  args: {
    class: 'bg-orange-600',
    transparent: true,
    default: \`app v1.8.7\`
  }
}`,...(I=($=l.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var S,V,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Badge v-bind="args">\${args.default}</Badge>
    \`
  }),
  args: {
    class: 'text-blue-600',
    outline: true,
    default: \`Outline\`
  }
}`,...(L=(V=d.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var R,N,O;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Badge v-bind="args">\${args.default}</Badge>
    \`
  }),
  args: {
    class: 'bg-red-600',
    rounded: true,
    default: \`Round\`
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,w,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex items-center gap-2">
        Status
        <Badge v-bind="args">\${args.default}</Badge>
      </div>
    \`
  }),
  args: {
    class: 'bg-green-400',
    default: \`app\`
  }
}`,...(A=(w=u.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const Q=["Basic","BasisCustomColors","BasisWithIcon","Aligned","Transparant","OutlineDesign","Rounded","Indicators"];export{o as Aligned,s as Basic,t as BasisCustomColors,r as BasisWithIcon,u as Indicators,d as OutlineDesign,i as Rounded,l as Transparant,Q as __namedExportsOrder,M as default};
