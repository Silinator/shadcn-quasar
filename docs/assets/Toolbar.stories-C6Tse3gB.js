import{a as S,b as h,_ as k}from"./index-BS4f7F1Z.js";import{_ as s}from"./Button-BnuKEOe1.js";import{I as l}from"./Icon-BT603QtT.js";import{_ as A}from"./index-CuYx0uXt.js";import{a as n,_ as u,b as c}from"./index-Dbl8Y42a.js";import"./utils-Dl4VZL6K.js";import"./iframe-D2uxEP-b.js";import"./Primitive-D02sgVIr.js";import"./ripple-CsoxYJ_M.js";const J={title:"UI/Toolbar",component:n,tags:["autodocs"]},a={render:t=>({components:{Toolbar:n,ToolbarTitle:c,Button:s,Icon:l,Space:u},setup(){return{args:t}},template:`<Toolbar v-bind="args">${t.default}</Toolbar>`}),args:{class:"bg-primary text-primary-foreground",default:`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Toolbar Title</ToolbarTitle>
      <Space />
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>`}},e={render:t=>({components:{Toolbar:n,ToolbarTitle:c,Avatar:k,AvatarFallback:h,AvatarImage:S,Button:s,Icon:l,Space:u},setup(){return{args:t}},template:`<Toolbar v-bind="args">${t.default}</Toolbar>`}),args:{class:"bg-primary text-primary-foreground",default:`
      <Button flat round dense class="mr-2">
        <Icon name="menu" size="sm"/>
      </Button>
      <Avatar>
        <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
        <AvatarFallback>J</AvatarFallback>
      </Avatar>
      <ToolbarTitle>Toolbar Title</ToolbarTitle>
      <Space />
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>`}},o={render:t=>({components:{Toolbar:n,ToolbarTitle:c,Button:s,Icon:l,Space:u,Separator:A},setup(){return{args:t}},template:`<Toolbar v-bind="args">${t.default}</Toolbar>`}),args:{class:"bg-blue-500 text-white",default:`
      <Button flat round dense class="mr-2">
        <Icon name="menu" size="sm"/>
      </Button>
      <Separator vertical inset />
      <ToolbarTitle>Link</ToolbarTitle>
      <Space />
      <Button flat stretch>Link</Button>
      <Button flat stretch>Link</Button>
      `}},r={render:t=>({components:{Toolbar:n,ToolbarTitle:c,Button:s,Icon:l,Space:u},setup(){return{args:t}},template:`<Toolbar v-bind="args">${t.default}</Toolbar>`}),args:{class:"bg-yellow-500 text-white",default:`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Inset</ToolbarTitle>
      <Space />
      <Button flat stretch>Link</Button>
      <Button flat stretch>Link</Button>
      `,inset:!0}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Toolbar,
      ToolbarTitle,
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
      <ToolbarTitle>Toolbar Title</ToolbarTitle>
      <Space />
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>\`
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var T,d,b;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Toolbar,
      ToolbarTitle,
      Avatar,
      AvatarFallback,
      AvatarImage,
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
      <Button flat round dense class="mr-2">
        <Icon name="menu" size="sm"/>
      </Button>
      <Avatar>
        <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
        <AvatarFallback>J</AvatarFallback>
      </Avatar>
      <ToolbarTitle>Toolbar Title</ToolbarTitle>
      <Space />
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>\`
  }
}`,...(b=(d=e.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var f,B,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Toolbar,
      ToolbarTitle,
      Button,
      Icon,
      Space,
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Toolbar v-bind="args">\${args.default}</Toolbar>\`
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: \`
      <Button flat round dense class="mr-2">
        <Icon name="menu" size="sm"/>
      </Button>
      <Separator vertical inset />
      <ToolbarTitle>Link</ToolbarTitle>
      <Space />
      <Button flat stretch>Link</Button>
      <Button flat stretch>Link</Button>
      \`
  }
}`,...(g=(B=o.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var v,I,_;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Toolbar,
      ToolbarTitle,
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
    class: 'bg-yellow-500 text-white',
    default: \`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Inset</ToolbarTitle>
      <Space />
      <Button flat stretch>Link</Button>
      <Button flat stretch>Link</Button>
      \`,
    inset: true
  }
}`,...(_=(I=r.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const E=["Basic","WithAvatar","WithLink","Inset"];export{a as Basic,r as Inset,e as WithAvatar,o as WithLink,E as __namedExportsOrder,J as default};
