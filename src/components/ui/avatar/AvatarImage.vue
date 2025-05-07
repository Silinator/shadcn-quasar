<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from 'reka-ui';

const props = defineProps<AvatarImageProps>();
</script>

<template>
  <AvatarImage data-slot="avatar-image" v-bind="props">
    <slot />
  </AvatarImage>
</template>
