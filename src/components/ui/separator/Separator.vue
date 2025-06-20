<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, Separator, type PrimitiveProps, type SeparatorProps } from 'reka-ui';
import { computed, useSlots, type HTMLAttributes } from 'vue';
import { separatorVariants, type SeparatorVariants } from '.';

interface Props extends SeparatorProps, PrimitiveProps {
  spaced?: boolean | SeparatorVariants['spaced'];
  inset?: boolean | SeparatorVariants['inset'];
  vertical?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: undefined,
  asChild: false,
  spaced: false,
  inset: false,
  vertical: false,
});

const slots = useSlots();

const hasContent = computed(() => {
  const fn = slots.default;
  if (!fn) return false;
  return fn().some((v) => v.type !== Comment && v.children !== '');
});

const resolvedAs = computed(() => props.as ?? (hasContent.value ? 'p' : 'hr'));
</script>

<template>
  <Separator
    v-if="!hasContent"
    :as="resolvedAs"
    :asChild="props.asChild"
    :orientation="vertical ? 'vertical' : 'horizontal'"
    :class="cn(separatorVariants({ spaced, inset, vertical }), props.class)"
  />
  <Primitive v-else :as="resolvedAs" :asChild="props.asChild" :class="cn(separatorVariants({ spaced, inset, vertical, hasContent }), props.class)">
    <slot />
  </Primitive>
</template>
