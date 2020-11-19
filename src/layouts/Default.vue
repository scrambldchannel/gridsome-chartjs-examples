<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/chartspage">Charts on Page</g-link>
        <g-link class="nav__link" to="/charts">Charts in Posts</g-link>
        <g-link class="nav__link" to="/templatecharts"
          >Charts in Templates</g-link
        >
      </nav>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="footer">
      <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
          >Gridsome docs</a
        >
        <a
          href="https://www.chartjs.org/docs/latest/"
          target="_blank"
          rel="noopener"
          >Chart.js docs</a
        >
        <a href="https://vue-chartjs.org/guide/" target="_blank" rel="noopener"
          >vue-chart-js docs</a
        >

        <a
          href="https://gridsome.org/plugins/@gridsome/vue-remark"
          target="_blank"
          rel="noopener"
          >vue-remark docs</a
        >

        <a
          href="https://github.com/scrambldchannel/gridsome-chartjs-examples"
          target="_blank"
          rel="noopener"
          >source on github</a
        >
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-bottom: 20px;
  height: 50px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.home-links a {
  margin-right: 1rem;
}


.nav__link {
  margin-left: 20px;
}
</style>
