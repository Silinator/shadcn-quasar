<script setup lang="ts">
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'vue';
import { type SpinnerVariants, spinnerVariants } from '.';

interface Props {
  size?: SpinnerVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  class: '',
});
</script>

<template>
  <svg
    role="status"
    aria-live="polite"
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    :class="cn(spinnerVariants(props), props.class)"
  >
    <g stroke-width="4" stroke-linecap="round">
      <line y1="17" y2="29" transform="translate(32,32) rotate(180)">
        <animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(210)">
        <animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(240)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(270)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(300)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(330)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(0)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(30)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(60)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(90)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(120)">
        <animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate>
      </line>
      <line y1="17" y2="29" transform="translate(32,32) rotate(150)">
        <animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
      </line>
    </g>
  </svg>
</template>
