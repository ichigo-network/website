<template>
  <component
    :is="tag"
    :class="[
      `bg-primary-300 inline-block shadow-lg focus:ring-1 focus:ring-primary-500 focus:outline-none rounded-sm hover:bg-primary-400
      transition-colors active:bg-primary-300`,
      {
        'px-4 py-2.5': size === 'base',
        'px-6 py-3 sm:px-12 sm:py-5 text-lg': size === 'lg',
      }
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'base',
        'lg',
      ].includes(value),
    },

    tag: {
      default: 'button',
      type: String,
    },
  },
};
</script>
