<script setup lang="ts">
import { Icon, type IconVariants } from '@/components/ui/icon';
import { inject, type HTMLAttributes } from 'vue';

interface Props {
  name: string;
  iconSelected?: string;
  variant?: IconVariants['variant'];
  filled?: boolean;
  size?: IconVariants['size'];
  class?: HTMLAttributes['class'];
}

const selected = inject('chipSelected');

const props = withDefaults(defineProps<Props>(), {
  iconSelected: 'check',
  filled: false,
  variant: 'rounded',
  size: 'inherit',
});
</script>

<template>
  <Icon v-if="selected" :name="props.iconSelected" :size="props.size" :variant="props.variant" :filled="props.filled" :class="props.class">
    <slot />
  </Icon>
  <Icon v-else :name="props.name" :variant="props.variant" :filled="props.filled" :size="props.size" :class="props.class">
    <slot />
  </Icon>
</template>
