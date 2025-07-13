<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type HTMLAttributes } from 'vue';
import { bannerActionsVariants, bannerAvatarVariants, bannerVariants } from '.';

interface Props extends PrimitiveProps {
  inlineActions?: boolean;
  dense?: boolean;
  rounded?: boolean;
  class?: HTMLAttributes['class'];
  avatarClass?: HTMLAttributes['class'];
  actionsClass?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  asChild: false,
  inlineActions: false,
  dense: false,
  rounded: false,
});
</script>

<template>
  <Primitive :as="props.as" :asChild="props.asChild" :class="cn(bannerVariants({ inlineActions, dense, rounded }), props.class)">
    <div :class="cn('flex items-center gap-4', props.inlineActions ? 'flex-[10000_1_0%]' : 'self-start')">
      <template v-if="$slots.avatar">
        <div :class="cn(bannerAvatarVariants({ dense }), props.avatarClass)">
          <slot name="avatar" />
        </div>
      </template>

      <div class="text-sm">
        <slot />
      </div>
    </div>

    <template v-if="$slots.actions">
      <div :class="cn(bannerActionsVariants({ inlineActions }), props.actionsClass)">
        <slot name="actions" />
      </div>
    </template>
  </Primitive>
</template>
