<template>
  <footer class="py-24 px-4 sm:px-10 border-t border-gray-50">
    <div class="flex flex-col sm:flex-row gap-14">
      <div class="flex flex-col flex-grow gap-4">
        <Logo />

        <p class="flex flex-grow items-end text-sm text-gray-500">
          {{ $t('footer.license', { year: new Date().getFullYear() }) }}
          <br>
          {{ $t('footer.rights') }}
        </p>
      </div>

      <ul
        v-for="section, sectionKey in $config.nav"
        :key="sectionKey"
        class="grid sm:flex sm:flex-col grid-cols-2 gap-4 sm:gap-6"
      >
        <li class="col-span-2 text-gray-500">
          {{ $t(`links.${sectionKey}`) }}
        </li>

        <li
          v-for="item, key in section"
          :key="key"
          class="text-sm"
        >
          <UiLink
            v-if="item.link"
            :href="item.link"
            external
          >
            {{ $t(`links.${key}`) }}
          </UiLink>

          <UiLink
            v-else-if="item.page"
            tag="nuxt-link"
            :to="localePath(item.page)"
          >
            {{ $t(`links.${key}`) }}
          </UiLink>

          <template v-else>
            {{ $t(`links.${key}`) }}
            <UiTag size="sm">
              {{ $t('common.soon') }}
            </UiTag>
          </template>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline';

export default {
  components: {
    Logo,
  },
};
</script>
