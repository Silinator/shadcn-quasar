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
