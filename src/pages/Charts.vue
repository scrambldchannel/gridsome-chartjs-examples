<template>
  <Layout>
    <div class="">
            <h2>Charts components in posts</h2>
      <p>Shows how a chart can be included in in a markdown with <code>vue-remark</code> using static data. Seems to require that vue components are registered in <code>main.js</code></p>
      <div
        v-for="post in $page.charts.edges"
        :key="post.id"
        
      >

        <h2>
          {{ post.node.summary }}
        </h2>

        <div class="mb-8">
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

