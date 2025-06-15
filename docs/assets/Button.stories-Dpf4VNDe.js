import{_ as t}from"./Button-Cz43LMWl.js";import{I as e}from"./Icon-6JLSt9bU.js";import{_ as _n}from"./Spinner-C34tlCjP.js";import"./iframe-C9p9Zjo-.js";import"./ripple-CsoxYJ_M.js";import"./utils-CiSxPhq7.js";import"./Primitive-DlGZuh7Y.js";const qn={title:"UI/Button",component:t,tags:["autodocs"]},r={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",default:"Standard"}},s={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-blue-500 text-white",default:"Standard"}},a={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-green-400 text-white",default:'<Icon name="shopping_cart" filled size="sm" /> Standard'}},o={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-yellow-500 text-white",round:!0,default:'<Icon name="shopping_cart" filled size="sm" />'}},u={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-purple-500 text-white",rounded:!0,default:"Rounded Button"}},d={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-orange-500 text-white",square:!0,default:'<Icon name="shopping_cart" filled size="sm" />'}},l={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",flat:!0,default:"Flat Button"}},c={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",outline:!0,default:"Outline Button"}},p={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",outline:!0,rounded:!0,default:"Outline rounded Button"}},i={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-cyan-500 text-white",push:!0,default:"Push Button"}},g={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",unelevated:!0,default:"Unelevated Button"}},m={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",dense:!0,default:"Dense Button"}},B={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",noCaps:!0,default:"NoCaps Button"}},f={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-green-500",glossy:!0,default:"Glossy Button"}},b={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <div class="flex flex-row items-center gap-2">
        <Button v-bind="args">${n.default}</Button>
        <Button v-bind="args" size="sm">${n.default}</Button>
        <Button v-bind="args" size="md">${n.default}</Button>
        <Button v-bind="args" size="lg">${n.default}</Button>
        <Button v-bind="args" size="xl">${n.default}</Button>
      </div>
    `}),args:{class:"bg-lime-400 text-black",size:"xs",default:'<Icon name="search" /> Button'}},v={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-lime-400 text-black text-6xl",size:"xs",default:'<Icon name="search" /> Button'}},$={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-red-500",disable:!0,default:"Disable Button"}},S={render:n=>({components:{Button:t,Spinner:_n},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-indigo-500",loading:!0,default:'<Spinner size="sm"></Spinner> Loading Button'}},x={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <div class="flex flex-row flex-wrap items-center gap-2">
        <Button v-bind="args">${n.default}</Button>
        <Button v-bind="args" align='left'>${n.default}</Button>
        <Button v-bind="args" align='between'>${n.default}</Button>
        <Button v-bind="args" align='around'>${n.default}</Button>
      </div>
    `}),args:{class:"bg-pink-500 w-56",align:"right",default:'<Icon name="bolt" /> Alignment Button'}};var h,w,z;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    class: '',
    default: \`Standard\`
  }
}`,...(z=(w=r.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var I,_,C;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(_=s.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var y,O,D;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=(O=a.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var R,k,U;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(U=(k=o.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var q,A,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,L,N;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,W,E;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    class: '',
    flat: true,
    default: \`Flat Button\`
  }
}`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var j,H,J;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    class: '',
    outline: true,
    default: \`Outline Button\`
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    class: '',
    outline: true,
    rounded: true,
    default: \`Outline rounded Button\`
  }
}`,...(Q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var T,V,X;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(X=(V=i.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,nn;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    class: '',
    unelevated: true,
    default: \`Unelevated Button\`
  }
}`,...(nn=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:nn.source}}};var tn,en,rn;m.parameters={...m.parameters,docs:{...(tn=m.parameters)==null?void 0:tn.docs,source:{originalSource:`{
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
    class: '',
    dense: true,
    default: \`Dense Button\`
  }
}`,...(rn=(en=m.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};var sn,an,on;B.parameters={...B.parameters,docs:{...(sn=B.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
    class: '',
    noCaps: true,
    default: \`NoCaps Button\`
  }
}`,...(on=(an=B.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var un,dn,ln;f.parameters={...f.parameters,docs:{...(un=f.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
    class: 'bg-green-500',
    glossy: true,
    default: \`Glossy Button\`
  }
}`,...(ln=(dn=f.parameters)==null?void 0:dn.docs)==null?void 0:ln.source}}};var cn,pn,gn;b.parameters={...b.parameters,docs:{...(cn=b.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(gn=(pn=b.parameters)==null?void 0:pn.docs)==null?void 0:gn.source}}};var mn,Bn,fn;v.parameters={...v.parameters,docs:{...(mn=v.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(fn=(Bn=v.parameters)==null?void 0:Bn.docs)==null?void 0:fn.source}}};var bn,vn,$n;$.parameters={...$.parameters,docs:{...(bn=$.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
    class: 'bg-red-500',
    disable: true,
    default: \`Disable Button\`
  }
}`,...($n=(vn=$.parameters)==null?void 0:vn.docs)==null?void 0:$n.source}}};var Sn,xn,hn;S.parameters={...S.parameters,docs:{...(Sn=S.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
    class: 'bg-indigo-500',
    loading: true,
    default: \`<Spinner size="sm"></Spinner> Loading Button\`
  }
}`,...(hn=(xn=S.parameters)==null?void 0:xn.docs)==null?void 0:hn.source}}};var wn,zn,In;x.parameters={...x.parameters,docs:{...(wn=x.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
    class: 'bg-pink-500 w-56',
    align: 'right',
    default: \`<Icon name="bolt" /> Alignment Button\`
  }
}`,...(In=(zn=x.parameters)==null?void 0:zn.docs)==null?void 0:In.source}}};const An=["Standard","CustomColor","WithIcon","Round","Rounded","Square","Flat","Outline","OutlineRounded","Push","Unelevated","Dense","NoCaps","Glossy","Sizes","CustomSize","Disable","LoadingWithSpinner","Alignment"];export{x as Alignment,s as CustomColor,v as CustomSize,m as Dense,$ as Disable,l as Flat,f as Glossy,S as LoadingWithSpinner,B as NoCaps,c as Outline,p as OutlineRounded,i as Push,o as Round,u as Rounded,b as Sizes,d as Square,r as Standard,g as Unelevated,a as WithIcon,An as __namedExportsOrder,qn as default};
