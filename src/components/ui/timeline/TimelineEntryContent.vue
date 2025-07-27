<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { computed, inject, type HTMLAttributes, type Ref } from 'vue';
import { timelinEntryContentVariants, type TimelineEntryContentVariants } from '.';

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
});

const layout = inject<Ref<TimelineEntryContentVariants['layout']> | undefined>('timelineLayout');
const side = inject<Ref<TimelineEntryContentVariants['side']> | undefined>('timelineEntrySide');

interface DotCtx {
  state: { hasDotContent: boolean };
  register(has: boolean): void;
}
const dotCtx = inject('timelineDot')! as DotCtx;
const hasDotSlot = computed(() => dotCtx.state.hasDotContent);
</script>

<template>
  <Primitive
    :as="props.as"
    :asChild="props.asChild"
    data-entry-content
    :class="cn(timelinEntryContentVariants({ side, layout, hasDotSlot }), props.class)"
  >
    <slot />
  </Primitive>
</template>
