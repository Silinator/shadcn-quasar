import{a as n,_ as e}from"./Button-D0cLHiqF.js";import{I as _}from"./Icon-DM8DZhqr.js";import"./iframe-C1nf-jxf.js";import"./ripple-CsoxYJ_M.js";import"./utils-DheDpAxB.js";import"./index-CTWEWApt.js";import"./Primitive-lODkUz4w.js";const C={title:"UI/Button/ButtonGroup",component:n,tags:["autodocs"]},o={render:t=>({components:{Button:e,ButtonGroup:n},setup(){return{args:t}},template:`
      <ButtonGroup v-bind="args">${t.default}</ButtonGroup>
    `}),args:{class:"",default:`
      <Button>Standard</Button>
      <Button>Standard</Button>
      <Button>Standard</Button>
    `}},u={render:t=>({components:{Button:e,ButtonGroup:n},setup(){return{args:t}},template:`
      <ButtonGroup v-bind="args">${t.default}</ButtonGroup>
    `}),args:{class:"",push:!0,default:`
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
    `}},s={render:t=>({components:{Button:e,ButtonGroup:n,Icon:_},setup(){return{args:t}},template:`
      <ButtonGroup v-bind="args">${t.default}</ButtonGroup>
    `}),args:{class:"",glossy:!0,default:`
      <Button glossy class="bg-yellow-600 text-white"><Icon name="timeline" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="visibility" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="update" size="sm"/>Glossy</Button>
    `}},r={render:t=>({components:{Button:e,ButtonGroup:n},setup(){return{args:t}},template:`
      <ButtonGroup v-bind="args">${t.default}</ButtonGroup>
    `}),args:{class:"text-lime-600",outline:!0,default:`
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
    `}},a={render:t=>({components:{Button:e,ButtonGroup:n},setup(){return{args:t}},template:`
      <ButtonGroup v-bind="args">${t.default}</ButtonGroup>
    `}),args:{class:"",rounded:!0,default:`
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
    `}},l={render:t=>({components:{Button:e,ButtonGroup:n},setup(){return{args:t}},template:`
      <ButtonGroup v-bind="args">${t.default}</ButtonGroup>
    `}),args:{class:"",flat:!0,default:`
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
    `}},p={render:t=>({components:{Button:e,ButtonGroup:n},setup(){return{args:t}},template:`
      <ButtonGroup v-bind="args">${t.default}</ButtonGroup>
    `}),args:{class:"w-full",spread:!0,default:`
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
    `}};var d,B,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    default: \`
      <Button>Standard</Button>
      <Button>Standard</Button>
      <Button>Standard</Button>
    \`
  }
}`,...(c=(B=o.parameters)==null?void 0:B.docs)==null?void 0:c.source}}};var i,m,g;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    push: true,
    default: \`
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
      <Button push class="bg-cyan-600 text-white">Push</Button>
    \`
  }
}`,...(g=(m=u.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var G,f,b;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    glossy: true,
    default: \`
      <Button glossy class="bg-yellow-600 text-white"><Icon name="timeline" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="visibility" size="sm"/>Glossy</Button>
      <Button glossy class="bg-yellow-600 text-white"><Icon name="update" size="sm"/>Glossy</Button>
    \`
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,x,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: 'text-lime-600',
    outline: true,
    default: \`
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
      <Button outline class="text-lime-600">Outline</Button>
    \`
  }
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,S,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    rounded: true,
    default: \`
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
      <Button rounded class="bg-pink-600 text-white">Rounded</Button>
    \`
  }
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var $,I,O;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: '',
    flat: true,
    default: \`
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
      <Button flat class="text-red-600">Flat</Button>
    \`
  }
}`,...(O=(I=l.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var F,P,R;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      ButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonGroup v-bind="args">\${args.default}</ButtonGroup>
    \`
  }),
  args: {
    class: 'w-full',
    spread: true,
    default: \`
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
      <Button class="bg-purple-600 text-white">Spread</Button>
    \`
  }
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const D=["Standard","Push","Glossy","Outline","Rounded","Flat","Spread"];export{l as Flat,s as Glossy,r as Outline,u as Push,a as Rounded,p as Spread,o as Standard,D as __namedExportsOrder,C as default};
