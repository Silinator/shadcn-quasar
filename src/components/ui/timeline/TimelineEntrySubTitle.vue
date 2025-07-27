<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { computed, inject, type HTMLAttributes, type Ref } from 'vue';
import { timelineEntrySubTitleVariants, type TimelineEntrySubTitleVariants } from '.';

interface Props extends PrimitiveProps {
  side?: TimelineEntrySubTitleVariants['side'];
  heading?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  heading: false,
  side: 'right',
});

const layout = inject<Ref<TimelineEntrySubTitleVariants['layout']> | undefined>('timelineLayout');
const side = inject<Ref<TimelineEntrySubTitleVariants['side']> | undefined>('timelineEntrySide');

interface DotCtx {
  state: { hasDotContent: boolean };
  register(has: boolean): void;
}
const dotCtx = inject<DotCtx | undefined>('timelineDot');
const hasDotSlot = computed(() => dotCtx?.state?.hasDotContent ?? false);
</script>

<template>
  <Primitive
    :as="props.as"
    :asChild="props.asChild"
    data-entry-sub-title
    :class="cn(timelineEntrySubTitleVariants({ side, layout, heading, hasDotSlot }), props.class)"
  >
    <slot />
  </Primitive>
</template>
