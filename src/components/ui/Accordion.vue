<template>
  <div class="accordion" :class="{ active: accordionActive }">
    <div class="accordion__header">
      <button @click="toggleAccordion" class="accordion__toggler">
        <h4 class="accordion__title">{{ accordionTitle }}</h4>
        <span class="accordion__arrow">
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
import { Vue, Component, Prop, Ref } from "vue-property-decorator";

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
    } else {
      this.accordionContent.style.maxHeight =
        this.accordionContent.scrollHeight + "px";
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

  &__arrow {
    display: block;
    width: 18px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 50%;
      height: 2px;
      background-color: $white;
      transition: transform 0.5s;

      &:nth-child(1) {
        transform: translateX(2px) rotate(45deg);
      }
      &:nth-child(2) {
        transform: translateX(-2px) rotate(-45deg);
      }
    }
  }

  &__content {
    max-height: 0;
    overflow: hidden;
    border: 1px solid $black;
    transition: max-height 0.3s;
  }
}

.accordion.active {
  .accordion__arrow {
    span {
      &:nth-child(1) {
        transform: translateX(2px) rotate(-45deg);
      }
      &:nth-child(2) {
        transform: translateX(-2px) rotate(45deg);
      }
    }
  }
}
</style>
