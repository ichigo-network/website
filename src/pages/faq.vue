<template>
  <LayoutMain>
    <div class="pr-4 sm:pr-0 pl-4 sm:pl-24">
      <div class="p-6 sm:p-16 bg-primary-300">
        <div class="max-w-3xl">
          <UiHeading class="pb-8">
            {{ $t('faq.title') }}
          </UiHeading>

          <UiCollapse
            v-for="faq, key in $t('faq.items')"
            :key="key"
          >
            {{ $t(`faq.items.${key}.question`) }}
            <template #content>
              {{ $t(`faq.items.${key}.answer`) }}
            </template>
          </UiCollapse>
        </div>
      </div>
    </div>

    <CallToAction />
  </LayoutMain>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('links.faq'),
    };
  },
};
</script>
