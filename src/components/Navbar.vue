
<template>
  <header class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <g-link class="text-grey-600" to="/">{{
          $static.metadata.siteName
        }}</g-link>
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-grey-600 hover:text-teal-600 focus:text-white focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <g-link
        class="block px-2 py-1 text-grey-600 hover:text-teal-600"
        to="/chartspage"
        >On a page</g-link
      >

      <g-link
        class="mt-1 block px-2 py-1 text-grey-600 hover:text-teal-600 sm:mt-0 sm:ml-2"
        to="/templatecharts"
        >In templates</g-link
      >

      <g-link
        class="mt-1 block px-2 py-1 text-grey-600 hover:text-teal-600 sm:mt-0 sm:ml-2"
        to="/charts"
        >In posts</g-link
      >
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>