<template>
  <div class="bg-image">
    <NewsTicker item1="Redesign in progress..." item2="Please mind the gap." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div id="main">
      <nav>
        <router-link to="/" class="navi">01. Home</router-link>
        <hr />
        <router-link to="/about" class="navi">02. About</router-link>
        <hr />
        <router-link to="/projects" class="navi">03. Projects</router-link>
        <hr />
        <router-link to="/contact" class="navi">04. Contact</router-link>
        <hr />
        <router-link to="/blog" class="navi">05. Blog</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
import NewsTicker from "./components/NewsTicker.vue";
export default {
  name: "App",
  components: {
    NewsTicker,
  },
};
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
  background-image: url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

h1 {
  font-size: 60px;
}

.bg-image {
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  background-attachment: fixed;
}

#main {
  display: flex;
  flex-direction: row;
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
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  transform: translate(40%, 0%);
  position: relative;
  box-sizing: border-box;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
  z-index: 0;
  background: rgba(15, 15, 15, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: $tertiary-color;
      text-decoration: line-through solid 2px
        rgba($color: #000000, $alpha: 0.75);
    }
  }
  hr {
    border: 1px solid rgba($color: #ffffff, $alpha: 0.5);
    height: 2%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
  }
  justify-content: center;
}
.hello {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-35%, -60%);
  padding: 5px;
  border-radius: 5px;
  color: #ffffff;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 5px;
  /* From https://css.glass */
  background: rgba(15, 15, 15, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
