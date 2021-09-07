<template>
  <div class="accordion" :class="{ active: accordionActive }">
    <div class="accordion__header">
      <button @click="toggleAccordion" class="accordion__toggler">
        <h4 class="accordion__title">{{ t(accordionTitle) }}</h4>
        <span class="dropdown-arrow" :class="{ active: accordionActive }">
          <span></span>
          <span></span>
        </span>
      </button>
      <div class="accordion__header-bg">
        <img
          src="../../assets/images/your-scrolls/top-bg.png"
          alt="Top Background"
        />
      </div>
    </div>
    <div ref="accordionContent" class="accordion__content">
      <slot name="accordionContent"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/decorators";
import { Vue, Component, Prop, Ref } from "vue-property-decorator";

@UseTranslation("miniscrolls")
@Component
export default class Accordion extends Vue {
  @Prop(String) accordionTitle!: string;
  @Prop({ default: false }) activeOnLoad!: boolean;
  @Ref("accordionContent") readonly accordionContent!: HTMLElement;

  accordionActive: boolean = false;

  toggleAccordion(): void {
    this.accordionActive = !this.accordionActive;

    if (this.accordionContent.style.maxHeight) {
      this.accordionContent.style.maxHeight = "";
      this.accordionContent.style.paddingTop = "";
    } else {
      this.accordionContent.style.maxHeight = `${
        this.accordionContent.scrollHeight + 10
      }px`;
      this.accordionContent.style.paddingTop = "10px";
    }
  }

  mounted(): void {
    if (this.activeOnLoad) {
      this.toggleAccordion();
    }
  }
}
</script>

<style lang="scss">
.accordion {
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
    z-index: 0;

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
    z-index: 1;
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
