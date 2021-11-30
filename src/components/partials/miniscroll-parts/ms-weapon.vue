<template>
  <li class="ms-card__weapon">
    <p class="shortcut">{{ shortcut }}</p>
    <p class="range">
      <span
        v-if="weapon.type === 'Melee'"
        class="ms-icons-crossed-swords range-icon"
      ></span>
      <span
        v-if="weapon.type === 'Ranged'"
        class="ms-icons-bow-arrow range-icon"
      ></span>
      <span class="range-stat">
        <span
          class="text"
          :class="{ right: weapon.rangeFirst || weapon.rangeSecond }"
          >{{ weapon.range }}<var>"</var></span
        >
        <span v-if="weapon.rangeFirst || weapon.rangeSecond" class="reminders">
          <span class="first">{{ weapon.rangeFirst }}</span>
          <span class="second">{{ weapon.rangeSecond }}</span>
        </span>
      </span>
    </p>
    <p class="attack">
      <span
        class="text"
        :class="{ right: weapon.attackFirst || weapon.attackSecond }"
        >{{ weapon.attack }}</span
      >
      <span v-if="weapon.attackFirst || weapon.attackSecond" class="reminders">
        <span class="first">{{ weapon.attackFirst }}</span>
        <span class="second">{{ weapon.attackSecond }}</span>
      </span>
    </p>
    <p class="hit">
      <span
        class="text"
        :class="{ right: weapon.hitFirst || weapon.hitSecond }"
        >{{ weapon.hit }}</span
      >
      <span v-if="weapon.hitFirst || weapon.hitSecond" class="reminders">
        <span class="first">{{ weapon.hitFirst }}</span>
        <span class="second">{{ weapon.hitSecond }}</span>
      </span>
    </p>
    <p class="wound">
      <span
        class="text"
        :class="{ right: weapon.woundFirst || weapon.woundSecond }"
        >{{ weapon.wound }}</span
      >
      <span v-if="weapon.woundFirst || weapon.woundSecond" class="reminders">
        <span class="first">{{ weapon.woundFirst }}</span>
        <span class="second">{{ weapon.woundSecond }}</span>
      </span>
    </p>
    <p class="rend">
      <span
        class="text"
        :class="{ right: weapon.rendFirst || weapon.rendSecond }"
        >{{ weapon.rend }}</span
      >
      <span v-if="weapon.rendFirst || weapon.rendSecond" class="reminders">
        <span class="first">{{ weapon.rendFirst }}</span>
        <span class="second">{{ weapon.rendSecond }}</span>
      </span>
    </p>
    <p class="damage">
      <span
        class="text"
        :class="{ right: weapon.damageFirst || weapon.damageSecond }"
        >{{ weapon.damage }}</span
      >
      <span v-if="weapon.damageFirst || weapon.damageSecond" class="reminders">
        <span class="first">{{ weapon.damageFirst }}</span>
        <span class="second">{{ weapon.damageSecond }}</span>
      </span>
    </p>
  </li>
</template>

<script lang="ts">
import { Weapon } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MsWeapon extends Vue {
  @Prop(Object) readonly weapon!: Weapon;

  get shortcut(): string {
    const words = this.weapon.name?.split(/[\s-]/g);
    const shortcut = words?.map((word) => word.split("")[0]);

    return shortcut ? shortcut.join("") : "";
  }
}
</script>

<style lang="scss">
.ms-card {
  &__weapon {
    width: 100%;
    display: flex;

    p {
      height: 18px;
      font-size: 14px;
      font-weight: 700;
      border: 1px solid $black;
      border-top: none;
      border-right: none;
      width: 14%;
      display: flex;
      justify-content: center;
      align-items: center;

      &.shortcut {
        width: 8%;
        border: none;
        padding-right: 1px;
        font-size: 12px;
        font-weight: 400;
        justify-content: flex-end;
      }

      &.wound {
        width: 16%;
      }

      &.range {
        width: 20%;

        .range-icon {
          font-size: 14px;
          margin-left: 4px;
          margin-top: 1px;
        }

        .range-stat {
          display: flex;
          flex: 1;
          justify-content: center;
        }
      }

      &.damage {
        border-right: 1px solid black;
      }

      .text {
        flex: 1;
        text-align: center;

        &.right {
          text-align: right;
        }

        var {
          font-size: 12px;
          vertical-align: text-top;
        }
      }

      .reminders {
        display: flex;
        flex-direction: column;
        font-size: 8px;
        line-height: 1;
        padding-top: 2px;
        margin: 0 2px;
        min-width: 12px;
      }
    }
  }
}
</style>
