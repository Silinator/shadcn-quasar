import{_ as s}from"./Button-m5-p7b8M.js";import{I as m}from"./Icon-B0fxx1uN.js";import{_ as r,a as u}from"./index-D4qXfOHL.js";import"./iframe-Qclsnmki.js";import"./ripple-CsoxYJ_M.js";import"./utils-Dl4VZL6K.js";import"./Primitive-C6XvU_OZ.js";const g={title:"UI/Space",component:r,tags:["autodocs"]},n={render:t=>({components:{Toolbar:u,Button:s,Icon:m,Space:r},setup(){return{args:t}},template:`<Toolbar v-bind="args">${t.default}</Toolbar>`}),args:{class:"bg-primary text-primary-foreground",default:`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <Space />
      <Button flat round dense class="mr-2">
        <Icon name="apps" size="sm"/>
      </Button>
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>`}};var o,e,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    template: \`<Toolbar v-bind="args">\${args.default}</Toolbar>\`
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    default: \`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <Space />
      <Button flat round dense class="mr-2">
        <Icon name="apps" size="sm"/>
      </Button>
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>\`
  }
}`,...(a=(e=n.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const _=["Basic"];export{n as Basic,_ as __namedExportsOrder,g as default};
