<template>
  <div class="ms-creator__form" :class="formClass">
    <h5 class="ms-creator__form-title">{{ t(formTitle) }}</h5>
    <div class="ms-creator__form-wrapper">
      <Repeater
        ref="repeater"
        @clicked="addForm"
        :repeater-label="t('keyword-repeater-label')"
      >
        <template v-slot:list-items>
          <li
            v-for="(item, index) in repeaterArray"
            :key="`${index}`"
            class="repeater__list-item"
          >
            <component
              :is="itemComponent"
              :form-data="item"
              :item-index="index"
            ></component>
          </li>
        </template>
      </Repeater>
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/decorators";
import { Component, Prop, Ref, Vue } from "vue-property-decorator";
import Repeater from "@/components/forms/partials/Repeater.vue";
import { scrollToElement } from "@/services/UIServices";
import { Keyword, Weapon, Ability } from "@/interfaces/interfaces";
import { vxm } from "@/store/store.vuex";

@UseTranslation("miniscrolls")
@Component({
  components: {
    Repeater,
  },
})
export default class MiniscrollsRepeaterForm extends Vue {
  @Ref("repeater") readonly repeater!: Repeater;
  @Prop(String) readonly formTitle!: string;
  @Prop(String) readonly formClass!: string;
  @Prop(String) readonly repeaterComponent!: string;
  @Prop(Array) readonly repeaterArray!: (Keyword | Weapon | Ability)[];
  @Prop(Object) readonly repeaterItem!: Keyword | Weapon | Ability;

  miniscroll = vxm.miniscrolls.miniscroll;
  miniscrollStore = vxm.miniscrolls;
  msCreator: HTMLElement | null = null;

  get itemComponent(): any {
    const componentPath = this.repeaterComponent;

    return () => import(`${componentPath}`);
  }

  get repeaterItems(): HTMLCollection {
    return this.repeater.$el.children[1].children;
  }

  addForm(): void {
    const itemID = Date.now() + Math.random();

    const item: Keyword | Weapon | Ability = this.repeaterItem;

    item.id = itemID;

    this.miniscrollStore.addItem({
      item: item,
      array: this.repeaterArray,
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
