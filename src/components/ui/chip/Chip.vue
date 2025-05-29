<script setup lang="ts">
import ripple from '@/lib/directives/ripple';
import { cn } from '@/lib/utils';
import { computed, provide, toRef, type HTMLAttributes } from 'vue';
import { chipVariants, type ChipVariants } from '.';

interface Props {
  modelValue?: boolean;
  selected?: boolean | null;
  dense?: boolean;
  square?: boolean;
  outline?: boolean;
  clickable?: boolean;
  ripple?: boolean;
  disable?: boolean;
  size?: ChipVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  selected: null,
  dense: false,
  square: false,
  outline: false,
  ripple: true,
  clickable: false,
  disable: false,
});

defineOptions({
  directives: { ripple },
});

const isClickable = computed(() => {
  return props.disable === false && (props.clickable === true || props.selected !== null);
});

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
  (e: 'update:selected', val: boolean | null): void;
  (e: 'click', event: MouseEvent | KeyboardEvent): void;
  (e: 'remove'): void;
}>();

function onClick(event: MouseEvent | KeyboardEvent) {
  if (!isClickable.value) {
    return;
  }

  const next = props.selected === true ? false : true;

  emit('update:selected', next);
  emit('click', event);
}

function onRemove() {
  emit('update:modelValue', false);
  emit('remove');
}
provide('onRemove', onRemove);

const selected = toRef(props, 'selected');
provide('chipSelected', selected);

const disable = toRef(props, 'disable');
provide('chipDisable', disable);
</script>

<template>
  <div
    v-if="props.modelValue"
    :role="isClickable ? 'button' : undefined"
    :aria-disabled="props.disable ? 'true' : undefined"
    :tabindex="isClickable ? 0 : undefined"
    @click="onClick"
    @keyup.enter="onClick"
    v-ripple="{ ...(props.ripple && !props.disable ? {} : { disabled: true }) }"
    :class="cn(chipVariants({ dense, square, outline, size, isClickable, disable }), props.class)"
  >
    <slot />
  </div>
</template>
