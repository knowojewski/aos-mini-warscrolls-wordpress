<template>
  <div class="ms-card">
    <div class="ms-card__side front">
      <ms-top :miniscroll-data="miniscrollData" />
      <div class="ms-card__stats">
        <ms-stat
          icon="ms-icons-arrow-up"
          :value="miniscrollData.move ? miniscrollData.move + `&quot;` : ''"
          :first-rem="miniscrollData.fly ? t('unit-fly') : ''"
          :second-rem="miniscrollData.statsReminders.move"
        />
        <ms-stat
          icon="ms-icons-shield"
          :value="miniscrollData.save"
          :first-rem="miniscrollData.statsReminders.saveFirst"
          :second-rem="miniscrollData.statsReminders.saveSecond"
        />
        <ms-stat
          icon="ms-icons-skull"
          :value="miniscrollData.wounds"
          :first-rem="miniscrollData.statsReminders.woundsFirst"
          :second-rem="miniscrollData.statsReminders.woundsSecond"
        />
        <ms-stat
          icon="ms-icons-star"
          :value="miniscrollData.bravery"
          :first-rem="miniscrollData.statsReminders.braveryFirst"
          :second-rem="miniscrollData.statsReminders.braverySecond"
        />
      </div>
      <div class="ms-card__weapons">
        <ul class="ms-card__weapons-list">
          <li class="ms-card__weapons-header">
            <p class="dummy"></p>
            <p class="range">{{ t("range") }}</p>
            <p class="attack">{{ t("attack") }}</p>
            <p class="hit">{{ t("to-hit") }}</p>
            <p class="wound">{{ t("to-wound") }}</p>
            <p class="rend">{{ t("rend") }}</p>
            <p class="damage">Dmg</p>
          </li>
          <ms-weapon
            v-for="(weapon, index) in miniscrollData.weapons"
            :key="`${index} - ${weapon.name}`"
            :weapon="weapon"
          />
        </ul>
      </div>
      <div class="ms-card__abilities"></div>
      <div class="ms-card__keywords"></div>
    </div>
    <div v-if="cardBack" class="ms-card__side back">
      <ms-top :miniscroll-data="miniscrollData" />
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/utils/decorators";
import { MiniscrollInterface } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";
import MsTop from "./miniscroll-parts/ms-top.vue";
import MsStat from "./miniscroll-parts/ms-stat.vue";
import MsWeapon from "./miniscroll-parts/ms-weapon.vue";

@UseTranslation("miniscrolls")
@Component({
  components: {
    MsTop,
    MsStat,
    MsWeapon,
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

  &__weapons {
    width: 100%;
  }

  &__weapons-list {
    width: 95%;
    margin: 0 auto;
    padding: 5px 0;
  }

  &__weapons-header {
    width: 100%;
    display: flex;

    p {
      height: 16px;
      font-size: 11px;
      text-align: center;

      &:not(.dummy) {
        width: 14%;
        border: 1px solid $black;
        border-right: none;
      }

      &.dummy {
        width: 8%;
      }

      &.wound {
        width: 16%;
      }

      &.range {
        width: 20%;
      }

      &.damage {
        border-right: 1px solid black;
      }
    }
  }
}
</style>
