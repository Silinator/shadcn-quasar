import{_ as l}from"./Button-BGa9Yx94.js";import{b as e,a as u,_ as m}from"./index-BTGwtDKY.js";import{_ as g}from"./index-DSnkdgGc.js";import"./iframe-WuD68RKc.js";import"./ripple-CsoxYJ_M.js";import"./utils-DheDpAxB.js";import"./index-CTWEWApt.js";import"./Primitive-DydEiwUC.js";const b={title:"UI/Card/CardActions",component:e,tags:["autodocs"]},t={render:n=>({components:{Card:m,CardSection:u,CardActions:e,Separator:g,Button:l},setup(){return{args:n}},template:`
      <Card class="max-w-[250px]">
        <CardSection class="bg-blue-500 text-white">
          <div class="text-xl font-medium leading-8">Our Changing Planet</div>
          <div class="text-sm font-medium">by John Doe</div>
        </CardSection>

        <Separator/>

        <CardActions  v-bind="args">
          ${n.default}
        </CardActions>
      </Card>
    `}),args:{align:"right",default:`
      <Button flat>Action 1</Button>
      <Button flat>Action 2</Button>
    `}},a={render:n=>({components:{Card:m,CardSection:u,CardActions:e,Separator:g,Button:l},setup(){return{args:n}},template:`
      <Card class="max-w-[250px]">
        <CardSection class="bg-teal-600 text-white">
          <div class="text-xl font-medium leading-8">Our Changing Planet</div>
          <div class="text-sm font-medium">by John Doe</div>
        </CardSection>

        <Separator/>

        <CardActions  v-bind="args">
          ${n.default}
        </CardActions>
      </Card>
    `}),args:{align:"center",vertical:!0,default:`
      <Button flat>Action 1</Button>
      <Button flat>Action 2</Button>
    `}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      <Card class="max-w-[250px]">
        <CardSection class="bg-blue-500 text-white">
          <div class="text-xl font-medium leading-8">Our Changing Planet</div>
          <div class="text-sm font-medium">by John Doe</div>
        </CardSection>

        <Separator/>

        <CardActions  v-bind="args">
          \${args.default}
        </CardActions>
      </Card>
    \`
  }),
  args: {
    align: 'right',
    default: \`
      <Button flat>Action 1</Button>
      <Button flat>Action 2</Button>
    \`
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      <Card class="max-w-[250px]">
        <CardSection class="bg-teal-600 text-white">
          <div class="text-xl font-medium leading-8">Our Changing Planet</div>
          <div class="text-sm font-medium">by John Doe</div>
        </CardSection>

        <Separator/>

        <CardActions  v-bind="args">
          \${args.default}
        </CardActions>
      </Card>
    \`
  }),
  args: {
    align: 'center',
    vertical: true,
    default: \`
      <Button flat>Action 1</Button>
      <Button flat>Action 2</Button>
    \`
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const _=["AligningActions","AligningVerticalActions"];export{t as AligningActions,a as AligningVerticalActions,_ as __namedExportsOrder,b as default};
