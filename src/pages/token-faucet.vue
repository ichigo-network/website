<template>
  <LayoutMain>
    <LayoutContainer>
      <div class="grid lg:grid-cols-2 gap-10 items-center sm:py-24">
        <div class="mx-auto space-y-10 max-w-2xl">
          <UiHeading>
            Token faucet for testnet
          </UiHeading>

          <p class="text-gray-700">
            This faucet is for test purpose only.
            <br>
            It emits test token minted on the Solana Devnet
            $ICHIGO test token will have no value on the Mainnet
          </p>
        </div>

        <div>
          <form class="p-6 sm:p-16 space-y-10 bg-gray-50">
            <UiInput
              placeholder="Your email address"
              type="email"
              required
            >
              Email
            </UiInput>

            <UiInput
              placeholder="Your wallet address"
              type="email"
              required
            >
              Wallet address
            </UiInput>

            <UiButton
              type="submit"
            >
              Request token
            </UiButton>
          </form>
        </div>
      </div>

      <UiDivider class="py-10" />
    </LayoutContainer>

    <CallToAction />
  </LayoutMain>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('links.tokenFaucet'),
    };
  },
};
</script>
