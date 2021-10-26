<template>
  <div class="ms-creator__form">
    <h5 class="ms-creator__form-title">{{ t("abilities-form-title") }}</h5>
    <div class="ms-creator__form-wrapper">
      <Repeater
        ref="repeater"
        @clicked="addAbilityForm"
        :repeater-label="t('ability-repeater-label')"
      >
        <template v-slot:list-items>
          <li
            v-for="(item, index) in miniscroll.abilities"
            :key="`${index}`"
            class="repeater__list-item"
          >
            <AbilityForm :form-data="item" :item-index="index" />
          </li>
        </template>
      </Repeater>
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/decorators";
import { Component, Ref, Vue } from "vue-property-decorator";
import Repeater from "@/components/forms/partials/Repeater.vue";
import AbilityForm from "@/components/forms/partials/AbilityForm.vue";
import { scrollToElement } from "@/services/UIServices";
import { Ability } from "@/interfaces/interfaces";
import { vxm } from "@/store/store.vuex";

@UseTranslation("miniscrolls")
@Component({
  components: {
    Repeater,
    AbilityForm,
  },
})
export default class MiniscrollsAbilitiesForm extends Vue {
  @Ref("repeater") readonly repeater!: Repeater;

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;
  msCreator: HTMLElement | null = null;

  get repeaterItems(): HTMLCollection {
    return this.repeater.$el.children[1].children;
  }

  addAbilityForm(): void {
    const abilityID = Date.now() + Math.random();

    const abilityForm: Ability = {
      id: abilityID,
      name: null,
      type: null,
      desc: null,
    };

    this.miniscrollStore.addItem({
      item: abilityForm,
      array: this.miniscroll.abilities,
    });

    this.scrollToAbilityForm();
  }

  scrollToAbilityForm(): void {
    setTimeout(() => {
      this.msCreator = this.repeater.$el.closest(".ms-creator") as HTMLElement;

      scrollToElement(
        this.msCreator,
        this.repeaterItems[this.repeaterItems.length - 1] as HTMLElement,
        10
      );
    }, 100);
  }
}
</script>

<style lang="scss"></style>
