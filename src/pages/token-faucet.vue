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
          <form
            class="p-6 sm:p-10 space-y-6 bg-gray-50"
            @submit.prevent="submit()"
          >
            <UiInput
              v-model="form.email"
              name="email"
              placeholder="Your email address"
              required
              type="email"
            >
              Email
            </UiInput>

            <UiTextarea
              v-model="form.wallet"
              name="wallet"
              placeholder="Your wallet address"
              required
              :resize="false"
            >
              Wallet address
            </UiTextarea>

            <UiButton
              type="submit"
            >
              Request token
            </UiButton>

            <p class="text-sm font-light text-gray-500">
              Eligible for 45 ichigo tokens every 3 days. We do not store your email address.
            </p>
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

  data: () => ({
    form: {
      email: '',
      wallet: '',
    },
  }),

  head() {
    return {
      title: this.$t('links.tokenFaucet'),
    };
  },

  methods: {
    submit() {
      if (!this.email && this.wallet) return;

      fetch(`https://faucet.ichigo.network/request?email=${this.email}&address=${this.wallet}`, { method: 'GET' })
        .then((response) => response.json())
        .then((body) => {
          switch (body.error) {
            case 0:
              console.warn('<p style="color:#27ae60 !important">The link to get your token has been sent.<br> Please check you email.</p>', false);
              break;
            case 21:
              console.warn(false, 'You have already received tokens recently. <br> come back after 3 days to get more !');
              break;
            default:
              console.warn(false, 'Can\'t connect to the network, try again later');
          }
        })
        .catch(() => {
          console.warn('Can\'t connect to the network, try again later');
          console.warn(false);
        });
    },
  },
};
</script>
