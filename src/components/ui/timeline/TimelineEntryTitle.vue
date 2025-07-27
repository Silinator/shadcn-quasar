<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { inject, type HTMLAttributes, type Ref } from 'vue';
import { timelinEntryTitleVariants, type TimelineEntryTitleVariants } from '.';

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'h6',
  asChild: false,
});

const layout = inject<Ref<TimelineEntryTitleVariants['layout']> | undefined>('timelineLayout');
const side = inject<Ref<TimelineEntryTitleVariants['side']> | undefined>('timelineEntrySide');
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" data-entry-title :class="cn(timelinEntryTitleVariants({ side, layout }), props.class)">
    <slot />
  </Primitive>
</template>
