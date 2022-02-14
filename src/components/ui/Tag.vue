<template functional>
  <component
    :is="props.tag"
    class="inline-block leading-none rounded-full"
    :class="
      [
        {
          // color
          'bg-primary-100 text-primary-900': props.color === 'primary',

          // size
          'text-xs px-2 py-0.5 ': props.size === 'sm',
          'px-3 py-2': props.size === 'base',
        },
      ]"
  >
    <slot />
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
      ].includes(value),
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
      ].includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },
  },
};
</script>
