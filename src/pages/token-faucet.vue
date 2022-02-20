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
          <div class="p-6 sm:p-10 space-y-6 bg-gray-50">
            <UiTransitionFade mode="out-in">
              <div
                v-if="status === 'success'"
                key="success"
                class="py-10 mx-auto space-y-6 max-w-lg"
              >
                <div class="flex flex-shrink-0 justify-center items-center w-16 h-16 border border-gray-900">
                  <UiIcon
                    name="check"
                    size="lg"
                  />
                </div>

                <p>Token request link sent to your email address.</p>

                <p>A new request can be made in 3 days.</p>
              </div>

              <form
                v-else
                key="form"
                class="space-y-6"
                @submit.prevent="submit()"
              >
                <UiInput
                  v-model="form.email"
                  name="email"
                  placeholder="Your email address"
                  required
                  type="email"
                  :pattern="$options.form.email.pattern"
                >
                  Email
                </UiInput>

                <UiTextarea
                  v-model="form.walletAddress"
                  :maxlength="$options.form.walletAddress.maxlength"
                  :minlength="$options.form.walletAddress.minlength"
                  name="walletAddress"
                  placeholder="Your wallet address"
                  :resize="false"
                >
                  Wallet address
                </UiTextarea>

                <UiButton
                  type="submit"
                  size="form"
                  :loading="loading"
                >
                  Request token
                </UiButton>

                <UiTransitionFade mode="out-in">
                  <div
                    v-if="status && status !== 'success'"
                    class="text-error-500"
                  >
                    {{ status }}
                  </div>
                </UiTransitionFade>

                <p class="text-sm font-light text-gray-500">
                  Eligible for 45 ichigo tokens every 3 days. We do not store your email address.
                </p>
              </form>
            </UiTransitionFade>
          </div>
        </div>
      </div>

      <UiDivider class="py-10" />
    </LayoutContainer>

    <CallToAction />
  </LayoutMain>
</template>

<script>
export default {
  form: {
    email: {
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,12}$',
    },
    walletAddress: {
      minlength: 42,
      maxlength: 45,
    },
  },

  data: () => ({
    form: {
      email: '',
      walletAddress: '',
    },
    loading: false,
    status: '',
  }),

  head() {
    return {
      title: this.$t('links.tokenFaucet'),
    };
  },

  methods: {
    async submit() {
      if (!new RegExp(this.$options.form.email.pattern).test(this.form.email)) return;
      if (this.form.walletAddress.length < this.$options.form.walletAddress.minlength
          && this.form.walletAddress.length > this.$options.form.walletAddress.maxlength) return;

      this.loading = true;
      this.status = '';

      try {
        const res = await fetch(`https://faucet.ichigo.network/request?email=${this.form.email}&address=${this.form.walletAddress}`, { method: 'GET' });
        const data = await res.json();

        if (data.error) throw data;

        this.status = 'success';
      } catch (err) {
        switch (err.error) {
          case 0:
            this.status = 'The link to get your token has been sent. Please check you email';
            break;
          case 10:
            this.status = 'Invalid email or wallet address';
            break;
          case 21:
            this.status = 'You have already received tokens recently. Come back after 3 days to make a new request';
            break;
          default:
            this.status = 'Can\'t connect to the network, try again later';
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
