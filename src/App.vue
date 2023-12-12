<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div class="container-main">
    <nav>
      <router-link to="/" class="navi">01. Home</router-link>
      <hr />
      <router-link to="/about" class="navi">02. About</router-link>
      <hr />
      <router-link to="/projects" class="navi">03. Projects</router-link>
      <hr />
      <router-link to="/contact" class="navi">04. Contact</router-link>
      <!--<hr />
      <router-link to="/blog" class="navi">05. Blog</router-link>-->
    </nav>
    <router-view class="page-content" />
  </div>
  <NewsTicker
    item1="Currently enjoying the Neo Brutalist asthetic."
    item2="If you're reading this, ask me about my favorite Star Trek episodes."
    item3="Recently Married!"
  />
  <FooterComponent />
</template>

<script>
import NewsTicker from "./components/NewsTicker.vue";
import FooterComponent from "./components/FooterComponent.vue";
//import Vue from "vue";
//import VueMq from "vue-mq";
export default {
  name: "App",
  components: {
    NewsTicker,
    FooterComponent,
  },
};
/*Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
  },
});*/
</script>

<style lang="scss">
@import "@/assets/globalStyles.scss";

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-color: $bg-color;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/*html {
  position: absolute;
}*/

h1 {
  font-size: 3rem;
  margin-left: 3%;
  font-family: $primary-font;
  font-weight: $bold;
  margin-bottom: 0;
}

p {
  font-family: $primary-font;
  font-weight: $light;
}
.container-main {
  width: 100%;
  height: 100%;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  left: 0;
  right: 0;
}

#main {
  display: block;
  position: absolute;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  transform: translate(40%, 0%);
  position: relative;
  box-sizing: border-box;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
  z-index: 0;
  background: rgb($mira-peach, $alpha: 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-left: 5px solid rgb(0, 0, 0);
  border-right: 5px solid rgb(0, 0, 0);
  height: 100vh;

  a {
    font-family: $primary-font;
    font-weight: $regular;
    color: $primary;
    text-decoration: none;

    &.router-link-exact-active {
      color: $primary;
      text-decoration: line-through solid 2px rgba($tertiary-color, $alpha: 1);
    }
  }
  hr {
    border: 1px solid rgba($primary, $alpha: 1);
    height: 5%;
    width: 2px;
    align-self: center;
    margin: 5px 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
  }
  justify-content: center;
}
.hello {
  position: absolute;
  top: 55%;
  left: 51%;
  transform: translate(-30%, -55%);
  padding: 5px;
  border-radius: 5px;
  color: #000000;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 5px;
  /* glassmorphism background*/
  background: $mira-blue;
  border-radius: 80px;
  border-bottom: 23px solid rgb(0, 0, 0);
  border-right: 15px solid rgb(0, 0, 0);
  border-top: 6px solid rgb(0, 0, 0);
  border-left: 9px solid rgb(0, 0, 0);
  //keep .hello vertically centered
  display: flex;
  //flex-wrap: wrap;
  flex-direction: column;
  max-width: 80vw;
  max-height: 75vh;
  text-align: left;
  overflow: hidden;
}

//keep nav and .hello from overlapping
@media (max-width: 768px) {
  nav {
    transform: translate(0%, 0%);
    max-width: 30%;
    //text-align: center;
  }

  .hello {
    transform: translate(-20%, -50%);
    max-height: 85vh;
  }
  h1 {
    font-size: 2rem;
    margin-left: 3%;
    font-family: $primary-font;
    font-weight: $bold;
    margin-bottom: 0;
  }
  p {
    font-size: 0.7rem;
    line-height: 1.35;
    width: 100%;
  }
}
</style>
