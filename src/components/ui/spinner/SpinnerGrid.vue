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
    fill="currentColor"
    viewBox="0 0 105 105"
    xmlns="http://www.w3.org/2000/svg"
    :class="cn(spinnerVariants(props), props.class)"
  >
    <circle cx="12.5" cy="12.5" r="12.5">
      <animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
    <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
      <animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
    <circle cx="52.5" cy="12.5" r="12.5">
      <animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
    <circle cx="52.5" cy="52.5" r="12.5">
      <animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
    <circle cx="92.5" cy="12.5" r="12.5">
      <animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
    <circle cx="92.5" cy="52.5" r="12.5">
      <animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
    <circle cx="12.5" cy="92.5" r="12.5">
      <animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
    <circle cx="52.5" cy="92.5" r="12.5">
      <animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
    <circle cx="92.5" cy="92.5" r="12.5">
      <animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate>
    </circle>
  </svg>
</template>
