<template>
  <div class="card">
    <div>
      <div class="card-image">
        <img :src="imageSrc" alt="Project Image" />
      </div>
      <div class="projects">
        <h3>{{ title }}</h3>
        <p class="desc">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
//import Vue image component
export default {
  name: "ProjectCard",
  props: {
    title: String,
    desc: String,
    imageSrc: {
      type: String,
      default: "https://via.placeholder.com/100",
      required: false,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/globalStyles.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
  margin-top: 20px;
  margin-bottom: 20px;
}

.card {
  position: absolute;
  //margin-top: 3rem;
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
  flex-direction: row;
  grid-template-rows: 2fr 1fr 1fr;
  flex-wrap: wrap;
  max-width: 80vw;
  max-height: 75vh;
  text-align: left;
  overflow: hidden;
  z-index: -1;
  margin: 7rem 0;
}

.card-image {
  vertical-align: middle;
  margin-right: 0.5rem;
  padding-bottom: 0.2rem;
  padding: 5px;
  display: inline-block;
}
img {
  width: 10vw;
  height: 100%;
  padding: 5px;
}
h1 {
  margin-left: 3%;
  margin-bottom: 3%;
}

@media (max-width: 768px) {
  p {
    padding: 0 8px !important;
  }
  h1 {
    font-size: 2rem;
    margin-left: 3%;
    font-family: $primary-font;
    font-weight: $bold;
    margin-bottom: 3%;
  }
  p {
    font-size: 0.7rem;
    line-height: 1.35;
    width: 100%;
  }
}
</style>
