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
        v-for="section, sectionKey in {
          use: {
            ichigoCrowdsale: {
              page: 'crowdsale'
            },
            ichigoWallet: {
              page: 'wallet'
            },
            sandbox: {
              page: 'sandbox'
            },
            tokenFaucet: {
              page: 'token-faucet'
            },
          },

          develop: {
            documentation: {
            },
            sdk: {
            },
          },

          mine: {
            provideStorage: {
            },
            becomeValidator: {
            },
            stakeIchigo: {
            },
          },

          community: {
            github: {
              link: $config.link.github,
              external: true,
            },
            reddit: {
              link: $config.link.reddit,
              external: true,
            },
            twitter: {
              link: $config.link.twitter,
              external: true,
            },
            telegram: {
              link: $config.link.telegram,
              external: true,
            },
          },
        }"
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

          <template v-else-if="!item.link && !item.page">
            {{ $t(`links.${key}`) }}
            <UiTag size="sm">
              {{ $t('common.soon') }}
            </UiTag>
          </template>

          <template v-else>
            {{ $t(`links.${key}`) }}
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
