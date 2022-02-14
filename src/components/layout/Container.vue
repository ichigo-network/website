<template>
  <component
    :is="tag"
    class="px-10"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      default: 'div',
      type: String,
    },
  },
};
</script>
