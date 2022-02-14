<template>
  <component
    :is="tag"
    class="inline-flex"
  >
    <div
      :class="[
        'h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0',
        {
          'bg-primary-300': color === 'primary',
          'bg-secondary-300': color === 'secondary',
        }
      ]"
    />
    <div>
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    color: {
      default: 'primary',
      type: String,
      validator: (value) => [
        'primary',
        'secondary',
      ].includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },
  },
};
</script>
