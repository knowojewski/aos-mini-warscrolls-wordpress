<template>
  <div class="big-acc" :class="{ active: accordionActive }" ref="accordion">
    <div class="big-acc__header">
      <button @click="toggleAccordion" class="big-acc__toggler">
        <h4 class="big-acc__title">{{ t(accordionTitle) }}</h4>
        <span class="dropdown-arrow white" :class="{ active: accordionActive }">
          <span></span>
          <span></span>
        </span>
      </button>
      <div class="big-acc__header-bg">
        <img
          src="../../assets/images/your-scrolls/top-bg.png"
          alt="Top Background"
        />
      </div>
    </div>
    <div ref="accordionContent" class="big-acc__content">
      <slot name="accordionContent"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/utils/decorators";
import { Vue, Component, Prop, Ref } from "vue-property-decorator";
import { scrollToElement } from "@/services/UIServices";

@UseTranslation("miniscrolls")
@Component
export default class BigAccordion extends Vue {
  @Prop(String) accordionTitle!: string;
  @Prop({ default: false }) activeOnLoad!: boolean;
  @Ref("accordionContent") readonly accordionContent!: HTMLElement;
  @Ref("accordion") readonly accordion!: HTMLElement;

  accordionActive: boolean = false;

  toggleAccordion(scroll: boolean = true): void {
    this.accordionActive = !this.accordionActive;

    if (this.accordionContent.style.maxHeight) {
      this.accordionContent.style.maxHeight = "";
    } else {
      this.accordionContent.style.maxHeight = `${this.accordionContent.scrollHeight}px`;

      if (scroll) {
        scrollToElement(
          window as unknown as HTMLElement,
          this.accordion,
          65,
          300
        );
      }
    }
  }

  scrollToAccordion(): void {
    scrollToElement(window as unknown as HTMLElement, this.accordion, 65, 300);
  }

  mounted(): void {
    if (this.activeOnLoad) {
      this.toggleAccordion(false);
    }
  }
}
</script>

<style lang="scss">
.big-acc {
  width: 100%;
  margin-bottom: 20px;

  &__header {
    width: 100%;
    height: 50px;
    position: relative;
  }

  &__header-bg {
    position: absolute;
    width: calc(100% + 4px);
    height: 64px;
    top: -4px;
    left: -2px;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__toggler {
    position: relative;
    color: $white;
    @include display-flex(row, space-between, center, nowrap);
    width: 100%;
    height: 100%;
    padding: 4px 8px;
    z-index: 3;
    cursor: pointer;
  }

  &__title {
    text-transform: uppercase;
    font-weight: 400;
  }

  &__content {
    max-height: 0;
    padding-top: 0;
    background-color: $white;
    overflow: hidden;
    border: 1px solid $black;
    transition: max-height 0.3s, padding 0.3s;
  }
}
</style>
