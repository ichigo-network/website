<template>
  <component
    :is="tag"
    :class="[
      `bg-primary-300 inline-block shadow-lg focus:ring-1 focus:ring-primary-500 focus:outline-none rounded-sm hover:bg-primary-400 font-normal
transition-colors active:bg-primary-300 relative`,
      {
        // loading
        'cursor-wait': loading,
        'cursor-pointer ': !loading,

        // size
        'px-4 py-2.5': size === 'base',
        'px-6 py-4 leading-tight': size === 'form',
        'px-6 py-3 sm:px-12 sm:py-5 text-lg': size === 'lg',
      }
    ]"
    :aria-busy="loading ? 'true' : null"
    :disabled="loading"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div
      v-if="loading"
      class="flex absolute inset-0 justify-center items-center w-full"
    >
      &#8203;
      <div class="mx-1 w-2 h-2 bg-current rounded-full animate-pulse" />
      <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
      <div class="mx-1 w-2 h-2 bg-current rounded-full animate-pulse animation-delay-300" />
      <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
      <div class="mx-1 w-2 h-2 bg-current rounded-full animate-pulse animation-delay-600" />
      &#8203;
    </div>

    <span :class="{ 'invisible': loading }">
      <slot />
    </span>
  </component>
</template>

<script>
export default {
  props: {
    loading: {
      default: false,
      type: Boolean,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'base',
        'form',
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
