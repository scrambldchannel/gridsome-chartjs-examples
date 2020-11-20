<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen"
  >
    <header class="">
      <nav
        class="container mx-auto flex flex-wrap justify-between items-center py-8"
      >
        <div class="text-gray-600 hover:text-teal-600">
          <g-link class="text-copy-primary" to="/">{{
            $static.metadata.siteName
          }}</g-link>
        </div>
        <ul
          class="tracking-wide block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        >
          <li>
            <g-link
              to="/chartspage"
              class="text-copy-primary text-gray-600 hover:text-teal-600"
              >Charts on Page</g-link
            >
          </li>
          <li>
            <g-link
              to="/templatecharts"
              class="text-copy-primary text-gray-600 hover:text-teal-600"
              >Charts in Templates</g-link
            >
          </li>
          <li>
            <g-link
              to="/charts"
              class="text-copy-primary text-gray-600 hover:text-teal-600"
              >Charts in Posts</g-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <transition name="fade" appear>
      <main class="flex-grow">
        <slot />
      </main>
    </transition>
    <footer class="">
      <nav
        class="container mx-auto flex flex-wrap justify-center items-center py-8"
      >
        <ul
          class="justify-between tracking-wide block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        >
          <li>
            <a
              href="https://gridsome.org/docs/"
              class="text-copy-primary text-gray-600 hover:text-teal-600"
              target="_blank"
              rel="noopener"
              >Gridsome docs
            </a>
          </li>
          <li>
            <a
              href="https://www.chartjs.org/docs/latest/"
              class="text-copy-primary text-gray-600 hover:text-teal-600"
              target="_blank"
              rel="noopener"
              >Chart.js docs</a
            >
          </li>
          <a
            href="https://vue-chartjs.org/guide/"
            class="text-copy-primary text-gray-600 hover:text-teal-600"
            target="_blank"
            rel="noopener"
            >vue-chart-js docs</a
          >
          <li>
            <a
              href="https://gridsome.org/plugins/@gridsome/vue-remark"
              class="text-copy-primary text-gray-600 hover:text-teal-600"
              target="_blank"
              rel="noopener"
              >vue-remark docs</a
            >
          </li>

          <li>
            <a
              href="https://github.com/scrambldchannel/gridsome-chartjs-examples"
              class="text-copy-primary text-gray-600 hover:text-teal-600"
              target="_blank"
              rel="noopener"
              >source on github</a
            >
          </li>
        </ul>
      </nav>
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
.fade-enter-active {
  transition: opacity .75s;
}

.fade-enter {
  opacity: 0;
}
</style>