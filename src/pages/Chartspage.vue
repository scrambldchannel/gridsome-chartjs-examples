<template>
  <Layout>
    <div class="container mx-auto py-16">
      <div class="text-lg lg:text-3xl font-bold pt-8">
        Examples of individual charts on a single page
      </div>
      <div>
        <div class="lg:text-2xl py-16">Line Chart</div>
        <div>
          <line-chart :chartData="dataLine"></line-chart>
        </div>
      </div>
      <div>
        <div class="lg:text-2xl py-16">Bar Chart</div>
        <div >
          <bar-chart :chartData="dataBar"></bar-chart>
        </div>
      </div>
      <div>
        <div class="lg:text-2xl py-16">Mixed Chart</div>
        <div >
          <bar-chart :chartData="dataMixed"></bar-chart>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import LineChart from "../components/Line.vue";
import BarChart from "../components/Bar.vue";

export default {
  components: {
    LineChart,
    BarChart,
  },
  data: function () {
    return {
      // using empty object removes warnings about chartData
      dataLine: {},
      dataBar: {},
      dataMixed: {},
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      (this.dataLine = {
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "rgba(0,128,128, 1)",
            borderColor: "rgba(0,128,128, 0.5)",
            borderWidth: "5",
            fill: false,
            data: [10, 12, 8, 14, this.getRandomInt()],
          },
          {
            label: "Costs",
            backgroundColor: "rgba(255,69,0, 1)",
            borderColor: "rgba(255,69,0,0.5)",
            borderWidth: "5",
            fill: false,
            data: [4, 3, 9, 3, this.getRandomInt()],
          },
        ],
      }),
        (this.dataBar = {
          labels: ["2020", "2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "Profit",
              backgroundColor: "rgba(0,128,128, 0.2)",
              data: [
                6,
                9,
                -1,
                11,
                this.dataLine.datasets[0].data[4] -
                  this.dataLine.datasets[1].data[4],
              ],
            },
          ],
        }),
        (this.dataMixed = {
          labels: ["2020", "2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "Sales",
              backgroundColor: "rgba(0,128,128, 0.2)",
              data: [10, 12, 8, 14, this.getRandomInt()],
            },
            {
              label: "Costs",
              backgroundColor: "rgba(255,69,0, 1)",
              borderColor: "rgba(255,69,0,0.5)",
              data: [4, 3, 9, 3, this.getRandomInt()],
              type: "line",
              fill: false,
            },
          ],
        });
    },
    getRandomInt() {
      return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    },
  },
};
</script>

