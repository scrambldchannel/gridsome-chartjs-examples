// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Chart.js Examples',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Chart', // Required
        baseDir: 'content/charts', // Where .md files are located
        pathPrefix: '/charts', // Add route prefix. Optional
        template: 'src/templates/Charts.vue' // Optional
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Coin', // Required
        path: 'content/coins/*.md', // Where .md files are located

      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },

  ]
}
