<template>
  <div class="py-16 sm:py-32 px-4 mx-auto max-w-3xl text-center">
    <p class="pb-10 text-2xl sm:text-3xl">
      {{ $t('callToAction.title') }}
    </p>

    <div class="flex gap-6 justify-center items-center">
      <UiButton
        size="lg"
      >
        {{ $t('common.getStarted') }}
      </UiButton>

      <UiLink class="text-lg">
        {{ $t('common.readWhitepaper') }}
      </UiLink>
    </div>
  </div>
</template>
