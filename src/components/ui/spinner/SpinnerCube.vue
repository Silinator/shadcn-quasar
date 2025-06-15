<script setup lang="ts">
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'vue';
import { type SpinnerVariants, spinnerVariants } from '.';

interface Props {
  size?: SpinnerVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  class: '',
});
</script>

<template>
  <svg
    role="status"
    aria-live="polite"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
    :class="cn(spinnerVariants(props), props.class)"
  >
    <rect x="0" y="0" width="100" height="100" fill="none"></rect>
    <g transform="translate(25 25)">
      <rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9">
        <animateTransform
          attributeName="transform"
          type="scale"
          from="1.5"
          to="1"
          repeatCount="indefinite"
          begin="0s"
          dur="1s"
          calcMode="spline"
          keySplines="0.2 0.8 0.2 0.8"
          keyTimes="0;1"
        ></animateTransform>
      </rect>
    </g>
    <g transform="translate(75 25)">
      <rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="scale"
          from="1.5"
          to="1"
          repeatCount="indefinite"
          begin="0.1s"
          dur="1s"
          calcMode="spline"
          keySplines="0.2 0.8 0.2 0.8"
          keyTimes="0;1"
        ></animateTransform>
      </rect>
    </g>
    <g transform="translate(25 75)">
      <rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7">
        <animateTransform
          attributeName="transform"
          type="scale"
          from="1.5"
          to="1"
          repeatCount="indefinite"
          begin="0.3s"
          dur="1s"
          calcMode="spline"
          keySplines="0.2 0.8 0.2 0.8"
          keyTimes="0;1"
        ></animateTransform>
      </rect>
    </g>
    <g transform="translate(75 75)">
      <rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="scale"
          from="1.5"
          to="1"
          repeatCount="indefinite"
          begin="0.2s"
          dur="1s"
          calcMode="spline"
          keySplines="0.2 0.8 0.2 0.8"
          keyTimes="0;1"
        ></animateTransform>
      </rect>
    </g>
  </svg>
</template>
