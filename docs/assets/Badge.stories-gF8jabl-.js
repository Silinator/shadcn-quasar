import{_ as n}from"./Badge-DeVohRN6.js";import{_ as i}from"./Button-BMXBdipw.js";import{I as N}from"./Icon-DTlKRrA-.js";import"./iframe-DfjC8tzZ.js";import"./utils-DheDpAxB.js";import"./index-CTWEWApt.js";import"./Primitive-DcUXdM-a.js";import"./ripple-CsoxYJ_M.js";const ae={title:"UI/Badge",component:n,tags:["autodocs"]},a={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-primary text-primary-foreground",default:"#007ABF"}},t={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-orange-400 text-red-800",default:"7"}},r={render:e=>({components:{Badge:n,Icon:N},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-purple-400",default:'<Icon name="bluetooth" class="text-primary-foreground" />'}},s={render:e=>({components:{Badge:n,Button:i},setup(){return{args:e}},template:`
      <Button class="bg-primary text-primary-foreground"> Button <Badge v-bind="args">${e.default}</Badge> </Button> 
    `}),args:{class:"bg-cyan-600 text-white",floating:!0,default:"22"}},o={render:e=>({components:{Badge:n,Icon:N,Button:i},setup(){return{args:e}},template:`
      <Button round class="bg-primary text-primary-foreground"> <Icon name="notifications" size="sm" filled class="text-primary-foreground" /> <Badge v-bind="args">${e.default}</Badge> </Button> 
    `}),args:{class:"bg-pink-200 text-black",floating:!0,default:""}},d={render:e=>({components:{Badge:n,Button:i},setup(){return{args:e}},template:`
      <Button class="bg-primary text-primary-foreground"> Button <Badge v-bind="args">${e.default}</Badge> </Button> 
    `}),args:{class:"bg-yellow-600 text-white",floating:!0,transparent:!0,default:"22"}},g={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <div class="text-3xl">
        Text
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-blue-600 text-white",align:"top",default:"app v1.8.7"}},u={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <div class="text-3xl">
        Text
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-orange-600 text-white",transparent:!0,default:"app v1.8.7"}},p={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"text-blue-600",outline:!0,default:"Outline"}},c={render:e=>({components:{Badge:n},setup(){return{args:e}},template:`
      <Badge v-bind="args">${e.default}</Badge>
    `}),args:{class:"bg-red-600 text-white",rounded:!0,default:"Round"}},l={render:e=>({components:{Badge:n,Button:i},setup(){return{args:e}},template:`
      <div class="flex items-center gap-2">
        Status
        <Badge v-bind="args">${e.default}</Badge>
      </div>
    `}),args:{class:"bg-green-400 text-white",default:""}};var m,B,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    class: 'bg-primary text-primary-foreground',
    default: \`#007ABF\`
  }
}`,...(f=(B=a.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var b,x,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,$,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=($=r.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var I,w,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button class="bg-primary text-primary-foreground"> Button <Badge v-bind="args">\${args.default}</Badge> </Button> 
    \`
  }),
  args: {
    class: 'bg-cyan-600 text-white',
    floating: true,
    default: \`22\`
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,_,F;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge,
      Icon,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button round class="bg-primary text-primary-foreground"> <Icon name="notifications" size="sm" filled class="text-primary-foreground" /> <Badge v-bind="args">\${args.default}</Badge> </Button> 
    \`
  }),
  args: {
    class: 'bg-pink-200 text-black',
    floating: true,
    default: \`\`
  }
}`,...(F=(_=o.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,k,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button class="bg-primary text-primary-foreground"> Button <Badge v-bind="args">\${args.default}</Badge> </Button> 
    \`
  }),
  args: {
    class: 'bg-yellow-600 text-white',
    floating: true,
    transparent: true,
    default: \`22\`
  }
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var C,R,z;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    class: 'bg-blue-600 text-white',
    align: 'top',
    default: \`app v1.8.7\`
  }
}`,...(z=(R=g.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var D,W,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    class: 'bg-orange-600 text-white',
    transparent: true,
    default: \`app v1.8.7\`
  }
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var U,j,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,H,J;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    class: 'bg-red-600 text-white',
    rounded: true,
    default: \`Round\`
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,M;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge,
      Button
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
    class: 'bg-green-400 text-white',
    default: \`\`
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const te=["Basic","BasisCustomColors","BasisWithIcon","Floating","FloatingIndicators","Transparent","Aligned","Transparant","OutlineDesign","Rounded","Indicators"];export{g as Aligned,a as Basic,t as BasisCustomColors,r as BasisWithIcon,s as Floating,o as FloatingIndicators,l as Indicators,p as OutlineDesign,c as Rounded,u as Transparant,d as Transparent,te as __namedExportsOrder,ae as default};
