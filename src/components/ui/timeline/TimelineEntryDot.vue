<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { computed, inject, useSlots, watchEffect, type HTMLAttributes, type Ref } from 'vue';
import { timelineEntryDotLineVariants, timelineEntryDotVariants, type TimelineEntryDotVariants } from '.';

interface DotCtx {
  hasDotContent: boolean;
  register(has: boolean): void;
}

const dotCtx = inject('timelineDot') as DotCtx;

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
});

const slots = useSlots();
const hasSlot = computed(() => {
  return !!slots.default;
});

watchEffect(() => {
  dotCtx.register(hasSlot.value);
});

const layout = inject<Ref<TimelineEntryDotVariants['layout']> | undefined>('timelineLayout');
const side = inject<Ref<TimelineEntryDotVariants['side']> | undefined>('timelineEntrySide');
</script>

<template>
  <div v-if="layout === 'comfortable'" data-entry-dot-container class="relative table-cell w-[31px] max-w-[31px] align-top">
    <Primitive :as="props.as" :asChild="props.asChild" data-entry-dot :class="cn(timelineEntryDotVariants({ side, layout, hasSlot }), props.class)">
      <slot />
    </Primitive>
    <div data-entry-dot-line :class="cn(timelineEntryDotLineVariants({ side, layout, hasSlot }), props.class)" />
  </div>
  <template v-else>
    <Primitive :as="props.as" :asChild="props.asChild" data-entry-dot :class="cn(timelineEntryDotVariants({ side, layout, hasSlot }), props.class)">
      <slot />
    </Primitive>
    <div data-entry-dot-line :class="cn(timelineEntryDotLineVariants({ side, layout, hasSlot }), props.class)" />
  </template>
</template>
