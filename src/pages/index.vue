<template>
  <div>
    <div class="grid grid-cols-2 pt-32 h-screen">
      <div class="flex flex-col justify-center p-10">
        <div class="mx-auto max-w-2xl ">
          <UiHeading>
            The first decentralized social ecosystem
          </UiHeading>

          <p class="py-10 text-lg text-gray-500">
            ichigo is a protocol relying on blockchain and peer-to-peer technologies to decentralize every social media components
            and place human users at the center of the ecosystem, while removing the needs for any intermediate or central authority.
          </p>

          <div class="flex gap-6 items-center">
            <UiButton
              size="lg"
            >
              Get started
            </UiButton>

            <UiLink class="text-lg">
              Read whitepaper
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
        A new social ecosystem without gatekeepers or intermediaries where people can finally thrive in a fair digital world
      </p>
    </LayoutContainer>

    <div class="h-px bg-gray-900" />
    <div class="grid grid-cols-2">
      <div class="p-10">
        <div class="sticky top-10 mx-auto max-w-2xl ">
          <UiHeading>
            ichigo ecosystem
          </UiHeading>

          <p class="pt-10 text-gray-700">
            ichigo network achieves to recreate social interactions ecosystem without the needs of a central authority and remove the powerful middle-men.
            <br>
            <br>
            Using a layered architecture it proposes a fully decentralized approach and delegates control to its community and a network of trustless nodes.
            <br>
            <br>
            It rewards all contributions to the ecosystem fairly and distributes financial incentives to every actors equitably,
            including end-users, content creators, application providers and so on.
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
                'User profiles',
                'Social metadata system',
                'Identification',
                'Advertising marketplace',
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
              <span class="text-primary-400">{{ key }}</span> <span class="text-gray-200">/</span> {{ ecosystem.label }}
            </h2>

            <div class="grid grid-cols-2 gap-2">
              <UiBullet
                v-for="item in ecosystem.items"
                :key="item"
                class="font-light"
              >
                {{ item }}
              </UiBullet>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid relative grid-cols-2 py-24 px-10 bg-secondary-300">
      <div>
        <div class="sticky top-10 mx-auto max-w-3xl">
          <UiHeading>
            Packed with features
          </UiHeading>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-16">
        <div
          v-for="feature, key in {
            identityAndSecurity: {
              icon: 'eye-close'
            },
            flashStorage: {
              icon: 'eye-close'
            },
            socialMetadata: {
              icon: 'eye-close'
            },
            plugAndPlay: {
              icon: 'eye-close'
            },
            advertisingMarketplace: {
              icon: 'eye-close'
            },
            fairIncentivesDistribution: {
              icon: 'eye-close'
            },
          }
          "
          :key="key"
        >
          <icon class="flex justify-center items-center w-16 h-16 border border-gray-900" />

          <h2 class="py-4 text-xl">
            {{ key }}
          </h2>

          <p class="font-light">
            Asymmetric cryptography allows identities, profiles and contents to be decentralizedly secured and privatized
          </p>
        </div>
      </div>
    </div>

    <div class="py-24">
      <LayoutContainer>
        <UiHeading>
          Roadmap
        </UiHeading>
      </LayoutContainer>
    </div>

    <div class="py-24 pl-10">
      <div class="p-16 bg-primary-300">
        <UiHeading>
          FAQ
        </UiHeading>
      </div>
    </div>

    <CallToAction />
  </div>
</template>
