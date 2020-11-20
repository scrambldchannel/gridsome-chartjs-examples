<template>
  <div id="app" class="antialiased text-grey-900">
    <div class="min-h-screen">
      <header >
        <Navbar />
      </header>
      <transition name="fade" appear>
        <main class="flex-grow">
          <slot />
        </main>
      </transition>
    <Footer />
      
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
.fade-enter-active {
  transition: opacity 0.75s;
}

.fade-enter {
  opacity: 0;
}
</style>