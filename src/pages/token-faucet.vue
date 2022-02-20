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
              :pattern="$options.form.email.pattern"
            >
              Email
            </UiInput>

            <UiTextarea
              v-model="form.walletAddress"
              :maxlength="$options.form.walletAddress.length"
              :minlength="$options.form.walletAddress.length"
              name="walletAddress"
              placeholder="Your wallet address"
              :resize="false"
            >
              Wallet address
            </UiTextarea>

            <UiButton
              type="submit"
              :loading="loading"
            >
              Request token
            </UiButton>

            <div
              v-if="status && status !== 'success'"
              class="text-error-500"
            >
              {{ status }}
            </div>

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
  form: {
    email: {
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,12}$',
    },
    walletAddress: {
      length: 94,
    },
  },

  data: () => ({
    form: {
      email: 'aaa@aaa.fr',
      walletAddress: 'yNpShVzMVZip-SpVJ8zeeDyFC-YBv2J4eGD6vZ-9CxwhjpG-nGVqYihcUWij-D5fqNwbwE5wP-GwhpaH7z9BZX-1ekcwyf',
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
      if (this.form.walletAddress.length !== this.$options.form.walletAddress.length) return;

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
            this.status = 'The link to get your token has been sent.<br> Please check you email';
            break;
          case 10:
            this.status = 'Invalid email or wallet address';
            break;
          case 21:
            this.status = 'You have already received tokens recently. Come back after 3 days to get more !';
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
