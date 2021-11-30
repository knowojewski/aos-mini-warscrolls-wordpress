<template>
  <div id="app">
    <MainNavigation />
    <main class="page-content">
      <router-view />
    </main>
    <Snackbar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainNavigation from "@/components/partials/MainNavigation.vue";
import Snackbar from "@/components/ui/Snackbar.vue";

@Component({
  components: {
    MainNavigation,
    Snackbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

#app {
  overflow-x: hidden;
  min-height: 100vh;
}
</style>
