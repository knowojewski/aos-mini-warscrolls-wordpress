<template>
  <div class="stats-reminders">
    <p class="stats-reminders__title">{{ t("stats-reminders") }}:</p>
    <div class="stats-reminders__wrapper">
      <CheckboxInput
        :checkbox-label="t('unit-fly')"
        :checkbox-value.sync="miniscroll.fly"
      />
      <DatalistInput
        :datalist-label="t('first')"
        input-style="secondary"
        :datalist-value.sync="miniscroll.statsReminders.move"
        :datalist-options="miniscrollStore.remindersArray"
      />
      <DatalistInput
        :datalist-label="t('first')"
        input-style="secondary"
        :datalist-value.sync="miniscroll.statsReminders.saveFirst"
        :datalist-options="miniscrollStore.remindersArray"
      />
      <DatalistInput
        :datalist-label="t('second')"
        input-style="secondary"
        :datalist-value.sync="miniscroll.statsReminders.saveSecond"
        :datalist-options="miniscrollStore.remindersArray"
      />
      <DatalistInput
        :datalist-label="t('first')"
        input-style="secondary"
        :datalist-value.sync="miniscroll.statsReminders.woundsFirst"
        :datalist-options="miniscrollStore.remindersArray"
      />
      <DatalistInput
        :datalist-label="t('second')"
        input-style="secondary"
        :datalist-value.sync="miniscroll.statsReminders.woundsSecond"
        :datalist-options="miniscrollStore.remindersArray"
      />
      <DatalistInput
        :datalist-label="t('first')"
        input-style="secondary"
        :datalist-value.sync="miniscroll.statsReminders.braveryFirst"
        :datalist-options="miniscrollStore.remindersArray"
      />
      <DatalistInput
        :datalist-label="t('second')"
        input-style="secondary"
        :datalist-value.sync="miniscroll.statsReminders.braverySecond"
        :datalist-options="miniscrollStore.remindersArray"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DatalistInput from "@/components/forms/partials/DatalistInput.vue";
import CheckboxInput from "@/components/forms/partials/CheckboxInput.vue";
import { UseTranslation } from "@/utils/decorators";
import { vxm } from "@/store/store.vuex";

@UseTranslation("miniscrolls")
@Component({
  components: {
    DatalistInput,
    CheckboxInput,
  },
})
export default class StatsReminders extends Vue {
  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;
}
</script>

<style lang="scss">
.stats-reminders {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 2px;
  }

  &__title {
    width: fit-content;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    width: 100%;
    text-align: center;
    line-height: 1;
  }

  .form-field {
    margin-bottom: 0;
    .form-field__label {
      display: none;
    }
  }
}
</style>
