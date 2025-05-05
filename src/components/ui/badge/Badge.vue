<script setup lang="ts">
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'vue';
import { badgeVariants, type BadgeVariants } from '.';

interface Props {
  outline?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  floating?: boolean;
  multiLine?: boolean;
  align?: BadgeVariants['align'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  outline: false,
  rounded: false,
  transparent: false,
  floating: false,
  multiLine: false,
  align: 'middle',
});
</script>

<template>
  <div :class="cn(badgeVariants({ outline, rounded, transparent, floating, multiLine, align }), props.class)">
    <slot />
  </div>
</template>
