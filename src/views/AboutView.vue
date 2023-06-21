<template>
  <div class="about">
    <!--  <img alt="Vue logo" src="../assets/logo.png" /> -->
    <AboutMe
      msg="
      About Me"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe.vue";
//import ModelBackground from "@/components/ModelBackground.vue";
export default {
  name: "AboutView",
  components: {
    AboutMe,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalStyles.scss";
</style>
