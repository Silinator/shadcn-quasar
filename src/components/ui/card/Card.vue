<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { cardVariants } from '.';

interface Props extends PrimitiveProps {
  square?: boolean;
  flat?: boolean;
  bordered?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  square: false,
  flat: false,
  bordered: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(cardVariants({ square, flat, bordered }), props.class)">
    <slot />
  </Primitive>
</template>
