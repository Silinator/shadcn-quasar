import{_ as e}from"./Button-B-obqn2i.js";import{a as qn,c as Dn,_ as Nn,I as t}from"./Icon-CkMnaiUD.js";import{d as Rn,q as On,s as Vn,n as Pn,u as S,o as An}from"./iframe-CLIydJoi.js";import"./ripple-CsoxYJ_M.js";import"./Primitive-DlxtXT8L.js";const In=qn("inline-block",{variants:{size:{xs:"h-4 w-4",sm:"h-6 w-6",md:"h-8 w-8",lg:"h-10 w-10",xl:"h-12 w-12"}},defaultVariants:{size:"md"}});In.__docgenInfo={exportName:"spinnerVariants",displayName:"spinnerVariants",type:2,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/spinner/index.ts"};const Fn=["stroke-width"],Cn=Rn({__name:"Spinner",props:{thickness:{default:5},size:{default:"md"},class:{}},setup(n){const $=n;return(Gn,En)=>(An(),On("svg",{role:"status","aria-live":"polite",viewBox:"25 25 50 50",class:Pn(S(Dn)(S(In)($),$.class))},[Vn("circle",{class:"spinner-path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":$.thickness,"stroke-miterlimit":"10"},null,8,Fn)],2))}}),Un=Nn(Cn,[["__scopeId","data-v-8ce325aa"]]);Cn.__docgenInfo={exportName:"default",displayName:"Spinner",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']},default:'"md"'},{name:"thickness",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number",default:"5"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:'"md" | "xs" | "sm" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"thickness",type:"number",description:"",declarations:[],schema:"number"},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/spinner/Spinner.vue"};const Jn={title:"UI/Button",component:e,tags:["autodocs"]},s={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",default:"Standard"}},a={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-blue-500 text-white",default:"Standard"}},r={render:n=>({components:{Button:e,Icon:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-green-400 text-white",default:'<Icon name="shopping_cart" filled size="sm" /> Standard'}},o={render:n=>({components:{Button:e,Icon:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-yellow-500 text-white",round:!0,default:'<Icon name="shopping_cart" filled size="sm" />'}},u={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-purple-500 text-white",rounded:!0,default:"Rounded Button"}},l={render:n=>({components:{Button:e,Icon:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-orange-500 text-white",square:!0,default:'<Icon name="shopping_cart" filled size="sm" />'}},d={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",flat:!0,default:"Flat Button"}},c={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",outline:!0,default:"Outline Button"}},i={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",outline:!0,rounded:!0,default:"Outline rounded Button"}},p={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-cyan-500 text-white",push:!0,default:"Push Button"}},m={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",unelevated:!0,default:"Unelevated Button"}},g={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",dense:!0,default:"Dense Button"}},B={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"",noCaps:!0,default:"NoCaps Button"}},f={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-green-500",glossy:!0,default:"Glossy Button"}},b={render:n=>({components:{Button:e,Icon:t},setup(){return{args:n}},template:`
      <div class="flex flex-row items-center gap-2">
        <Button v-bind="args">${n.default}</Button>
        <Button v-bind="args" size="sm">${n.default}</Button>
        <Button v-bind="args" size="md">${n.default}</Button>
        <Button v-bind="args" size="lg">${n.default}</Button>
        <Button v-bind="args" size="xl">${n.default}</Button>
      </div>
    `}),args:{class:"bg-lime-400 text-black",size:"xs",default:'<Icon name="search" /> Button'}},v={render:n=>({components:{Button:e,Icon:t},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-lime-400 text-black text-6xl",size:"xs",default:'<Icon name="search" /> Button'}},h={render:n=>({components:{Button:e},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-red-500",disable:!0,default:"Disable Button"}},y={render:n=>({components:{Button:e,Spinner:Un},setup(){return{args:n}},template:`
      <Button v-bind="args">${n.default}</Button>
    `}),args:{class:"bg-indigo-500",loading:!0,default:'<Spinner size="sm"></Spinner> Disable Button'}},x={render:n=>({components:{Button:e,Icon:t},setup(){return{args:n}},template:`
      <div class="flex flex-row flex-wrap items-center gap-2">
        <Button v-bind="args">${n.default}</Button>
        <Button v-bind="args" align='left'>${n.default}</Button>
        <Button v-bind="args" align='between'>${n.default}</Button>
        <Button v-bind="args" align='around'>${n.default}</Button>
      </div>
    `}),args:{class:"bg-pink-500 w-56",align:"right",default:'<Icon name="bolt" /> Alignment Button'}};var w,k,z;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var _,I,C;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(I=a.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var q,D,N;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(D=r.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var R,O,V;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(O=o.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var P,A,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var U,G,E;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(E=(G=l.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var j,K,L;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(K=d.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var W,H,J;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,Q,T;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var nn,en,tn;m.parameters={...m.parameters,docs:{...(nn=m.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(tn=(en=m.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var sn,an,rn;g.parameters={...g.parameters,docs:{...(sn=g.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(rn=(an=g.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var on,un,ln;B.parameters={...B.parameters,docs:{...(on=B.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(ln=(un=B.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var dn,cn,pn;f.parameters={...f.parameters,docs:{...(dn=f.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(pn=(cn=f.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var mn,gn,Bn;b.parameters={...b.parameters,docs:{...(mn=b.parameters)==null?void 0:mn.docs,source:{originalSource:`{
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
}`,...(Bn=(gn=b.parameters)==null?void 0:gn.docs)==null?void 0:Bn.source}}};var fn,bn,vn;v.parameters={...v.parameters,docs:{...(fn=v.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(vn=(bn=v.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var hn,yn,xn;h.parameters={...h.parameters,docs:{...(hn=h.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(xn=(yn=h.parameters)==null?void 0:yn.docs)==null?void 0:xn.source}}};var $n,Sn,wn;y.parameters={...y.parameters,docs:{...($n=y.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
    default: \`<Spinner size="sm"></Spinner> Disable Button\`
  }
}`,...(wn=(Sn=y.parameters)==null?void 0:Sn.docs)==null?void 0:wn.source}}};var kn,zn,_n;x.parameters={...x.parameters,docs:{...(kn=x.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(_n=(zn=x.parameters)==null?void 0:zn.docs)==null?void 0:_n.source}}};const Mn=["Standard","CustomColor","WithIcon","Round","Rounded","Square","Flat","Outline","OutlineRounded","Push","Unelevated","Dense","NoCaps","Glossy","Sizes","CustomSize","Disable","Loading","Alignment"];export{x as Alignment,a as CustomColor,v as CustomSize,g as Dense,h as Disable,d as Flat,f as Glossy,y as Loading,B as NoCaps,c as Outline,i as OutlineRounded,p as Push,o as Round,u as Rounded,b as Sizes,l as Square,s as Standard,m as Unelevated,r as WithIcon,Mn as __namedExportsOrder,Jn as default};
