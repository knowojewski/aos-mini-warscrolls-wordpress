<template>
  <div class="repeater">
    <button @click="$emit('clicked')" class="repeater__button">
      <span class="form-label">{{ repeaterLabel }}</span>
      <span class="repeater__add">
        <span class="bar vertical"></span>
        <span class="bar horizontal"></span>
      </span>
    </button>
    <ul class="repeater__list">
      <slot name="list-items"></slot>
    </ul>
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
      width: 3px;
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
  }
}
</style>
