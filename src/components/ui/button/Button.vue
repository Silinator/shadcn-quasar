<script setup lang="ts">
import ripple from '@/lib/directives/ripple';
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { buttonVariants, type ButtonVariants } from '.';

interface Props extends PrimitiveProps {
  ripple?: boolean;
  outline?: boolean;
  flat?: boolean;
  unelevated?: boolean;
  rounded?: boolean;
  round?: boolean;
  push?: boolean;
  square?: boolean;
  glossy?: boolean;
  fab?: boolean;
  fabMini?: boolean;
  dense?: boolean;
  size?: ButtonVariants['size'];
  noCaps?: boolean;
  noWrap?: boolean;
  align?: ButtonVariants['align'];
  stack?: boolean;
  stretch?: boolean;
  loading?: boolean;
  disable?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  asChild: false,
  outline: false,
  flat: false,
  unelevated: false,
  rounded: false,
  round: false,
  push: false,
  square: false,
  glossy: false,
  fab: false,
  fabMini: false,
  dense: false,
  size: 'md',
  noCaps: false,
  noWrap: false,
  align: 'center',
  stack: false,
  stretch: false,
  ripple: true,
  loading: false,
  disable: false,
});

defineOptions({
  directives: { ripple },
});
</script>

<template>
  <Primitive
    :as="props.as"
    :asChild="props.asChild"
    v-ripple="{ ...(props.ripple && !props.disable && !props.loading ? {} : { disabled: true }) }"
    :class="
      cn(
        buttonVariants({
          outline,
          flat,
          unelevated,
          rounded,
          round,
          push,
          square,
          glossy,
          fab,
          fabMini,
          dense,
          size,
          noCaps,
          noWrap,
          align,
          stack,
          stretch,
          loading,
          disable,
        }),
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
