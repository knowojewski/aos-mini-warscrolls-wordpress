<template>
  <div class="stat">
    <span :class="icon"></span>
    <span class="stat__value">{{ value }}</span>
    <div class="stat__reminders">
      <span class="stat__reminder first">{{ firstRem }}</span>
      <span class="stat__reminder second">{{ secondRem }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MsStat extends Vue {
  @Prop(String) readonly icon!: string;
  @Prop(String) readonly value!: string | number;
  @Prop(String) readonly firstRem!: string;
  @Prop(String) readonly secondRem!: string;
}
</script>

<style lang="scss">
.ms-card {
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
