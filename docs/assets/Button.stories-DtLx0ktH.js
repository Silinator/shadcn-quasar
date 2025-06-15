import{_ as t}from"./Button-CwnCKyvU.js";import{I as e}from"./Icon-CiWffMbQ.js";import{_ as Dn}from"./Spinner-COokYqRF.js";import"./iframe-CcFA4uLv.js";import"./ripple-CsoxYJ_M.js";import"./utils-CiSxPhq7.js";import"./Primitive-BaDlL3t_.js";const Fn={title:"UI/Button",component:t,tags:["autodocs"]},r={render:n=>({components:{Button:t},setup(){return{args:n}},template:`
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
    `}),args:{class:"bg-red-500",disable:!0,default:"Disable Button"}},S={render:n=>({components:{Button:t,Spinner:Dn},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-indigo-500",loading:!0,default:'<Spinner size="sm"></Spinner> Loading Button'}},x={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-emerald-500",loading:!0,default:'Loading Button <Icon name="progress_activity" size="sm" class="animate-spin"/> '}},h={render:n=>({components:{Button:t,Icon:e},setup(){return{args:n}},template:`
      <div class="flex flex-row flex-wrap items-center gap-2">
        <Button v-bind="args">${n.default}</Button>
        <Button v-bind="args" align='left'>${n.default}</Button>
        <Button v-bind="args" align='between'>${n.default}</Button>
        <Button v-bind="args" align='around'>${n.default}</Button>
      </div>
    `}),args:{class:"bg-pink-500 w-56",align:"right",default:'<Icon name="bolt" /> Alignment Button'}};var I,z,w;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(z=r.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var _,y,C;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var O,D,L;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,k,W;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(k=o.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var U,q,A;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,G,N;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(N=(G=d.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var P,E,j;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,T;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var V,X,Y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,nn,tn;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(tn=(nn=g.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var en,rn,sn;m.parameters={...m.parameters,docs:{...(en=m.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(sn=(rn=m.parameters)==null?void 0:rn.docs)==null?void 0:sn.source}}};var an,on,un;B.parameters={...B.parameters,docs:{...(an=B.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(un=(on=B.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var dn,ln,cn;f.parameters={...f.parameters,docs:{...(dn=f.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(cn=(ln=f.parameters)==null?void 0:ln.docs)==null?void 0:cn.source}}};var pn,gn,mn;b.parameters={...b.parameters,docs:{...(pn=b.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(mn=(gn=b.parameters)==null?void 0:gn.docs)==null?void 0:mn.source}}};var Bn,fn,bn;v.parameters={...v.parameters,docs:{...(Bn=v.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(bn=(fn=v.parameters)==null?void 0:fn.docs)==null?void 0:bn.source}}};var vn,$n,Sn;$.parameters={...$.parameters,docs:{...(vn=$.parameters)==null?void 0:vn.docs,source:{originalSource:`{
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
}`,...(Sn=($n=$.parameters)==null?void 0:$n.docs)==null?void 0:Sn.source}}};var xn,hn,In;S.parameters={...S.parameters,docs:{...(xn=S.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(In=(hn=S.parameters)==null?void 0:hn.docs)==null?void 0:In.source}}};var zn,wn,_n;x.parameters={...x.parameters,docs:{...(zn=x.parameters)==null?void 0:zn.docs,source:{originalSource:`{
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
    class: 'bg-emerald-500',
    loading: true,
    default: \`Loading Button <Icon name="progress_activity" size="sm" class="animate-spin"/> \`
  }
}`,...(_n=(wn=x.parameters)==null?void 0:wn.docs)==null?void 0:_n.source}}};var yn,Cn,On;h.parameters={...h.parameters,docs:{...(yn=h.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(On=(Cn=h.parameters)==null?void 0:Cn.docs)==null?void 0:On.source}}};const Gn=["Standard","CustomColor","WithIcon","Round","Rounded","Square","Flat","Outline","OutlineRounded","Push","Unelevated","Dense","NoCaps","Glossy","Sizes","CustomSize","Disable","LoadingWithSpinner","LoadingWithIconSpinner","Alignment"];export{h as Alignment,s as CustomColor,v as CustomSize,m as Dense,$ as Disable,l as Flat,f as Glossy,x as LoadingWithIconSpinner,S as LoadingWithSpinner,B as NoCaps,c as Outline,p as OutlineRounded,i as Push,o as Round,u as Rounded,b as Sizes,d as Square,r as Standard,g as Unelevated,a as WithIcon,Gn as __namedExportsOrder,Fn as default};
