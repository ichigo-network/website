<template>
  <LayoutMain class="pr-4 sm:pr-0 pl-4 sm:pl-24 h-screen">
    <div class="p-10 sm:p-16 h-full dark:text-gray-50 bg-secondary-400">
      <div class="max-w-3xl">
        <UiHeading class="pb-24">
          <template v-if="error.statusCode === 404">
            {{ $t('error.notFound') }}
          </template>

          <template v-else>
            {{ $t('error.occurred') }}
          </template>
        </UiHeading>

        <nuxt-link
          :to="localePath('index')"
          class="p-4 text-lg rounded border border-current hover:opacity-80 transition-colors"
        >
          {{ $t('error.goHome') }}
        </nuxt-link>
      </div>
    </div>
  </LayoutMain>
</template>

<script>
export default {
  props: {
    error: {
      required: true,
      type: Object,
    },
  },

  head() {
    return {
      title: this.error.statusCode,
    };
  },
};
</script>
