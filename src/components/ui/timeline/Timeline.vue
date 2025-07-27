<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { provide, toRef, type HTMLAttributes } from 'vue';
import { timelineVariants, type TimelineVariants } from '.';

interface Props extends PrimitiveProps {
  layout?: TimelineVariants['layout'];
  side?: 'left' | 'right';
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'ul',
  asChild: false,
  layout: 'dense',
  side: 'right',
});

const layout = toRef(props, 'layout');
provide('timelineLayout', layout);

const side = toRef(props, 'side');
provide('timelineSide', side);
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" data-timeline :class="cn(timelineVariants({ layout }), props.class)">
    <slot />
  </Primitive>
</template>
