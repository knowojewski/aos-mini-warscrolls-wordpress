<template>
  <div class="ms-card">
    <div class="ms-card__side front">
      <MiniscrollTop :miniscroll-data="miniscrollData" />
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

  &__side {
    width: 340px;
    height: 240px;

    &.back {
      border-top: 1px solid $black;
    }
  }
}
</style>
