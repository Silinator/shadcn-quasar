<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { cardSectionVariants } from '.';

interface Props extends PrimitiveProps {
  horizontal?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  horizontal: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(cardSectionVariants({ horizontal }), props.class)">
    <slot />
  </Primitive>
</template>
