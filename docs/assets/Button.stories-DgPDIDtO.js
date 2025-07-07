import{_ as t}from"./Button-Cy-Z5QPu.js";import{I as e}from"./Icon-ChlTDzKf.js";import{_ as Wn}from"./Spinner-BmQk1k6s.js";import"./iframe-BrGLbD3W.js";import"./ripple-CsoxYJ_M.js";import"./utils-CiSxPhq7.js";import"./Primitive-l8neErn6.js";const En={title:"UI/Button/Button",component:t,tags:["autodocs"]},r={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-primary text-primary-foreground",default:"Standard"}},a={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-blue-500 text-white",default:"Standard"}},s={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-green-400 text-white",default:'<Icon name="shopping_cart" filled size="sm" /> Standard'}},o={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-yellow-500 text-white",round:!0,default:'<Icon name="shopping_cart" filled size="sm" />'}},u={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-purple-500 text-white",rounded:!0,default:"Rounded Button"}},d={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-orange-500 text-white",square:!0,default:'<Icon name="shopping_cart" filled size="sm" />'}},l={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"text-primary",flat:!0,default:"Flat Button"}},c={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"text-primary",outline:!0,default:"Outline Button"}},p={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"text-primary",outline:!0,rounded:!0,default:"Outline rounded Button"}},i={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-cyan-500 text-white",push:!0,default:"Push Button"}},g={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-primary text-primary-foreground",unelevated:!0,default:"Unelevated Button"}},m={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-primary text-primary-foreground",dense:!0,default:"Dense Button"}},B={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-primary text-primary-foreground",noCaps:!0,default:"NoCaps Button"}},f={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-green-500 text-white",glossy:!0,default:"Glossy Button"}},b={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <div class="flex flex-row items-center gap-2">
        <Button v-bind="args">${n.default}</Button>
        <Button v-bind="args" size="sm">${n.default}</Button>
        <Button v-bind="args" size="md">${n.default}</Button>
        <Button v-bind="args" size="lg">${n.default}</Button>
        <Button v-bind="args" size="xl">${n.default}</Button>
      </div>
    `}),args:{class:"bg-lime-400 text-black",size:"xs",default:'<Icon name="search" /> Button'}},v={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-lime-400 text-black text-6xl",size:"xs",default:'<Icon name="search" /> Button'}},x={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-red-500 text-white",disable:!0,default:"Disable Button"}},$={render:n=>({components:{Button:t,Spinner:Wn},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-indigo-500 text-white",loading:!0,default:'<Spinner size="sm"></Spinner> Loading Button'}},S={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-emerald-500 text-white",loading:!0,default:'Loading Button <Icon name="progress_activity" size="sm" class="animate-spin"/> '}},h={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <div class="flex flex-row flex-wrap items-center gap-2">
        <Button v-bind="args">${n.default}</Button>
        <Button v-bind="args" align='left'>${n.default}</Button>
        <Button v-bind="args" align='between'>${n.default}</Button>
        <Button v-bind="args" align='around'>${n.default}</Button>
      </div>
    `}),args:{class:"bg-pink-500 text-white w-56",align:"right",default:'<Icon name="bolt" /> Alignment Button'}},w={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-orange-500 text-white",stack:!0,default:'<Icon name="forklift" size="sm"/> Stacked Button'}};var y,I,z;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    default: \`Standard\`
  }
}`,...(z=(I=r.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var _,k,C;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: \`Standard\`
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var O,D,L;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-green-400 text-white',
    default: \`<Icon name="shopping_cart" filled size="sm" /> Standard\`
  }
}`,...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,W,U;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-yellow-500 text-white',
    round: true,
    default: \`<Icon name="shopping_cart" filled size="sm" />\`
  }
}`,...(U=(W=o.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var q,A,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-purple-500 text-white',
    rounded: true,
    default: \`Rounded Button\`
  }
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,N,P;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-orange-500 text-white',
    square: true,
    default: \`<Icon name="shopping_cart" filled size="sm" />\`
  }
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var E,j,H;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'text-primary',
    flat: true,
    default: \`Flat Button\`
  }
}`,...(H=(j=l.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var J,K,M;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'text-primary',
    outline: true,
    default: \`Outline Button\`
  }
}`,...(M=(K=c.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,T,V;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'text-primary',
    outline: true,
    rounded: true,
    default: \`Outline rounded Button\`
  }
}`,...(V=(T=p.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var X,Y,Z;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-cyan-500 text-white',
    push: true,
    default: \`Push Button\`
  }
}`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var nn,tn,en;g.parameters={...g.parameters,docs:{...(nn=g.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    unelevated: true,
    default: \`Unelevated Button\`
  }
}`,...(en=(tn=g.parameters)==null?void 0:tn.docs)==null?void 0:en.source}}};var rn,an,sn;m.parameters={...m.parameters,docs:{...(rn=m.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    dense: true,
    default: \`Dense Button\`
  }
}`,...(sn=(an=m.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};var on,un,dn;B.parameters={...B.parameters,docs:{...(on=B.parameters)==null?void 0:on.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-primary text-primary-foreground',
    noCaps: true,
    default: \`NoCaps Button\`
  }
}`,...(dn=(un=B.parameters)==null?void 0:un.docs)==null?void 0:dn.source}}};var ln,cn,pn;f.parameters={...f.parameters,docs:{...(ln=f.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-green-500 text-white',
    glossy: true,
    default: \`Glossy Button\`
  }
}`,...(pn=(cn=f.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var gn,mn,Bn;b.parameters={...b.parameters,docs:{...(gn=b.parameters)==null?void 0:gn.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex flex-row items-center gap-2">
        <Button v-bind="args">\${args.default}</Button>
        <Button v-bind="args" size="sm">\${args.default}</Button>
        <Button v-bind="args" size="md">\${args.default}</Button>
        <Button v-bind="args" size="lg">\${args.default}</Button>
        <Button v-bind="args" size="xl">\${args.default}</Button>
      </div>
    \`
  }),
  args: {
    class: 'bg-lime-400 text-black',
    size: 'xs',
    default: \`<Icon name="search" /> Button\`
  }
}`,...(Bn=(mn=b.parameters)==null?void 0:mn.docs)==null?void 0:Bn.source}}};var fn,bn,vn;v.parameters={...v.parameters,docs:{...(fn=v.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-lime-400 text-black text-6xl',
    size: 'xs',
    default: \`<Icon name="search" /> Button\`
  }
}`,...(vn=(bn=v.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var xn,$n,Sn;x.parameters={...x.parameters,docs:{...(xn=x.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-red-500 text-white',
    disable: true,
    default: \`Disable Button\`
  }
}`,...(Sn=($n=x.parameters)==null?void 0:$n.docs)==null?void 0:Sn.source}}};var hn,wn,yn;$.parameters={...$.parameters,docs:{...(hn=$.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Spinner
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-indigo-500 text-white',
    loading: true,
    default: \`<Spinner size="sm"></Spinner> Loading Button\`
  }
}`,...(yn=(wn=$.parameters)==null?void 0:wn.docs)==null?void 0:yn.source}}};var In,zn,_n;S.parameters={...S.parameters,docs:{...(In=S.parameters)==null?void 0:In.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-emerald-500 text-white',
    loading: true,
    default: \`Loading Button <Icon name="progress_activity" size="sm" class="animate-spin"/> \`
  }
}`,...(_n=(zn=S.parameters)==null?void 0:zn.docs)==null?void 0:_n.source}}};var kn,Cn,On;h.parameters={...h.parameters,docs:{...(kn=h.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex flex-row flex-wrap items-center gap-2">
        <Button v-bind="args">\${args.default}</Button>
        <Button v-bind="args" align='left'>\${args.default}</Button>
        <Button v-bind="args" align='between'>\${args.default}</Button>
        <Button v-bind="args" align='around'>\${args.default}</Button>
      </div>
    \`
  }),
  args: {
    class: 'bg-pink-500 text-white w-56',
    align: 'right',
    default: \`<Icon name="bolt" /> Alignment Button\`
  }
}`,...(On=(Cn=h.parameters)==null?void 0:Cn.docs)==null?void 0:On.source}}};var Dn,Ln,Rn;w.parameters={...w.parameters,docs:{...(Dn=w.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Button v-bind="args">\${args.default}</Button>
    \`
  }),
  args: {
    class: 'bg-orange-500 text-white',
    stack: true,
    default: \`<Icon name="forklift" size="sm"/> Stacked Button\`
  }
}`,...(Rn=(Ln=w.parameters)==null?void 0:Ln.docs)==null?void 0:Rn.source}}};const jn=["Standard","CustomColor","WithIcon","Round","Rounded","Square","Flat","Outline","OutlineRounded","Push","Unelevated","Dense","NoCaps","Glossy","Sizes","CustomSize","Disable","LoadingWithSpinner","LoadingWithIconSpinner","Alignment","Stacked"];export{h as Alignment,a as CustomColor,v as CustomSize,m as Dense,x as Disable,l as Flat,f as Glossy,S as LoadingWithIconSpinner,$ as LoadingWithSpinner,B as NoCaps,c as Outline,p as OutlineRounded,i as Push,o as Round,u as Rounded,b as Sizes,d as Square,w as Stacked,r as Standard,g as Unelevated,s as WithIcon,jn as __namedExportsOrder,En as default};
