<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { buttonGroupVariants } from '.';

interface Props extends PrimitiveProps {
  spread?: boolean;
  outline?: boolean;
  flat?: boolean;
  unelevated?: boolean;
  rounded?: boolean;
  square?: boolean;
  push?: boolean;
  glossy?: boolean;
  stretch?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  spread: false,
  outline: false,
  flat: false,
  unelevated: false,
  rounded: false,
  square: false,
  push: false,
  glossy: false,
  stretch: false,
});
</script>

<template>
  <Primitive
    :as="props.as"
    :asChild="props.asChild"
    role="group"
    :class="
      cn(
        buttonGroupVariants({
          spread,
          outline,
          flat,
          unelevated,
          rounded,
          square,
          push,
          glossy,
        }),
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
