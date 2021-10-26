<template>
  <div class="ms-creator__form">
    <h5 class="ms-creator__form-title">{{ t("keywords-form-title") }}</h5>
    <div class="ms-creator__form-wrapper">
      <Repeater
        ref="repeater"
        @clicked="addKeywordForm"
        :repeater-label="t('keyword-repeater-label')"
      >
        <template v-slot:list-items>
          <li
            v-for="(item, index) in miniscroll.keywords"
            :key="`${index}`"
            class="repeater__list-item"
          >
            <KeywordForm :form-data="item" :item-index="index" />
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
import KeywordForm from "@/components/forms/partials/KeywordForm.vue";
import { scrollToElement } from "@/services/UIServices";
import { Keyword } from "@/interfaces/interfaces";
import { vxm } from "@/store/store.vuex";

@UseTranslation("miniscrolls")
@Component({
  components: {
    Repeater,
    KeywordForm,
  },
})
export default class MiniscrollsKeywordsForm extends Vue {
  @Ref("repeater") readonly repeater!: Repeater;

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;
  msCreator: HTMLElement | null = null;

  get repeaterItems(): HTMLCollection {
    return this.repeater.$el.children[1].children;
  }

  addKeywordForm(): void {
    const keywordID = Date.now() + Math.random();

    const keywordForm: Keyword = {
      id: keywordID,
      name: null,
    };

    this.miniscrollStore.addItem({
      item: keywordForm,
      array: this.miniscroll.keywords,
    });

    this.scrollToKeywordForm();
  }

  scrollToKeywordForm(): void {
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
