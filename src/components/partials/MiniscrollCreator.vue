<template>
  <div class="ms-creator">
    <div class="ms-creator__main">
      <TabsBlock
        :tabs-prop="blocksAndTabs"
        :active-tab="activeTab"
        @tabClick="changeTab"
      />
      <div class="tabs-block__blocks">
        <div v-show="activeTab === 'stats'" class="ms-creator__form">
          <MiniscrollsStatsForm />
        </div>
        <div v-show="activeTab === 'weapons'" class="ms-creator__form">
          Weapons
          <div style="height: 250px"></div>
        </div>
        <div v-show="activeTab === 'abilities'" class="ms-creator__form">
          Abilities
          <div style="height: 200px"></div>
        </div>
        <div v-show="activeTab === 'keywords'" class="ms-creator__form">
          Keywords
          <div style="height: 100px"></div>
        </div>
      </div>
    </div>
    <div class="ms-creator__preview"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TabsBlock from "@/components/ui/TabsBlock.vue";
import { UseTranslation } from "@/decorators";
import MiniscrollsStatsForm from "@/components/forms/MiniscrollsStatsForm.vue";

@UseTranslation("miniscrolls")
@Component({
  components: {
    TabsBlock,
    MiniscrollsStatsForm,
  },
})
export default class MiniscrollsCreator extends Vue {
  blocksAndTabs: string[] = ["stats", "weapons", "abilities", "keywords"];
  activeTab: string | number = "stats";

  changeTab(tab: string | number): void {
    this.activeTab = tab;
  }
}
</script>

<style lang="scss">
.ms-creator {
  background-color: $white;

  &__main {
    height: 500px;
    overflow-y: auto;
  }

  &__preview {
    max-height: 500px;
  }

  &__form-title {
    position: relative;
    padding-bottom: 8px;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 400;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30%;
      height: 1px;
      background-color: $black;
    }
  }
}
</style>
