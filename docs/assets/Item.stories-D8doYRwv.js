import{_ as s,a as m,b as i,c as l}from"./index-yPXbt6OS.js";import"./index-CTWEWApt.js";import"./utils-DheDpAxB.js";import"./iframe-C1nf-jxf.js";import"./ripple-CsoxYJ_M.js";import"./Primitive-lODkUz4w.js";const u={title:"UI/List/Item",component:s,tags:["autodocs"]},t={render:e=>({components:{List:l,Item:s,ItemSelection:i,ItemLabel:m},setup(){return{args:e}},template:`
      <List bordered separator rounded class="text-primary">
        <Item v-bind="args">${e.default}</item>
        <Item v-bind="args">${e.default}</item>
        <Item v-bind="args">${e.default}</item>
      </List>
    `}),args:{clickable:!0,ripple:!0,dense:!1,disable:!1,class:"text-primary",default:`
      <ItemSelection>
        <ItemLabel>Item</ItemLabel>
        <ItemLabel caption>Caption</ItemLabel>
      </ItemSelection>
    `}};var a,n,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection,
      ItemLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <List bordered separator rounded class="text-primary">
        <Item v-bind="args">\${args.default}</item>
        <Item v-bind="args">\${args.default}</item>
        <Item v-bind="args">\${args.default}</item>
      </List>
    \`
  }),
  args: {
    clickable: true,
    ripple: true,
    dense: false,
    disable: false,
    class: 'text-primary',
    default: \`
      <ItemSelection>
        <ItemLabel>Item</ItemLabel>
        <ItemLabel caption>Caption</ItemLabel>
      </ItemSelection>
    \`
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const f=["Basic"];export{t as Basic,f as __namedExportsOrder,u as default};
