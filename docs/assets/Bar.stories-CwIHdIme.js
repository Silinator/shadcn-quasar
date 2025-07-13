import{c as h}from"./index-nE_6pgoo.js";import{d as b,c as v,w as B,n as _,u as r,o as x,r as C}from"./iframe-CWoZYpkL.js";import{c as I}from"./utils-SOMcHunM.js";import{P as w}from"./Primitive-Bo5iDq2y.js";import{_ as u}from"./Button-RXv4QnSX.js";import{I as f}from"./Icon-BmG5xBFm.js";import{_ as y}from"./index-9WaomkVB.js";import"./ripple-CsoxYJ_M.js";const s=b({__name:"Bar",props:{dense:{type:Boolean,default:!1},class:{},asChild:{type:Boolean,default:!1},as:{default:"div"}},setup(e){const t=e;return(o,k)=>(x(),v(r(w),{as:t.as,asChild:t.asChild,class:_(r(I)(r(g)({dense:o.dense}),t.class))},{default:B(()=>[C(o.$slots,"default")]),_:3},8,["as","asChild","class"]))}});s.__docgenInfo={exportName:"default",displayName:"Bar",type:1,props:[{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"string",declarations:[],schema:"string",default:'"div"'},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"as",type:"string",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dense",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/bar/Bar.vue"};const g=h("relative flex flex-nowrap items-center bg-inherit text-inherit [&>button]:text-[11px] [&>button:not(:first-child)]:ml-0.5 [&>div:not(:first-child)]:ml-2 [&>i:not(:first-child)]:ml-2",{variants:{dense:{true:"h-6 px-2 py-0 text-sm",false:"h-8 px-3 py-0 text-lg"}},defaultVariants:{dense:!1}});g.__docgenInfo={exportName:"barVariants",displayName:"barVariants",type:2,props:[{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/bar/index.ts"};const R={title:"UI/Bar",component:s,tags:["autodocs"]},a={render:e=>({components:{Bar:s,Button:u,Icon:f,Space:y},setup(){return{args:e}},template:`<Bar v-bind="args">${e.default}</Bar>`}),args:{class:"bg-primary text-primary-foreground",default:`
      <Button flat dense>
        <Icon name="nutrition" filled size="xs"/>
      </Button>
      <div class="font-bold">App</div>
      <div class="cursor-pointer">File</div>
      <div class="cursor-pointer">Edit</div>
      <div class="cursor-pointer">View</div>
      <div class="cursor-pointer">Window</div>
      <div class="cursor-pointer">Help</div>
      <Space />
      <Button dense flat>
        <Icon name="airplay" size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="battery_charging_full" filled size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="wifi" size="xs"/>
      </Button>
      <div>9:41</div>
      <Button dense flat>
        <Icon name="search" size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="list" size="xs"/>
      </Button>`}},n={render:e=>({components:{Bar:s,Button:u,Icon:f,Space:y},setup(){return{args:e}},template:`<Bar v-bind="args">${e.default}</Bar>`}),args:{dense:!0,class:"bg-teal-500 text-white",default:`
      <Icon name="signal_cellular_4_bar" sharp/>
      <div>mobi-net</div>
      <div>4G</div>
      <Icon name="wifi" sharp />
      <Space />
      <Icon name="near_me" filled />
      <div>100%</div>
      <Icon name="battery_android_full"/>
      `}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Bar,
      Button,
      Icon,
      Space
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Bar v-bind="args">\${args.default}</Bar>\`
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    default: \`
      <Button flat dense>
        <Icon name="nutrition" filled size="xs"/>
      </Button>
      <div class="font-bold">App</div>
      <div class="cursor-pointer">File</div>
      <div class="cursor-pointer">Edit</div>
      <div class="cursor-pointer">View</div>
      <div class="cursor-pointer">Window</div>
      <div class="cursor-pointer">Help</div>
      <Space />
      <Button dense flat>
        <Icon name="airplay" size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="battery_charging_full" filled size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="wifi" size="xs"/>
      </Button>
      <div>9:41</div>
      <Button dense flat>
        <Icon name="search" size="xs"/>
      </Button>
      <Button dense flat>
        <Icon name="list" size="xs"/>
      </Button>\`
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Bar,
      Button,
      Icon,
      Space
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Bar v-bind="args">\${args.default}</Bar>\`
  }),
  args: {
    dense: true,
    class: 'bg-teal-500 text-white',
    default: \`
      <Icon name="signal_cellular_4_bar" sharp/>
      <div>mobi-net</div>
      <div>4G</div>
      <Icon name="wifi" sharp />
      <Space />
      <Icon name="near_me" filled />
      <div>100%</div>
      <Icon name="battery_android_full"/>
      \`
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const A=["Basic","Dense"];export{a as Basic,n as Dense,A as __namedExportsOrder,R as default};
