<script>
import { Bubble, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Bubble,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    },
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object

    this.renderChart(this.chartData, this.options)

  },
};
</script>