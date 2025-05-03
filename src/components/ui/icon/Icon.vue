<script setup lang="ts">
import { cn } from '@/lib/utils';
import 'material-symbols';
import type { HTMLAttributes } from 'vue';
import { type IconVariants, iconVariants } from '.';

interface Props {
  name?: string;
  variant?: IconVariants['variant'];
  filled?: boolean;
  size?: IconVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  filled: false,
  variant: 'rounded',
  size: 'md',
});
</script>

<template>
  <i :class="cn(iconVariants({ variant, size }), props.class, { 'icon-filled': filled })">
    {{ props.name }}
    <slot />
  </i>
</template>

<style scoped>
.mui-symbols {
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'liga';
}

.mui-symbols-rounded {
  font-family: 'Material Symbols Rounded';
}

.mui-symbols-outlined {
  font-family: 'Material Symbols Outlined';
}

.mui-symbols-sharp {
  font-family: 'Material Symbols Sharp';
}

.icon-filled {
  font-variation-settings: 'FILL' 1;
}
</style>
