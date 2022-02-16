<template>
  <header class="absolute z-50 w-full">
    <div class="flex items-center p-6 sm:p-10 w-full bg-background">
      <div class="flex-grow">
        <Logo class="flex-shrink-0 h-10" />
      </div>
      <nav
        :class="[
          'block sm:flex absolute sm:static inset-x-0 top-20 w-full sm:w-auto bg-background sm:visible sm:opacity-100 z-40',
          isNavOpen
            ? 'visible duration-500 opacity-100 translate-y-0'
            : 'invisible ease-out-mijin duration-500 opacity-0 -translate-y-4 sm:translate-y-0',
        ]"
      >
        <ul class="flex flex-col sm:flex-row gap-8 sm:items-center p-6 sm:p-0 border-b sm:border-b-0 border-gray-900">
          <li
            v-for="item in ['discover', 'use', 'develop', 'mine', 'community']"
            :key="item"
          >
            {{ $t(`links.${item}`) }}
          </li>

          <li class="hidden sm:block">
            <UiButton>
              {{ $t('common.getStarted') }}
            </UiButton>
          </li>
        </ul>
      </nav>
      <button
        class="relative w-6 h-4"
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
