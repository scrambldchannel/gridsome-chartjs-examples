// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

// Import chart components
import LineChart from '~/components/Line.vue';
import BarChart from '~/components/Bar.vue';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component("LineChart", LineChart)
  Vue.component("BarChart", BarChart)

}
