<template>
  <Layout>
    <div class="">
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

