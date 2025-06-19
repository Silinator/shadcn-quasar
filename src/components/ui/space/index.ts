import { cva, type VariantProps } from 'class-variance-authority';

export { default as Space } from './Space.vue';
export const spaceVariants = cva('flex-1');

export type BadgeVariants = VariantProps<typeof spaceVariants>;
