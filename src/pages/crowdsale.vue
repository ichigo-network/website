<template>
  <LayoutMain>
    <LayoutContainer>
      <div class="grid lg:grid-cols-2 gap-10 items-center sm:py-24">
        <div>
          <UiHeading class="pb-10">
            {{ $t('crowdsale.title') }}
          </UiHeading>

          <p class="text-gray-700">
            {{ $t('crowdsale.description') }}
          </p>
        </div>

        <div>
          <div class="p-6 sm:p-16 dark:text-gray-50 bg-secondary-400">
            <div class="max-w-2xl">
              <UiHeading
                class="pb-10 lg:pb-48"
                :level="2"
              >
                {{ $t('crowdsale.crowdsaleStartOn', { date: $d(new Date('2022-03-15'), 'monthDay') }) }}
              </UiHeading>

              <Countdown
                v-slot="{ days, hours, minutes, seconds }"
                :time="new Date('2022-03-15') - new Date()"
                class="grid grid-cols-4 gap-4"
              >
                <div
                  v-for="countdown in [
                    {
                      unit: $tc('dateTime.day', 2),
                      count: days,
                    },
                    {
                      unit: $tc('dateTime.hour', 2),
                      count: hours,
                    },
                    {
                      unit: $tc('dateTime.minute', 2),
                      count: minutes,
                    },
                    {
                      unit: $tc('dateTime.second', 2),
                      count: seconds,
                    },
                  ]"
                  :key="countdown.unit"
                >
                  <div class="text-4xl sm:text-5xl">
                    {{ countdown.count }}
                  </div>

                  <div class="font-light">
                    {{ countdown.unit }}
                  </div>
                </div>
              </Countdown>
            </div>
          </div>
        </div>
      </div>

      <div class="py-10">
        <UiDivider />
      </div>

      <div class="grid lg:grid-cols-2">
        <div>
          <div class="sticky top-10">
            <UiHeading
              :level="2"
              class="pb-10 lg:pb-0"
            >
              {{ $t('crowdsale.tokenUtility.title') }}
            </UiHeading>
          </div>
        </div>

        <div class="space-y-6 max-w-2xl">
          <p>
            {{ $t('crowdsale.tokenUtility.description') }}
          </p>

          <section
            v-for="key in [
              'nodeRegistrationAndStaking',
              'securityAndDeflation',
              'transactionSettlement',
              'decentralizedAdvertisement',
              'attentionAndContentCreation'
            ]"
            :key="key"
            class="pt-4"
          >
            <UiHeading
              :level="3"
              class="pb-4"
            >
              {{ $t(`crowdsale.tokenUtility.${key}.title`) }}
            </UiHeading>

            <p>
              {{ $t(`crowdsale.tokenUtility.${key}.description`) }}
            </p>
          </section>
        </div>
      </div>

      <div class="py-10">
        <UiDivider />
      </div>

      <div class="grid sm:grid-cols-2 gap-16 lg:gap-0">
        <div class="sm:pr-10">
          <UiHeading
            :level="2"
            class="pb-4 sm:pb-10"
          >
            {{ $t('crowdsale.saleDetails.title') }}
          </UiHeading>

          <div class="sm:max-w-lg divide-y divide-gray-300">
            <div class="grid grid-cols-2 py-4">
              <div>
                {{ $t('common.exchangeRate') }}
              </div>

              <div>
                1 USD = 40,000 ICHIGO
              </div>
            </div>

            <div class="grid grid-cols-2 py-4">
              <div>
                {{ $t('crowdsale.saleDetails.tokenAvailableForCrowdsale') }}
              </div>

              <div class="font-light text-gray-600">
                {{ $t('common.moreInformationSoon') }}
              </div>
            </div>

            <div class="grid grid-cols-2 py-4">
              <div>
                {{ $t('tokenomics.title') }}
              </div>

              <div class="font-light text-gray-600">
                {{ $t('common.moreInformationSoon') }}
              </div>
            </div>
          </div>
        </div>

        <div>
          <UiHeading
            :level="2"
            class="pb-4 sm:pb-10"
          >
            {{ $t('crowdsale.howItWorks.title') }}
          </UiHeading>

          <p class="text-gray-700">
            {{ $t('crowdsale.howItWorks.detailInProgress') }}
            <br>
            {{ $t('crowdsale.howItWorks.laterExplanation') }}
          </p>
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
  head() {
    return {
      title: this.$t('links.ichigoCrowdsale'),
    };
  },
};
</script>
