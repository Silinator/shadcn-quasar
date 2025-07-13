import { cva, type VariantProps } from 'class-variance-authority';

export { default as Banner } from './Banner.vue';
export const bannerVariants = cva('relative flex items-center', {
  variants: {
    inlineActions: {
      true: 'w-full flex-row flex-wrap',
      false: 'flex-col',
    },
    dense: {
      true: 'min-h-8 p-2 [&_i]:text-[28px]',
      false: 'min-h-13.5 px-4 py-2 [&_i]:text-[40px]',
    },
    rounded: {
      true: 'rounded-sm',
      false: '',
    },
  },
  compoundVariants: [
    {
      inlineActions: false,
      dense: true,
      class: 'pt-3',
    },
    {
      inlineActions: false,
      dense: false,
      class: 'pt-3.5',
    },
  ],
  defaultVariants: {
    inlineActions: false,
    dense: false,
    rounded: false,
  },
});

export type BannerVariants = VariantProps<typeof bannerVariants>;

export const bannerAvatarVariants = cva('relative flex min-w-0.5 items-center self-start', {
  variants: {
    dense: {
      true: '[&>i]:text-[28px]',
      false: '[&>i]:text-[40px]',
    },
  },
  defaultVariants: {
    dense: false,
  },
});

export type BannerAvatarVariants = VariantProps<typeof bannerAvatarVariants>;

export const bannerActionsVariants = cva('relative ml-1 flex items-center gap-1 self-end', {
  variants: {
    inlineActions: {
      true: 'mt-1',
      false: '',
    },
  },
  defaultVariants: {
    inlineActions: false,
  },
});

export type BannerActionsVariants = VariantProps<typeof bannerActionsVariants>;
