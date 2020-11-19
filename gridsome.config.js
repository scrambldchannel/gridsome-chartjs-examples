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
        baseDir: './content/charts', // Where .md files are located
        pathPrefix: '/charts', // Add route prefix. Optional
        template: './src/templates/Charts.vue' // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Coin', // Required
        baseDir: './content/coins', // Where .md files are located
        pathPrefix: '/coins', // Add route prefix. Optional
        template: './src/templates/Coins.vue' // Optional
      }
    }

  ]
}
