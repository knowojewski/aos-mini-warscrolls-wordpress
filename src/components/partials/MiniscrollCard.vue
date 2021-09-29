<template>
  <div class="ms-card">
    <div class="ms-card__side front">
      <MiniscrollTop :miniscroll-data="miniscrollData" />
      <div class="ms-card__stats">
        <div class="ms-card__stat">
          <span class="ms-icons-arrow-up"></span>
          <span class="ms-card__stat-value">{{ miniscrollData.move }}"</span>
        </div>
        <div class="ms-card__stat">
          <span class="ms-icons-shield"></span>
          <span class="ms-card__stat-value">{{ miniscrollData.save }}</span>
        </div>
        <div class="ms-card__stat">
          <span class="ms-icons-skull"></span>
          <span class="ms-card__stat-value">{{ miniscrollData.wounds }}</span>
        </div>
        <div class="ms-card__stat">
          <span class="ms-icons-star"></span>
          <span class="ms-card__stat-value">{{ miniscrollData.bravery }}</span>
        </div>
      </div>
    </div>
    <div v-if="cardBack" class="ms-card__side back">
      <MiniscrollTop :miniscroll-data="miniscrollData" />
    </div>
  </div>
</template>

<script lang="ts">
import { MiniscrollInterface } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";
import MiniscrollTop from "./miniscroll-parts/MiniscrollTop.vue";

@Component({
  components: {
    MiniscrollTop,
  },
})
export default class MiniscrollCard extends Vue {
  @Prop(Object) readonly miniscrollData!: MiniscrollInterface;

  cardBack: boolean = true;
}
</script>

<style lang="scss">
.ms-card {
  width: fit-content;
  margin: 0 auto;
  border: 1px solid $black;
  overflow: hidden;
  background-color: $white;

  *:not(span[class*="ms-icons"]) {
    font-family: sans-serif !important;
  }

  &__side {
    width: 340px;
    height: 240px;
    padding: 4px 8px;

    &.back {
      border-top: 1px solid $black;
    }
  }

  &__stats {
    padding: 3px 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid $black;
  }

  &__stat {
    display: flex;
    align-items: center;

    span[class*="ms-icons"] {
      font-size: 25px;
      margin-right: 4px;
    }
  }

  &__stat-value {
    font-size: 20px;
  }
}
</style>
