<template>
  <div class="ms-creator__form">
    <h5 class="ms-creator__form-title">{{ t("stats-form-title") }}</h5>
    <div class="ms-creator__form-wrapper">
      <DatalistInput
        :datalist-label="t('allegiance')"
        :datalist-value.sync="miniscroll.allegiance"
        :datalist-options="miniscrollStore.allegiances"
      />
      <TextInput
        :input-label="t('unit-name')"
        :input-value.sync="miniscroll.name"
      />
      <TextInput
        :input-label="t('unit-mount')"
        :input-value.sync="miniscroll.mount"
      />
      <span class="divider black"></span>
      <div class="ms-creator__stats-wrapper">
        <div class="ms-creator__stats-left">
          <DatalistInput
            :datalist-label="t('unit-move')"
            :datalist-value.sync="miniscroll.move"
            :datalist-options="miniscrollStore.bigStatsArray"
          />
          <DatalistInput
            :datalist-label="t('unit-save')"
            :datalist-value.sync="miniscroll.save"
            :datalist-options="miniscrollStore.diceArray"
          />
          <DatalistInput
            :datalist-label="t('unit-wounds')"
            :datalist-value.sync="miniscroll.wounds"
            :datalist-options="miniscrollStore.bigStatsArray"
          />
          <DatalistInput
            :datalist-label="t('unit-bravery')"
            :datalist-value.sync="miniscroll.bravery"
            :datalist-options="miniscrollStore.bigStatsArray"
          />
        </div>
        <div class="ms-creator__stats-right">
          <div class="stats-reminders">
            <p class="stats-reminders__title">{{ t("stats-reminders") }}</p>
            <DatalistInput
              :datalist-label="t('first')"
              input-style="secondary"
              :datalist-value.sync="miniscroll.move"
              :datalist-options="miniscrollStore.bigStatsArray"
            />
          </div>
        </div>
      </div>
      {{ miniscroll.allegiance }}
      {{ miniscroll.name }}
      {{ miniscroll.mount }}
      {{ miniscroll.move }}
      {{ miniscroll.save }}
      {{ miniscroll.wounds }}
      {{ miniscroll.bravery }}
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/decorators";
import { Component, Vue } from "vue-property-decorator";
import { vxm } from "@/store/store.vuex";
import DatalistInput from "@/components/forms/partials/DatalistInput.vue";
import TextInput from "@/components/forms/partials/TextInput.vue";

@UseTranslation("miniscrolls")
@Component({
  components: {
    DatalistInput,
    TextInput,
  },
})
export default class MiniscrollsStatsForm extends Vue {
  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;
}
</script>

<style lang="scss">
.ms-creator {
  &__stats-wrapper {
    display: flex;
  }

  &__stats-left,
  &__stats-right {
    width: 50%;
  }

  &__stats-left {
    padding-right: 16px;
  }

  &__stats-right {
    padding-left: 16px;
  }
}

.stats-reminders {
}
</style>
