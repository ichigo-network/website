<template>
  <component
    :is="tag"
    :class="[
      'inline-block transition-colors duration-150 ease-in-out',
      {
        // color
        'hover:opacity-80': color === 'gray',
        'text-primary-500 hover:text-gray-600': color === 'primary',
      },
    ]"
    :target="external && !target ? '_blank' : target"
    :rel="external && !rel ? 'noopener' : rel"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span
      v-if="external"
      class="inline-flex items-center"
    >
      <slot />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        role="presentation"
        class="w-4 h-4 stroke-2"
      >
        <line
          x1="7"
          y1="17"
          x2="17"
          y2="7"
        />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </span>
    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script>
export default {
  props: {
    color: {
      default: 'gray',
      type: String,
      validator: (value) => [
        'gray',
        'primary',
      ].includes(value),
    },

    external: {
      default: false,
      type: Boolean,
    },

    rel: {
      default: null,
      type: String,
    },

    target: {
      default: null,
      type: String,
    },

    tag: {
      default: 'a',
      type: String,
    },
  },
};
</script>
