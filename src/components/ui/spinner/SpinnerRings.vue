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
    stroke="currentColor"
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    :class="cn(spinnerVariants(props), props.class)"
  >
    <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
      <circle cx="22" cy="22" r="6">
        <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="22" cy="22" r="6">
        <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
    </g>
  </svg>
</template>
