<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { toolbarVariants } from '.';

interface Props extends PrimitiveProps {
  inset?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  inset: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(toolbarVariants({ inset }), props.class)">
    <slot />
  </Primitive>
</template>
