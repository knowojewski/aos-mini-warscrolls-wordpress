<template>
  <div class="ms-card__top">
    <div class="ms-card__top-name">
      <p class="ms-card__top-title">{{ miniscrollData.name }}</p>
      <p class="ms-card__top-mount">On {{ miniscrollData.mount }}</p>
    </div>
    <div class="ms-card__top-weapons">
      <p>Weapon 1 / Weapon 2</p>
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

<style lang="scss"></style>
