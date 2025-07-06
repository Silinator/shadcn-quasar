import{_ as s}from"./Button-CQ3TqhJa.js";import{I as m}from"./Icon-C2XpxsoJ.js";import{_ as r}from"./index-DMca8uMf.js";import{_ as c}from"./index-TTQPfDGi.js";import"./iframe-B7U9K8Xl.js";import"./ripple-CsoxYJ_M.js";import"./utils-Dl4VZL6K.js";import"./Primitive-DBp9tUYP.js";const g={title:"UI/Space",component:r,tags:["autodocs"]},n={render:o=>({components:{Toolbar:c,Button:s,Icon:m,Space:r},setup(){return{args:o}},template:`<Toolbar class="bg-primary text-primary-foreground">
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <Space v-bind="args">${o.default}</Space>
      <Button flat round dense class="mr-2">
        <Icon name="apps" size="sm"/>
      </Button>
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>
    </Toolbar>`}),args:{class:"",default:""}};var t,e,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(e=n.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const b=["Basic"];export{n as Basic,b as __namedExportsOrder,g as default};
