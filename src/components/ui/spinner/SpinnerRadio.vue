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
    <g transform="scale(0.55)">
      <circle cx="30" cy="150" r="30" fill="currentColor">
        <animate attributeName="opacity" from="0" to="1" dur="1s" begin="0" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate>
      </circle>
      <path d="M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z" fill="currentColor">
        <animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.1" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate>
      </path>
      <path d="M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z" fill="currentColor">
        <animate attributeName="opacity" from="0" to="1" dur="1s" begin="0.2" repeatCount="indefinite" keyTimes="0;0.5;1" values="0;1;1"></animate>
      </path>
    </g>
  </svg>
</template>
