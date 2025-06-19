import{a as S,b as h,_ as k}from"./index-Bm5AluIL.js";import{_ as s}from"./Button-m5-p7b8M.js";import{I as l}from"./Icon-B0fxx1uN.js";import{a as t,_ as u,b as c}from"./index-D4qXfOHL.js";import"./utils-Dl4VZL6K.js";import"./iframe-Qclsnmki.js";import"./Primitive-C6XvU_OZ.js";import"./ripple-CsoxYJ_M.js";const W={title:"UI/Toolbar",component:t,tags:["autodocs"]},a={render:n=>({components:{Toolbar:t,ToolbarTitle:c,Button:s,Icon:l,Space:u},setup(){return{args:n}},template:`<Toolbar v-bind="args">${n.default}</Toolbar>`}),args:{class:"bg-primary text-primary-foreground",default:`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Toolbar Title</ToolbarTitle>
      <Space />
      <Button flat round dense>
        <Icon name="more_vert" size="sm"/>
      </Button>`}},e={render:n=>({components:{Toolbar:t,ToolbarTitle:c,Avatar:k,AvatarFallback:h,AvatarImage:S,Button:s,Icon:l,Space:u},setup(){return{args:n}},template:`<Toolbar v-bind="args">${n.default}</Toolbar>`}),args:{class:"bg-primary text-primary-foreground",default:`
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
      </Button>`}},o={render:n=>({components:{Toolbar:t,ToolbarTitle:c,Button:s,Icon:l,Space:u},setup(){return{args:n}},template:`<Toolbar v-bind="args">${n.default}</Toolbar>`}),args:{class:"bg-blue-500 text-white",default:`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Link</ToolbarTitle>
      <Space />
      <Button flat stretch>Link</Button>
      <Button flat stretch>Link</Button>
      `}},r={render:n=>({components:{Toolbar:t,ToolbarTitle:c,Button:s,Icon:l,Space:u},setup(){return{args:n}},template:`<Toolbar v-bind="args">${n.default}</Toolbar>`}),args:{class:"bg-yellow-500 text-white",default:`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
      <ToolbarTitle>Inset</ToolbarTitle>
      <Space />
      <Button flat stretch>Link</Button>
      <Button flat stretch>Link</Button>
      `,inset:!0}};var i,m,T;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(T=(m=a.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var d,b,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(b=e.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var f,B,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    class: 'bg-blue-500 text-white',
    default: \`
      <Button flat round dense>
        <Icon name="menu" size="sm"/>
      </Button>
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
}`,...(_=(I=r.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const q=["Basic","WithAvatar","WithLink","Inset"];export{a as Basic,r as Inset,e as WithAvatar,o as WithLink,q as __namedExportsOrder,W as default};
