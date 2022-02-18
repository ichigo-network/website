<template>
  <LayoutMain class="pr-4 sm:pr-0 pl-4 sm:pl-24 h-screen">
    <div class="p-10 sm:p-16 h-full text-gray-50 bg-gray-900">
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
          class="p-4 text-lg hover:text-primary-400 rounded border border-gray-50 transition-colors"
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
