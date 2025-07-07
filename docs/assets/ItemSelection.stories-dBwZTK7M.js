import{b as m,a as r,_ as i,c as o}from"./index-BvdQtne7.js";import"./utils-CiSxPhq7.js";import"./iframe-Cjbyr5I3.js";import"./ripple-CsoxYJ_M.js";import"./Primitive-SW5QjEaI.js";const f={title:"UI/List/ItemSelection",component:m,tags:["autodocs"]},t={render:e=>({components:{List:o,Item:i,ItemSelection:m,ItemLabel:r},setup(){return{args:e}},template:`
      <List bordered separator rounded class="text-primary">
        <Item>
          <ItemSelection v-bind="args">${e.default}</ItemSelection>
        </item>
        <Item>
          <ItemSelection v-bind="args">${e.default}</ItemSelection>
        </item>
        <Item>
          <ItemSelection v-bind="args">${e.default}</ItemSelection>
        </item>
      </List>
    `}),args:{avatar:!1,thumbnail:!1,side:!1,top:!1,noWrap:!1,class:"text-primary",default:`
      <ItemLabel>Item</ItemLabel>
      <ItemLabel caption>Caption</ItemLabel>
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
        <Item>
          <ItemSelection v-bind="args">\${args.default}</ItemSelection>
        </item>
        <Item>
          <ItemSelection v-bind="args">\${args.default}</ItemSelection>
        </item>
        <Item>
          <ItemSelection v-bind="args">\${args.default}</ItemSelection>
        </item>
      </List>
    \`
  }),
  args: {
    avatar: false,
    thumbnail: false,
    side: false,
    top: false,
    noWrap: false,
    class: 'text-primary',
    default: \`
      <ItemLabel>Item</ItemLabel>
      <ItemLabel caption>Caption</ItemLabel>
    \`
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["Basic"];export{t as Basic,b as __namedExportsOrder,f as default};
