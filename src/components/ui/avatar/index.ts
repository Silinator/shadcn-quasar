import { cva, type VariantProps } from 'class-variance-authority';

export { default as Avatar } from './Avatar.vue';
export { default as AvatarFallback } from './AvatarFallback.vue';
export { default as AvatarImage } from './AvatarImage.vue';

export const avatarVariants = cva(
  'text-inherit-foreground relative inline-flex items-center justify-center bg-inherit [&>img]:h-[inherit] [&>img]:w-[inherit] [&>img]:rounded-[inherit]',
  {
    variants: {
      variant: {
        circle: 'rounded-full',
        square: 'rounded-none',
        rounded: 'rounded-sm',
      },
      size: {
        xs: 'h-4 w-4 text-[8px]',
        sm: 'h-6 w-6 text-xs',
        md: 'h-8 w-8 text-base',
        lg: 'h-10 w-10 text-xl',
        xl: 'h-12 w-12 text-2xl',
      },
    },
    defaultVariants: {
      variant: 'circle',
      size: 'md',
    },
  },
);

export type AvatarVariants = VariantProps<typeof avatarVariants>;
