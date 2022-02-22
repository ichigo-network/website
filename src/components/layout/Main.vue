<template>
  <div
    :class="[
      {
        'pt-20 sm:pt-32': type === 'hero',
        'pt-28 sm:pt-32': type === 'base',
      }
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'base',
      type: String,
      validator: (value) => [
        'base',
        'hero',
      ].includes(value),
    },
  },
};
</script>
