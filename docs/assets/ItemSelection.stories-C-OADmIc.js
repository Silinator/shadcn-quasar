import{b as s,a as r,_ as i,c as o}from"./index-yPXbt6OS.js";import"./index-CTWEWApt.js";import"./utils-DheDpAxB.js";import"./iframe-C1nf-jxf.js";import"./ripple-CsoxYJ_M.js";import"./Primitive-lODkUz4w.js";const b={title:"UI/List/ItemSelection",component:s,tags:["autodocs"]},t={render:e=>({components:{List:o,Item:i,ItemSelection:s,ItemLabel:r},setup(){return{args:e}},template:`
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
    `}};var a,n,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const u=["Basic"];export{t as Basic,u as __namedExportsOrder,b as default};
