<template>
  <transition name="fade">
    <div class="loader" v-if="loading">
      <div class="loader__overlay"></div>
      <div class="loader__wrapper">
        <div class="loader__icon">
          <span class="cog cog--big ms-icons-cog-with-circle"></span>
          <span class="cog cog--medium ms-icons-cog"></span>
          <span class="cog cog--small ms-icons-cog"></span>
        </div>
        <p class="loader__text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OverlayLoader extends Vue {
  @Prop(String) readonly text!: string;
  @Prop(Boolean) readonly loading!: boolean;

  // loaderActive: boolean = false;
  // loaderShown: boolean = false;

  // @Watch("loading")
  // handleLoadingStateChange(to: boolean): void {
  //   to ? this.startLoading() : this.endLoading();
  // }

  // startLoading(): void {
  //   this.loaderShown = true;

  //   setTimeout(() => {
  //     this.loaderActive = true;
  //   }, 10);
  // }

  // endLoading(): void {
  //   this.loaderActive = false;

  //   setTimeout(() => {
  //     this.loaderShown = false;

  //     this.$emit("end-loading");
  //   }, 300);
  // }
}
</script>

<style lang="scss">
.loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  &__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $transparent-black;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__icon {
    height: 100px;
    width: 100px;
    position: relative;

    .cog {
      position: absolute;
      color: $white;
      display: block;

      &--big {
        top: 14px;
        left: 20px;
        font-size: 40px;
        animation: rotate-right 3s linear infinite;
      }

      &--medium {
        top: 40px;
        left: 51px;
        font-size: 32px;
        animation: rotate-left 3s linear infinite;
      }

      &--small {
        top: 58px;
        left: 28px;
        font-size: 27px;
        animation: rotate-right 3s linear infinite;
      }
    }

    &::after,
    &::before {
      content: "";
      width: 100px;
      height: 1px;
      background-color: $white;
      position: absolute;
      top: 52px;
    }

    &::before {
      right: 100%;
    }

    &::after {
      left: 100%;
    }
  }

  &__text {
    position: relative;
    text-transform: uppercase;
    color: $white;
    font-weight: 600;
    font-size: 12px;
  }
}

@keyframes rotate-right {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate-left {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
