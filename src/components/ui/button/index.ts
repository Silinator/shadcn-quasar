import { cva, type VariantProps } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'relative inline-flex cursor-pointer items-center gap-x-3 bg-inherit text-center font-medium text-inherit select-none',
  {
    variants: {
      outline: {
        true: 'border border-current bg-transparent text-inherit',
        false: '',
      },
      flat: {
        true: 'bg-transparent text-inherit',
        false: '',
      },
      unelevated: {
        true: '',
        false: '',
      },
      rounded: {
        true: 'rounded-full before:rounded-full',
        false: 'rounded-sm before:rounded-sm',
      },
      round: {
        true: 'rounded-[50%] before:rounded-[50%]',
        false: '',
      },
      square: {
        true: 'rounded-none',
        false: '',
      },
      glossy: {
        true: 'bg-[linear-gradient(to_bottom,_#ffffff4d,_#fff0_50%,_#0000001f_51%,_#0000000a)]',
        false: '',
      },
      push: {
        true: "transition-[transform_.3s_cubic-bezier(.25,.8,.5,1)] after:absolute after:inset-0 after:rounded-[inherit] after:border-b-3 after:border-black/15 after:transition-[border-width_.3s_cubic-bezier(.25,.8,.5,1)] after:content-['']",
        false: '',
      },
      fab: {
        true: 'min-h-14 min-w-14 p-4',
        false: '',
      },
      fabMini: {
        true: 'min-h-10 min-w-10 p-2',
        false: '',
      },
      dense: {
        true: '',
        false: '',
      },
      size: {
        xs: 'text-[8px]',
        sm: 'text-[10px]',
        md: 'text-sm',
        lg: 'text-xl',
        xl: 'text-2xl',
      },
      noCaps: {
        true: '',
        false: 'uppercase',
      },
      noWrap: {
        true: 'whitespace-nowrap',
        false: '',
      },
      align: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      stack: {
        true: 'flex-col',
        false: 'flex-row',
      },
      stretch: {
        true: 'self-stretch',
        false: '',
      },
      loading: {
        true: 'cursor-default',
        false: '',
      },
      disable: {
        true: 'cursor-not-allowed opacity-60',
        false: '',
      },
    },
    compoundVariants: [
      {
        dense: true,
        round: false,
        fab: false,
        fabMini: false,
        class: 'min-h-[2em] px-2 py-0.5',
      },
      {
        dense: false,
        round: false,
        fab: false,
        fabMini: false,
        class: 'min-h-[2.572em] px-4 py-2',
      },
      {
        dense: true,
        round: true,
        fab: false,
        fabMini: false,
        class: 'p-0.5',
      },
      {
        dense: false,
        round: true,
        fab: false,
        fabMini: false,
        class: 'p-2.25',
      },
      {
        flat: false,
        unelevated: false,
        outline: false,
        push: false,
        class: 'shadow-md transition-shadow duration-300',
      },
      {
        loading: false,
        disable: false,
        class:
          "before:absolute before:inset-0 before:bg-white/15 before:opacity-0 before:transition-opacity before:content-[''] hover:before:opacity-100",
      },
      {
        loading: false,
        disable: false,
        outline: true,
        class: 'hover:bg-current/10',
      },
      {
        loading: false,
        disable: false,
        flat: true,
        class: 'hover:bg-current/10',
      },
      {
        loading: false,
        disable: false,
        push: true,
        class: 'active:transform-[translateY(2px)] active:after:border-b-0',
      },
      {
        flat: false,
        unelevated: false,
        outline: false,
        push: false,
        loading: false,
        disable: false,
        class: 'active:shadow-xl',
      },
    ],
    defaultVariants: {
      outline: false,
      flat: false,
      unelevated: false,
      rounded: false,
      round: false,
      square: false,
      glossy: false,
      push: false,
      fab: false,
      fabMini: false,
      dense: false,
      size: 'md',
      noCaps: false,
      noWrap: false,
      align: 'center',
      stack: false,
      stretch: false,
      loading: false,
      disable: false,
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
