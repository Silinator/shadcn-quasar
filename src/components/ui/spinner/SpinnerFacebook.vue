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
    <g transform="translate(20 50)">
      <rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="scale"
          from="2"
          to="1"
          begin="0s"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keySplines="0.1 0.9 0.4 1"
          keyTimes="0;1"
          values="2;1"
        ></animateTransform>
      </rect>
    </g>
    <g transform="translate(50 50)">
      <rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="scale"
          from="2"
          to="1"
          begin="0.1s"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keySplines="0.1 0.9 0.4 1"
          keyTimes="0;1"
          values="2;1"
        ></animateTransform>
      </rect>
    </g>
    <g transform="translate(80 50)">
      <rect x="-10" y="-30" width="20" height="60" fill="currentColor" opacity="0.9">
        <animateTransform
          attributeName="transform"
          type="scale"
          from="2"
          to="1"
          begin="0.2s"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keySplines="0.1 0.9 0.4 1"
          keyTimes="0;1"
          values="2;1"
        ></animateTransform>
      </rect>
    </g>
  </svg>
</template>
