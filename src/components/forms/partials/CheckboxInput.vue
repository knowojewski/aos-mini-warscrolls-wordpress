<template>
  <div class="checkbox-wrapper">
    <input type="checkbox" id="checkbox" v-model="syncedCheckboxValue" />
    <span class="checkbox"></span>
    <label class="checkbox-label" for="checkbox">{{ checkboxLabel }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";

@Component
export default class CheckboxInput extends Vue {
  @Prop(String) readonly checkboxLabel!: string;
  @PropSync("checkboxValue", { type: Boolean }) syncedCheckboxValue!: boolean;
}
</script>

<style lang="scss"></style>
