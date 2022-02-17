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
          'block lg:flex overflow-y-auto lg:overflow-y-visible bg-background fixed lg:static inset-0 top-20 w-full lg:w-auto lg:visible lg:opacity-100 z-40',
          isNavOpen
            ? 'visible duration-300 opacity-100 translate-y-0'
            : 'invisible ease-out-mijin duration-150 opacity-0 -translate-y-4 lg:translate-y-0',
        ]"
      >
        <ul class="flex flex-col lg:flex-row lg:items-center p-6 lg:p-0 border-b lg:border-b-0 border-gray-900">
          <li
            v-for="section, sectionKey in $config.nav"
            :key="sectionKey"
          >
            <div
              v-if="Object.keys(section)"
              class="group relative"
            >
              <div class="py-2 lg:px-6">
                {{ $t(`links.${sectionKey}`) }}
              </div>

              <ul class="lg:absolute group-hover:visible lg:invisible lg:z-10 lg:p-4 space-y-1 w-56 lg:bg-background lg:shadow-lg group-hover:opacity-100 lg:opacity-0 transition-all">
                <li
                  v-for="item, key in section"
                  :key="key"
                >
                  <UiLink
                    v-if="item.link"
                    :href="item.link"
                    external
                    :class="[
                      'p-2 rounded w-full',
                      {
                        'hover:bg-gray-50': item.link || item.page,
                      }
                    ]"
                  >
                    {{ $t(`links.${key}`) }}
                  </UiLink>

                  <UiLink
                    v-else-if="item.page"
                    tag="nuxt-link"
                    :to="localePath(item.page)"
                    :class="[
                      'p-2 rounded w-full',
                      {
                        'hover:bg-gray-50': item.link || item.page,
                      }
                    ]"
                  >
                    {{ $t(`links.${key}`) }}
                  </UiLink>

                  <div
                    v-else
                    class="p-2"
                  >
                    {{ $t(`links.${key}`) }}
                    <UiTag size="sm">
                      {{ $t('common.soon') }}
                    </UiTag>
                  </div>
                </li>
              </ul>
            </div>
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

  data: () => ({
    isNavOpen: false,
  }),
};
</script>
