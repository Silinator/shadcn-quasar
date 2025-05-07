import{_ as n}from"./Badge-DZJooz4n.js";import{I as E}from"./Icon-De2t09Fn.js";import"./vue.esm-bundler-BjELL9GZ.js";const q={title:"UI/Badge",component:n,tags:["autodocs"]},a={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{default:"#007ABF"}},r={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-orange-400 text-red-800",default:"7"}},s={render:e=>({components:{Badge:n,Icon:E},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-purple-400",default:'<Icon name="bluetooth" class="text-primary-foreground" />'}},t={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <div class="text-3xl">
        Text
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-blue-600",align:"top",default:"app v1.8.7"}},d={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <div class="text-3xl">
        Text
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-orange-600",transparent:!0,default:"app v1.8.7"}},o={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"text-blue-600",outline:!0,default:"Outline"}},g={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-red-600",rounded:!0,default:"Round"}},u={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <div class="flex items-center gap-2">
        Status
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-green-400",default:""}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,i,B;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(B=(i=r.parameters)==null?void 0:i.docs)==null?void 0:B.source}}};var f,b,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,$,I;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(I=($=t.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var S,T,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(T=d.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var _,h,A;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(h=o.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var C,R,y;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(R=g.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var D,F,W;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    default: \`\`
  }
}`,...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const w=["Basic","BasisCustomColors","BasisWithIcon","Aligned","Transparant","OutlineDesign","Rounded","Indicators"];export{t as Aligned,a as Basic,r as BasisCustomColors,s as BasisWithIcon,u as Indicators,o as OutlineDesign,g as Rounded,d as Transparant,w as __namedExportsOrder,q as default};
