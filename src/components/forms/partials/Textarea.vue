<template>
  <div class="form-field" :class="inputStyle">
    <label v-if="showLabel" class="form-field__label">{{ inputLabel }}:</label>
    <textarea
      :placeholder="inputLabel"
      v-model="syncedInputValue"
      class="text-input textarea"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";

@Component
export default class Textarea extends Vue {
  @Prop(String) readonly inputLabel?: string;
  @Prop({ default: "primary" }) readonly inputStyle?: string;
  @PropSync("inputValue", { type: String }) syncedInputValue!: string | null;
  @Prop({ default: true }) readonly showLabel?: boolean;
}
</script>

<style lang="scss"></style>
