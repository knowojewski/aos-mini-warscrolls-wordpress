<template>
  <div class="repeater">
    <button @click="$emit('clicked')" class="repeater__button">
      <span class="form-label">{{ repeaterLabel }}</span>
      <span class="repeater__add">
        <span class="bar vertical"></span>
        <span class="bar horizontal"></span>
      </span>
    </button>
    <transition-group
      name="fade-in"
      tag="ul"
      ref="repeaterList"
      class="repeater__list"
    >
      <slot name="list-items"></slot>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Repeater extends Vue {
  @Prop(String) readonly repeaterLabel!: string;
}
</script>

<style lang="scss">
.fade-in-enter-active,
.fade-in-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}
.fade-in-leave-active {
  position: absolute;
}
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
.fade-in-move {
  transition: transform 0.3s, opacity 0.3s;
}

.repeater {
  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &:hover,
    &:focus {
      .repeater__add {
        background-color: $light-red;
      }

      .form-label {
        margin-left: 4px;
        color: $black;
      }
    }
  }

  .form-label {
    color: $black;
    flex: 1;
    margin-right: 16px;
    text-align: left;
    transition: margin 0.3s, color 0.3s;
  }

  &__add {
    width: 36px;
    height: 36px;
    background-color: $primary-red;
    border: 1px solid $black;
    position: relative;
    transition: background 0.3s;

    .bar {
      position: absolute;
      top: 50%;
      left: 50%;
      display: inline-block;
      width: 2px;
      height: 22px;
      background-color: $white;
      transform: translate(-50%, -50%);

      &.horizontal {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }

  &__list {
    padding: 20px 0;
    position: relative;
  }

  &__list-item {
    width: 100%;
  }
}
</style>
