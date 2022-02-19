<template>
  <LayoutMain>
    <LayoutContainer>
      <div class="grid lg:grid-cols-2 gap-10 items-center sm:py-24">
        <div>
          <UiHeading class="pb-10">
            ichigo sandbox
          </UiHeading>

          <p class="text-gray-700">
            Ichigo sandbox is a web3 application developed to showcase and test functionalities provided by the ichigo network.
            It implements the basic functions of a social network application in decentralized manner,
            such as creating and sharing post (text and image) publicly or privately with your contacts.
          </p>
        </div>

        <div>
          <div class="p-6 sm:p-16 space-y-10 bg-gray-100">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex justify-center items-center w-8 h-8 text-gray-50 bg-gray-900 rounded">
                  1
                </div>
              </div>

              <div class="flex-grow pt-0.5">
                <UiLink
                  :to="localePath('wallet')"
                  color="primary"
                  tag="nuxt-link"
                >
                  Install the Ichigo Wallet
                </UiLink>
                with your Chrome browser
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex justify-center items-center w-8 h-8 text-gray-50 bg-gray-900 rounded">
                  2
                </div>
              </div>

              <div class="flex-grow pt-0.5">
                <UiLink
                  color="primary"
                  external
                  href="https://ichigo.network/faucet/"
                >
                  Get free test token
                </UiLink>
                from our faucet (allow you to post)
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex justify-center items-center w-8 h-8 text-gray-50 bg-gray-900 rounded">
                  3
                </div>
              </div>

              <div class="flex-grow pt-0.5">
                <UiLink
                  color="primary"
                  external
                  href="https://sandbox.ichigo.network/"
                >
                  Open sandbox
                </UiLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UiDivider class="py-10" />

      <div class="grid lg:grid-cols-2">
        <div>
          <div class="sticky top-10">
            <UiHeading
              :level="2"
              class="pb-10 lg:pb-0"
            >
              Few tips on how Sandbox works
            </UiHeading>
          </div>
        </div>

        <div class="space-y-6 max-w-2xl">
          <UiHeading
            :level="3"
            class="pt-4"
          >
            Feed
          </UiHeading>

          <p>
            The main page of Sandbox is a feed of posts, assembled from public posts and private posts shared by your contacts in reverse chronological order.
            Future applications will be able to implement specific algorithms to present this feed in preferred order.
            Sandbox also provides filters for your post feed. You can find the filters at the top of the main page with 4 different options:
          </p>

          <ul class="ml-4 list-disc">
            <li><span class="text-secondary-500">All</span>: display the default feed, this excludes post posted by you</li>
            <li><span class="text-secondary-500">From contacts</span>: only display feeds shared by addresses on your contact list</li>
            <li><span class="text-secondary-500">By address</span>: to show only posts from one specific address</li>
            <li><span class="text-secondary-500">My post</span>: only display your own post</li>
          </ul>

          <UiHeading
            :level="3"
            class="pt-4"
          >
            Contacts
          </UiHeading>

          <p>
            The list of contacts used by Sandbox is the one held in your ichigo account.
            It is fetch by the application from your ichigo Wallet.
            This means the contact list is managed from the wallet and can be edited there. The contact list is used to
          </p>

          <ul class="ml-4 list-disc">
            <li>Fetch posts from your contacts</li>
            <li>Create private post for your contact only</li>
          </ul>

          <p>
            Sandbox also propose a "Follow" button directly in the feed page. This will request your ichigo account to add the address to the contact list.
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
            Creating a post
          </UiHeading>

          <p>
            In the test version of Sandbox, you can create text-based or image-based post. You will have to define 4 parameters for your post:
          </p>

          <ul class="ml-4 list-disc">
            <li><span class="text-secondary-500">title</span></li>
            <li><span class="text-secondary-500">content</span> either text or image</li>
            <li>
              <span class="text-secondary-500">audience</span> public post can be seen by anyone. For private post you can pick who in your contact list can access to the post.
              You will need to add contacts in your ichigo Wallet first. in the test version, this cannot be changed after posting
            </li>
            <li>
              <span class="text-secondary-500">persistency</span> the period your post is guaranteed to be available. Past this period the post can be collected by the network anytime.
              However it can also remain available on the network long after this period, depending on how many access it has. in the test version,
              the persistency is always 14 days and cannot be extended
            </li>
          </ul>

          <p>
            Posting requires network fees. Those fees are calculated based on the size of the content,
            the persistency of the post and the number of keys generated (for private post). On ichigo testnet the minimum fee is set at 1 $ICHIGO
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
      title: this.$t('links.sandbox'),
    };
  },
};
</script>
