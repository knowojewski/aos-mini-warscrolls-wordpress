<template>
  <div class="page__header">
    <h1 class="page__title">{{ pageTitle ? t(pageTitle) : "" }}</h1>
    <p class="page__text">{{ pageIntro ? t(pageIntro) : "" }}</p>
  </div>
</template>

<script lang="ts">
import { UseTranslation } from "@/utils/decorators";
import { Component, Prop, Vue } from "vue-property-decorator";

@UseTranslation("miniscrolls")
@Component
export default class PageHeader extends Vue {
  @Prop(String) pageTitle: string | undefined;
  @Prop(String) pageIntro: string | undefined;
}
</script>

<style lang="scss">
.page__header {
  margin-bottom: 48px;
}

.page__title {
  position: relative;
  font-size: 40px;
  font-weight: 400;
  padding-bottom: 16px;
  margin-bottom: 32px;
  @include breakpoint-between($sm, $lg) {
    font-size: 52px;
    padding-bottom: 24px;
    margin-bottom: 36px;
  }
  @include breakpoint-up($lg) {
    font-size: 60px;
    padding-bottom: 28px;
    margin-bottom: 36px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 1px;
    background-color: $black;
  }
}

.page__text {
  max-width: 500px;
  text-align: justify;
  @include breakpoint-up($lg) {
    max-width: 700px;
  }
}
</style>
