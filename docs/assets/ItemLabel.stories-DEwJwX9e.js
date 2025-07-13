import{a as l,b as i,_ as o,c as r}from"./index-CxSoStUe.js";import"./index-nE_6pgoo.js";import"./utils-SOMcHunM.js";import"./iframe-CWoZYpkL.js";import"./ripple-CsoxYJ_M.js";import"./Primitive-Bo5iDq2y.js";const d={title:"UI/List/ItemLabel",component:l,tags:["autodocs"]},t={render:e=>({components:{List:r,Item:o,ItemSelection:i,ItemLabel:l},setup(){return{args:e}},template:`
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
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const f=["Basic"];export{t as Basic,f as __namedExportsOrder,d as default};
