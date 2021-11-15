<template>
  <div class="miniscrolls-view">
    <div class="container">
      <div class="row">
        <PageHeader :page-title="pageTitle" :page-intro="pageIntro" />
      </div>
    </div>
    <div class="container smaller-gutter">
      <div class="row">
        <BigAccordion accordionTitle="accordion1-title" :activeOnLoad="false">
          <template v-slot:accordionContent>
            <MiniscrollsCreator />
          </template>
        </BigAccordion>
        <BigAccordion
          ref="secondAccordion"
          accordionTitle="accordion2-title"
          :activeOnLoad="true"
        >
          <template v-slot:accordionContent>
            <div class="your-ms">Test</div>
          </template>
        </BigAccordion>
      </div>
    </div>
    <div style="height: 100vh"></div>
    <div style="height: 100vh"></div>
    <div style="height: 100vh"></div>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import PageHeader from "@/components/partials/PageHeader.vue";
import BigAccordion from "@/components/ui/BigAccordion.vue";
import MiniscrollsCreator from "@/components/partials/MiniscrollCreator.vue";
import { UseTranslation } from "@/utils/decorators";
import { EventBus } from "@/utils/event-bus";

@UseTranslation("miniscrolls")
@Component({
  components: {
    PageHeader,
    BigAccordion,
    MiniscrollsCreator,
  },
})
export default class MiniscrollsCreatorPage extends Vue {
  @Ref("secondAccordion") readonly secondAccordion!: BigAccordion;

  pageTitle: string = "title";
  pageIntro: string = "page-intro";

  private miniscrollCreateHandler(): void {
    console.log(this.secondAccordion);
    this.secondAccordion.scrollToAccordion();
  }

  mounted(): void {
    EventBus.$on("createMiniscroll", this.miniscrollCreateHandler);
  }

  destroyed(): void {
    EventBus.$off("createMiniscroll", this.miniscrollCreateHandler);
  }
}
</script>

<style lang="scss">
.miniscrolls {
  background-color: #fff;
  padding: 16px 0;
  overflow-y: auto;
}

.miniscroll {
  width: 342px;
  height: 240px;
  margin: 0 auto 8px auto;
  border: 1px solid $black;
  transform: scale(0.98);
}
</style>
