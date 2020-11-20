<template>
  <Layout>
    <div class="container mx-auto py-16">
      <div class="text-lg lg:text-3xl font-bold py-8">
        Gridsome Chart.js Examples
      </div>

      <div class="py-8 text-md lg:text-lg">
        Examples of basic usage of Chart.js in Gridsome using vue-chartjs. Uses
        <code>chart.js</code> and <code>vue-chart-js</code> as well as
        <code>vue-remark</code> for using components in markdown files.
      </div>
      <div class="text-md lg:text-2xl font-bold py-8">Relevant docs:</div>
      <ul>
        <a href="https://gridsome.org/docs/" class="text-md lg:text-lg hover:text-teal-600"><li>Gridsome</li></a>
        <a href="https://www.chartjs.org/docs/" class="text-md lg:text-lg hover:text-teal-600"><li>Chart.js</li></a>
        <a href="https://vue-chartjs.org/guide/" class="text-md lg:text-lg hover:text-teal-600"><li>vue-chartjs</li></a>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Gridsome and Chart.js",
  },
};
</script>

