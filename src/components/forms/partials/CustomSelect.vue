<template>
  <div class="form-field select" :class="inputStyle">
    <label v-if="showLabel" class="form-field__label select__label"
      >{{ selectLabel }}:</label
    >
    <div ref="inputWrapper" class="select__input-wrapper">
      <select class="select__hidden" v-model="syncedSelectValue"></select>
      <div
        class="text-input custom-select"
        tabindex="0"
        @click="toggleDropdown"
      >
        <span v-if="!syncedSelectValue" class="select__placeholder">{{
          selectLabel
        }}</span>
        <span v-else-if="syncedSelectValue" class="select__value">{{
          syncedSelectValue
        }}</span>
      </div>
      <span
        class="dropdown-arrow"
        :class="{ active: dropdownActive }"
        @click="toggleDropdown"
      >
        <span></span>
        <span></span>
      </span>
      <ul
        v-if="selectOptions && selectOptions.length > 0"
        v-show="dropdownActive"
        class="select__dropdown"
      >
        <li tabindex="-1" @click="setValue(null)">-</li>
        <li
          v-for="(option, index) in selectOptions"
          :key="`${index} - ${option}`"
          tabindex="-1"
          @click="setValue(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Ref, Vue } from "vue-property-decorator";

@Component
export default class CustomSelect extends Vue {
  @Prop(String) readonly selectLabel?: string;
  @Prop({ default: "primary" }) readonly inputStyle?: string;
  @PropSync("selectValue", { type: String }) syncedSelectValue!:
    | string
    | number;
  @Prop(Array) readonly selectOptions?: string[] | undefined;
  @Prop({ default: true }) readonly showLabel?: boolean;
  @Ref("inputWrapper") readonly inputWrapper!: HTMLElement;

  dropdownActive: boolean = false;

  toggleDropdown(): void {
    this.dropdownActive = !this.dropdownActive;

    if (this.dropdownActive) {
      window.addEventListener("click", this.closeIfOutside);
    } else {
      window.removeEventListener("click", this.closeIfOutside);
    }
  }

  setValue(value: string | number): void {
    this.syncedSelectValue = value;
    this.toggleDropdown();
  }

  closeIfOutside(e: Event): void {
    const target = e.target as HTMLElement;

    if (
      !target?.closest(".select__input-wrapper") ||
      target?.closest(".select__input-wrapper") !== this.inputWrapper
    ) {
      this.toggleDropdown();
    }
  }
}
</script>

<style lang="scss">
.select {
  &__hidden {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  &__placeholder {
    font-style: italic;
    color: $dark-gray3;
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
  }

  &__value {
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
    font-size: 14px;
  }

  .dropdown-arrow {
    opacity: 1;
  }
}

.custom-select {
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    width: 24px;
    height: 100%;
    position: absolute;
    background-color: $white;
    right: 0;
    top: 0;
  }
}
</style>
