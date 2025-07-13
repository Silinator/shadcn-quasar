import{_ as i}from"./index-BSF_BZam.js";import{_ as c}from"./Badge-ysz_21Sz.js";import{_ as K}from"./Button-BGa9Yx94.js";import{I as l}from"./Icon-CJ4lLQC7.js";import{c as t,b as n,_ as a,a as s}from"./index-3qlKoGEH.js";import{_ as m}from"./index-DSnkdgGc.js";import{_ as Q,a as X}from"./index-BKV7WZlf.js";import"./index-CTWEWApt.js";import"./utils-DheDpAxB.js";import"./iframe-WuD68RKc.js";import"./Primitive-DydEiwUC.js";import"./ripple-CsoxYJ_M.js";const re={title:"UI/List/List",component:t,tags:["autodocs"]},o={render:e=>({components:{List:t,Item:a,ItemSelection:n},setup(){return{args:e}},template:`
      <List v-bind="args">${e.default}</List>
    `}),args:{bordered:!0,separator:!0,class:"text-primary",default:`
      <Item clickable ripple>
        <ItemSelection>Item 1</ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>Item 2</ItemSelection>
        <ItemSelection side>3</ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>Item 3</ItemSelection>
      </Item>
    `}},r={render:e=>({components:{List:t,Item:a,ItemSelection:n},setup(){return{args:e}},template:`
      <List v-bind="args">${e.default}</List>
    `}),args:{bordered:!0,separator:!0,class:"text-primary",default:`
      <Item clickable dense ripple>
        <ItemSelection>Item 1</ItemSelection>
      </Item>
      <Item clickable dense ripple>
        <ItemSelection>Item 2</ItemSelection>
        <ItemSelection side>3</ItemSelection>
      </Item>
      <Item clickable dense ripple>
        <ItemSelection>Item 3</ItemSelection>
      </Item>
    `}},I={render:e=>({components:{List:t,Item:a,ItemSelection:n,Separator:m,Icon:l,Avatar:i},setup(){return{args:e}},template:`
      <List v-bind="args">${e.default}</List>
    `}),args:{bordered:!0,class:"text-primary max-w-80",default:`
      <Item clickable ripple>
        <ItemSelection avatar>
          <Icon class="text-blue-500" name="bluetooth" />
        </ItemSelection>
        <ItemSelection>Icon as avatar</ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection avatar>
          <Avatar class="bg-amber-500 text-white">
            <Icon name="bluetooth" />
          </Avatar>
        </ItemSelection>
        <ItemSelection>Icon as avatar</ItemSelection>
      </Item>
      <Separator />
      <Item clickable ripple>
        <ItemSelection avatar>
          <Avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </Avatar>
        </ItemSelection>
        <ItemSelection>Image avatar</ItemSelection>
      </Item>
      <Separator />
      <Item clickable ripple>
        <ItemSelection thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </ItemSelection>
        <ItemSelection>List item Thumbnail</ItemSelection>
      </Item>
    `}},p={render:e=>({components:{List:t,Item:a,ItemSelection:n,Icon:l,Avatar:i},setup(){return{args:e}},template:`
      <List v-bind="args">${e.default}</List>
    `}),args:{bordered:!0,separator:!0,class:"text-primary max-w-80",default:`
      <Item clickable ripple>
        <ItemSelection>Icon as avatar</ItemSelection>
        <ItemSelection side>
          <Icon class="text-blue-500" name="bluetooth" />
        </ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>Icon as avatar</ItemSelection>
        <ItemSelection side>
          <Avatar class="bg-amber-500 text-white">
            <Icon name="bluetooth" />
          </Avatar>
        </ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>Image avatar</ItemSelection>
        <ItemSelection side>
          <Avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </Avatar>
        </ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>List item Thumbnail</ItemSelection>
        <ItemSelection thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </ItemSelection>
      </Item>
    `}},d={render:e=>({components:{List:t,Item:a,ItemSelection:n,ItemLabel:s,Icon:l,Badge:c,Separator:m},setup(){return{args:e}},template:`
      <List v-bind="args">${e.default}</List>
    `}),args:{bordered:!1,separator:!1,class:"text-primary max-w-80",default:`
      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption class="line-clamp-2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>5 min ago</ItemLabel>
          <Icon name="star" size="sm" filled class="text-yellow-300" />
        </ItemSelection>
      </Item>

      <Separator spaced inset />

      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>Voted!</ItemLabel>
        </ItemSelection>
      </Item>

      <Separator spaced inset />

      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <Badge class="bg-teal-500 text-white">10k</Badge>
        </ItemSelection>
      </Item>
      
      <Separator spaced inset />

      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>2 min ago</ItemLabel>
          <div class="text-orange-500">
            <Icon name="star" filled size="xs" />
            <Icon name="star" filled size="xs" />
            <Icon name="star" filled size="xs" />
          </div>
        </ItemSelection>
      </Item>
            
      <Separator spaced inset />

      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>
    `}},b={render:e=>({components:{List:t,Item:a,ItemSelection:n,ItemLabel:s,Avatar:i,Icon:l,Badge:c,Separator:m},setup(){return{args:e}},template:`
      <List v-bind="args">${e.default}</List>
    `}),args:{bordered:!0,padding:!0,class:"text-primary max-w-80",default:`
      <Item>
        <ItemSelection>
          <ItemLabel overline>OVERLINE</ItemLabel>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>5 min ago</ItemLabel>
        </ItemSelection>
      </Item>

      <Separator spaced />
      <ItemLabel header>List Header</ItemLabel>

      <Item>
        <ItemSelection avatar>
          <Icon class="text-blue-500" name="bluetooth" />
        </ItemSelection>
        <ItemSelection>List item</ItemSelection>
        <ItemSelection side>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>

      <Separator spaced inset="item" />

      <Item>
        <ItemSelection top avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">
            <Icon name="bluetooth" />
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption class="line-clamp-2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>5 min ago</ItemLabel>
          <Icon name="star" filled class="text-yellow-300" />
        </ItemSelection>
      </Item>
      
      <Separator spaced inset="item" />

      <Item>
        <ItemSelection top avatar>
          <Avatar class="bg-blue-500 text-white" square size="lg">
            <Icon name="bluetooth" />
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>
            
      <Separator spaced inset="item" />

      <Item>
        <ItemSelection top avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <Badge class="bg-blue-500 text-white">10k</Badge>
        </ItemSelection>
      </Item>
                  
      <Separator spaced inset="item" />

      <Item>
        <ItemSelection top avatar>
          <Avatar rounded size="lg">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>

      <Separator spaced />

      <Item>
        <ItemSelection top thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>
    `}},S={render:e=>({components:{Toolbar:X,ToolbarTitle:Q,List:t,Item:a,ItemSelection:n,ItemLabel:s,Avatar:i,Icon:l,Badge:c,Separator:m},setup(){return{args:e}},template:`
      <div class="max-w-80">
        <Toolbar class="bg-primary text-primary-foreground shadow-md">
          <ToolbarTitle>Contacts</ToolbarTitle>
        </Toolbar>

        <List v-bind="args">${e.default}</List>
      </div>
    `}),args:{bordered:!0,class:"text-primary",default:`
      <Item clickable ripple class="my-2">
        <ItemSelection avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">R</Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Ruddy Jedrzej</ItemLabel>
          <ItemLabel caption class="truncate">rjedrzej0@discuz.net</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-green-600" />
        </ItemSelection>
      </Item>

      <Item clickable ripple class="my-2">
        <ItemSelection avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">M</Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Mallorie Alessandrini</ItemLabel>
          <ItemLabel caption class="truncate">malessandrini1@marketwatch.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-green-600" />
        </ItemSelection>
      </Item>

      <Item clickable ripple class="my-2">
        <ItemSelection avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">E</Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Elisabetta Wicklen</ItemLabel>
          <ItemLabel caption class="truncate">ewicklen2@microsoft.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-green-600" />
        </ItemSelection>
      </Item>

      <Item clickable ripple class="my-2">
        <ItemSelection avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">S</Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Seka Fawdrey</ItemLabel>
          <ItemLabel caption class="truncate">sfawdrey3@wired.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-green-600" />
        </ItemSelection>
      </Item>

      <Separator />

      <ItemLabel header>Offline</ItemLabel>

      <Item clickable ripple class="mb-2">
        <ItemSelection avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Brunhilde Panswick</ItemLabel>
          <ItemLabel caption class="truncate">bpanswick4@csmonitor.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-gray-400" />
        </ItemSelection>
      </Item>
      
      <Item clickable ripple class="mb-2">
        <ItemSelection avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar6.jpg">
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Brunhilde Panswick</ItemLabel>
          <ItemLabel caption class="truncate">bpanswick4@csmonitor.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-gray-400" />
        </ItemSelection>
      </Item>
    `}},u={render:e=>({components:{List:t,Item:a,ItemSelection:n,ItemLabel:s,Avatar:i,Icon:l,Badge:c,Separator:m},setup(){return{args:e}},template:`
      <div>
        <List v-bind="args">${e.default}</List>
      </div>
    `}),args:{bordered:!0,rounded:!0,class:"text-primary max-w-80",default:`
      <ItemLabel header>Friends</ItemLabel>

      <Item clickable ripple>
        <ItemSelection avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="tuncate">Brunch this weekend?</ItemLabel>
          <ItemLabel caption class="line-clamp-2">
            <span class="font-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </ItemLabel>
        </ItemSelection>

        <ItemSelection side top>
          1 min ago
        </ItemSelection>
      </Item>

      <Separator inset="item" />

      <Item clickable ripple>
        <ItemSelection avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="tuncate">Linear Project</ItemLabel>
          <ItemLabel caption class="line-clamp-2">
            <span class="font-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </ItemLabel>
        </ItemSelection>

        <ItemSelection side top>
          1 min ago
        </ItemSelection>
      </Item>
    `}},L={render:e=>({components:{List:t,Item:a,ItemSelection:n,ItemLabel:s,Avatar:i,Icon:l,Badge:c,Separator:m,Button:K},setup(){return{args:e}},template:`
      <div>
        <List v-bind="args">${e.default}</List>
      </div>
    `}),args:{bordered:!0,rounded:!0,class:"text-primary max-w-[600px]",default:`
      <ItemLabel header>Google Inbox style</ItemLabel>

      <Item>
        <ItemSelection avatar top>
          <Icon name="account_tree" variant="sharp" filled class="text-black text-[34px]" />
        </ItemSelection>

        <ItemSelection top class="h-auto w-1/6 hidden md:flex">
          <ItemLabel class="mt-2">GitHub</ItemLabel>
        </ItemSelection>

        <ItemSelection top>
          <ItemLabel class="truncate">
            <span class="font-medium">[quasarframework/quasar]</span>
            <span class="text-zinc-600"> - GitHub repository</span>
          </ItemLabel>
          <ItemLabel caption class="truncate">
            @rstoenescu in #3: > Generic type parameter for props
          </ItemLabel>
          <ItemLabel class="truncate mt-1 font-bold text-blue-500 uppercase">
            <span class="cursor-pointer">Open in GitHub</span>
          </ItemLabel>
        </ItemSelection>

        <ItemSelection top side>
          <div class="text-zinc-600 -mt-1 -ml-1">
            <Button class="hidden sm:inline-flex text-xs" flat dense round>
              <Icon name="delete" filled class="text-xl" />
            </Button>
            <Button class="hidden sm:inline-flex text-xs" size="12px" flat dense round>
              <Icon name="done" filled class="text-xl" />
            </Button>
            <Button class="text-xs" flat dense round>
              <Icon name="more_vert" filled class="text-xl" />
            </Button>
          </div>
        </ItemSelection>
      </Item>

      <Separator spaced />

      <Item>
        <ItemSelection avatar top>
          <Icon name="account_tree" variant="sharp" filled class="text-black text-[34px]" />
        </ItemSelection>

        <ItemSelection top class="h-auto w-1/6 hidden md:flex">
          <ItemLabel class="mt-2">GitHub</ItemLabel>
        </ItemSelection>

        <ItemSelection top>
          <ItemLabel class="truncate">
            <span class="font-medium">[quasarframework/quasar]</span>
            <span class="text-zinc-600"> - GitHub repository</span>
          </ItemLabel>
          <ItemLabel caption class="truncate">
            @rstoenescu in #1: > The build system
          </ItemLabel>
          <ItemLabel class="truncate mt-1 font-bold text-blue-500 uppercase">
            <span class="cursor-pointer">Open in GitHub</span>
          </ItemLabel>
        </ItemSelection>

        <ItemSelection top side>
          <div class="text-zinc-600 -mt-1 -ml-1">
            <Button class="hidden sm:inline-flex text-xs" flat dense round>
              <Icon name="delete" filled class="text-xl" />
            </Button>
            <Button class="hidden sm:inline-flex text-xs" size="12px" flat dense round>
              <Icon name="done" filled class="text-xl" />
            </Button>
            <Button class="text-xs" flat dense round>
              <Icon name="more_vert" filled class="text-xl" />
            </Button>
          </div>
        </ItemSelection>
      </Item>
    `}},g={render:e=>({components:{List:t,Item:a,ItemSelection:n,ItemLabel:s,Avatar:i,Icon:l,Badge:c,Separator:m},setup(){return{args:e}},template:`
      <div>
        <List v-bind="args">${e.default}</List>
      </div>
    `}),args:{bordered:!0,rounded:!0,padding:!0,class:"text-primary max-w-80",default:`
      <ItemLabel header>Folders</ItemLabel>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-blue-500 text-white" size="lg">
            <Icon name="folder" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Photos</ItemLabel>
          <ItemLabel caption>February 22nd, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-green-500" />
        </ItemSelection>
      </Item>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-amber-500 text-white" size="lg">
            <Icon name="folder" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Movies</ItemLabel>
          <ItemLabel caption>March 1st, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-gray-500" />
        </ItemSelection>
      </Item>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-teal-600 text-white" size="lg">
            <Icon name="folder" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Photos</ItemLabel>
          <ItemLabel caption>January 15th, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-gray-500" />
        </ItemSelection>
      </Item>

      <Separator spaced />

      <ItemLabel header>Files</ItemLabel>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-zinc-400 text-white" size="lg">
            <Icon name="assignment" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Expenses spreadsheet</ItemLabel>
          <ItemLabel caption>March 2nd, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-gray-500" />
        </ItemSelection>
      </Item>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-zinc-400 text-white" size="lg">
            <Icon name="place" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Places to visit</ItemLabel>
          <ItemLabel caption>February 22, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-yellow-400" />
        </ItemSelection>
      </Item>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-zinc-400 text-white" size="lg">
            <Icon name="library_music" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">My favorite song</ItemLabel>
          <ItemLabel caption>Singing it all day</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-gray-500" />
        </ItemSelection>
      </Item>
    `}};var v,x,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <List v-bind="args">\${args.default}</List>
    \`
  }),
  args: {
    bordered: true,
    separator: true,
    class: 'text-primary',
    default: \`
      <Item clickable ripple>
        <ItemSelection>Item 1</ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>Item 2</ItemSelection>
        <ItemSelection side>3</ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>Item 3</ItemSelection>
      </Item>
    \`
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,y,A;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <List v-bind="args">\${args.default}</List>
    \`
  }),
  args: {
    bordered: true,
    separator: true,
    class: 'text-primary',
    default: \`
      <Item clickable dense ripple>
        <ItemSelection>Item 1</ItemSelection>
      </Item>
      <Item clickable dense ripple>
        <ItemSelection>Item 2</ItemSelection>
        <ItemSelection side>3</ItemSelection>
      </Item>
      <Item clickable dense ripple>
        <ItemSelection>Item 3</ItemSelection>
      </Item>
    \`
  }
}`,...(A=(y=r.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var w,z,k;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection,
      Separator,
      Icon,
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <List v-bind="args">\${args.default}</List>
    \`
  }),
  args: {
    bordered: true,
    class: 'text-primary max-w-80',
    default: \`
      <Item clickable ripple>
        <ItemSelection avatar>
          <Icon class="text-blue-500" name="bluetooth" />
        </ItemSelection>
        <ItemSelection>Icon as avatar</ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection avatar>
          <Avatar class="bg-amber-500 text-white">
            <Icon name="bluetooth" />
          </Avatar>
        </ItemSelection>
        <ItemSelection>Icon as avatar</ItemSelection>
      </Item>
      <Separator />
      <Item clickable ripple>
        <ItemSelection avatar>
          <Avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </Avatar>
        </ItemSelection>
        <ItemSelection>Image avatar</ItemSelection>
      </Item>
      <Separator />
      <Item clickable ripple>
        <ItemSelection thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </ItemSelection>
        <ItemSelection>List item Thumbnail</ItemSelection>
      </Item>
    \`
  }
}`,...(k=(z=I.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var B,_,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection,
      Icon,
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <List v-bind="args">\${args.default}</List>
    \`
  }),
  args: {
    bordered: true,
    separator: true,
    class: 'text-primary max-w-80',
    default: \`
      <Item clickable ripple>
        <ItemSelection>Icon as avatar</ItemSelection>
        <ItemSelection side>
          <Icon class="text-blue-500" name="bluetooth" />
        </ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>Icon as avatar</ItemSelection>
        <ItemSelection side>
          <Avatar class="bg-amber-500 text-white">
            <Icon name="bluetooth" />
          </Avatar>
        </ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>Image avatar</ItemSelection>
        <ItemSelection side>
          <Avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </Avatar>
        </ItemSelection>
      </Item>
      <Item clickable ripple>
        <ItemSelection>List item Thumbnail</ItemSelection>
        <ItemSelection thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </ItemSelection>
      </Item>
    \`
  }
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var $,T,j;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection,
      ItemLabel,
      Icon,
      Badge,
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <List v-bind="args">\${args.default}</List>
    \`
  }),
  args: {
    bordered: false,
    separator: false,
    class: 'text-primary max-w-80',
    default: \`
      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption class="line-clamp-2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>5 min ago</ItemLabel>
          <Icon name="star" size="sm" filled class="text-yellow-300" />
        </ItemSelection>
      </Item>

      <Separator spaced inset />

      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>Voted!</ItemLabel>
        </ItemSelection>
      </Item>

      <Separator spaced inset />

      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <Badge class="bg-teal-500 text-white">10k</Badge>
        </ItemSelection>
      </Item>
      
      <Separator spaced inset />

      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>2 min ago</ItemLabel>
          <div class="text-orange-500">
            <Icon name="star" filled size="xs" />
            <Icon name="star" filled size="xs" />
            <Icon name="star" filled size="xs" />
          </div>
        </ItemSelection>
      </Item>
            
      <Separator spaced inset />

      <Item>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>
    \`
  }
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var G,E,M;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection,
      ItemLabel,
      Avatar,
      Icon,
      Badge,
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <List v-bind="args">\${args.default}</List>
    \`
  }),
  args: {
    bordered: true,
    padding: true,
    class: 'text-primary max-w-80',
    default: \`
      <Item>
        <ItemSelection>
          <ItemLabel overline>OVERLINE</ItemLabel>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>5 min ago</ItemLabel>
        </ItemSelection>
      </Item>

      <Separator spaced />
      <ItemLabel header>List Header</ItemLabel>

      <Item>
        <ItemSelection avatar>
          <Icon class="text-blue-500" name="bluetooth" />
        </ItemSelection>
        <ItemSelection>List item</ItemSelection>
        <ItemSelection side>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>

      <Separator spaced inset="item" />

      <Item>
        <ItemSelection top avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">
            <Icon name="bluetooth" />
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption class="line-clamp-2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>5 min ago</ItemLabel>
          <Icon name="star" filled class="text-yellow-300" />
        </ItemSelection>
      </Item>
      
      <Separator spaced inset="item" />

      <Item>
        <ItemSelection top avatar>
          <Avatar class="bg-blue-500 text-white" square size="lg">
            <Icon name="bluetooth" />
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>
            
      <Separator spaced inset="item" />

      <Item>
        <ItemSelection top avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <Badge class="bg-blue-500 text-white">10k</Badge>
        </ItemSelection>
      </Item>
                  
      <Separator spaced inset="item" />

      <Item>
        <ItemSelection top avatar>
          <Avatar rounded size="lg">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>

      <Separator spaced />

      <Item>
        <ItemSelection top thumbnail>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Single line item</ItemLabel>
          <ItemLabel caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</ItemLabel>
        </ItemSelection>
        <ItemSelection side top>
          <ItemLabel caption>meta</ItemLabel>
        </ItemSelection>
      </Item>
    \`
  }
}`,...(M=(E=b.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var F,H,P;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Toolbar,
      ToolbarTitle,
      List,
      Item,
      ItemSelection,
      ItemLabel,
      Avatar,
      Icon,
      Badge,
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-80">
        <Toolbar class="bg-primary text-primary-foreground shadow-md">
          <ToolbarTitle>Contacts</ToolbarTitle>
        </Toolbar>

        <List v-bind="args">\${args.default}</List>
      </div>
    \`
  }),
  args: {
    bordered: true,
    class: 'text-primary',
    default: \`
      <Item clickable ripple class="my-2">
        <ItemSelection avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">R</Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Ruddy Jedrzej</ItemLabel>
          <ItemLabel caption class="truncate">rjedrzej0@discuz.net</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-green-600" />
        </ItemSelection>
      </Item>

      <Item clickable ripple class="my-2">
        <ItemSelection avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">M</Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Mallorie Alessandrini</ItemLabel>
          <ItemLabel caption class="truncate">malessandrini1@marketwatch.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-green-600" />
        </ItemSelection>
      </Item>

      <Item clickable ripple class="my-2">
        <ItemSelection avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">E</Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Elisabetta Wicklen</ItemLabel>
          <ItemLabel caption class="truncate">ewicklen2@microsoft.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-green-600" />
        </ItemSelection>
      </Item>

      <Item clickable ripple class="my-2">
        <ItemSelection avatar>
          <Avatar class="bg-blue-500 text-white" size="lg">S</Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Seka Fawdrey</ItemLabel>
          <ItemLabel caption class="truncate">sfawdrey3@wired.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-green-600" />
        </ItemSelection>
      </Item>

      <Separator />

      <ItemLabel header>Offline</ItemLabel>

      <Item clickable ripple class="mb-2">
        <ItemSelection avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Brunhilde Panswick</ItemLabel>
          <ItemLabel caption class="truncate">bpanswick4@csmonitor.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-gray-400" />
        </ItemSelection>
      </Item>
      
      <Item clickable ripple class="mb-2">
        <ItemSelection avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar6.jpg">
          </Avatar>
        </ItemSelection>
        <ItemSelection>
          <ItemLabel>Brunhilde Panswick</ItemLabel>
          <ItemLabel caption class="truncate">bpanswick4@csmonitor.com</ItemLabel>
        </ItemSelection>
        <ItemSelection side>
          <Icon name="chat_bubble" size="sm" filled class="text-gray-400" />
        </ItemSelection>
      </Item>
    \`
  }
}`,...(P=(H=S.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var O,J,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection,
      ItemLabel,
      Avatar,
      Icon,
      Badge,
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <List v-bind="args">\${args.default}</List>
      </div>
    \`
  }),
  args: {
    bordered: true,
    rounded: true,
    class: 'text-primary max-w-80',
    default: \`
      <ItemLabel header>Friends</ItemLabel>

      <Item clickable ripple>
        <ItemSelection avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="tuncate">Brunch this weekend?</ItemLabel>
          <ItemLabel caption class="line-clamp-2">
            <span class="font-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </ItemLabel>
        </ItemSelection>

        <ItemSelection side top>
          1 min ago
        </ItemSelection>
      </Item>

      <Separator inset="item" />

      <Item clickable ripple>
        <ItemSelection avatar>
          <Avatar size="lg">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="tuncate">Linear Project</ItemLabel>
          <ItemLabel caption class="line-clamp-2">
            <span class="font-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </ItemLabel>
        </ItemSelection>

        <ItemSelection side top>
          1 min ago
        </ItemSelection>
      </Item>
    \`
  }
}`,...(R=(J=u.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var C,D,V;L.parameters={...L.parameters,docs:{...(C=L.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection,
      ItemLabel,
      Avatar,
      Icon,
      Badge,
      Separator,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <List v-bind="args">\${args.default}</List>
      </div>
    \`
  }),
  args: {
    bordered: true,
    rounded: true,
    class: 'text-primary max-w-[600px]',
    default: \`
      <ItemLabel header>Google Inbox style</ItemLabel>

      <Item>
        <ItemSelection avatar top>
          <Icon name="account_tree" variant="sharp" filled class="text-black text-[34px]" />
        </ItemSelection>

        <ItemSelection top class="h-auto w-1/6 hidden md:flex">
          <ItemLabel class="mt-2">GitHub</ItemLabel>
        </ItemSelection>

        <ItemSelection top>
          <ItemLabel class="truncate">
            <span class="font-medium">[quasarframework/quasar]</span>
            <span class="text-zinc-600"> - GitHub repository</span>
          </ItemLabel>
          <ItemLabel caption class="truncate">
            @rstoenescu in #3: > Generic type parameter for props
          </ItemLabel>
          <ItemLabel class="truncate mt-1 font-bold text-blue-500 uppercase">
            <span class="cursor-pointer">Open in GitHub</span>
          </ItemLabel>
        </ItemSelection>

        <ItemSelection top side>
          <div class="text-zinc-600 -mt-1 -ml-1">
            <Button class="hidden sm:inline-flex text-xs" flat dense round>
              <Icon name="delete" filled class="text-xl" />
            </Button>
            <Button class="hidden sm:inline-flex text-xs" size="12px" flat dense round>
              <Icon name="done" filled class="text-xl" />
            </Button>
            <Button class="text-xs" flat dense round>
              <Icon name="more_vert" filled class="text-xl" />
            </Button>
          </div>
        </ItemSelection>
      </Item>

      <Separator spaced />

      <Item>
        <ItemSelection avatar top>
          <Icon name="account_tree" variant="sharp" filled class="text-black text-[34px]" />
        </ItemSelection>

        <ItemSelection top class="h-auto w-1/6 hidden md:flex">
          <ItemLabel class="mt-2">GitHub</ItemLabel>
        </ItemSelection>

        <ItemSelection top>
          <ItemLabel class="truncate">
            <span class="font-medium">[quasarframework/quasar]</span>
            <span class="text-zinc-600"> - GitHub repository</span>
          </ItemLabel>
          <ItemLabel caption class="truncate">
            @rstoenescu in #1: > The build system
          </ItemLabel>
          <ItemLabel class="truncate mt-1 font-bold text-blue-500 uppercase">
            <span class="cursor-pointer">Open in GitHub</span>
          </ItemLabel>
        </ItemSelection>

        <ItemSelection top side>
          <div class="text-zinc-600 -mt-1 -ml-1">
            <Button class="hidden sm:inline-flex text-xs" flat dense round>
              <Icon name="delete" filled class="text-xl" />
            </Button>
            <Button class="hidden sm:inline-flex text-xs" size="12px" flat dense round>
              <Icon name="done" filled class="text-xl" />
            </Button>
            <Button class="text-xs" flat dense round>
              <Icon name="more_vert" filled class="text-xl" />
            </Button>
          </div>
        </ItemSelection>
      </Item>
    \`
  }
}`,...(V=(D=L.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var N,W,U;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => ({
    components: {
      List,
      Item,
      ItemSelection,
      ItemLabel,
      Avatar,
      Icon,
      Badge,
      Separator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <List v-bind="args">\${args.default}</List>
      </div>
    \`
  }),
  args: {
    bordered: true,
    rounded: true,
    padding: true,
    class: 'text-primary max-w-80',
    default: \`
      <ItemLabel header>Folders</ItemLabel>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-blue-500 text-white" size="lg">
            <Icon name="folder" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Photos</ItemLabel>
          <ItemLabel caption>February 22nd, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-green-500" />
        </ItemSelection>
      </Item>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-amber-500 text-white" size="lg">
            <Icon name="folder" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Movies</ItemLabel>
          <ItemLabel caption>March 1st, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-gray-500" />
        </ItemSelection>
      </Item>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-teal-600 text-white" size="lg">
            <Icon name="folder" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Photos</ItemLabel>
          <ItemLabel caption>January 15th, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-gray-500" />
        </ItemSelection>
      </Item>

      <Separator spaced />

      <ItemLabel header>Files</ItemLabel>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-zinc-400 text-white" size="lg">
            <Icon name="assignment" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Expenses spreadsheet</ItemLabel>
          <ItemLabel caption>March 2nd, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-gray-500" />
        </ItemSelection>
      </Item>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-zinc-400 text-white" size="lg">
            <Icon name="place" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">Places to visit</ItemLabel>
          <ItemLabel caption>February 22, 2019</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-yellow-400" />
        </ItemSelection>
      </Item>

      <Item clickable v-ripple>
        <ItemSelection avatar top>
          <Avatar class="bg-zinc-400 text-white" size="lg">
            <Icon name="library_music" filled />
          </Avatar>
        </ItemSelection>

        <ItemSelection>
          <ItemLabel class="truncate">My favorite song</ItemLabel>
          <ItemLabel caption>Singing it all day</ItemLabel>
        </ItemSelection>

        <ItemSelection side>
          <Icon name="info" size="sm" filled class="text-gray-500" />
        </ItemSelection>
      </Item>
    \`
  }
}`,...(U=(W=g.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const Ie=["Basic","Dense","LeftAvatarThumbnail","RightAvatarThumbnail","Side","ItemLabels","MoreInvolvedExamples","Emails","EMailGoogleInboxstyle","FolderListing"];export{o as Basic,r as Dense,L as EMailGoogleInboxstyle,u as Emails,g as FolderListing,b as ItemLabels,I as LeftAvatarThumbnail,S as MoreInvolvedExamples,p as RightAvatarThumbnail,d as Side,Ie as __namedExportsOrder,re as default};
