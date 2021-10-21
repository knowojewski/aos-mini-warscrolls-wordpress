<template>
  <div class="ms-creator__form">
    <h5 class="ms-creator__form-title">{{ t("keywords-form-title") }}</h5>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/decorators";
import { Component, Vue } from "vue-property-decorator";

@UseTranslation("miniscrolls")
@Component
export default class MiniscrollsKeywordsForm extends Vue {}
</script>

<style lang="scss"></style>
