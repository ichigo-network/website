<template>
  <LayoutMain>
    <LayoutContainer>
      <div class="grid lg:grid-cols-2 gap-10 items-center sm:py-24">
        <div>
          <UiHeading class="pb-10">
            {{ $t("crowdsale.title") }}
          </UiHeading>

          <p class="text-gray-700">
            {{ $t("crowdsale.description") }}
          </p>
        </div>

        <div>
          <div class="p-6 sm:p-16 dark:text-gray-50 bg-secondary-400">
            <div class="max-w-2xl">
              <UiHeading
                class="pb-10 lg:pb-48"
                :level="2"
              >
                {{ $t("crowdsale.crowdsaleStartOn", { date: $d(new Date('2022-03-15'), 'monthDay') }) }}
              </UiHeading>

              <Countdown
                v-slot="{ days, hours, minutes, seconds }"
                :time="new Date('2022-03-15') - new Date()"
                class="grid grid-cols-4 gap-4"
              >
                <div
                  v-for="countdown in [
                    {
                      unit: 'days',
                      count: days,
                    },
                    {
                      unit: 'hour',
                      count: hours,
                    },
                    {
                      unit: 'minutes',
                      count: minutes,
                    },
                    {
                      unit: 'seconds',
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
              Token Utility
            </UiHeading>
          </div>
        </div>

        <div class="space-y-6 max-w-2xl">
          <p>
            The ichigo token is used to settle transactions and create monetary incentives in the network.
          </p>

          <UiHeading
            :level="3"
            class="pt-4"
          >
            Node Registration and Staking
          </UiHeading>

          <p>
            Nodes stake token as collateral before they can join the network.
            In order to provide storage, a proportional size of stake is needed.
            The more storage a node wants to store the more token they need to stake.
            Node reputation plays also an important part to win flash storage agreement.
          </p>

          <UiHeading
            :level="3"
            class="pt-4"
          >
            Security and deflation
          </UiHeading>

          <p>
            Ichigo network include a reputation system in which each nodes have a score based on their history on the network.
            Node can also raise their reputation score by staking more token,
            this means a new node to the network will have to stake more token until they can build-up enough reputation.
            Regularly a small amount of node stakes will be automatically burnt based on network activity and reward attribute to nodes globally.
          </p>

          <UiHeading
            :level="3"
            class="pt-4"
          >
            Transaction settlement
          </UiHeading>

          <p>
            Token are used to settle storage fee and network fee by users posting content on the network. Read-only activity is free.
            This means every transaction between a end-user and a node will occur a fee calculated based on content size and persistency duration,
            to be paid by end-user.
          </p>

          <UiHeading
            :level="3"
            class="pt-4"
          >
            Decentralized advertisement
          </UiHeading>

          <p>
            Decentralized advertisement is the key injection of financial incentives in the ecosystem.
            Transactions on decentralized ad market are settled using the ichigo token which will then
            be distributed according to the network reward distribution rule.
          </p>

          <UiHeading
            :level="3"
            class="pt-4"
          >
            Attention and content creation
          </UiHeading>

          <p>
            Application declare their business model on the blockchain, meaning the revshare between end-user,
            content owner and application. Accordingly end-users receive token as a reward for their attention and content creation.
            Those token can then be re-used to post more content creating a closed token flow within the ecosystem.
          </p>
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
            Sale Details
          </UiHeading>

          <div class="sm:max-w-lg divide-y divide-gray-300">
            <div class="grid grid-cols-2 py-4">
              <div>
                Exchange rate
              </div>

              <div>
                1 USD = 40,000 ICHIGO
              </div>
            </div>

            <div class="grid grid-cols-2 py-4">
              <div>
                Token available for crowdsale
              </div>

              <div class="font-light text-gray-600">
                More information coming soon
              </div>
            </div>

            <div class="grid grid-cols-2 py-4">
              <div>
                Tokenomics
              </div>

              <div class="font-light text-gray-600">
                More information coming soon
              </div>
            </div>
          </div>
        </div>

        <div>
          <UiHeading
            :level="2"
            class="pb-4 sm:pb-10"
          >
            How it works
          </UiHeading>

          <p class="text-gray-700">
            The details for the public crowdsale are being worked out at the moment.
            <br>
            All explanation to join in will be available here on due time.
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
