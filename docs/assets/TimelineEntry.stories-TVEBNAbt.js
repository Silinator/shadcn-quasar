import{b as r,a as l,_ as m}from"./index-BankAgfO.js";import{I as o}from"./Icon-DM8DZhqr.js";import{e as a,a as s,b as u,c as T,d as c,_ as d}from"./index-D30SOrLn.js";import"./index-CTWEWApt.js";import"./utils-DheDpAxB.js";import"./iframe-C1nf-jxf.js";import"./Primitive-lODkUz4w.js";const I={title:"UI/Timeline/TimelineEntry",component:a,tags:["autodocs"]},n={render:e=>({components:{Timeline:d,TimelineEntry:a,TimelineEntryDot:c,TimelineEntrySubTitle:T,TimelineEntryContent:u,TimelineEntryTitle:s,Icon:o,Avatar:m,AvatarImage:l,AvatarFallback:r},setup(){return{args:e}},template:`
      <Timeline>
        <TimelineEntry v-bind="args">${e.default}</TimelineEntry>
        <TimelineEntry v-bind="args">${e.default}</TimelineEntry>
      </timeline>
    `}),args:{class:"",default:`
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    `}},i={render:e=>({components:{Timeline:d,TimelineEntry:a,TimelineEntryDot:c,TimelineEntrySubTitle:T,TimelineEntryContent:u,TimelineEntryTitle:s,Icon:o,Avatar:m,AvatarImage:l,AvatarFallback:r},setup(){return{args:e}},template:`
      <Timeline layout="loose">
        <TimelineEntry v-bind="args">${e.default}</TimelineEntry>
        <TimelineEntry side="right">${e.default}</TimelineEntry>
      </timeline>
    `}),args:{class:"",default:`
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white">
        <Icon name="delete" filled />
      </TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    `}},t={render:e=>({components:{Timeline:d,TimelineEntry:a,TimelineEntryDot:c,TimelineEntrySubTitle:T,TimelineEntryContent:u,TimelineEntryTitle:s,Icon:o,Avatar:m,AvatarImage:l,AvatarFallback:r},setup(){return{args:e}},template:`
      <Timeline>
        <TimelineEntry v-bind="args">${e.default}</TimelineEntry>
      </timeline>
    `}),args:{class:"",heading:!0,default:`
      Timeline heading
    `}};var E,y,p;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Timeline,
      TimelineEntry,
      TimelineEntryDot,
      TimelineEntrySubTitle,
      TimelineEntryContent,
      TimelineEntryTitle,
      Icon,
      Avatar,
      AvatarImage,
      AvatarFallback
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Timeline>
        <TimelineEntry v-bind="args">\${args.default}</TimelineEntry>
        <TimelineEntry v-bind="args">\${args.default}</TimelineEntry>
      </timeline>
    \`
  }),
  args: {
    class: '',
    default: \`
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    \`
  }
}`,...(p=(y=n.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var g,b,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Timeline,
      TimelineEntry,
      TimelineEntryDot,
      TimelineEntrySubTitle,
      TimelineEntryContent,
      TimelineEntryTitle,
      Icon,
      Avatar,
      AvatarImage,
      AvatarFallback
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Timeline layout="loose">
        <TimelineEntry v-bind="args">\${args.default}</TimelineEntry>
        <TimelineEntry side="right">\${args.default}</TimelineEntry>
      </timeline>
    \`
  }),
  args: {
    class: '',
    default: \`
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white">
        <Icon name="delete" filled />
      </TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    \`
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,_,q;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Timeline,
      TimelineEntry,
      TimelineEntryDot,
      TimelineEntrySubTitle,
      TimelineEntryContent,
      TimelineEntryTitle,
      Icon,
      Avatar,
      AvatarImage,
      AvatarFallback
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Timeline>
        <TimelineEntry v-bind="args">\${args.default}</TimelineEntry>
      </timeline>
    \`
  }),
  args: {
    class: '',
    heading: true,
    default: \`
      Timeline heading
    \`
  }
}`,...(q=(_=t.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const F=["Basic","LooseLayout","Header"];export{n as Basic,t as Header,i as LooseLayout,F as __namedExportsOrder,I as default};
