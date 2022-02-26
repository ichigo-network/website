<template>
  <component
    :is="transitionType"
    :mode="mode"
    :tag="tag"
    enter-active-class="transition-transform duration-300"
    leave-active-class="transition-transform duration-300"
    enter-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-class="translate-y-0"
    leave-to-class="translate-y-full"
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
