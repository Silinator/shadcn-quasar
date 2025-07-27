import { cva, type VariantProps } from 'class-variance-authority';

export { default as Timeline } from './Timeline.vue';
export const timelineVariants = cva(
  'relative mb-4 w-full list-inside list-none list-image-[initial] p-0 [&>*:last-child>[data-entry-dot-line]]:hidden',
  {
    variants: {
      layout: {
        dense: '',
        comfortable: 'table',
        loose: '',
      },
    },
    defaultVariants: {
      layout: 'dense',
    },
  },
);
export type TimelineVariants = VariantProps<typeof timelineVariants>;

export { default as TimelineEntry } from './TimelineEntry.vue';
export const timelineEntryVariants = cva('relative leading-5.5', {
  variants: {
    side: {
      right: '',
      left: 'text-right',
    },
    layout: {
      dense: '',
      comfortable: 'table-row',
      loose: 'm-0 block overflow-hidden p-0 pb-6',
    },
    heading: {
      true: '[&>*]:mb-0 [&>*]:px-0 [&>*]:py-8',
      false: '',
    },
  },
  compoundVariants: [
    {
      side: 'right',
      layout: 'dense',
      class: 'pl-10',
    },
    {
      side: 'left',
      layout: 'dense',
      class: 'pr-10',
    },
    {
      layout: 'loose',
      heading: true,
      class: '[&>*]:text-center',
    },
    {
      side: 'left',
      heading: true,
      class: '[&>*]:text-right',
    },
  ],
  defaultVariants: {
    side: 'right',
    layout: 'dense',
    heading: false,
  },
});
export type TimelineEntryVariants = VariantProps<typeof timelineEntryVariants>;

export const timelineEntryHeaderVariants = cva('relative [&>*]:m-0 [&>*]:px-0 [&>*]:py-8 first:[&>*]:pt-0', {
  variants: {
    side: {
      right: '',
      left: 'text-right [&>*]:text-right',
    },
    layout: {
      dense: '',
      comfortable: 'table-row',
      loose: '[&>*]:text-center',
    },
  },
  compoundVariants: [
    {
      side: 'right',
      layout: 'comfortable',
      class: '[&>*]:-ml-[50px]',
    },
    {
      side: 'left',
      layout: 'comfortable',
      class: '[&>*]:-mr-[50px]',
    },
  ],
  defaultVariants: {
    side: 'right',
    layout: 'dense',
  },
});
export type TimelineEntryHeaderVariants = VariantProps<typeof timelineEntryHeaderVariants>;

export { default as TimelineEntryDot } from './TimelineEntryDot.vue';
export const timelineEntryDotVariants = cva('bg-primary text-primary-foreground flex aspect-square items-center justify-center rounded-[50%]', {
  variants: {
    side: {
      right: '-left-2',
      left: '-right-2',
    },
    layout: {
      dense: 'absolute top-1 bottom-0',
      comfortable: 'relative mt-1',
      loose: 'absolute top-1 bottom-0 left-1/2',
    },
    hasSlot: {
      true: 'h-[31px] max-h-[31px] w-[31px] max-w-[31px] after:top-10 after:left-3.5',
      false: 'h-[15px] max-h-[15px] w-[15px] max-w-[15px] after:top-6 after:left-1.5',
    },
  },
  compoundVariants: [
    {
      layout: 'comfortable',
      hasSlot: false,
      side: 'right',
      class: 'left-0',
    },
    {
      layout: 'comfortable',
      hasSlot: false,
      side: 'left',
      class: '-right-4',
    },
    {
      side: 'right',
      layout: 'dense',
      hasSlot: false,
      class: 'left-0',
    },
    {
      side: 'left',
      layout: 'dense',
      hasSlot: false,
      class: 'right-0',
    },
    {
      layout: 'loose',
      hasSlot: false,
      class: '-ml-[7.15px]',
    },
    {
      layout: 'loose',
      hasSlot: true,
      class: '-ml-[15px]',
    },
  ],
  defaultVariants: {
    side: 'right',
    layout: 'dense',
    hasSlot: false,
  },
});
export type TimelineEntryDotVariants = VariantProps<typeof timelineEntryDotVariants>;

export const timelineEntryDotLineVariants = cva('bg-primary text-primary-foreground absolute bottom-0 w-[3px] opacity-40', {
  variants: {
    side: {
      right: 'left-1.5',
      left: 'right-1.5',
    },
    layout: {
      dense: '',
      comfortable: '',
      loose: 'left-1/2 -ml-0.25',
    },
    hasSlot: {
      true: 'top-10',
      false: 'top-6',
    },
  },
  defaultVariants: {
    side: 'right',
    layout: 'dense',
    hasSlot: false,
  },
});
export type TimelineEntryDotLineVariants = VariantProps<typeof timelineEntryDotLineVariants>;

export { default as TimelineEntrySubTitle } from './TimelineEntrySubTitle.vue';
export const timelineEntrySubTitleVariants = cva('relative mb-2 text-xs leading-5.5 font-bold tracking-[1px] uppercase opacity-60', {
  variants: {
    side: {
      right: 'text-left',
      left: 'text-right',
    },
    layout: {
      dense: '',
      comfortable: 'table-cell w-[35%] align-top',
      loose: 'w-1/2',
    },
    heading: {
      true: '',
      false: '',
    },
    hasDotSlot: {
      true: 'pt-2',
      false: '',
    },
  },
  compoundVariants: [
    {
      side: 'right',
      layout: 'comfortable',
      class: 'pr-7.5 text-right',
    },
    {
      side: 'left',
      layout: 'comfortable',
      class: 'pl-7.5 text-left',
    },
    {
      side: 'right',
      layout: 'loose',
      class: 'float-left pr-7.5 text-right',
    },
    {
      side: 'left',
      layout: 'loose',
      class: 'float-right pl-7.5 text-left',
    },
  ],
  defaultVariants: {
    side: 'right',
    layout: 'dense',
    heading: false,
    hasDotSlot: false,
  },
});
export type TimelineEntrySubTitleVariants = VariantProps<typeof timelineEntrySubTitleVariants>;

export { default as TimelineEntryContent } from './TimelineEntryContent.vue';
export const timelinEntryContentVariants = cva('relative pb-6', {
  variants: {
    side: {
      right: '',
      left: 'text-right',
    },
    layout: {
      dense: '',
      comfortable: 'table-cell align-top',
      loose: 'w-1/2',
    },
    hasDotSlot: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      side: 'right',
      layout: 'comfortable',
      class: 'pl-7.5',
    },
    {
      side: 'left',
      layout: 'comfortable',
      class: 'pr-7.5',
    },
    {
      layout: 'comfortable',
      hasDotSlot: true,
      class: 'pt-2',
    },
    {
      layout: 'loose',
      hasDotSlot: true,
      class: 'pt-2',
    },
    {
      side: 'right',
      layout: 'loose',
      class: 'float-right pl-7.5 text-left',
    },
    {
      side: 'left',
      layout: 'loose',
      class: 'float-left pr-7.5 text-right',
    },
  ],
  defaultVariants: {
    side: 'right',
    layout: 'dense',
    hasDotSlot: false,
  },
});
export type TimelineEntryContentVariants = VariantProps<typeof timelinEntryContentVariants>;

export { default as TimelineEntryTitle } from './TimelineEntryTitle.vue';
export const timelinEntryTitleVariants = cva('relative mt-0 mb-4 leading-[inherit]', {
  variants: {
    side: {
      right: '',
      left: 'text-right',
    },
    layout: {
      dense: '',
      comfortable: '',
      loose: '',
    },
  },
  defaultVariants: {
    side: 'right',
    layout: 'dense',
  },
});
export type TimelineEntryTitleVariants = VariantProps<typeof timelinEntryTitleVariants>;
