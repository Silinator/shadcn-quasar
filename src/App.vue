<script setup lang="ts">
import Avatar from '@/components/ui/avatar/Avatar.vue';
import Icon from './components/ui/icon/Icon.vue';
</script>

<template>
  <div class="flex gap-4">
    <Icon name="home" variant="sharp" size="xs" class="text-red-500" />
    <Icon name="home" variant="rounded" size="sm" class="text-red-500" />
    <Icon name="home" variant="rounded" filled size="md" class="text-red-500" />
    <Icon name="home" variant="outlined" size="lg" class="text-red-500" />
    <Icon name="home" variant="outlined" filled size="xl" class="text-red-500" />
  </div>

  <div class="flex gap-4">
    <Avatar size="xs">J</Avatar>
    <Avatar size="sm">J</Avatar>
    <Avatar rounded class="bg-red-500">GHA</Avatar>
    <Avatar square size="lg">J</Avatar>
    <Avatar size="xl"><img src="https://cdn.quasar.dev/img/avatar.png" /></Avatar>
  </div>
</template>
