<template>
  <div class="ms-card__top">
    <div class="ms-card__top-left">
      <p class="ms-card__top-title">{{ miniscrollData.name }}</p>
      <p v-if="miniscrollData.mount" class="ms-card__top-mount">
        On {{ miniscrollData.mount }}
      </p>
    </div>
    <div class="ms-card__top-right">
      <p class="ms-card__top-weapons">Weapon 1 / Weapon 2</p>
    </div>
  </div>
</template>

<script lang="ts">
import { MiniscrollInterface } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MiniscrollTop extends Vue {
  @Prop(Object) readonly miniscrollData!: MiniscrollInterface;
}
</script>

<style lang="scss">
.ms-card {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid $black;
  }

  &__top-left {
    width: 60%;
    padding-right: 16px;
    text-transform: uppercase;
  }

  &__top-right {
    width: 40%;
  }

  &__top-title {
    font-size: 12px;
    font-weight: 700;
    line-height: unset;
  }

  &__top-mount {
    font-size: 10px;
    line-height: unset;
  }

  &__top-weapons {
    text-align: right;
    font-size: 9px;
    line-height: unset;
  }
}
</style>
