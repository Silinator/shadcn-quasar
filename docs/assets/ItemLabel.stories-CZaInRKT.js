import{a as l,b as i,_ as s,c as o}from"./index-BvdQtne7.js";import"./utils-CiSxPhq7.js";import"./iframe-Cjbyr5I3.js";import"./ripple-CsoxYJ_M.js";import"./Primitive-SW5QjEaI.js";const L={title:"UI/List/ItemLabel",component:l,tags:["autodocs"]},t={render:e=>({components:{List:o,Item:s,ItemSelection:i,ItemLabel:l},setup(){return{args:e}},template:`
      <List bordered separator rounded class="text-primary">
        <Item>
          <ItemSelection>
            <ItemLabel v-bind="args">${e.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
        <Item>
          <ItemSelection>
            <ItemLabel v-bind="args">${e.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
        <Item>
          <ItemSelection>
            <ItemLabel v-bind="args">${e.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
      </List>
    `}),args:{overline:!1,caption:!1,header:!1,class:"text-primary",default:`
      <ItemLabel>Item</ItemLabel>
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
          <ItemSelection>
            <ItemLabel v-bind="args">\${args.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
        <Item>
          <ItemSelection>
            <ItemLabel v-bind="args">\${args.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
        <Item>
          <ItemSelection>
            <ItemLabel v-bind="args">\${args.default}</ItemLabel>
            <ItemLabel caption>Caption</ItemLabel>
          </ItemSelection>
        </item>
      </List>
    \`
  }),
  args: {
    overline: false,
    caption: false,
    header: false,
    class: 'text-primary',
    default: \`
      <ItemLabel>Item</ItemLabel>
    \`
  }
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const d=["Basic"];export{t as Basic,d as __namedExportsOrder,L as default};
