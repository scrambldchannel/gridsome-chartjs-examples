<template>
  <Layout>
    <h1>{{ $page.chart.title }}</h1>
    <p class="intro">{{ $page.chart.excerpt }}</p>
    <VueRemarkContent />
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Chart ($id: ID!) {
  chart(id: $id) {
    title
    summary
  }
}
</page-query>