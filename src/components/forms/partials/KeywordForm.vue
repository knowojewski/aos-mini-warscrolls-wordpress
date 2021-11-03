<template>
  <div class="ms-form ms-form--keyword">
    <div class="ms-form__buttons">
      <button
        v-if="itemIndex !== 0"
        @click="moveForm(-1, formData.id)"
        class="move up btn gray-bg"
      >
        <span class="ms-icons-chevron-up"></span>
      </button>
      <button
        v-if="itemIndex < miniscroll.keywords.length - 1"
        @click="moveForm(1, formData.id)"
        class="move down btn gray-bg"
      >
        <span class="ms-icons-chevron-down"></span>
      </button>
      <button @click="deleteForm(formData.id)" class="close btn red-bg">
        <span class="ms-icons-close"></span>
      </button>
    </div>
    <div class="ms-form__wrapper">
      <div class="ms-form__main">
        <TextInput
          :input-label="t('keyword')"
          :input-value.sync="formData.name"
          :show-label="false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Keyword } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";
import TextInput from "@/components/forms/partials/TextInput.vue";
import { UseTranslation } from "@/utils/decorators";
import { vxm } from "@/store/store.vuex";

@UseTranslation("miniscrolls")
@Component({
  components: {
    TextInput,
  },
})
export default class KeywordForm extends Vue {
  @Prop(Object) readonly formData!: Keyword;
  @Prop(Number) readonly itemIndex!: number;

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;

  private deleteForm(id: number): void {
    this.miniscrollStore.deleteItem({ id, array: this.miniscroll.keywords });
  }

  private moveForm(direction: number, id: number) {
    this.miniscrollStore.moveItem({
      direction,
      id,
      array: this.miniscroll.keywords,
    });
  }
}
</script>

<style lang="scss"></style>
