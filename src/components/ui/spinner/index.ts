import { cva, type VariantProps } from 'class-variance-authority';

export { default as Spinner } from './Spinner.vue';
export { default as SpinnerAudio } from './SpinnerAudio.vue';
export { default as SpinnerBall } from './SpinnerBall.vue';
export { default as SpinnerBars } from './SpinnerBars.vue';
export { default as SpinnerBox } from './SpinnerBox.vue';
export { default as SpinnerClock } from './SpinnerClock.vue';
export { default as SpinnerComment } from './SpinnerComment.vue';
export { default as SpinnerCube } from './SpinnerCube.vue';
export { default as SpinnerDots } from './SpinnerDots.vue';
export { default as SpinnerFacebook } from './SpinnerFacebook.vue';
export { default as SpinnerGears } from './SpinnerGears.vue';
export { default as SpinnerGrid } from './SpinnerGrid.vue';
export { default as SpinnerHearts } from './SpinnerHearts.vue';
export { default as SpinneHourglass } from './SpinnerHourglass.vue';
export { default as SpinneInfinity } from './SpinnerInfinity.vue';
export { default as SpinnerIos } from './SpinnerIos.vue';
export { default as SpinnerOrbit } from './SpinnerOrbit.vue';
export { default as SpinnerOval } from './SpinnerOval.vue';
export { default as SpinnerPie } from './SpinnerPie.vue';
export { default as SpinnerPuff } from './SpinnerPuff.vue';
export { default as SpinnerRadio } from './SpinnerRadio.vue';
export { default as SpinnerRings } from './SpinnerRings.vue';
export { default as SpinnerTail } from './SpinnerTail.vue';

export const spinnerVariants = cva('inline-block', {
  variants: {
    size: {
      xs: 'h-4 w-4',
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
