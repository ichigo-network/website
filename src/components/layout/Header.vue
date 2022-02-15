<template>
  <header class="absolute w-full">
    <div class="flex items-center p-10 w-full bg-background">
      <Logo class="h-10" />
      <nav class="flex flex-grow justify-end">
        <ul class="flex gap-8 items-center">
          <li
            v-for="item in ['discover', 'use', 'develop', 'mine', 'community']"
            :key="item"
          >
            {{ $t(`links.${item}`) }}
          </li>

          <li>
            <UiButton>
              {{ $t('common.getStarted') }}
            </UiButton>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline';

export default {
  components: {
    Logo,
  },
};
</script>
