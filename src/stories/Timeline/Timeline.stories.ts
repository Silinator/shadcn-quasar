import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icon } from '@/components/ui/icon';
import { Timeline, TimelineEntry, TimelineEntryContent, TimelineEntryDot, TimelineEntrySubTitle, TimelineEntryTitle } from '@/components/ui/timeline';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Timeline> = {
  title: 'UI/Timeline/Timeline',
  component: Timeline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
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
      AvatarFallback,
    },
    setup() {
      return { args };
    },
    template: `
      <Timeline v-bind="args">${args.default}</Timeline>
    `,
  }),
  args: {
    class: '',
    default: `
    <TimelineEntry heading>
      Timeline heading
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>
    
    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 21, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white">
        <Icon name="delete" filled />
      </TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>

    <TimelineEntry heading>
      November, 2017
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white">
        <Avatar>
          <AvatarImage src="https://cdn.quasar.dev/img/avatar2.jpg" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>
    
    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-yellow-500 text-white">
        <Icon name="done_all"/>
      </TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>
    `,
  },
};

export const ComfortableLeft: Story = {
  render: (args) => ({
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
      AvatarFallback,
    },
    setup() {
      return { args };
    },
    template: `
      <Timeline v-bind="args">${args.default}</Timeline>
    `,
  }),
  args: {
    class: '',
    layout: 'comfortable',
    side: 'left',
    default: `
    <TimelineEntry heading>
      Timeline heading
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>
    </TimelineEntry>
    
    <TimelineEntry>
      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>

      <TimelineEntryDot class="bg-teal-600 text-white">
        <Icon name="delete" filled />
      </TimelineEntryDot>

      <TimelineEntrySubTitle>
        February 21, 1986
      </TimelineEntrySubTitle>
    </TimelineEntry>

    <TimelineEntry heading>
      November, 2017
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>

      <TimelineEntryDot class="bg-teal-600 text-white">
        <Avatar>
          <AvatarImage src="https://cdn.quasar.dev/img/avatar2.jpg" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </TimelineEntryDot>

      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>
    </TimelineEntry>
    
    <TimelineEntry side="left">
      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>

      <TimelineEntryDot class="bg-yellow-500 text-white">
        <Icon name="done_all"/>
      </TimelineEntryDot>

      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

    </TimelineEntry>

    <TimelineEntry side="left">
      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>
    </TimelineEntry>
    `,
  },
};

export const LooseLayout: Story = {
  render: (args) => ({
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
      AvatarFallback,
    },
    setup() {
      return { args };
    },
    template: `
      <Timeline v-bind="args">${args.default}</Timeline>
    `,
  }),
  args: {
    class: '',
    layout: 'loose',
    default: `
    <TimelineEntry heading>
      Timeline heading
    </TimelineEntry>

    <TimelineEntry side="left">
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>
    
    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 21, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white">
        <Icon name="delete" filled />
      </TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>

    <TimelineEntry heading>
      November, 2017
    </TimelineEntry>

    <TimelineEntry side="left">
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white">
        <Avatar>
          <AvatarImage src="https://cdn.quasar.dev/img/avatar2.jpg" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>
    
    <TimelineEntry side="left">
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-yellow-500 text-white">
        <Icon name="done_all"/>
      </TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>

    <TimelineEntry>
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>

    <TimelineEntry side="left">
      <TimelineEntrySubTitle>
        February 22, 1986
      </TimelineEntrySubTitle>

      <TimelineEntryDot class="bg-teal-600 text-white"></TimelineEntryDot>

      <TimelineEntryContent>
        <TimelineEntryTitle>Event Title</TimelineEntryTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TimelineEntryContent>
    </TimelineEntry>
    `,
  },
};
