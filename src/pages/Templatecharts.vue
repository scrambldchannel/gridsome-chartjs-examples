<template>
  <Layout>
    <div class="container px-32 py-16">
      <div class="text-3xl font-bold py-8">
        Chart.js components in templates
      </div>
      <div class="py-8">
        Shows how a chart can be included in a template with code using the
        node's front matter to populate the data.
      </div>
      <div v-for="post in $page.coins.edges" :key="post.id">
        <div class="text-2xl pt-8">
          {{ post.node.title }}
        </div>

        <div class="pt-8">
          <g-link class="text-gray-600 hover:text-teal-600" :to="post.node.path"
            >{{ post.node.coin }} chart</g-link
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
        coin
        path
      }
    }
  }
}
</page-query>

