<template>
  <div class="ms-form ms-form--weapon">
    <div class="ms-form__wrapper">
      <div class="ms-form__main">
        <TextInput
          :input-label="t('weapon-name')"
          :input-value.sync="formData.name"
          :show-label="false"
        />
        <CustomSelect
          :select-label="t('type')"
          :select-value.sync="formData.type"
          :select-options="miniscrollStore.weaponTypes"
          :show-label="false"
        />
        <DatalistInput
          :datalist-label="t('range')"
          :datalist-value.sync="formData.range"
          :datalist-options="miniscrollStore.bigStatsArray"
          :show-label="false"
        />
        <DatalistInput
          :datalist-label="t('attack')"
          :datalist-value.sync="formData.attack"
          :datalist-options="miniscrollStore.smallStatsArray"
          :show-label="false"
        />
        <DatalistInput
          :datalist-label="t('to-hit')"
          :datalist-value.sync="formData.hit"
          :datalist-options="miniscrollStore.diceArray"
          :show-label="false"
        />
        <DatalistInput
          :datalist-label="t('to-wound')"
          :datalist-value.sync="formData.wound"
          :datalist-options="miniscrollStore.diceArray"
          :show-label="false"
        />
        <DatalistInput
          :datalist-label="t('rend')"
          :datalist-value.sync="formData.rend"
          :datalist-options="miniscrollStore.rendArray"
          :show-label="false"
        />
        <DatalistInput
          :datalist-label="t('damage')"
          :datalist-value.sync="formData.damage"
          :datalist-options="miniscrollStore.smallStatsArray"
          :show-label="false"
        />
      </div>
      <div class="ms-form__reminders">
        <Accordion
          toggler-class="ms-form__acc-toggler"
          content-class="ms-form__acc-content"
        >
          <template v-slot:accToggler>
            <span class="ms-form__text">{{ t("stats-reminders") }}</span>
          </template>
          <template v-slot:accContent>
            <WeaponReminders :form-data="formData" />
          </template>
        </Accordion>
      </div>
    </div>
    <div class="ms-form__buttons">
      <button @click="deleteForm(formData.id)" class="close btn red-bg">
        <span class="ms-icons-close"></span>
      </button>
      <button
        v-if="itemIndex !== 0"
        @click="moveWeapon(-1, formData.id)"
        class="move-up btn gray-bg"
      >
        <span class="ms-icons-chevron-up"></span>
      </button>
      <button
        v-if="itemIndex < miniscroll.weapons.length - 1"
        @click="moveWeapon(1, formData.id)"
        class="move-down btn gray-bg"
      >
        <span class="ms-icons-chevron-down"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Weapon } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";
import TextInput from "@/components/forms/partials/TextInput.vue";
import DatalistInput from "@/components/forms/partials/DatalistInput.vue";
import CustomSelect from "@/components/forms/partials/CustomSelect.vue";
import Accordion from "@/components/ui/Accordion.vue";
import WeaponReminders from "@/components/forms/partials/WeaponReminders.vue";
import { UseTranslation } from "@/decorators";
import { vxm } from "@/store/store.vuex";

@UseTranslation("miniscrolls")
@Component({
  components: {
    TextInput,
    CustomSelect,
    DatalistInput,
    Accordion,
    WeaponReminders,
  },
})
export default class WeaponForm extends Vue {
  @Prop(Object) readonly formData!: Weapon;
  @Prop(Number) readonly itemIndex!: number;

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;

  private deleteForm(id: number): void {
    this.miniscrollStore.deleteItem({ id, array: this.miniscroll.weapons });
  }

  private moveWeapon(direction: number, id: number) {
    this.miniscrollStore.moveItem({
      direction,
      id,
      array: this.miniscroll.weapons,
    });
  }
}
</script>

<style lang="scss"></style>
