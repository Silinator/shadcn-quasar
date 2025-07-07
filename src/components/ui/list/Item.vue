<script setup lang="ts">
import ripple from '@/lib/directives/ripple';
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { itemVariants } from '.';

interface Props extends PrimitiveProps {
  dense?: boolean;
  ripple?: boolean;
  clickable?: boolean;
  disable?: boolean;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'li',
  asChild: false,
  dense: false,
  clickable: false,
  ripple: false,
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
    v-ripple="{ ...(props.ripple && props.clickable && !props.disable ? {} : { disabled: true }) }"
    :class="cn(itemVariants({ dense, clickable, disable }), props.class)"
  >
    <slot />
  </Primitive>
</template>
