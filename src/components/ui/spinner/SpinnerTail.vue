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
  <svg role="status" aria-live="polite" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" :class="cn(spinnerVariants(props), props.class)">
    <defs>
      <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
        <stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop>
        <stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop>
        <stop stop-color="currentColor" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
      <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
      <circle fill="currentColor" cx="36" cy="18" r="1">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </g>
  </svg>
</template>
