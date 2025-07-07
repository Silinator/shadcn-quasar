import { cva, type VariantProps } from 'class-variance-authority';

export { default as List } from './List.vue';
export const listVariants = cva('relative text-sm', {
  variants: {
    separator: {
      true: '[&>*:not(:first-child)]:border-t [&>*:not(:first-child)]:border-current/12',
      false: '',
    },
    padding: {
      true: 'py-2',
      false: '',
    },
    bordered: {
      true: 'border border-current/12',
      false: '',
    },
    rounded: {
      true: 'rounded-md',
      false: '',
    },
  },
  compoundVariants: [
    {
      rounded: true,
      padding: false,
      class: '[&>*:first-child]:rounded-t-sm [&>*:last-child]:rounded-b-sm',
    },
  ],
  defaultVariants: {
    separator: false,
    padding: false,
    bordered: false,
    rounded: false,
  },
});
export type ListVariants = VariantProps<typeof listVariants>;

export { default as Item } from './Item.vue';
export const itemVariants = cva('relative flex flex-nowrap', {
  variants: {
    dense: {
      true: 'min-h-8 px-4 py-0.5',
      false: 'min-h-12 px-4 py-2',
    },
    clickable: {
      true: '',
      false: '',
    },
    disable: {
      true: 'not-allowed cursor-not-allowed opacity-60 outline-none',
      false: '',
    },
  },
  compoundVariants: [
    {
      clickable: true,
      disable: false,
      class: 'cursor-pointer select-none hover:bg-current/15 focus:bg-current/15',
    },
  ],
  defaultVariants: {
    dense: false,
    clickable: false,
    disable: false,
  },
});
export type ItemVariants = VariantProps<typeof itemVariants>;

export { default as ItemSelection } from './ItemSelection.vue';
export const itemSelectionVariants = cva('relative flex w-auto max-w-full min-w-0 flex-col flex-wrap justify-center', {
  variants: {
    avatar: {
      true: 'min-w-14 items-start pr-4',
      false: '',
    },
    thumbnail: {
      true: 'items-start pr-4 first-of-type:-ml-4 last-of-type:-mr-4 last-of-type:items-end last-of-type:pr-0 last-of-type:pl-4 [&>img]:h-14 [&>img]:w-[100px]',
      false: '',
    },
    side: {
      true: 'items-start pr-4 text-current/54 [&:not(:has(~.relative))]:items-end [&:not(:has(~.relative))]:pr-0 [&:not(:has(~.relative))]:pl-4', // rule for last item with relative class to prevent v-ripple to be the last item
      false: '',
    },
    top: {
      true: 'justify-start',
      false: '',
    },
    noWrap: {
      true: 'whitespace-nowrap',
      false: '',
    },
  },
  compoundVariants: [
    {
      avatar: false,
      thumbnail: false,
      side: false,
      class: 'flex-[10000_1_0%]',
    },
  ],
  defaultVariants: {
    avatar: false,
    thumbnail: false,
    side: false,
    top: false,
    noWrap: false,
  },
});
export type ItemSelectionVariants = VariantProps<typeof itemSelectionVariants>;

export { default as ItemLabel } from './ItemLabel.vue';
export const itemLabelVariants = cva('relative max-w-full leading-[1.2em]', {
  variants: {
    overline: {
      true: 'text-xs font-medium tracking-[0.16667em] text-current/80',
      false: '',
    },
    caption: {
      true: 'text-xs font-normal tracking-[0.0333em] text-current/54',
      false: '',
    },
    header: {
      true: 'p-4 text-sm tracking-[0.01786em] text-neutral-500 dark:text-white/64',
      false: '',
    },
  },
  defaultVariants: {
    overline: false,
    caption: false,
    header: false,
  },
});
export type ItemLabelVariants = VariantProps<typeof itemLabelVariants>;
