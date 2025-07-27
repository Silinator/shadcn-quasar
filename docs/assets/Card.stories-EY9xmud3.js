import{_ as P}from"./Button-D0cLHiqF.js";import{_ as n,a,b as m}from"./index-CIhVsyu2.js";import{_ as t}from"./index-Bg4Rv4Oc.js";import{_ as D}from"./VideoFrame-pLcM0jLj.js";import"./iframe-C1nf-jxf.js";import"./ripple-CsoxYJ_M.js";import"./utils-DheDpAxB.js";import"./index-CTWEWApt.js";import"./Primitive-lODkUz4w.js";const I={title:"UI/Card/Card",component:n,tags:["autodocs"]},o={render:e=>({components:{Card:n,CardSection:a},setup(){return{args:e}},template:`
      <Card v-bind="args">${e.default}</Card>
    `}),args:{class:"bg-background text-background-foreground w-full max-w-[250px]",default:`<CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`}},r={render:e=>({components:{Card:n,CardSection:a},setup(){return{args:e}},template:`
      <Card v-bind="args">${e.default}</Card>
    `}),args:{class:"bg-radial from-blue-400 to-blue-700 text-white w-full max-w-[250px]",default:`
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
      <div class="text-sm font-medium ">by John Doe</div>
    </CardSection>

    <CardSection class="pt-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`}},i={render:e=>({components:{Card:n,CardSection:a,Separator:t},setup(){return{args:e}},template:`
      <Card v-bind="args">${e.default}</Card>
    `}),args:{bordered:!0,class:"bg-gray-700 text-white w-full max-w-[250px]",default:`
    <CardSection>
      <div class="text-xl font-medium leading-8">Our Changing Planet</div>
      <div class="text-sm font-medium ">by John Doe</div>
    </CardSection>

    <Separator class="dark" inset />

    <CardSection>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardSection>`}},d={render:e=>({components:{Card:n,CardSection:a,Separator:t},setup(){return{args:e}},template:`
      <Card v-bind="args">${e.default}</Card>
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
    </CardSection>`}},s={render:e=>({components:{Card:n,CardSection:a,CardActions:m,Separator:t,Button:P},setup(){return{args:e}},template:`
      <Card v-bind="args">${e.default}</Card>
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
    `}},c={render:e=>({components:{Card:n,CardSection:a,CardActions:m,Separator:t,Button:P},setup(){return{args:e}},template:`
      <Card v-bind="args">${e.default}</Card>
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
    `}},u={render:e=>({components:{Card:n,CardSection:a,CardActions:m,Separator:t,VideoFrame:D},setup(){return{args:e}},template:`
      <Card v-bind="args">${e.default}</Card>
    `}),args:{class:"bg-background text-background-foreground w-full max-w-[300px]",default:`
      <VideoFrame src="https://www.youtube.com/embed/dQw4w9WgXcQ"/>

      <CardSection>
        <div class="text-xl font-medium leading-8">Our Changing Planet</div>
        <div class="text-sm font-medium ">by John Doe</div>
      </CardSection>

      <CardSection class="pt-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>
    `}};var l,p,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var C,x,b;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,f,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var q,w,h;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(h=(w=d.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var k,B,$;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...($=(B=s.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var _,A,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var y,O,U;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      CardSection,
      CardActions,
      Separator,
      VideoFrame
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
    class: 'bg-background text-background-foreground w-full max-w-[300px]',
    default: \`
      <VideoFrame src="https://www.youtube.com/embed/dQw4w9WgXcQ"/>

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
}`,...(U=(O=u.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const z=["Basic","CustomBackground","Bordered","FlatBordered","WithActions","MediaContent","Video"];export{o as Basic,i as Bordered,r as CustomBackground,d as FlatBordered,c as MediaContent,u as Video,s as WithActions,z as __namedExportsOrder,I as default};
