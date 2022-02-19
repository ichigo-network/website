<template>
  <div>
    <div
      ref="target"
      :class="[
        'h-px bg-gray-900 transition-transform duration-700 origin-left',
        inView ? 'scale-x-100' : 'scale-x-0',
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
let observer;

export default {
  props: {
    once: {
      type: Boolean,
      default: true,
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
