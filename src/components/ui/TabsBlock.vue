<template>
  <div class="tabs-block">
    <ul class="tabs-block__tabs">
      <li
        v-for="(item, index) in tabsProp"
        :key="`${index} - ${item}`"
        class="tabs-block__tab"
        :class="{ active: activeTab === item }"
      >
        <button @click="$emit('tabClick', item)" class="tabs-block__tab-btn">
          {{ t(item) }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/decorators";
import { Component, Prop, Vue } from "vue-property-decorator";

@UseTranslation("miniscrolls")
@Component
export default class TabsBlock extends Vue {
  @Prop(Array) readonly tabsProp!: string[];
  @Prop(String) readonly activeTab!: string;
}
</script>

<style lang="scss">
.tabs-block {
  width: 100%;

  &__tabs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }

  &__tab {
    flex: 1;
    &.active {
      .tabs-block__tab-btn {
        background-color: $black;
        border: 1px solid $black;
        color: $white;
      }
    }
  }

  &__tab-btn {
    width: 100%;
    text-transform: uppercase;
    padding: 4px 8px;
    background-color: $white;
    border: 1px solid $gray1;
    font-size: 14px;
    vertical-align: middle;
    color: $gray1;
    white-space: nowrap;
    transition: color 0.5s, background 0.5s;

    &:hover {
      color: $black;
    }
  }

  &__blocks {
    padding: 16px 8px;
  }
}
</style>
