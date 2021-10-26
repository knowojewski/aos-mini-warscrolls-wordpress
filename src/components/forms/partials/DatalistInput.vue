<template>
  <div class="form-field datalist" :class="inputStyle">
    <label v-if="showLabel" class="form-field__label datalist__label"
      >{{ datalistLabel }}:</label
    >
    <div ref="inputWrapper" class="datalist__input-wrapper">
      <input
        class="text-input datalist__input"
        type="text"
        :placeholder="datalistLabel"
        v-model="syncedDatalistValue"
        tabindex="0"
        @click="toggleDropdown"
        @input="handleInput"
      />
      <span class="dropdown-arrow" :class="{ active: dropdownActive }">
        <span></span>
        <span></span>
      </span>
      <ul
        v-if="datalistOptions.length > 0"
        v-show="dropdownActive"
        class="datalist__dropdown"
      >
        <li
          v-for="(option, index) in getFilteredOptions"
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
import {
  Component,
  Prop,
  PropSync,
  Ref,
  Vue,
  Watch,
} from "vue-property-decorator";

@Component
export default class DatalistInput extends Vue {
  @Prop(String) readonly datalistLabel?: string;
  @Prop({ default: "primary" }) readonly inputStyle?: string;
  @PropSync("datalistValue", { type: String }) syncedDatalistValue!:
    | string
    | number;
  @Prop(Array) readonly datalistOptions?: string[] | undefined;
  @Prop({ default: true }) readonly showLabel?: boolean;
  @Ref("inputWrapper") readonly inputWrapper!: HTMLElement;

  dropdownActive: boolean = false;
  filteredOptions: string[] | undefined = [];

  @Watch("syncedDatalistValue")
  onChange(value: string | null): void {
    this.filterOptions(value);
  }

  get getDatalistOptions(): string[] | undefined {
    return this.datalistOptions;
  }

  get getFilteredOptions(): string[] | undefined {
    return this.filteredOptions;
  }

  toggleDropdown(): void {
    this.dropdownActive = !this.dropdownActive;

    if (this.dropdownActive) {
      document.addEventListener("click", this.closeIfOutside);
    } else {
      document.removeEventListener("click", this.closeIfOutside);
    }
  }

  closeIfOutside(e: Event): void {
    const target = e.target as HTMLElement;

    if (
      !target?.closest(".datalist__input-wrapper") ||
      target?.closest(".datalist__input-wrapper") !== this.inputWrapper
    ) {
      this.toggleDropdown();
    }
  }

  setValue(value: string | number): void {
    this.syncedDatalistValue = value;
    this.toggleDropdown();
  }

  handleInput(): void {
    if (!this.dropdownActive) {
      this.toggleDropdown();
    }
  }

  filterOptions(value: string | null): void {
    if (value) {
      this.filteredOptions = this.datalistOptions?.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      this.filteredOptions = this.datalistOptions;
    }
  }

  mounted(): void {
    this.filteredOptions = this.datalistOptions;
  }
}
</script>

<style lang="scss">
.datalist,
.select {
  &__input-wrapper {
    height: 100%;
    position: relative;
    flex-grow: 1;
    background-color: $white;
  }

  .dropdown-arrow {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s;

    span {
      background-color: $gray1;
    }

    &.active {
      span {
        background-color: $black;
      }
    }
  }

  &__input {
    width: 100%;
    position: relative;
    z-index: 1;
    background-color: transparent;

    &:hover,
    &:focus {
      ~ .dropdown-arrow {
        opacity: 1;
      }
    }
  }

  &__dropdown {
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    min-width: 100%;
    width: max-content;
    max-height: 150px;
    overflow-y: auto;
    border-bottom: 1px solid $gray1;
    border-top: 1px solid $black;
    z-index: 10;

    li {
      padding: 4px 8px;
      cursor: pointer;
      background-color: $gray6;
      color: $black;
      border-left: 1px solid $gray1;
      border-right: 1px solid $gray1;
      border-bottom: 1px solid $gray1;
      transition: background 0.3s, color 0.3s, border-color 0.3s;

      &:last-of-type {
        border-bottom: 0;
      }

      &:hover,
      &:focus {
        background-color: $black;
        color: $white;
        border-color: $black;
      }
    }
  }
}

.form-wrapper.secondary {
  .datalist__input-wrapper,
  .select__input-wrapper {
    background-color: $gray4;
  }
}
</style>
