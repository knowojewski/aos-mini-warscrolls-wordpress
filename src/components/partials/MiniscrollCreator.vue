<template>
  <div class="ms-creator" ref="creator">
    <div class="ms-creator__main">
      <TabsBlock
        :tabs-prop="blocksAndTabs"
        :active-tab="activeTab"
        @tabClick="changeTab"
      />
      <div class="tabs-block__blocks">
        <MiniscrollsStatsForm v-show="activeTab === 'stats'" />
        <MiniscrollsRepeaterForm
          v-show="activeTab === 'weapons'"
          form-title="weapons-form-title"
          repeater-component="forms/partials/WeaponForm"
          :repeater-array="miniscroll.weapons"
          :repeater-item="weapon"
        />
        <MiniscrollsRepeaterForm
          v-show="activeTab === 'abilities'"
          form-title="abilities-form-title"
          repeater-component="forms/partials/AbilityForm"
          :repeater-array="miniscroll.abilities"
          :repeater-item="ability"
        />
        <MiniscrollsRepeaterForm
          v-show="activeTab === 'keywords'"
          form-title="keywords-form-title"
          repeater-component="forms/partials/KeywordForm"
          :repeater-array="miniscroll.keywords"
          :repeater-item="keyword"
        />
      </div>
    </div>
    <div class="ms-creator__preview" :class="{ pinned: previewPinned }">
      <h5 class="ms-creator__preview-title">
        {{ t("ms-preview") }}
        <button
          class="ms-creator__preview-btn"
          @click="pinPreviewOn"
          :class="{ active: previewPinned }"
        >
          <span class="ms-icons-pin"></span>
        </button>
      </h5>
      <MiniscrollCard :miniscroll-data="miniscroll" />
    </div>
    <div class="ms-creator__buttons">
      <button class="btn-ghost gray-bg">{{ t("clear-fields") }}</button>
      <button @click="createMiniscroll" class="btn red-bg">
        {{ t("create-miniscroll") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import TabsBlock from "@/components/ui/TabsBlock.vue";
import { UseTranslation } from "@/utils/decorators";
import { vxm } from "@/store/store.vuex";
import MiniscrollsStatsForm from "@/components/forms/MiniscrollsStatsForm.vue";
import MiniscrollsRepeaterForm from "@/components/forms/MiniscrollsRepeaterForm.vue";
import MiniscrollCard from "@/components/partials/MiniscrollCard.vue";
import { abilityItem, keywordItem, weaponItem } from "@/utils/helpers";
import { Ability, Keyword, Weapon } from "@/interfaces/interfaces";

@UseTranslation("miniscrolls")
@Component({
  components: {
    TabsBlock,
    MiniscrollsStatsForm,
    MiniscrollCard,
    MiniscrollsRepeaterForm,
  },
})
export default class MiniscrollsCreator extends Vue {
  @Ref("creator") readonly msCreator!: HTMLElement;

  blocksAndTabs: string[] = ["stats", "weapons", "abilities", "keywords"];
  activeTab: string | number = "stats";
  previewPinned: boolean = false;

  keyword: Keyword = keywordItem;
  ability: Ability = abilityItem;
  weapon: Weapon = weaponItem;
  miniscroll = vxm.miniscrolls.miniscroll;
  userStore = vxm.user;

  changeTab(tab: string | number): void {
    this.activeTab = tab;
  }

  pinPreviewOn(): void {
    this.previewPinned = !this.previewPinned;
  }

  setCreatorHeight(): void {
    const screenHeight = window.innerHeight;

    this.msCreator.style.height = `${screenHeight - 130}px`;
  }

  createMiniscroll(): void {
    const itemID = Date.now() + Math.random();

    const createdMiniscroll = { ...this.miniscroll };
    createdMiniscroll.id = itemID;
    createdMiniscroll.weapons = [...this.miniscroll.weapons];
    createdMiniscroll.abilities = [...this.miniscroll.abilities];
    createdMiniscroll.keywords = [...this.miniscroll.keywords];

    this.userStore.addMiniscroll(createdMiniscroll);
  }

  mounted(): void {
    this.setCreatorHeight();
  }
}
</script>

<style lang="scss">
.ms-creator {
  position: relative;
  background-color: $white;
  padding-top: 12px;
  overflow-y: auto;
  height: calc(100vh - 150px);

  &__form {
    min-height: 250px;

    .repeater {
      width: 100%;
    }
  }

  &__main {
    padding-bottom: 20px;
    position: relative;
  }

  &__preview {
    padding-bottom: 20px;

    &.pinned {
      position: sticky;
      left: 0;
      right: 0;
      bottom: -200px;
      background-color: $white;
      z-index: 1;

      .ms-creator__preview-title {
        margin: 0 2px 2px 2px;
        color: $white;
        background-color: $primary-red;
      }
    }
  }

  &__preview-title {
    background-color: $gray4;
    color: $black;
    position: relative;
    padding: 6px 36px;
    margin: 0 4px 24px 4px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    transition: margin 0.3s, color 0.3s, background 0.3s;

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      background-color: $black;
      height: 1px;
      left: 0;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  &__preview-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    height: 100%;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $dark-gray3;
    transition: color 0.3s;

    &:hover {
      color: $black;
    }

    &.active {
      color: $white;
    }
  }

  &__form-title {
    position: relative;
    padding-bottom: 8px;
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 600;

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

  &__buttons {
    display: flex;
    justify-content: space-between;
    background-color: $white;
    border-top: 1px solid $black;
    padding: 12px 8px;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;

    button {
      width: 49.5%;
    }
  }
}
</style>
