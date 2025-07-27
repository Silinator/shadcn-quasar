import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icon } from '@/components/ui/icon';
import { Timeline, TimelineEntry, TimelineEntryContent, TimelineEntryDot, TimelineEntrySubTitle, TimelineEntryTitle } from '@/components/ui/timeline';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof TimelineEntrySubTitle> = {
  title: 'UI/Timeline/TimelineEntrySubTitle',
  component: TimelineEntrySubTitle,
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
      <Timeline>
        <TimelineEntry>
          <TimelineEntrySubTitle v-bind="args">${args.default}</TimelineEntrySubTitle>

          <TimelineEntryDot></TimelineEntryDot>
          
          <TimelineEntryContent>
            <TimelineEntryTitle>Event Title</TimelineEntryTitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TimelineEntryContent>
        </TimelineEntry>

        <TimelineEntry>
          <TimelineEntrySubTitle>
            February 22, 1986
          </TimelineEntrySubTitle>

          <TimelineEntryDot class="bg-red-400 text-white"><Icon name="delete" filled /></TimelineEntryDot>
          
          <TimelineEntryContent>
            <TimelineEntryTitle>Event Title</TimelineEntryTitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TimelineEntryContent>
        </TimelineEntry>
      </timeline>
    `,
  }),
  args: {
    class: '',
    default: `February 22, 1986`,
  },
};

export const Colors: Story = {
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
      <Timeline>
        <TimelineEntry>
          <TimelineEntrySubTitle v-bind="args">${args.default}</TimelineEntrySubTitle>

          <TimelineEntryDot></TimelineEntryDot>
          
          <TimelineEntryContent>
            <TimelineEntryTitle>Event Title</TimelineEntryTitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TimelineEntryContent>
        </TimelineEntry>

        <TimelineEntry>
          <TimelineEntrySubTitle>
            February 22, 1986
          </TimelineEntrySubTitle>

          <TimelineEntryDot class="bg-red-400 text-white"><Icon name="delete" filled /></TimelineEntryDot>
          
          <TimelineEntryContent>
            <TimelineEntryTitle>Event Title</TimelineEntryTitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TimelineEntryContent>
        </TimelineEntry>
      </timeline>
    `,
  }),
  args: {
    class: 'text-cyan-600',
    default: `February 22, 1986`,
  },
};
