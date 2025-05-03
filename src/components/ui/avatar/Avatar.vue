<script setup lang="ts">
import { cn } from '@/lib/utils';
import { computed, type HTMLAttributes } from 'vue';
import { avatarVariants, type AvatarVariants } from '.';

interface Props {
  square?: boolean;
  rounded?: boolean;
  size?: AvatarVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  square: false,
  rounded: false,
  size: 'md',
});

const variant = computed<AvatarVariants['variant']>(() => {
  if (props.square) return 'square';
  if (props.rounded) return 'rounded';
  return 'circle';
});
</script>

<template>
  <div :class="cn(avatarVariants({ variant, size }), props.class)">
    <slot />
  </div>
</template>
