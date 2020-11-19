<template>
  <Layout>
    <div class="container px-32 py-16">
      <div class="text-3xl font-bold py-8">Chart.js components in posts</div>
      <div class="py-8">
        Shows how a chart can be included in in a markdown with
        <code>vue-remark</code> using static data. Seems to require that vue
        components are registered in <code>main.js</code>
      </div>
      <div v-for="post in $page.charts.edges" :key="post.id">
        <div class="text-2xl py-8">
          {{ post.node.summary }}
        </div>

        <div class="text-gray-600 hover:text-teal-600">
          <g-link :to="post.node.path">See example</g-link>
        </div>
      </div>
      <!-- end post -->
    </div>
  </Layout>
</template>

<page-query>
query Charts  {
  charts: allChart {
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

