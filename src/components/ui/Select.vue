<template>
  <label class="block">
    <p
      v-if="$slots.label"
      class="mb-1 text-gray-800"
    >
      <slot name="label" />
    </p>

    <div class="relative">
      <select
        class="block w-full leading-tight placeholder-gray-400 text-gray-700 bg-transparent rounded-sm border border-gray-200 focus:border-gray-400 transition-colors duration-150 ease-in-out appearance-none focus:outline-none"
        :class="[
          {
            // padding vertical
            'p-1 text-sm': size === 'sm',
            'p-4': size === 'base',

            // placeholder
            'text-gray-400': value === '' || value === null,
          },
        ]"
        :value="value"
        v-bind="$attrs"
        v-on="listeners"
      >
        <option
          v-if="placeholder"
          disabled
          value=""
        >
          {{ placeholder }}
        </option>
        <slot />
      </select>

      <div
        :class="[
          'flex absolute inset-y-0 right-0 items-center px-2 pointer-events-none',
          {
            // padding vertical
            'px-1': size === 'sm',
            'px-2': size === 'base',
          },
        ]"
      >
        <svg
          :class="[
            'text-gray-600 stroke-2',
            {
              // padding vertical
              'w-3 h-3': size === 'sm',
              'w-4 h-4': size === 'base',
            },
          ]"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path d="M18 8L12 2L6 8" />
          <path d="M18 16L12 22L6 16" />
        </svg>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: null,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'sm',
        'base',
      ].includes(value),
    },

    value: {
      type: [String, Number, Boolean, Object, Array, Function, Date],
      default: null,
    },
  },

  computed: {
    listeners() {
      const vm = this;
      return {
        // Add listeners from parent
        ...this.$listeners,
        // Ensure that the component works with v-model
        blur: (event) => vm.$emit('blur', event),
        focus: (event) => vm.$emit('focus', event),
        input(event) {
          vm.$emit('input', event.target.value);
          vm.$emit('select', event.target.value);
        },
      };
    },
  },
};
</script>
