<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { spaceVariants } from '.';

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(spaceVariants({}), props.class)">
    <slot />
  </Primitive>
</template>
