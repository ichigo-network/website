<template>
  <component
    :is="tag || `h${level}`"
    ref="target"
    :class="[
      {
        'text-3xl sm:text-4xl md:text-5xl': (size || level) === 1,
        'text-2xl sm:text-3xl md:text-4xl': (size || level) === 2,
        'text-xl sm:text-2xl': (size || level) === 3,
        'text-lg sm:text-xl': (size || level) >= 4,
      },
    ]"
    :aria-label="trimmedText"
  >
    <transition-group
      v-if="splittedTex.length > 0"
      enter-active-class="transition-opacity duration-500"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <template
        v-for="word, key in splittedTex"
      >
        <span
          v-if="inView"
          :key="key"
          aria-hidden="true"
          :style="{ transitionDelay: `${key * delay}ms` }"
        >{{ word }} </span>
      </template>
    </transition-group>

    <slot v-else />
  </component>
</template>

<script>
let observer;

export default {
  props: {
    delay: {
      default: 200,
      type: Number,
    },

    level: {
      default: 1,
      type: [Number, String],
      validator: (value) => [
        1,
        2,
        3,
        4,
        5,
        6,
      ].includes(value),
    },

    size: {
      default: null,
      type: [Number, String],
    },

    tag: {
      default: null,
      type: String,
    },
  },

  data: () => ({
    inView: false,
  }),

  computed: {
    trimmedText() {
      if (!this.$slots.default) return '';

      return this.$slots.default[0].text.trim();
    },

    splittedTex() {
      return this.trimmedText.split(' ');
    },
  },

  mounted() {
    if ('IntersectionObserver' in window) {
      const callback = (entries) => {
        if (this.inView) return;
        this.inView = entries[0].isIntersecting;
      };
      observer = new IntersectionObserver(callback);
      observer.observe(this.$refs.target);
    } else {
      this.inView = true;
    }
  },

  beforeDestroy() {
    if ('IntersectionObserver' in window) observer.disconnect();
  },
};
</script>
