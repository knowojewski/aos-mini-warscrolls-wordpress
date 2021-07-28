<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    {{ posts }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  posts: any = [];

  fetchFromWP(): void {
    fetch(
      process.env.VUE_APP_API_URL +
        process.env.VUE_APP_CUSTOM_API_URL +
        "posts/"
    )
      .then((response) => response.json())
      .then((data) => (this.posts = data));
  }

  mounted(): void {
    this.fetchFromWP();
    console.log(process.env);
  }
}
</script>
