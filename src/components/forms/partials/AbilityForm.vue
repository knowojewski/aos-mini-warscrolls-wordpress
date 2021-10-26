<template>
  <div class="ms-form ms-form--ability">
    <div class="ms-form__wrapper">
      <div class="ms-form__main">
        <TextInput
          :input-label="t('ability-name')"
          :input-value.sync="formData.name"
          :show-label="false"
        />
        <CustomSelect
          :select-label="t('type')"
          :select-value.sync="formData.type"
          :select-options="miniscrollStore.abilityTypes"
          :show-label="false"
        />
        <Textarea
          :input-label="t('description')"
          :input-value.sync="formData.desc"
          :show-label="false"
        />
      </div>
    </div>
    <div class="ms-form__buttons">
      <button @click="deleteForm(formData.id)" class="close btn red-bg">
        <span class="ms-icons-close"></span>
      </button>
      <button
        v-if="itemIndex !== 0"
        @click="moveForm(-1, formData.id)"
        class="move-up btn gray-bg"
      >
        <span class="ms-icons-chevron-up"></span>
      </button>
      <button
        v-if="itemIndex < miniscroll.abilities.length - 1"
        @click="moveForm(1, formData.id)"
        class="move-down btn gray-bg"
      >
        <span class="ms-icons-chevron-down"></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Ability } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";
import TextInput from "@/components/forms/partials/TextInput.vue";
import Textarea from "@/components/forms/partials/Textarea.vue";
import CustomSelect from "@/components/forms/partials/CustomSelect.vue";
import { UseTranslation } from "@/decorators";
import { vxm } from "@/store/store.vuex";

@UseTranslation("miniscrolls")
@Component({
  components: {
    TextInput,
    Textarea,
    CustomSelect,
  },
})
export default class AbilityForm extends Vue {
  @Prop(Object) readonly formData!: Ability;
  @Prop(Number) readonly itemIndex!: number;

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;

  private deleteForm(id: number): void {
    this.miniscrollStore.deleteItem({ id, array: this.miniscroll.abilities });
  }

  private moveForm(direction: number, id: number) {
    this.miniscrollStore.moveItem({
      direction,
      id,
      array: this.miniscroll.abilities,
    });
  }
}
</script>

<style lang="scss"></style>
