<template>
  <div id="app">
    <MainNavigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainNavigation from "@/components/partials/MainNavigation.vue";

@Component({
  components: {
    MainNavigation,
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
