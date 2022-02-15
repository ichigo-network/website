<template>
  <div class="pt-32 pl-24 h-screen">
    <div class="p-16 h-full text-gray-50 bg-gray-900">
      <div class=" max-w-3xl">
        <UiHeading class="py-16">
          <template v-if="error.statusCode === 404">
            {{ $t('error.notFound') }}
          </template>

          <template v-else>
            {{ $t('error.occurred') }}
          </template>
        </UiHeading>

        <UiLink
          tag="nuxt-link"
          :to="localePath('index')"
          class="text-lg"
        >
          {{ $t('error.goHome') }}
        </UiLink>
      </div>
    </div>
  </div>
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
