<template>
  <div>
    <LayoutHeader />
    <nuxt role="main" />
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  head() {
    const head = this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true });
    head.link.push({ rel: 'canonical', href: `${this.$config.app.url}${this.$route.path}` });

    return head;
  },
};
</script>
