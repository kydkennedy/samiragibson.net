<template>
  <div class="projects">
    <h1>{{ msg }}</h1>
    <p class="intro">
      While I'm looking to do more XR design, you can find a few projects I've
      worked on recently.
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/globalStyles.scss";
h3 {
  margin: 20px 0 0;
  padding: 0 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $tertiary-color;
}
p {
  padding: 0 15px;
}

.projects {
  position: absolute;
  top: 40%;
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
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 80vw;
  max-height: 75vh;
  text-align: left;
  overflow: hidden;
}
@media (max-width: 768px) {
  p {
    padding: 0 8px !important;
  }
}
</style>
