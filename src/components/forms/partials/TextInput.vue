<template>
  <div class="form-wrapper" :class="inputStyle">
    <label v-if="showLabel" class="form-label">{{ inputLabel }}:</label>
    <input
      type="text"
      :placeholder="inputLabel"
      v-model="syncedInputValue"
      class="text-input"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";

@Component
export default class TextInput extends Vue {
  @Prop(String) readonly inputLabel?: string;
  @Prop({ default: "primary" }) readonly inputStyle?: string;
  @PropSync("inputValue", { type: String }) syncedInputValue!: string | null;
  @Prop({ default: true }) readonly showLabel?: boolean;
}
</script>

<style lang="scss"></style>
