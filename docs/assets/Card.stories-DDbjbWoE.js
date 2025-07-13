import{_ as m}from"./Button-CWLuhtfN.js";import{_ as e,a,b as l}from"./index-C-xjFIUz.js";import{_ as t}from"./index-Cz_J_F0d.js";import"./iframe-C7kf2e6L.js";import"./ripple-CsoxYJ_M.js";import"./utils-CiSxPhq7.js";import"./Primitive-eIKpGF7z.js";const W={title:"UI/Card/Card",component:e,tags:["autodocs"]},r={render:n=>({components:{Card:e,CardSection:a},setup(){return{args:n}},template:`
      <Card v-bind="args">${n.default}</Card>
    `}),args:{class:"bg-background text-background-foreground w-full max-w-[250px]",default:`<CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`}},o={render:n=>({components:{Card:e,CardSection:a},setup(){return{args:n}},template:`
      <Card v-bind="args">${n.default}</Card>
    `}),args:{class:"bg-radial from-blue-400 to-blue-700 text-white w-full max-w-[250px]",default:`
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
      <div class="text-sm font-medium ">by John Doe</div>
    </CardSection>

    <CardSection class="pt-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`}},i={render:n=>({components:{Card:e,CardSection:a,Separator:t},setup(){return{args:n}},template:`
      <Card v-bind="args">${n.default}</Card>
    `}),args:{bordered:!0,class:"bg-gray-700 text-white w-full max-w-[250px]",default:`
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
      <div class="text-sm font-medium ">by John Doe</div>
    </CardSection>

    <Separator class="dark" inset />

    <CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`}},d={render:n=>({components:{Card:e,CardSection:a,Separator:t},setup(){return{args:n}},template:`
      <Card v-bind="args">${n.default}</Card>
    `}),args:{bordered:!0,flat:!0,class:"bg-background text-background-foreground w-full max-w-[250px]",default:`
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
    </CardSection>

    <CardSection class="pt-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </CardSection>

    <Separator class="dark" inset />

    <CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </CardSection>`}},s={render:n=>({components:{Card:e,CardSection:a,CardActions:l,Separator:t,Button:m},setup(){return{args:n}},template:`
      <Card v-bind="args">${n.default}</Card>
    `}),args:{class:"bg-teal-600 text-white",default:`
      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>

      <Separator class="dark" />

      <CardActions vertical>
        <Button flat>Action 1</Button>
        <Button flat>Action 2</Button>
      </CardActions>
    `}},u={render:n=>({components:{Card:e,CardSection:a,CardActions:l,Separator:t,Button:m},setup(){return{args:n}},template:`
      <Card v-bind="args">${n.default}</Card>
    `}),args:{class:"bg-background text-background-foreground w-full max-w-[250px]",default:`
      <img src="https://cdn.quasar.dev/img/mountains.jpg"/>

      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection class="pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>
    `}},c={render:n=>({components:{Card:e,CardSection:a,CardActions:l,Separator:t,Button:m},setup(){return{args:n}},template:`
      <Card v-bind="args">${n.default}</Card>
    `}),args:{class:"bg-background text-background-foreground w-full max-w-[250px]",default:`
      <img src="https://cdn.quasar.dev/img/mountains.jpg"/>

      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection class="pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>
    `}};var p,g,C;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      CardSection
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">\${args.default}</Card>
    \`
  }),
  args: {
    class: 'bg-background text-background-foreground w-full max-w-[250px]',
    default: \`<CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>\`
  }
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var x,S,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      CardSection
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">\${args.default}</Card>
    \`
  }),
  args: {
    class: 'bg-radial from-blue-400 to-blue-700 text-white w-full max-w-[250px]',
    default: \`
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
      <div class="text-sm font-medium ">by John Doe</div>
    </CardSection>

    <CardSection class="pt-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>\`
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var f,v,q;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      CardSection,
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">\${args.default}</Card>
    \`
  }),
  args: {
    bordered: true,
    class: 'bg-gray-700 text-white w-full max-w-[250px]',
    default: \`
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
      <div class="text-sm font-medium ">by John Doe</div>
    </CardSection>

    <Separator class="dark" inset />

    <CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>\`
  }
}`,...(q=(v=i.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var h,w,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      CardSection,
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">\${args.default}</Card>
    \`
  }),
  args: {
    bordered: true,
    flat: true,
    class: 'bg-background text-background-foreground w-full max-w-[250px]',
    default: \`
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
    </CardSection>

    <CardSection class="pt-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </CardSection>

    <Separator class="dark" inset />

    <CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </CardSection>\`
  }
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var B,$,A;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      CardSection,
      CardActions,
      Separator,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">\${args.default}</Card>
    \`
  }),
  args: {
    class: 'bg-teal-600 text-white',
    default: \`
      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>

      <Separator class="dark" />

      <CardActions vertical>
        <Button flat>Action 1</Button>
        <Button flat>Action 2</Button>
      </CardActions>
    \`
  }
}`,...(A=($=s.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var L,_,O;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      CardSection,
      CardActions,
      Separator,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">\${args.default}</Card>
    \`
  }),
  args: {
    class: 'bg-background text-background-foreground w-full max-w-[250px]',
    default: \`
      <img src="https://cdn.quasar.dev/img/mountains.jpg"/>

      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection class="pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>
    \`
  }
}`,...(O=(_=u.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var U,y,P;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      CardSection,
      CardActions,
      Separator,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">\${args.default}</Card>
    \`
  }),
  args: {
    class: 'bg-background text-background-foreground w-full max-w-[250px]',
    default: \`
      <img src="https://cdn.quasar.dev/img/mountains.jpg"/>

      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection class="pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>
    \`
  }
}`,...(P=(y=c.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const E=["Basic","CustomBackground","Bordered","FlatBordered","WithActions","MediaContent","BasicHorizontal"];export{r as Basic,c as BasicHorizontal,i as Bordered,o as CustomBackground,d as FlatBordered,u as MediaContent,s as WithActions,E as __namedExportsOrder,W as default};
