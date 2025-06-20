import{_ as s}from"./Button-BnuKEOe1.js";import{I as m}from"./Icon-BT603QtT.js";import{_ as r,a as c}from"./index-Dbl8Y42a.js";import"./iframe-D2uxEP-b.js";import"./ripple-CsoxYJ_M.js";import"./utils-Dl4VZL6K.js";import"./Primitive-D02sgVIr.js";const g={title:"UI/Space",component:r,tags:["autodocs"]},n={render:e=>({components:{Toolbar:c,Button:s,Icon:m,Space:r},setup(){return{args:e}},template:`<Toolbar class="bg-primary text-primary-foreground">
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <Space v-bind="args">${e.default}</Space>
      <Button flat round dense class="mr-2">
        <Icon name="apps" size="sm"/>
      </Button>
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>
    </Toolbar>`}),args:{class:"",default:""}};var t,o,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Toolbar,
      Button,
      Icon,
      Space
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Toolbar class="bg-primary text-primary-foreground">
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <Space v-bind="args">\${args.default}</Space>
      <Button flat round dense class="mr-2">
        <Icon name="apps" size="sm"/>
      </Button>
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>
    </Toolbar>\`
  }),
  args: {
    class: '',
    default: \`\`
  }
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const _=["Basic"];export{n as Basic,_ as __namedExportsOrder,g as default};
