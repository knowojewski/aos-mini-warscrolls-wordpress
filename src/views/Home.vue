<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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
  fetchFromWP(): void {
    fetch("http://aos-miniwarscrolls.localhost/wp-json/wp/v2/posts/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  mounted(): void {
    this.fetchFromWP();
    console.log(process.env);
  }
}
</script>
