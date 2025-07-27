<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { computed, inject, provide, reactive, readonly, type HTMLAttributes, type Ref } from 'vue';
import { timelineEntryHeaderVariants, timelineEntryVariants, type TimelineEntryVariants } from '.';

interface Props extends PrimitiveProps {
  side?: TimelineEntryVariants['side'];
  heading?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'li',
  asChild: false,
  heading: false,
  side: 'right',
});

const layout = inject<Ref<TimelineEntryVariants['layout']> | undefined>('timelineLayout');
const timelineSide = inject<Ref<TimelineEntryVariants['side']> | undefined>('timelineSide');

const entrySide = computed(() => {
  return layout?.value === 'loose' ? props.side : (timelineSide?.value ?? props.side);
});
provide('timelineEntrySide', entrySide);

// local reactive state for dot content
const state = reactive({ hasDotContent: false });
function register(has: boolean) {
  state.hasDotContent = has;
}
provide('timelineDot', { register, state: readonly(state) });
</script>

<template>
  <Primitive
    v-if="props.heading"
    :as="props.as"
    :asChild="props.asChild"
    data-timeline-entry-header
    :class="cn(timelineEntryHeaderVariants({ side: timelineSide, layout }), props.class)"
  >
    <template v-if="layout === 'comfortable' && timelineSide === 'right'">
      <div class="table-cell"></div>
      <div class="table-cell"></div>
    </template>
    <h3>
      <slot />
    </h3>
  </Primitive>

  <Primitive
    v-else
    :as="props.as"
    :asChild="props.asChild"
    data-timeline-entry
    :class="cn(timelineEntryVariants({ side: timelineSide, layout }), props.class)"
  >
    <slot />
  </Primitive>
</template>
