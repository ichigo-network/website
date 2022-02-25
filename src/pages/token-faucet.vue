<template>
  <LayoutMain>
    <LayoutContainer>
      <div class="grid lg:grid-cols-2 gap-10 items-center sm:py-24">
        <div class="mx-auto space-y-10 max-w-2xl">
          <UiHeading>
            {{ $t('tokenFaucet.title') }}
          </UiHeading>

          <p class="text-gray-700">
            {{ $t('tokenFaucet.testPurposeOnly') }}
            <br>
            {{ $t('tokenFaucet.description') }}
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
                <div class="flex flex-shrink-0 justify-center items-center w-16 h-16 border border-current">
                  <UiIcon
                    name="check"
                    size="lg"
                  />
                </div>

                <p>{{ $t('tokenFaucet.tokenSentToEmail') }}</p>

                <p>{{ $t('tokenFaucet.tokenSentToEmail', { day: $options.form.dayRequestDelay }) }}</p>
              </div>

              <form
                v-else
                key="form"
                class="space-y-6"
                @submit.prevent="submit()"
              >
                <UiInput
                  v-model="form.email"
                  :pattern="$options.form.email.pattern"
                  :placeholder="$t('form.email.placeholder')"
                  name="email"
                  required
                  type="email"
                >
                  {{ $t('form.email.label') }}
                </UiInput>

                <UiTextarea
                  v-model="form.walletAddress"
                  :maxlength="$options.form.walletAddress.maxlength"
                  :minlength="$options.form.walletAddress.minlength"
                  :placeholder="$t('form.walletAddress.placeholder')"
                  :resize="false"
                  name="walletAddress"
                >
                  {{ $t('form.walletAddress.label') }}
                </UiTextarea>

                <UiButton
                  type="submit"
                  size="form"
                  :loading="loading"
                >
                  {{ $t('form.actions.requestToken') }}
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
                  {{ $t('tokenFaucet.formCondition', { day: $options.form.dayRequestDelay, ichigo: $options.form.tokenAmount }) }}
                </p>
              </form>
            </UiTransitionFade>
          </div>
        </div>
      </div>

      <div class="py-10">
        <UiDivider />
      </div>
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
    dayRequestDelay: 3,
    tokenAmount: 45,
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
