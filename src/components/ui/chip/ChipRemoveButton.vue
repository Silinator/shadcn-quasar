<script setup lang="ts">
import { Icon, type IconVariants } from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { inject, type HTMLAttributes, type Ref } from 'vue';

interface Props {
  name?: string;
  variant?: IconVariants['variant'];
  filled?: boolean;
  size?: IconVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  name: 'cancel',
  filled: false,
  variant: 'rounded',
  size: 'inherit',
});

const disable = inject<Ref<boolean>>('chipDisable');
const onRemoveFn = inject<() => void>('onRemove');

const emit = defineEmits<{
  (e: 'click', event: MouseEvent | KeyboardEvent): void;
}>();

function onClick(event: MouseEvent | KeyboardEvent) {
  if (disable?.value) {
    return;
  }

  emit('click', event);

  onRemoveFn?.();
}
</script>

<template>
  <Icon
    @click.stop="onClick"
    role="button"
    tabindex="0"
    :name="props.name"
    :variant="props.variant"
    :filled="props.filled"
    :size="props.size"
    :class="cn('pointer-events-auto !-mr-2.5 cursor-pointer opacity-60 hover:opacity-100', props.class)"
  >
    <slot />
  </Icon>
</template>
