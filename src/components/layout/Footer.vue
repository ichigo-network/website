<template>
  <footer class="pt-10">
    <div class="py-24 px-4 lg:px-10 border-t border-gray-50">
      <div class="flex flex-col lg:flex-row gap-14">
        <div class="flex flex-col flex-grow gap-4">
          <Logo />

          <p class="flex flex-grow items-end text-sm text-gray-500">
            {{ $t('footer.license', { year: new Date().getFullYear() }) }}
            <br>
            {{ $t('footer.rights') }}
          </p>
          <div class="flex gap-4 items-center">
            <div
              v-if="Object.keys($i18n.locales).length > 1"
              class="w-32"
            >
              <UiSelect
                v-model="currentLocale"
                size="sm"
                @select="switchLocale()"
              >
                <option
                  v-for="locale in $i18n.locales"
                  :key="locale.code"
                  :value="locale.code"
                >
                  {{ locale.name }}
                </option>
              </UiSelect>
            </div>

            <div>
              <UiToggle
                v-model="isDarkTheme"
                size="sm"
                @change="switchTheme()"
              >
                <div class=" overflow-hidden">
                  <UiTransitionTranslateY
                    mode="out-in"
                  >
                    <div :key="$colorMode.value">
                      {{ $t(`footer.theme.${$colorMode.value}`) }}
                    </div>
                  </UiTransitionTranslateY>
                </div>
              </UiToggle>
            </div>
          </div>
        </div>

        <ul
          v-for="section, sectionKey in $config.nav"
          :key="sectionKey"
          class="grid lg:flex lg:flex-col grid-cols-2 gap-4 lg:gap-6"
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
              <span class="text-gray-600">{{ $t(`links.${key}`) }}</span>
              <UiTag size="sm">
                {{ $t('common.soon') }}
              </UiTag>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline';

export default {
  components: {
    Logo,
  },

  data: () => ({
    currentLocale: '',
    isDarkTheme: false,
  }),

  mounted() {
    this.currentLocale = this.$i18n.locale;
    this.isDarkTheme = this.$colorMode.value === 'dark';
  },

  methods: {
    switchLocale() {
      this.$router.push(this.switchLocalePath(this.currentLocale));
    },

    switchTheme() {
      this.$colorMode.preference = this.isDarkTheme ? 'dark' : 'light';
    },
  },
};
</script>
