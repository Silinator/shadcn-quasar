<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { listVariants } from '.';

interface Props extends PrimitiveProps {
  separator?: boolean;
  padding?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'ul',
  asChild: false,
  separator: false,
  padding: false,
  bordered: false,
  rounded: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(listVariants({ separator, padding, bordered, rounded }), props.class)">
    <slot />
  </Primitive>
</template>
