<template>
  <header class="absolute z-50 w-full">
    <div class="flex items-center p-6 lg:p-10 w-full bg-background">
      <div class="flex-grow">
        <nuxt-link
          :to="localePath('index')"
          :aria-label="$t('links.index')"
          class="inline-block"
        >
          <Logo class="h-10" />
        </nuxt-link>
      </div>
      <nav
        :class="[
          'block lg:flex absolute lg:static inset-x-0 top-20 w-full lg:w-auto bg-background lg:visible lg:opacity-100 z-40',
          isNavOpen
            ? 'visible duration-500 opacity-100 translate-y-0'
            : 'invisible ease-out-mijin duration-500 opacity-0 -translate-y-4 lg:translate-y-0',
        ]"
      >
        <ul class="flex flex-col lg:flex-row gap-8 lg:items-center p-6 lg:p-0 border-b lg:border-b-0 border-gray-900">
          <li
            v-for="item in ['discover', 'use', 'develop', 'mine', 'community']"
            :key="item"
          >
            {{ $t(`links.${item}`) }}
          </li>

          <li class="hidden lg:block">
            <UiButton>
              {{ $t('common.getStarted') }}
            </UiButton>
          </li>
        </ul>
      </nav>

      <button
        class="lg:hidden relative w-6 h-4"
        :aria-label="$t('common.menu')"
        @click="isNavOpen = !isNavOpen"
      >
        <div
          :class="[
            'absolute top-0 w-full h-0.5 bg-gray-900 transition-transform',
            {
              'rotate-45 translate-y-2': isNavOpen,
            }
          ]"
        />
        <div
          :class="[
            'absolute bottom-0 w-full h-0.5 bg-gray-900 transition-transform',
            {
              '-rotate-45 -translate-y-1.5': isNavOpen,
            }
          ]"
        />
      </button>
    </div>
  </header>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline';

export default {
  components: {
    Logo,
  },

  data() {
    return {
      isNavOpen: false,
    };
  },
};
</script>
