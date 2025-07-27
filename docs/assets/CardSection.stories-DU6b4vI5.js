import{_ as i}from"./Button-D0cLHiqF.js";import{a as e,b as s,_ as d}from"./index-CIhVsyu2.js";import{_ as c}from"./index-Bg4Rv4Oc.js";import"./iframe-C1nf-jxf.js";import"./ripple-CsoxYJ_M.js";import"./utils-DheDpAxB.js";import"./index-CTWEWApt.js";import"./Primitive-lODkUz4w.js";const _={title:"UI/Card/CardSection",component:e,tags:["autodocs"]},a={render:n=>({components:{Card:d,CardSection:e,CardActions:s,Separator:c,Button:i},setup(){return{args:n}},template:`
      <Card flat bordered class="max-w-[350px] w-full">
        <CardSection v-bind="args">
          ${n.default}
        </CardSection>
      </Card>
    `}),args:{class:"bg-background text-background-foreground",horizontal:!0,default:`
      <CardSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>

      <img
        class="w-5/12 h-auto object-cover object-[50%_50%]"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
    `}};var o,r,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      <Card flat bordered class="max-w-[350px] w-full">
        <CardSection v-bind="args">
          \${args.default}
        </CardSection>
      </Card>
    \`
  }),
  args: {
    class: 'bg-background text-background-foreground',
    horizontal: true,
    default: \`
      <CardSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </CardSection>

      <img
        class="w-5/12 h-auto object-cover object-[50%_50%]"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
    \`
  }
}`,...(t=(r=a.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const x=["BasicHorizontal"];export{a as BasicHorizontal,x as __namedExportsOrder,_ as default};
