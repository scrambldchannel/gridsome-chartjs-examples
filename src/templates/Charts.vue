<template>
  <Layout>
    <div class="container mx-auto py-16">
      <div class="text-lg lg:text-3xl font-bold py-8">
        {{ $page.chart.title }}
      </div>

      <div class="max-w-xl">
        <VueRemarkContent />
      </div>
    </div>
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