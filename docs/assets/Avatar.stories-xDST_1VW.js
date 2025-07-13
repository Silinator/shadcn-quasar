import{_ as e,a as Q,b as T}from"./index-C9cssubz.js";import{_ as u}from"./Badge-BWKdKse3.js";import{I as p}from"./Icon-BX1Hjp6F.js";import"./utils-CiSxPhq7.js";import"./iframe-C7kf2e6L.js";import"./Primitive-eIKpGF7z.js";const ra={title:"UI/Avatar",component:e,tags:["autodocs"]},r={render:a=>({components:{Avatar:e},setup(){return{args:a}},template:`<Avatar v-bind="args">${a.default}</Avatar>`}),args:{class:"bg-primary text-primary-foreground",default:"J"}},n={render:a=>({components:{Avatar:e},setup(){return{args:a}},template:`<Avatar v-bind="args">${a.default}</Avatar>`}),args:{class:"bg-blue-500 text-white",default:"J"}},t={render:a=>({components:{Avatar:e},setup(){return{args:a}},template:`<Avatar v-bind="args">${a.default}</Avatar>`}),args:{class:"bg-primary text-primary-foreground",rounded:!0,default:"J"}},s={render:a=>({components:{Avatar:e},setup(){return{args:a}},template:`<Avatar v-bind="args">${a.default}</Avatar>`}),args:{class:"bg-primary text-primary-foreground",square:!0,default:"J"}},o={render:a=>({components:{Avatar:e,Icon:p},setup:()=>({args:a}),template:`
      <Avatar v-bind="args">
        ${a.default}
      </Avatar>
    `}),args:{class:"bg-green-500 text-white",size:"xl",default:'<Icon name="directions" filled size="md" class="text-primary-foreground" />'}},d={render:a=>({components:{Avatar:e,Badge:u},setup:()=>({args:a}),template:`
      <Avatar v-bind="args">
        ${a.default}
      </Avatar>
    `}),args:{class:"bg-green-500 text-white",size:"xl",default:`
      J
      <Badge floating rounded class="bg-blue-600 text-white">2</Badge>
    `}},c={render:a=>({components:{Avatar:e,Icon:p,Badge:u},setup:()=>({args:a}),template:`
      <Avatar v-bind="args">
        ${a.default}
      </Avatar>
    `}),args:{class:"bg-orange-500 text-white",size:"xl",square:!0,default:`
      <Icon name="directions" filled size="md" class="text-primary-foreground" />
      <Badge floating rounded class="bg-green-500"></Badge>
    `}},l={render:a=>({components:{Avatar:e},setup:()=>({args:a}),template:`
      <Avatar v-bind="args">
        ${a.default}
      </Avatar>
    `}),args:{class:"bg-green-500",size:"xl",default:'<img src="https://cdn.quasar.dev/img/avatar.png" />'}},g={render:a=>({components:{Avatar:e,AvatarFallback:T,AvatarImage:Q},setup:()=>({args:a}),template:`
      <Avatar v-bind="args">
        ${a.default}
      </Avatar>
    `}),args:{class:"bg-cyan-500 text-white",size:"xl",default:`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar-fail.png" />
      <AvatarFallback>J</AvatarFallback>
    `}},i={render:a=>({components:{Avatar:e,AvatarFallback:T,AvatarImage:Q,Badge:u},setup:()=>({args:a}),template:`
      <Avatar v-bind="args">
        ${a.default}
      </Avatar>
    `}),args:{class:"bg-cyan-500 text-white",size:"xl",default:`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
      <AvatarFallback>J</AvatarFallback>
      <Badge floating class="bg-red-600 text-white">99+</Badge>
    `}},m={render:a=>({components:{Avatar:e,Icon:p},setup(){return{args:a}},template:`<Avatar v-bind="args">${a.default}</Avatar>`}),args:{class:"h-24 w-24 text-6xl bg-primary text-primary-foreground",default:'<Icon name="directions" filled size="xl" class="text-primary-foreground" />'}};var v,A,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    class: 'bg-primary text-primary-foreground',
    default: \`J\`
  }
}`,...(f=(A=r.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var b,x,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var I,B,y;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    class: 'bg-primary text-primary-foreground',
    rounded: true,
    default: \`J\`
  }
}`,...(y=(B=t.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var $,z,w;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    class: 'bg-primary text-primary-foreground',
    square: true,
    default: \`J\`
  }
}`,...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var S,k,F;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    class: 'bg-green-500 text-white',
    size: 'xl',
    default: \`<Icon name="directions" filled size="md" class="text-primary-foreground" />\`
  }
}`,...(F=(k=o.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var J,q,W;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      Badge
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
    class: 'bg-green-500 text-white',
    size: 'xl',
    default: \`
      J
      <Badge floating rounded class="bg-blue-600 text-white">2</Badge>
    \`
  }
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var _,C,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      Icon,
      Badge
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
    class: 'bg-orange-500 text-white',
    size: 'xl',
    square: true,
    default: \`
      <Icon name="directions" filled size="md" class="text-primary-foreground" />
      <Badge floating rounded class="bg-green-500"></Badge>
    \`
  }
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var E,O,U;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar
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
}`,...(U=(O=l.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var j,D,G;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage
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
    class: 'bg-cyan-500 text-white',
    size: 'xl',
    default: \`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar-fail.png" />
      <AvatarFallback>J</AvatarFallback>
    \`
  }
}`,...(G=(D=g.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var H,K,L;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Avatar,
      AvatarFallback,
      AvatarImage,
      Badge
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
    class: 'bg-cyan-500 text-white',
    size: 'xl',
    default: \`
      <AvatarImage src="https://cdn.quasar.dev/img/avatar.png" />
      <AvatarFallback>J</AvatarFallback>
      <Badge floating class="bg-red-600 text-white">99+</Badge>
    \`
  }
}`,...(L=(K=i.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var M,N,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    class: 'h-24 w-24 text-6xl bg-primary text-primary-foreground',
    default: \`<Icon name="directions" filled size="xl" class="text-primary-foreground" />\`
  }
}`,...(P=(N=m.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const na=["Basic","BasisCustomColors","Rounded","Square","WithIcon","WithBadge","WithIconAndBadge","WithSimpleImg","WithImgFallback","WithImgFallbackAndBadge","CustomSize"];export{r as Basic,n as BasisCustomColors,m as CustomSize,t as Rounded,s as Square,d as WithBadge,o as WithIcon,c as WithIconAndBadge,g as WithImgFallback,i as WithImgFallbackAndBadge,l as WithSimpleImg,na as __namedExportsOrder,ra as default};
