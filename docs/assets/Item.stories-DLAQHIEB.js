import{_ as r,a as m,b as i,c as l}from"./index-BvdQtne7.js";import"./utils-CiSxPhq7.js";import"./iframe-Cjbyr5I3.js";import"./ripple-CsoxYJ_M.js";import"./Primitive-SW5QjEaI.js";const b={title:"UI/List/Item",component:r,tags:["autodocs"]},t={render:e=>({components:{List:l,Item:r,ItemSelection:i,ItemLabel:m},setup(){return{args:e}},template:`
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
    `}};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["Basic"];export{t as Basic,u as __namedExportsOrder,b as default};
