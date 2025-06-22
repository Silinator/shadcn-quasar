<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { barVariants } from '.';

interface Props extends PrimitiveProps {
  dense?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  dense: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(barVariants({ dense }), props.class)">
    <slot />
  </Primitive>
</template>
