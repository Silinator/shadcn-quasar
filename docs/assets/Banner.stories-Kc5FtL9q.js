import{c as y}from"./index-CTWEWApt.js";import{d as E,c as O,w as K,n as o,u as n,o as f,a as b,b as v,e as B,r as g}from"./iframe-WuD68RKc.js";import{c as i}from"./utils-DheDpAxB.js";import{P as z}from"./Primitive-DydEiwUC.js";import{_ as r}from"./Button-BGa9Yx94.js";import{I as h}from"./Icon-CJ4lLQC7.js";import"./ripple-CsoxYJ_M.js";const G={class:"text-sm"},t=E({__name:"Banner",props:{inlineActions:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},class:{},avatarClass:{},actionsClass:{},asChild:{type:Boolean,default:!1},as:{default:"div"}},setup(e){const s=e;return(a,H)=>(f(),O(n(z),{as:s.as,asChild:s.asChild,class:o(n(i)(n(U)({inlineActions:a.inlineActions,dense:a.dense,rounded:a.rounded}),s.class))},{default:K(()=>[b("div",{class:o(n(i)("flex items-center gap-4",s.inlineActions?"flex-[10000_1_0%]":"self-start"))},[a.$slots.avatar?(f(),v("div",{key:0,class:o(n(i)(n(Y)({dense:a.dense}),s.avatarClass))},[g(a.$slots,"avatar")],2)):B("",!0),b("div",G,[g(a.$slots,"default")])],2),a.$slots.actions?(f(),v("div",{key:0,class:o(n(i)(n(F)({inlineActions:a.inlineActions}),s.actionsClass))},[g(a.$slots,"actions")],2)):B("",!0)]),_:3},8,["as","asChild","class"]))}});t.__docgenInfo={exportName:"default",displayName:"Banner",type:1,props:[{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"string",declarations:[],schema:"string",default:'"div"'},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"inlineActions",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"avatarClass",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"actionsClass",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"}],events:[],slots:[{name:"avatar",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"actions",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"as",type:"string",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dense",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"inlineActions",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"},{name:"avatarClass",type:"any",description:"",declarations:[],schema:"any"},{name:"actionsClass",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/banner/Banner.vue"};const U=y("relative flex items-center",{variants:{inlineActions:{true:"w-full flex-row flex-wrap",false:"flex-col"},dense:{true:"min-h-8 p-2 [&_i]:text-[28px]",false:"min-h-13.5 px-4 py-2 [&_i]:text-[40px]"},rounded:{true:"rounded-sm",false:""}},compoundVariants:[{inlineActions:!1,dense:!0,class:"pt-3"},{inlineActions:!1,dense:!1,class:"pt-3.5"}],defaultVariants:{inlineActions:!1,dense:!1,rounded:!1}}),Y=y("relative flex min-w-0.5 items-center self-start",{variants:{dense:{true:"[&>i]:text-[28px]",false:"[&>i]:text-[40px]"}},defaultVariants:{dense:!1}}),F=y("relative ml-1 flex items-center gap-1 self-end",{variants:{inlineActions:{true:"mt-1",false:""}},defaultVariants:{inlineActions:!1}});U.__docgenInfo={exportName:"bannerVariants",displayName:"bannerVariants",type:2,props:[{name:"inlineActions",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rounded",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/banner/index.ts"};Y.__docgenInfo={exportName:"bannerAvatarVariants",displayName:"bannerAvatarVariants",type:2,props:[{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/banner/index.ts"};F.__docgenInfo={exportName:"bannerActionsVariants",displayName:"bannerActionsVariants",type:2,props:[{name:"inlineActions",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/banner/index.ts"};const ae={title:"UI/Banner",component:t,tags:["autodocs"]},l={render:e=>({components:{Banner:t,Button:r},setup(){return{args:e}},template:`
    <Banner v-bind="args">
      ${e.default}
      <template v-slot:actions>
        ${e.actions}
      </template>
    </Banner>`}),args:{class:"bg-primary text-primary-foreground",default:"Unfortunately, the credit card did not go through, please try again.",actions:`
      <Button flat>Dismiss</Button>
      <Button flat>Update Credit Card</Button>
    `}},c={render:e=>({components:{Banner:t,Button:r,Icon:h},setup(){return{args:e}},template:`
    <Banner v-bind="args">
      <template v-slot:avatar>
        ${e.avatar}
      </template>

      ${e.default}

      <template v-slot:actions>
        ${e.actions}
      </template>
    </Banner>`}),args:{class:"bg-gray-200 text-black",avatar:'<Icon name="signal_wifi_off" filled class="text-blue-500" />',default:"You have lost connection to the internet. This app is offline.",actions:`
      <Button flat>Turn on Wifi</Button>
    `}},d={render:e=>({components:{Banner:t,Button:r},setup(){return{args:e}},template:`
    <Banner v-bind="args">
      <template v-slot:avatar>
        ${e.avatar}
      </template>

      ${e.default}
      <template v-slot:actions>
        ${e.actions}
      </template>
    </Banner>`}),args:{rounded:!0,class:"bg-primary text-primary-foreground",avatar:'<img src="https://cdn.quasar.dev/img/mountains.jpg" style="width: 100px; height: 64px" />',default:"Could not retrieve travel data.",actions:`
      <Button flat>Retry</Button>
    `}},p={render:e=>({components:{Banner:t,Button:r,Icon:h},setup(){return{args:e}},template:`
    <Banner v-bind="args">
      <template v-slot:avatar>
        ${e.avatar}
      </template>

      ${e.default}

      <template v-slot:actions>
        ${e.actions}
      </template>
    </Banner>`}),args:{inlineActions:!0,class:"bg-red-500 text-white",avatar:'<Icon name="signal_wifi_off" filled class="text-white" />',default:"You have lost connection to the internet. This app is offline.",actions:`
      <Button flat>Turn on Wifi</Button>
    `}},u={render:e=>({components:{Banner:t,Button:r,Icon:h},setup(){return{args:e}},template:`
    <Banner v-bind="args">
      <template v-slot:avatar>
        ${e.avatar}
      </template>

      ${e.default}

      <template v-slot:actions>
        ${e.actions}
      </template>
    </Banner>`}),args:{dense:!0,class:"bg-gray-200 text-black",avatar:'<Icon name="signal_wifi_off" filled class="text-blue-500" />',default:"You have lost connection to the internet. This app is offline.",actions:`
      <Button flat>Turn on Wifi</Button>
    `}},m={render:e=>({components:{Banner:t,Button:r},setup(){return{args:e}},template:`
    <Banner v-bind="args">
      ${e.default}
      <template v-slot:actions>
        ${e.actions}
      </template>
    </Banner>`}),args:{rounded:!0,class:"bg-primary text-primary-foreground",default:"Unfortunately, the credit card did not go through, please try again.",actions:`
      <Button flat>Dismiss</Button>
      <Button flat>Update Credit Card</Button>
    `}};var C,k,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Banner,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <Banner v-bind="args">
      \${args.default}
      <template v-slot:actions>
        \${args.actions}
      </template>
    </Banner>\`
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    default: \`Unfortunately, the credit card did not go through, please try again.\`,
    actions: \`
      <Button flat>Dismiss</Button>
      <Button flat>Update Credit Card</Button>
    \`
  }
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var $,A,q;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Banner,
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <Banner v-bind="args">
      <template v-slot:avatar>
        \${args.avatar}
      </template>

      \${args.default}

      <template v-slot:actions>
        \${args.actions}
      </template>
    </Banner>\`
  }),
  args: {
    class: 'bg-gray-200 text-black',
    avatar: \`<Icon name="signal_wifi_off" filled class="text-blue-500" />\`,
    default: \`You have lost connection to the internet. This app is offline.\`,
    actions: \`
      <Button flat>Turn on Wifi</Button>
    \`
  }
}`,...(q=(A=c.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var V,_,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Banner,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <Banner v-bind="args">
      <template v-slot:avatar>
        \${args.avatar}
      </template>

      \${args.default}
      <template v-slot:actions>
        \${args.actions}
      </template>
    </Banner>\`
  }),
  args: {
    rounded: true,
    class: 'bg-primary text-primary-foreground',
    avatar: \`<img src="https://cdn.quasar.dev/img/mountains.jpg" style="width: 100px; height: 64px" />\`,
    default: \`Could not retrieve travel data.\`,
    actions: \`
      <Button flat>Retry</Button>
    \`
  }
}`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var I,D,N;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Banner,
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <Banner v-bind="args">
      <template v-slot:avatar>
        \${args.avatar}
      </template>

      \${args.default}

      <template v-slot:actions>
        \${args.actions}
      </template>
    </Banner>\`
  }),
  args: {
    inlineActions: true,
    class: 'bg-red-500 text-white',
    avatar: \`<Icon name="signal_wifi_off" filled class="text-white" />\`,
    default: \`You have lost connection to the internet. This app is offline.\`,
    actions: \`
      <Button flat>Turn on Wifi</Button>
    \`
  }
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,S,P;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Banner,
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <Banner v-bind="args">
      <template v-slot:avatar>
        \${args.avatar}
      </template>

      \${args.default}

      <template v-slot:actions>
        \${args.actions}
      </template>
    </Banner>\`
  }),
  args: {
    dense: true,
    class: 'bg-gray-200 text-black',
    avatar: \`<Icon name="signal_wifi_off" filled class="text-blue-500" />\`,
    default: \`You have lost connection to the internet. This app is offline.\`,
    actions: \`
      <Button flat>Turn on Wifi</Button>
    \`
  }
}`,...(P=(S=u.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var R,W,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Banner,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <Banner v-bind="args">
      \${args.default}
      <template v-slot:actions>
        \${args.actions}
      </template>
    </Banner>\`
  }),
  args: {
    rounded: true,
    class: 'bg-primary text-primary-foreground',
    default: \`Unfortunately, the credit card did not go through, please try again.\`,
    actions: \`
      <Button flat>Dismiss</Button>
      <Button flat>Update Credit Card</Button>
    \`
  }
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const ne=["Basic","WithAvatar","WithImage","inlineActions","Dense","Rounded"];export{l as Basic,u as Dense,m as Rounded,c as WithAvatar,d as WithImage,ne as __namedExportsOrder,ae as default,p as inlineActions};
