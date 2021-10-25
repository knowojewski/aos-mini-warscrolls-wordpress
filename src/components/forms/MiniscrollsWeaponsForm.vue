<template>
  <div class="ms-creator__form">
    <h5 class="ms-creator__form-title">{{ t("weapons-form-title") }}</h5>
    <div class="ms-creator__form-wrapper">
      <Repeater
        ref="repeater"
        @clicked="addWeaponForm"
        :repeater-label="t('weapon-repeater-label')"
      >
        <template v-slot:list-items>
          <li
            v-for="(item, index) in miniscroll.weapons"
            :key="`${index}`"
            class="repeater__list-item"
          >
            <WeaponForm :form-data="item" :item-index="index" />
          </li>
        </template>
      </Repeater>
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/decorators";
import { Component, Vue, Ref } from "vue-property-decorator";
import { vxm } from "@/store/store.vuex";
import { Weapon } from "@/interfaces/interfaces";
import Repeater from "@/components/forms/partials/Repeater.vue";
import TextInput from "@/components/forms/partials/TextInput.vue";
import CustomSelect from "@/components/forms/partials/CustomSelect.vue";
import Accordion from "@/components/ui/Accordion.vue";
import WeaponForm from "@/components/forms/partials/WeaponForm.vue";
import { scrollToElement } from "@/services/UIServices";

@UseTranslation("miniscrolls")
@Component({
  components: {
    Repeater,
    TextInput,
    CustomSelect,
    Accordion,
    WeaponForm,
  },
})
export default class MiniscrollsWeaponsForm extends Vue {
  @Ref("repeater") readonly repeater!: Repeater;

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;
  msCreator: HTMLElement | null = null;

  get repeaterItems(): HTMLCollection {
    return this.repeater.$el.children[1].children;
  }

  addWeaponForm(): void {
    const weaponID = Date.now() + Math.random();

    const weaponForm: Weapon = {
      id: weaponID,
      name: null,
      type: null,
      range: null,
      attack: null,
      hit: null,
      wound: null,
      rend: null,
      damage: null,
      reminders: {
        rangeFirst: null,
        rangeSecond: null,
        attackFirst: null,
        attackSecond: null,
        hitFirst: null,
        hitSecond: null,
        woundFirst: null,
        woundSecond: null,
        rendFirst: null,
        rendSecond: null,
        damageFirst: null,
        damageSecond: null,
      },
    };

    this.miniscrollStore.addItem({
      item: weaponForm,
      array: this.miniscroll.weapons,
    });

    this.scrollToWeaponForm();
  }

  scrollToWeaponForm(): void {
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
