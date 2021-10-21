<template>
  <div class="ms-creator__form">
    <h5 class="ms-creator__form-title">{{ t("weapons-form-title") }}</h5>
    <div class="ms-creator__form-wrapper">
      <Repeater
        @clicked="addWeaponForm"
        :repeater-label="t('weapon-repeater-label')"
      >
        <template v-slot:list-items>
          <li
            v-for="(item, index) in miniscroll.weapons"
            :key="`${index}`"
            class="repeater__list-item"
          >
            <WeaponForm :form-data="item" />
          </li>
        </template>
      </Repeater>
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/decorators";
import { Component, Vue } from "vue-property-decorator";
import { vxm } from "@/store/store.vuex";
import { Weapon } from "@/interfaces/interfaces";
import Repeater from "@/components/forms/partials/Repeater.vue";
import TextInput from "@/components/forms/partials/TextInput.vue";
import CustomSelect from "@/components/forms/partials/CustomSelect.vue";
import Accordion from "@/components/ui/Accordion.vue";
import WeaponForm from "@/components/forms/partials/WeaponForm.vue";

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
  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;

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

    this.miniscroll.weapons.push(weaponForm);
  }
}
</script>

<style lang="scss"></style>
