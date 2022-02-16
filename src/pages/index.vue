<template>
  <div>
    <div class="grid grid-cols-2 pt-32 h-screen">
      <div class="flex flex-col justify-center p-10">
        <div class="mx-auto max-w-2xl ">
          <UiHeading>
            {{ $t('index.heroTitle') }}
          </UiHeading>

          <p class="py-10 text-lg text-gray-500">
            {{ $t('index.heroDescription') }}
          </p>

          <div class="flex gap-6 items-center">
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
      </div>

      <div class="bg-gray-900">
        image
      </div>
    </div>

    <LayoutContainer class="py-32">
      <p class="mx-auto max-w-3xl text-3xl">
        {{ $t('index.catchphrase') }}
      </p>
    </LayoutContainer>

    <div class="h-px bg-gray-900" />
    <div class="grid grid-cols-2">
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

      <div>
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
              ]
            },
          }
          "
          :key="key"
          class="p-10 border-b last:border-b-0 border-l border-gray-900"
        >
          <div class="mx-auto max-w-xl">
            <h2 class="pb-4 text-xl">
              <span class="text-primary-400">{{ $t(`ecosystem.${key}`) }}</span> <span class="text-gray-200">/</span> {{ $t(`ecosystem.${ecosystem.label}`) }}
            </h2>

            <div class="grid grid-cols-2 gap-2">
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
      </div>
    </div>

    <div class="md:grid relative grid-cols-2 py-24 px-10 bg-secondary-300">
      <div>
        <div class="sticky top-10 mx-auto max-w-3xl">
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
        >
          <div class="flex justify-center items-center w-16 h-16 border border-gray-900">
            <UiIcon
              :name="feature.icon"
              size="lg"
            />
          </div>

          <h2 class="py-4 text-xl">
            {{ $t(`features.${key}.title`) }}
          </h2>

          <p class="max-w-md font-light">
            {{ $t(`features.${key}.description`) }}
          </p>
        </div>
      </div>
    </div>

    <div class="py-24">
      <LayoutContainer>
        <UiHeading>
          {{ $t('index.roadmap.title') }}
        </UiHeading>
      </LayoutContainer>
      <div class="grid grid-cols-10 pt-16">
        <div class="pt-20">
          <div class="flex-grow -mt-px h-px bg-gradient-to-l from-primary-300" />
        </div>

        <div
          v-for="step, period in {
            '2021 Q1 - 2022 Q1': { status: 'completed' },
            '2022 Q2 - 2022 Q3': { status: 'active' },
            '2022 Q3 - 2022 Q4': { status: 'pending' },
            '2023 Q1': { status: 'pending' },
          }"
          :key="period"
          class="col-span-2 last:col-span-3"
        >
          <h2 class="text-xl">
            {{ $t(`index.roadmap.${period}.title`) }}
          </h2>

          <div class="font-light">
            {{ period }}
          </div>

          <div class="flex items-center py-4">
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
                'flex-grow h-px',
                {
                  'bg-primary-300': step.status === 'completed',
                  'bg-gray-200': step.status !== 'completed',
                }
              ]"
            />
          </div>

          <ul class="pr-4 pl-2 space-y-2 max-w-md">
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

    <div class="py-24 pl-8 sm:pl-24">
      <div class="p-10 sm:p-16 bg-primary-300">
        <div class=" max-w-3xl">
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
            {{ $t(`faq.${faq}.question`) }}
            <template #content>
              {{ $t(`faq.${faq}.answer`) }}
            </template>
          </UiCollapse>
        </div>
      </div>
    </div>

    <CallToAction />
  </div>
</template>
