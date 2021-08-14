<template>
  <nav class="main-nav" :class="{ active: showMenu }">
    <button
      @click="toggleMenu"
      class="hamburger main-nav__hamburger"
      :class="{ active: showMenu }"
    >
      <img src="../../assets/images/navigation/hamburger-bar.png" alt="Bar" />
      <img src="../../assets/images/navigation/hamburger-bar.png" alt="Bar" />
      <img src="../../assets/images/navigation/hamburger-bar.png" alt="Bar" />
      <img src="../../assets/images/navigation/hamburger-bar.png" alt="Bar" />
    </button>
    <div class="main-nav__logo-wrapper">
      <router-link to="/" class="main-nav__logo-link">
        <img src="../../assets/images/navigation/LOGO.png" alt="Skull" />
      </router-link>
    </div>
    <div class="main-nav__wrapper">
      <ul class="main-nav__links-list">
        <NavigationItem
          v-for="(route, index) in getRoutes"
          :key="index"
          :link-props="route"
        />
      </ul>
      <div class="main-nav__bottom-image">
        <img src="../../assets/images/navigation/nav-image.png" alt="Image" />
      </div>
    </div>
    <div class="main-nav__right-border">
      <img src="../../assets/images/navigation/nav-line.png" alt="Border" />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import NavigationItem from "@/components/partials/NavigationItem.vue";
import { RouteConfig } from "vue-router";

@Component({
  components: {
    NavigationItem,
  },
})
export default class MainNavigation extends Vue {
  showMenu: boolean = true;
  routes!: RouteConfig[] | undefined;

  get getRoutes(): RouteConfig[] | undefined {
    return this.routes;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  setRoutes(): void {
    this.routes = this.$router.options.routes
      ? this.$router.options.routes.splice(1)
      : [];
  }

  @Watch("$route", { immediate: true, deep: true })
  onRouteChange(): void {
    this.toggleMenu();
  }

  created(): void {
    this.setRoutes();
  }
}
</script>

<style lang="scss">
.main-nav {
  @include display-flex(column, flex-start, flex-start, nowrap);
  min-width: 360px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  transform: translateX(-100%);
  transition: transform 0.8s;
  z-index: 100;
  @include breakpoint-up($sm) {
    width: 360px;
  }

  &.active {
    transform: translateX(0);

    .main-nav__hamburger {
      transform: translateX(0);
    }

    .main-nav__bottom-image {
      img {
        @include breakpoint-up($sm) {
          transform: translateX(0);
        }
      }
    }
  }

  &__wrapper {
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
    @include display-flex(column, space-between, flex-start, nowrap);
  }

  &__logo-wrapper {
    width: 100%;
  }

  &__logo-link {
    display: block;
    width: 70%;
    max-width: 260px;
    padding: 12px;

    img {
      width: 100%;
    }
  }

  &__links-list {
    width: 100%;
    padding: 8px 0;
    @include breakpoint-up($sm) {
      position: relative;
      z-index: 1;
    }
  }

  &__right-border {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
  }

  &__bottom-image {
    margin-top: auto;
    width: 100%;
    @include breakpoint-up($sm) {
      // position: relative;
    }

    img {
      width: 100%;
      vertical-align: middle;
      @include breakpoint-up($sm) {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100vw;
        max-width: 500px;
        transition: transform 0.8s;
        transform: translateX(-140px);
      }
      @include breakpoint-up($xl) {
        max-width: 580px;
        transform: translateX(-220px);
      }
      @include breakpoint-up($xxl) {
        max-width: 680px;
        transform: translateX(-320px);
      }
    }
  }
}
</style>
