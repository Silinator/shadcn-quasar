<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { badgeVariants, type BadgeVariants } from '.';

interface Props extends PrimitiveProps {
  outline?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  floating?: boolean;
  multiLine?: boolean;
  align?: BadgeVariants['align'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  outline: false,
  rounded: false,
  transparent: false,
  floating: false,
  multiLine: false,
  align: 'middle',
});
</script>

<template>
  <Primitive
    :as="props.as"
    :asChild="props.asChild"
    :class="cn(badgeVariants({ outline, rounded, transparent, floating, multiLine, align }), props.class)"
  >
    <slot />
  </Primitive>
</template>
