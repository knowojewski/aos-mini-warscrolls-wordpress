<template>
  <div class="snackbar">
    <transition-group name="list" tag="ul" class="snackbar__list">
      <li
        v-for="item in $store.state.ui.snackbar"
        :key="item.id"
        class="snackbar__item"
      >
        <h3 v-if="item.title" class="snackbar__title">{{ item.title }}</h3>
        <p class="snackbar__content">{{ item.content }}</p>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Snackbar extends Vue {}
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.list-leave-active {
  position: absolute;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.list-move {
  transition: opacity 0.3s, transform 0.3s;
}

.snackbar {
  position: fixed;
  width: 90vw;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;

  &__item {
    width: 100%;
    max-width: 600px;
    padding: 20px 20px;
    background-color: $transparent-black-2;
    color: $white;
    text-align: center;
    margin-bottom: 8px;
  }

  &__title {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 8px;
    padding-bottom: 8px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background-color: $white;
    }
  }

  &__content {
    font-size: 14px;
  }
}
</style>
