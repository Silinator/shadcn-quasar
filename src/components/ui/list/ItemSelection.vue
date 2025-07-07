<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { itemSelectionVariants } from '.';

interface Props extends PrimitiveProps {
  avatar?: boolean;
  thumbnail?: boolean;
  side?: boolean;
  top?: boolean;
  noWrap?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  avatar: false,
  thumbnail: false,
  side: false,
  top: false,
  noWrap: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(itemSelectionVariants({ avatar, thumbnail, side, top, noWrap }), props.class)">
    <slot />
  </Primitive>
</template>
