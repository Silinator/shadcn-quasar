import{_ as s}from"./Button-D0cLHiqF.js";import{I as m}from"./Icon-DM8DZhqr.js";import{_ as r}from"./index-BJdyMuQ_.js";import{a as c}from"./index-Coc0m0UC.js";import"./iframe-C1nf-jxf.js";import"./ripple-CsoxYJ_M.js";import"./utils-DheDpAxB.js";import"./index-CTWEWApt.js";import"./Primitive-lODkUz4w.js";const b={title:"UI/Space",component:r,tags:["autodocs"]},n={render:o=>({components:{Toolbar:c,Button:s,Icon:m,Space:r},setup(){return{args:o}},template:`<Toolbar class="bg-primary text-primary-foreground">
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
}`,...(a=(e=n.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const I=["Basic"];export{n as Basic,I as __namedExportsOrder,b as default};
