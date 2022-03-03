<template>
  <label
    :class="[
      'cursor-pointer',
      $slots.default ? 'inline-flex' : 'inline-block',
      {
        'flex-row-reverse': reversed && $slots.default,
      },
    ]"
  >
    <div
      class="rounded-full transition-colors duration-300"
      :class="[
        {
          'flex-none': $slots.default,
          'w-6 h-3': size === 'sm',
          'my-1.5': size === 'sm' && $slots.default,
          'w-10 h-6 p-1': size === 'base',
          'bg-gray-200': !checked,
          'bg-primary-200': checked,
        }
      ]"
    >
      <input
        v-model="checked"
        :aria-checked="checked ? 'true' : 'false'"
        type="checkbox"
        class="hidden"
        v-bind="$attrs"
      >

      <div
        class="rounded-full shadow transition duration-300 transform"
        :class="[
          {
            'w-3 h-3': size === 'sm',
            'w-4 h-4': size === 'base',
            'translate-x-full': checked,
            'bg-gray-400': !checked,
            'bg-primary-500': checked,
          },
        ]"
      />
    </div>
    <div
      v-if="$slots.default"
      :class="[
        'flex-grow',
        reversed ? 'pr-2' : 'pl-2',
      ]"
    >
      <slot />
    </div>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'option',
    event: 'change',
  },
  props: {
    option: {
      type: Boolean,
      default: false,
    },

    reversed: {
      type: Boolean,
      default: false,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
      ].includes(value),
    },
  },

  computed: {
    checked: {
      get() {
        return this.option;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
  },
};
</script>
