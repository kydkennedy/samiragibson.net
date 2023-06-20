<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="home">
    <!--  <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
//import ModelBackground from "@/components/ModelBackground.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    //ModelBackground,
  },
};
</script>
