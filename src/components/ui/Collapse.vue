<template>
  <component
    :is="tag"
    :aria-disabled="disabled"
    :aria-expanded="collapsed ? 'false' : 'true'"
    class="border-b border-gray-900"
  >
    <div
      class="flex items-center py-6"
      :class="{
        'cursor-pointer' : !disabled,
      }"
      @click="toggleExpand()"
    >
      <div class="flex-1 text-2xl">
        <slot />
      </div>

      <div>
        <!-- <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          role="presentation"
          :class="[
            'stroke-2 w-5 h-5 transform transition-transform duration-200',
            { 'rotate-180': !collapsed }
          ]"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg> -->

        <div class="relative w-4 h-4">
          <div class="absolute inset-0 m-auto w-full h-0.5 bg-gray-900" />
          <div
            :class="[
              'absolute inset-0 m-auto w-0.5 h-full bg-gray-900 transition-transform',
              { 'rotate-90': !collapsed }
            ]"
          />
        </div>
      </div>
    </div>

    <div
      :class="[
        'transition-all duration-300 ease-in-out',
        { 'overflow-y-hidden': !expandedCompleted }
      ]"
      :style="{ maxHeight: maxHeight + 'px' }"
    >
      <div
        ref="content"
        class="pb-6"
      >
        <slot name="content" />
      </div>
    </div>
  </component>
</template>

<script>
const collapseDurationMs = 300;

export default {
  name: 'MijinCollapse',

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    expanded: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'div',
      type: String,
    },
  },

  data() {
    return {
      collapsed: !this.expanded,
      expandedCompleted: false,
      maxHeight: 0,
    };
  },

  beforeMount() {
    window.addEventListener('resize', this.resizeContent);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeContent);
  },

  mounted() {
    this.resizeContent();
  },

  methods: {
    toggleExpand() {
      if (this.disabled) return;

      this.expandedCompleted = false;
      if (this.collapsed) {
        setTimeout(() => {
          this.expandedCompleted = true;
        }, collapseDurationMs);
      }

      this.collapsed = !this.collapsed;
      this.$emit('toggle', this.collapsed);
      this.resizeContent();
    },

    resizeContent() {
      if (this.collapsed) {
        this.maxHeight = 0;
      } else {
        this.maxHeight = this.$refs.content.offsetHeight;
      }
    },
  },
};
</script>
