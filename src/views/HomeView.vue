<template>
  <div class="home">
    <!--  <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld
      msg="
      I’m Mira, Philly based designer, artist & developer."
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/globalStyles.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
