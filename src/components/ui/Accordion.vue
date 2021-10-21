<template>
  <div class="acc">
    <button
      class="acc__toggler"
      :class="[togglerClass, { active: accordionActive }]"
      @click="toggleAcc"
    >
      <slot name="accToggler"></slot>
      <span class="dropdown-arrow black" :class="{ active: accordionActive }">
        <span></span>
        <span></span>
      </span>
    </button>
    <div
      class="acc__content"
      :class="[contentClass, { active: accordionActive }]"
      ref="accordionContent"
    >
      <slot name="accContent"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";

@Component
export default class Accordion extends Vue {
  @Prop(String) readonly togglerClass!: string;
  @Prop(String) readonly contentClass!: string;
  @Ref("accordionContent") readonly accordionContent!: HTMLElement;

  accordionActive: boolean = false;
  overflowTimeout: number = 0;

  private toggleAcc(): void {
    this.accordionActive = !this.accordionActive;

    if (this.accordionContent.style.maxHeight) {
      this.accordionContent.style.maxHeight = "";
      this.accordionContent.style.overflow = "";
      clearTimeout(this.overflowTimeout);
    } else {
      this.accordionContent.style.maxHeight = `${this.accordionContent.scrollHeight}px`;
      this.overflowTimeout = setTimeout(() => {
        this.accordionContent.style.overflow = "visible";
      }, 300);
    }
  }
}
</script>

<style lang="scss">
.acc {
  &__content {
    overflow: hidden;
    // visibility: hidden;
    // opacity: 0;
    max-height: 0;
    transition: max-height 0.3s, overflow 0.3s 0.2s;
  }
}
</style>
