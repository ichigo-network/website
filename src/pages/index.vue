<template>
  <div>
    <LayoutMain class="grid lg:grid-cols-2 h-screen">
      <div class="flex flex-col order-2 sm:order-1 justify-center p-6 lg:p-10">
        <div class="mx-auto max-w-2xl ">
          <UiHeading>
            {{ $t('index.heroTitle') }}
          </UiHeading>

          <p class="py-10 text-lg text-gray-500">
            {{ $t('index.heroDescription') }}
          </p>

          <div class="flex gap-6 items-center">
            <UiButton
              :to="localePath('sandbox')"
              tag="nuxt-link"
              size="lg"
            >
              {{ $t('common.getStarted') }}
            </UiButton>

            <UiLink
              href="https://ichigo.network/whitepaper.pdf"
              class="text-lg"
            >
              {{ $t('common.readWhitepaper') }}
            </UiLink>
          </div>
        </div>
      </div>

      <div class="order-1 sm:order-2 px-4 sm:px-0">
        <div class="h-48 sm:h-full bg-gray-900" />
      </div>
    </LayoutMain>

    <LayoutContainer class="py-32">
      <p class="mx-auto max-w-3xl text-3xl">
        {{ $t('index.catchphrase') }}
      </p>
    </LayoutContainer>

    <UiDivider />

    <div class="grid lg:grid-cols-2 pb-10 lg:pb-0">
      <div class="p-10">
        <div class="sticky top-10 mx-auto max-w-2xl ">
          <UiHeading class="pb-4">
            {{ $t('ecosystem.title') }}
          </UiHeading>

          <p
            v-for="sentence, index in $t('ecosystem.description')"
            :key="index"
            class="pt-6 text-gray-700"
          >
            {{ sentence }}
          </p>
        </div>
      </div>

      <div class="mx-4 lg:mx-0 border lg:border-0 border-gray-900">
        <div
          v-for="ecosystem, key in {
            blockchain: {
              label: 'networkSecurity',
              items: [
                'stacking',
                'reputationSystem',
                'collaterals',
                'disputeResolving',
              ]
            },
            layer2: {
              label: 'ichigoNodes',
              items: [
                'userProfiles',
                'socialMetadataSystem',
                'identification',
                'advertisingMarketplace',
              ]
            },
            peerToPeerNetwork: {
              label: 'flashStorage',
              items: [
                'decentralizedOnDemandStorageProvision',
              ]
            },
            humanNetworkInterface: {
              label: 'applicationLayer',
              items: [
                'encryption',
                'presentation',
                'dataFormat',
              ]
            },
            humanBeing: {
              label: 'userSpace',
              items: [
                'contentCreationAndEngagement',
                'humanAuthorityEngagement',
              ],
              last: true,
            },
          }
          "
          :key="key"
        >
          <div class="p-4 lg:p-10 border-l-0 lg:border-l border-gray-900">
            <div class="mx-auto max-w-xl">
              <h2 class="pb-4 text-xl">
                <span class="text-primary-400">{{ $t(`ecosystem.${key}`) }}</span> <span class="text-gray-200">/</span> {{ $t(`ecosystem.${ecosystem.label}`) }}
              </h2>

              <div
                :class="[
                  {
                    'grid grid-cols-2 gap-2': ecosystem.items.length > 1
                  },
                ]
                "
              >
                <UiBullet
                  v-for="item in ecosystem.items"
                  :key="item"
                  class="font-light"
                >
                  {{ $t(`ecosystem.${item}`) }}
                </UiBullet>
              </div>
            </div>
          </div>

          <UiDivider v-if="!ecosystem.last" />
        </div>
      </div>
    </div>

    <div class="lg:grid relative grid-cols-2 py-24 px-4 lg:px-10 bg-secondary-300">
      <div>
        <div class="sticky top-10 pb-16 mx-auto max-w-3xl">
          <UiHeading>
            {{ $t('features.title') }}
          </UiHeading>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-16">
        <div
          v-for="feature, key in {
            identityAndSecurity: {
              icon: 'eye-off'
            },
            flashStorage: {
              icon: 'flash'
            },
            socialMetadata: {
              icon: 'file-text'
            },
            plugAndPlay: {
              icon: 'plugs-connected'
            },
            advertisingMarketplace: {
              icon: 'volume-1'
            },
            fairIncentivesDistribution: {
              icon: 'money-hand'
            },
          }"
          :key="key"
          class="flex lg:flex-col gap-4"
        >
          <div class="flex flex-shrink-0 justify-center items-center w-16 h-16 border border-gray-900">
            <UiIcon
              :name="feature.icon"
              size="lg"
            />
          </div>

          <div>
            <h2 class="pb-4 text-xl">
              {{ $t(`features.${key}.title`) }}
            </h2>

            <p class="max-w-md font-light">
              {{ $t(`features.${key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-24">
      <LayoutContainer>
        <UiHeading>
          {{ $t('index.roadmap.title') }}
        </UiHeading>
      </LayoutContainer>

      <div class="grid grid-cols-1 lg:grid-cols-10 px-10 lg:px-0 pt-4 lg:pt-16">
        <div class="px-3 lg:pt-20">
          <div class="lg:flex-grow lg:-mt-px w-px h-20 lg:h-px bg-gradient-to-t lg:bg-gradient-to-l from-primary-300" />
        </div>

        <div
          v-for="step, period in {
            '2021 Q1 - 2022 Q1': { status: 'completed' },
            '2022 Q2 - 2022 Q3': { status: 'active' },
            '2022 Q3 - 2022 Q4': { status: 'pending' },
            '2023 Q1': { status: 'pending', last: true },
          }"
          :key="period"
          class="lg:col-span-2 lg:last:col-span-3"
        >
          <div class="flex gap-4">
            <div
              :class="[
                'lg:hidden flex-shrink-0 self-stretch mx-3 w-px bg-primary-300',
                {
                  'bg-primary-300': step.status === 'completed',
                  'bg-gray-200': step.status === 'pending',
                },
              ]"
            />

            <div class="-mb-9 lg:mb-0">
              <h2 class="text-xl">
                {{ $t(`index.roadmap.${period}.title`) }}
              </h2>

              <div class="font-light">
                {{ period }}
              </div>
            </div>
          </div>

          <div class="flex items-center lg:py-4">
            <div
              :class="[
                'flex-shrink-0 w-6 h-6 rounded-full relative flex items-center justify-center',
                {
                  'bg-primary-300': step.status === 'completed',
                  'bg-secondary-300': step.status === 'active',
                  'bg-background border border-gray-200': step.status === 'pending',
                }
              ]"
            >
              <div
                v-if="['active', 'completed'].includes(step.status)"
                :class="[
                  'w-2 h-2 rounded-full',
                  {
                    'bg-primary-400': step.status === 'completed',
                    'bg-secondary-400': step.status === 'active',
                  }
                ]"
              />

              <div
                v-if="step.status === 'active'"
                class="absolute w-full h-full bg-secondary-300 rounded-full opacity-50 animate-ping"
              />
            </div>

            <div
              :class="[
                'hidden lg:block flex-grow h-px',
                {
                  'bg-primary-300': step.status === 'completed',
                  'bg-gray-200': step.status !== 'completed',
                }
              ]"
            />
          </div>

          <div class="flex gap-3">
            <div
              :class="[
                'lg:hidden flex-shrink-0 self-stretch mx-3 w-px',
                {
                  'bg-primary-300': step.status === 'completed',
                  'bg-gray-200': !step.last && step.status !== 'completed',
                  'bg-gradient-to-b from-gray-200': step.last,
                },
              ]"
            />

            <ul class="pt-6 lg:pt-0 pr-4 pb-16 lg:pb-0 pl-2 space-y-2 max-w-md">
              <li
                v-for="action in $t(`index.roadmap.${period}.actions`)"
                :key="action"
              >
                <UiBullet
                  :status="step.status"
                  class="font-light"
                >
                  {{ action }}
                </UiBullet>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="py-24 pr-4 sm:pr-0 pl-4 sm:pl-24">
        <div class="p-6 sm:p-16 bg-primary-300">
          <div class="xl:mx-auto max-w-3xl">
            <UiHeading class="pb-8">
              {{ $t('faq.title') }}
            </UiHeading>

            <UiCollapse
              v-for="faq in [
                'whatIsIchigo',
                'whatDifferentiateIchigo',
                'whatIsTargetAndVision',
                'isProjectOpenSource',
                'whatAreUseCases',
                'whatWillBeTheTotalSupply',
              ]"
              :key="faq"
            >
              {{ $t(`faq.items.${faq}.question`) }}
              <template #content>
                {{ $t(`faq.items.${faq}.answer`) }}
              </template>
            </UiCollapse>

            <div class="pt-10 text-right">
              <UiLink
                tag="nuxt-link"
                :to="localePath('faq')"
              >
                {{ $t('common.viewAll') }}
              </UiLink>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('name'),
    };
  },
};
</script>
