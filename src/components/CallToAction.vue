<template>
  <div class="py-32 mx-auto max-w-3xl text-center">
    <p class="pb-10 text-3xl">
      Join ichigo network and start the first decentralized social ecosystem
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
