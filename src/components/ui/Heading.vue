<template>
  <component
    :is="tag || `h${level}`"
    :class="[
      {
        'text-3xl sm:text-4xl md:text-5xl': (size || level) === 1,
        'text-2xl sm:text-3xl md:text-4xl': (size || level) === 2,
        'text-xl sm:text-2xl md:text-3xl': (size || level) === 3,
        'text-lg sm:text-xl': (size || level) >= 4,
      },
    ]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      default: 1,
      type: [Number, String],
      validator: (value) => [
        1,
        2,
        3,
        4,
        5,
        6,
      ].includes(value),
    },

    size: {
      default: null,
      type: [Number, String],
    },

    tag: {
      default: null,
      type: String,
    },
  },
};
</script>
