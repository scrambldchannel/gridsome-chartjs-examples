<template>
  <Layout>
    <div class="">
      <h2>Charts components in templates</h2>
      <p>Shows how a chart can be included in a template with code using the node's front matter to populate the data.</p>
      <div
        v-for="post in $page.coins.edges"
        :key="post.id"
        
      >

        <h2>
          {{ post.node.summary }}
        </h2>

        <div>
          <g-link :to="post.node.path" class="font-bold uppercase"
            >See example</g-link
          >
        </div>
      </div>
      <!-- end post -->

    </div>
  </Layout>
</template>

<page-query>
query Coins  {
  coins: allCoin {
    edges {
      node {
        id
        title
        summary
        path
      }
    }
  }
}
</page-query>

