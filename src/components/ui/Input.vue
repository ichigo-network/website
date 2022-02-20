<template>
  <label class="block">
    <p
      v-if="$slots.default"
      class="mb-1 text-gray-800"
    >
      <slot />
    </p>

    <input
      ref="input"
      class="block w-full leading-tight placeholder-gray-400 text-gray-700 bg-transparent rounded border focus:border-primary-400 transition-colors duration-150 ease-in-out appearance-none focus:outline-none"
      :class="[
        {
          // padding vertical
          'p-4': size === 'base',
        }
      ]"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    >
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },

    placeholder: {
      type: String,
      default: null,
    },

    size: {
      default: 'base',
      type: String,
      validator: (value) => [
        'base',
      ].includes(value),
    },

    type: {
      type: String,
      default: 'text',
    },

    value: {
      type: [String, Number],
      default: null,
    },
  },

  data() {
    return {
      currentType: this.type,
    };
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
        input: (event) => vm.$emit('input', event.target.value),
      };
    },
  },
};
</script>
