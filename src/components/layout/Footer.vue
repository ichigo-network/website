<template>
  <footer class="p-10 border-t border-gray-50">
    <div class="flex gap-14">
      <div class="flex flex-col flex-grow gap-4">
        <Logo />

        <p class="flex flex-grow items-end text-sm text-gray-500">
          Non-exclusive community 2022, ichigo network.
          <br>
          All rights publicly available.
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
              link: 'https://github.com/ichigo-network/',
              external: true,
            },
            reddit: {
              link: 'https://www.reddit.com/r/ichigonetwork',
              external: true,
            },
            twitter: {
              link: 'https://twitter.com/ichigonetwork',
              external: true,
            },
            telegram: {
              link: 'https://t.me/ichigonetwork',
              external: true,
            },
          },
        }"
        :key="sectionKey"
        class="flex flex-col gap-6"
      >
        <li class="text-gray-500">
          {{ sectionKey }}
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
            {{ key }}
          </UiLink>

          <template v-else-if="!item.link && !item.page">
            {{ key }}
            <UiTag size="sm">
              Soon
            </UiTag>
          </template>

          <template v-else>
            {{ key }}
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
