<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';
import { cardActionsVariants, type CardActionsVariants } from '.';

interface Props extends PrimitiveProps {
  vertical?: boolean;
  align?: CardActionsVariants['align'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  vertical: false,
});

const effectiveAlign = computed<CardActionsVariants['align']>(() => props.align ?? (props.vertical ? 'stretch' : 'left'));
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(cardActionsVariants({ align: effectiveAlign, vertical }), props.class)">
    <slot />
  </Primitive>
</template>
