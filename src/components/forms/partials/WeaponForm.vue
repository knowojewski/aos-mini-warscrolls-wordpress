<template>
  <div class="wpn-form">
    <div class="wpn-form__wrapper">
      <div class="wpn-form__main">
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
      <div class="wpn-form__reminders">
        <Accordion
          toggler-class="wpn-form__acc-toggler"
          content-class="wpn-form__acc-content"
        >
          <template v-slot:accToggler>
            <span class="wpn-form__text">{{ t("stats-reminders") }}</span>
          </template>
          <template v-slot:accContent>
            <WeaponReminders :form-data="formData" />
          </template>
        </Accordion>
      </div>
    </div>
    <div class="wpn-form__buttons">
      <button class="close btn red-bg">
        <span class="ms-icons-close"></span>
      </button>
      <button class="move-up btn gray-bg">
        <span class="ms-icons-chevron-up"></span>
      </button>
      <button class="move-down btn gray-bg">
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

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;
}
</script>

<style lang="scss">
.wpn-form {
  position: relative;
  width: 100%;
  margin-bottom: 16px;

  &__wrapper {
    width: calc(100% - 23px);
    border: 1px solid $black;
    padding: 8px 12px;
    background-color: $gray6;

    .text-input {
      height: 26px;
    }
  }

  &__main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px;

    .form-wrapper {
      width: auto;
      margin: 0;

      &:first-of-type {
        grid-column: 1/3;
      }
    }
  }

  &__buttons {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;

    .btn {
      position: relative;
      width: 24px;
      height: 24px;
      border-width: 1px;
      min-width: auto;

      &:nth-of-type(2) {
        top: -1px;
        border-color: $dark-gray2;
      }

      &:nth-of-type(3) {
        top: -2px;
        border-color: $dark-gray2;
      }

      span {
        font-size: 11px;
      }

      span[class*="chevron"] {
        font-size: 8px;
      }
    }
  }

  &__acc-toggler {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  &__text {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__acc-content {
    border-top: 1px solid $black;
  }
}
</style>
