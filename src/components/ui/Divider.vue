<template>
  <div
    ref="target"
    :class="[
      'bg-gray-900 transition-transform duration-700 origin-left',
      inView ? 'scale-x-100' : 'scale-x-0',
      {
        'h-px': height === 'px',
        'h-full': height === 'full',
      },
    ]"
  >
    <slot />
  </div>
</template>

<script>
let observer;

export default {
  props: {
    height: {
      default: 'px',
      type: String,
      validator: (value) => [
        'px',
        'full',
      ].includes(value),
    },
  },

  data: () => ({
    inView: false,
  }),

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
