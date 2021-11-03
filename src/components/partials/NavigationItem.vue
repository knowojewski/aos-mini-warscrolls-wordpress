<template>
  <li class="main-nav__link-item">
    <router-link
      @click.native="$emit('link-clicked')"
      class="btn-full"
      :to="getLinkProps.linkURL"
    >
      <img
        class="btn-full__bg"
        src="../../assets/images/navigation/link-bg.png"
        alt="Link background"
      />
      <img
        class="link-icon"
        src="../../assets/images/navigation/nav-icon.png"
        alt="Skull"
      />
      <span>{{ t(getLinkProps.linkText) }}</span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { LinkParams } from "@/interfaces/interfaces";
import { Component, Prop, Vue } from "vue-property-decorator";
import { UseTranslation } from "@/utils/decorators";

@UseTranslation("navigation")
@Component
export default class NavigationItem extends Vue {
  @Prop(Object) readonly linkProps!: LinkParams;

  get getLinkProps(): LinkParams {
    return this.linkProps;
  }
}
</script>

<style lang="scss">
.main-nav__link-item {
  position: relative;
  margin-bottom: 12px;
  span {
    font-size: 18px;
    font-weight: 500;
  }

  .btn-full {
    &:hover {
      .link-icon {
        opacity: 0.4;
      }
    }

    &.router-link-active {
      color: $light-red;

      .link-icon {
        opacity: 1;
      }
    }
  }

  .link-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    max-width: 28px;
    left: -40px;
    opacity: 0;
    transition: opacity 0.3s;
  }
}
</style>
