<template>
  <div class="ms-card">
    <div class="ms-card__side front">
      <MiniscrollTop :miniscroll-data="miniscrollData" />
      <div class="ms-card__stats">
        <div class="stat">
          <span class="ms-icons-arrow-up"></span>
          <span class="stat__value">{{ miniscrollData.move }}"</span>
          <div class="stat__reminders">
            <span class="stat__reminder first">{{
              miniscrollData.fly ? t("unit-fly") : ""
            }}</span>
            <span class="stat__reminder second">{{
              miniscrollData.statsReminders.move
            }}</span>
          </div>
        </div>
        <div class="stat">
          <span class="ms-icons-shield"></span>
          <span class="stat__value">{{ miniscrollData.save }}</span>
          <div class="stat__reminders">
            <span class="stat__reminder first">{{
              miniscrollData.statsReminders.saveFirst
            }}</span>
            <span class="stat__reminder second">{{
              miniscrollData.statsReminders.saveSecond
            }}</span>
          </div>
        </div>
        <div class="stat">
          <span class="ms-icons-skull"></span>
          <span class="stat__value">{{ miniscrollData.wounds }}</span>
          <div class="stat__reminders">
            <span class="stat__reminder first">{{
              miniscrollData.statsReminders.woundsFirst
            }}</span>
            <span class="stat__reminder second">{{
              miniscrollData.statsReminders.woundsFirst
            }}</span>
          </div>
        </div>
        <div class="stat">
          <span class="ms-icons-star"></span>
          <span class="stat__value">{{ miniscrollData.bravery }}</span>
          <div class="stat__reminders">
            <span class="stat__reminder first">{{
              miniscrollData.statsReminders.braveryFirst
            }}</span>
            <span class="stat__reminder second">{{
              miniscrollData.statsReminders.braveryFirst
            }}</span>
          </div>
        </div>
      </div>
      <div class="ms-card__weapons">
        <ul class="ms-card__weapons-list">
          <li
            v-for="(weapon, index) in miniscrollData.weapons"
            :key="`${index} - ${weapon.name}`"
            class="ms-card__weapon"
          >
            Unit Weapon: {{ weapon.name }} Unit Weapon: {{ weapon.type }}
          </li>
        </ul>
      </div>
    </div>
    <div v-if="cardBack" class="ms-card__side back">
      <MiniscrollTop :miniscroll-data="miniscrollData" />
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/utils/decorators";
import { MiniscrollInterface } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";
import MiniscrollTop from "./miniscroll-parts/MiniscrollTop.vue";

@UseTranslation("miniscrolls")
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

  .stat {
    display: flex;
    align-items: center;
    position: relative;

    span[class*="ms-icons"] {
      font-size: 25px;
      margin-right: 4px;
    }

    &__value {
      font-size: 20px;
    }

    &__reminders {
      position: absolute;
      top: 50%;
      left: calc(100% + 4px);
      font-size: 9px;
      display: flex;
      flex-direction: column;
      transform: translateY(-50%);
    }

    &__reminder {
      &.first {
        margin-bottom: 4px;
      }
    }
  }
}
</style>
