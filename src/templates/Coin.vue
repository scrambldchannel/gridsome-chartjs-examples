<template>
  <Layout>
    <div class="container mx-auto py-16">
      <div class="text-lg lg:text-3xl font-bold py-8">{{ $page.coin.title }}</div>
      <div class="max-w-xl">
        <line-chart :chartData="dataCoin"></line-chart>
      </div>
    </div>
    
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Coin ($id: ID!) {
  coin(id: $id) {
    title
    summary
    coin
  }
}
</page-query>

<script>
import LineChart from "~/components/Line.vue";

export default {
  components: {
    LineChart,
  },
  data: function () {
    return {
      // using empty object removes warnings about chartData
      dataCoin: {},
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.dataCoin = {
        labels: [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
        ],
        datasets: [
          {
            label: this.$page.coin.coin,
            backgroundColor: "rgba(0,128,128, 1)",
            borderColor: "rgba(0,128,128, 0.5)",
            borderWidth: "5",
            fill: false,
            data: this.getPrice(),
          },
        ],
      };
    },
    getPrice() {
      // dummy function to simulate pulling data via a function using front matter info
      const prices = {
        BTC: [0.125, 2, 13, 600, 1000, 500, 780, 13800, 3300, 7100],
        XMR: [0, 0, 0, 0, 0.28, 0.34, 11.5, 39.05, 314, 45],
      };
      return prices[this.$page.coin.coin];
    },
  },
};
</script>
