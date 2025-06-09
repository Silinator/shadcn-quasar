<script setup lang="ts">
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'vue';
import { type SpinnerVariants, spinnerVariants } from '.';

interface Props {
  thickness?: number;
  size?: SpinnerVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  thickness: 5,
});
</script>

<template>
  <svg role="status" aria-live="polite" viewBox="25 25 50 50" :class="cn(spinnerVariants(props), props.class)">
    <circle class="spinner-path" cx="50" cy="50" r="20" fill="none" stroke="currentColor" :stroke-width="props.thickness" stroke-miterlimit="10" />
  </svg>
</template>

<style scoped>
/* Container rotation */
.inline-block {
  animation: spinner-rotate 2s linear infinite;
}

/* Path dash animation */
.spinner-path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: spinner-dash 1.5s ease-in-out infinite;
}

@keyframes spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
</style>
