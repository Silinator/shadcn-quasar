<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { toolbarTitleVariants } from '.';

interface Props extends PrimitiveProps {
  shrink?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  shrink: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(toolbarTitleVariants({ shrink }), props.class)">
    <slot />
  </Primitive>
</template>
