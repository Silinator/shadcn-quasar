<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';

type Fetchpriority = 'low' | 'auto' | 'high';
type Loading = 'eager' | 'lazy';
type ReferrerPolicy =
  | 'no-referrer'
  | 'no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin'
  | 'unsafe-url';

interface Props extends PrimitiveProps {
  title?: string;
  fetchpriority?: Fetchpriority;
  loading?: Loading;
  referrerpolicy?: ReferrerPolicy;
  src: string;
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  title: undefined,
  fetchpriority: 'auto',
  loading: 'eager',
  referrerpolicy: 'strict-origin-when-cross-origin',
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn('relative overflow-hidden rounded-[inherit]', props.class)">
    <slot>
      <iframe
        :title="props.title"
        :src="props.src"
        :fetchpriority="props.fetchpriority"
        :loading="props.loading"
        :referrerpolicy="props.referrerpolicy"
        frameborder="0"
        allowfullscreen
        class="h-full w-full"
      ></iframe>
    </slot>
  </Primitive>
</template>
