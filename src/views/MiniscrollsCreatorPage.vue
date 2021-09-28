<template>
  <div class="miniscrolls-view">
    <div class="container">
      <div class="row">
        <PageHeader :page-title="pageTitle" :page-intro="pageIntro" />
      </div>
    </div>
    <div class="container smaller-gutter">
      <div class="row">
        <Accordion accordionTitle="accordion1-title" :activeOnLoad="false">
          <template v-slot:accordionContent>
            <MiniscrollsCreator />
          </template>
        </Accordion>
        <Accordion accordionTitle="accordion2-title" :activeOnLoad="true">
          <template v-slot:accordionContent>
            <div class="your-ms">Test</div>
          </template>
        </Accordion>
      </div>
    </div>
    <!-- <div style="height: 100vh"></div>
    <div style="height: 100vh"></div>
    <div style="height: 100vh"></div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeader from "@/components/partials/PageHeader.vue";
import Accordion from "@/components/ui/Accordion.vue";
import MiniscrollsCreator from "@/components/partials/MiniscrollCreator.vue";
import { UseTranslation } from "@/decorators";

@UseTranslation("miniscrolls")
@Component({
  components: {
    PageHeader,
    Accordion,
    MiniscrollsCreator,
  },
})
export default class MiniscrollsCreatorPage extends Vue {
  pageTitle: string = "title";
  pageIntro: string = "page-intro";
}
</script>

<style lang="scss">
.miniscrolls {
  background-color: #fff;
  padding: 16px 0;
  // max-height: 600px;
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
