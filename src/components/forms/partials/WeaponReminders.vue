<template>
  <div class="wpn-reminders">
    <span class="ms-form__text">{{ t("range") }}:</span>
    <DatalistInput
      :datalist-label="t('first')"
      :datalist-value.sync="formData.reminders.rangeFirst"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <DatalistInput
      :datalist-label="t('second')"
      :datalist-value.sync="formData.reminders.rangeSecond"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <span class="ms-form__text">{{ t("attack") }}:</span>
    <DatalistInput
      :datalist-label="t('first')"
      :datalist-value.sync="formData.reminders.attackFirst"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <DatalistInput
      :datalist-label="t('second')"
      :datalist-value.sync="formData.reminders.attackSecond"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <span class="ms-form__text">{{ t("to-hit") }}:</span>
    <DatalistInput
      :datalist-label="t('first')"
      :datalist-value.sync="formData.reminders.hitFirst"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <DatalistInput
      :datalist-label="t('second')"
      :datalist-value.sync="formData.reminders.hitSecond"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <span class="ms-form__text">{{ t("to-wound") }}:</span>
    <DatalistInput
      :datalist-label="t('first')"
      :datalist-value.sync="formData.reminders.woundFirst"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <DatalistInput
      :datalist-label="t('second')"
      :datalist-value.sync="formData.reminders.woundSecond"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <span class="ms-form__text">{{ t("rend") }}:</span>
    <DatalistInput
      :datalist-label="t('first')"
      :datalist-value.sync="formData.reminders.rendFirst"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <DatalistInput
      :datalist-label="t('second')"
      :datalist-value.sync="formData.reminders.rendSecond"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <span class="ms-form__text">{{ t("damage") }}:</span>
    <DatalistInput
      :datalist-label="t('first')"
      :datalist-value.sync="formData.reminders.damageFirst"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
    <DatalistInput
      :datalist-label="t('second')"
      :datalist-value.sync="formData.reminders.damageSecond"
      :datalist-options="miniscrollStore.remindersArray"
      :show-label="false"
      input-style="secondary"
    />
  </div>
</template>

<script lang="ts">
import { Weapon } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";
import DatalistInput from "@/components/forms/partials/DatalistInput.vue";
import { UseTranslation } from "@/decorators";
import { vxm } from "@/store/store.vuex";

@UseTranslation("miniscrolls")
@Component({
  components: {
    DatalistInput,
  },
})
export default class WeaponReminders extends Vue {
  @Prop(Object) readonly formData!: Weapon;

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;
}
</script>

<style lang="scss">
.wpn-reminders {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 4px;
  padding: 8px 0;

  .form-field {
    margin: 0;
  }
}
</style>
