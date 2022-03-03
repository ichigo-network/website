<template>
  <component
    :is="tag"
    class="inline-flex"
  >
    <div
      :class="[
        'h-2 w-2 rounded-full mt-2 mr-2 flex-shrink-0',
        {
          'bg-primary-300': currentColor === 'primary' || status === 'completed',
          'bg-secondary-300': currentColor === 'secondary' || status === 'active',
          'bg-gray-100': status === 'pending',
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

    status: {
      default: null,
      type: String,
      validator: (value) => [
        'completed',
        'active',
        'pending',
      ].includes(value),
    },

    tag: {
      default: 'span',
      type: String,
    },
  },

  computed: {
    currentColor() {
      return this.status ? null : this.color;
    },
  },
};
</script>
