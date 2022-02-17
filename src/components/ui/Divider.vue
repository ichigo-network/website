<template>
  <div
    ref="section"
    :class="[
      'h-px bg-gray-900 transition-transform duration-700 origin-left',
      inView ? 'scale-x-100' : 'scale-x-0',
    ]"
  >
    <slot />
  </div>
</template>

<script>
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
        if (this.once && this.inView) return;
        this.inView = entries[0].isIntersecting;
      };
      const observer = new IntersectionObserver(callback, {
        threshold: [0.4],
      });
      observer.observe(this.$refs.section);
    }
  },
};
</script>
