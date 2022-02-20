<template>
  <LayoutMain>
    <LayoutContainer>
      <div class="grid lg:grid-cols-2 gap-10 items-center sm:py-24">
        <div class="mx-auto space-y-10 max-w-2xl">
          <UiHeading>
            ichigo wallet
          </UiHeading>

          <p class="text-gray-700">
            The ichigo wallet store your cryptographic identity and provides all functionalities needed to interact with any ichigo application.
          </p>

          <p class="text-gray-700">
            At this stage, the ichigo wallet is only available as a Google Chrome extension for test purposes.
            In a close future we will release versions across different platforms, including support for Mobile applications.
            ichigo is a fully open-source project so third party development can provide similar wallet, however make sure you trust the provider before using.
          </p>

          <UiButton
            href="https://chrome.google.com/webstore/detail/ichigo-wallet/epgjeibkbpecndocbnmeelnhcjocchmj/"
            tag="a"
            size="lg"
            target="_blank"
            rel="noopener"
          >
            Get Google Chrome extension
          </UiButton>
        </div>

        <div />
      </div>

      <UiDivider class="py-10" />

      <div class="grid lg:grid-cols-2">
        <div>
          <div class="sticky top-10">
            <UiHeading
              :level="2"
              class="pb-10 lg:pb-0"
            >
              How it works ?
            </UiHeading>
          </div>
        </div>

        <div class="space-y-6 max-w-2xl">
          <p>
            The ichigo wallet will help you maintain your account on the ichigo network. It includes 2 important components:
          </p>

          <ol class="ml-5 space-y-2 list-decimal">
            <li>
              <p>your profile, which represents your identity on the network and allows you to</p>
              <ul class="ml-4 list-disc">
                <li>sign your posts</li>
                <li>sign your posts</li>
                <li>encrypt / decrypt content</li>
                <li>manage your metadata</li>
              </ul>
            </li>
            <li>
              <p>Manage your metadata</p>
              <ul class="ml-4 list-disc">
                <li>transfer, receive and hold ichigo token</li>
                <li>settle transaction fee</li>
                <li>settle transaction fee</li>
              </ul>
            </li>
          </ol>

          <UiHeading
            :level="3"
            class="pt-4"
          >
            Install and use
          </UiHeading>

          <ol class="ml-5 space-y-2 list-decimal">
            <li>
              <UiLink
                color="primary"
                external
                href="https://chrome.google.com/webstore/detail/ichigo-wallet/epgjeibkbpecndocbnmeelnhcjocchmj/"
              >
                Get the ichigo wallet
              </UiLink> Google Chrome extension from the Google Web Store.
            </li>

            <li>
              Follow the link above to access the extension page and click on the button "Add to chrome"
            </li>

            <li>
              You will then be able to find the ichigo wallet in your chrome browser settings > extensions.
              Do not hesitate to pin the ichigo wallet in the toolbar for easier use.
            </li>

            <li>
              Initialize the wallet.
            </li>
          </ol>

          <UiHeading
            :level="4"
            class="pt-4"
          >
            Initialization
          </UiHeading>

          <p>
            When you first open your ichigo wallet, select the option to create a New Account.
            This will generate a Seed Phrase associated with your account. Take care to note down this Seed Phrase,
            it will be needed to restore your account. If you forgot your Seed Phrase your account will be lost forever.
            On the next page set a password to protect your wallet locally.
            This password is only used to lock the wallet in your browser and has no connection with your cryptographic identity.
            After validating, your account is ready to be used !
          </p>

          <UiHeading
            :level="4"
            class="pt-4"
          >
            Profile
          </UiHeading>

          <p>
            In this page you can find your profile address and edit your profile metadata.
            The profile address represent your identity on the network and will be associated with your posts and the posts shared with you.
          </p>

          <p class="font-light text-gray-500">
            This page is currently under development, it will be available in v1.
          </p>

          <UiHeading
            :level="4"
            class="pt-4"
          >
            Wallet
          </UiHeading>

          <p>
            The wallet holds your ichigo tokens. Use the wallet address found on this page to receive or transfer ichigo tokens.
            This will allow you to settle transaction fees with the network and to receive incentives tokens.
            In the test version, the wallet has an "Airdrop" button that will link to our <UiLink
              :to="localePath('token-faucet')"
              color="primary"
              tag="nuxt-link"
            >
              faucet page
            </UiLink>.
            Request test tokens from there to try our web3 test application <UiLink
              :to="localePath('sandbox')"
              color="primary"
              tag="nuxt-link"
            >
              Sandbox
            </UiLink>.
          </p>

          <p class="font-light text-gray-500">
            The test version uses ichigo tokens minted on the Solana Devnet.
          </p>

          <UiHeading
            :level="4"
            class="pt-4"
          >
            Contact list
          </UiHeading>

          <p>
            This page allows you to manage your contact list on the ichigo network.
            This list will be shared with the application layer and used to implement social functionalities.
            To add a new contact, input their ichigo Profile Address.
          </p>

          <UiHeading
            :level="4"
            class="pt-4"
          >
            Ichigo Incentive Program
          </UiHeading>

          <p>
            The Ichigo Incentive Program (IIP) will be release on Mainnet only.
            This page allows the human-user to opt-in or out of the IIP.
            By opting-in you will support injection of financial incentives in the ecosystem: you will be shown ads impression
            from the ichigo's Decentralized Advertising Marketplace.
            For every impression you will receive $ICHIGO tokens as attention incentives, as well as the content-creator and the application layer.
          </p>

          <p class="font-light text-gray-500">
            This page is currently under development, it will be available in v1.
          </p>
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
      title: this.$t('links.ichigoWallet'),
    };
  },
};
</script>
