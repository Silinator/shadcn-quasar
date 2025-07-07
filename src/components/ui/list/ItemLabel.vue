<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { itemLabelVariants } from '.';

interface Props extends PrimitiveProps {
  overline?: boolean;
  caption?: boolean;
  header?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  overline: false,
  caption: false,
  header: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(itemLabelVariants({ overline, caption, header }), props.class)">
    <slot />
  </Primitive>
</template>
