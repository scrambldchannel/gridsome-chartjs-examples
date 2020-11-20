<template>
  <Layout>
    <div class="container mx-auto py-16">
      <div class="text-lg  lg:text-3xl font-bold py-8">Chart.js components in posts</div>
      <div class="py-8 text-sm lg:text-lg">
        Shows how a chart can be included in in a markdown with
        <code>vue-remark</code> using static data. Seems to require that vue
        components are registered in <code>main.js</code>
      </div>
      <div v-for="post in $page.charts.edges" :key="post.id">
        <div class="lg:text-2xl py-8">
          {{ post.node.summary }}
        </div>

        <div class="text-sm lg:text-lg text-grey-600 hover:text-teal-600">
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

