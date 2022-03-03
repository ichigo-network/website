<template>
  <component
    :is="transitionType"
    :mode="mode"
    :tag="tag"
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    group: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'span',
      type: String,
    },

    mode: {
      default: null,
      type: String,
      validator: (value) => [
        null,
        'in-out',
        'out-in',
      ].includes(value),
    },
  },

  computed: {
    transitionType() {
      return this.group ? 'transition-group' : 'transition';
    },
  },
};
</script>
