<template>
  <header>
    <div class="flex items-center p-10">
      <Logo class="h-10" />
      <nav class="flex flex-grow justify-end">
        <ul class="flex gap-8 items-center">
          <li
            v-for="item in ['discover', 'use', 'develop', 'mine', 'community']"
            :key="item"
          >
            {{ item }}
          </li>

          <li>
            <UiButton>
              Get started
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
