<template>
  <div class="project">
    <div>
      <ProjectComponent />
    </div>
    <div>
      <ProjectCard
        imageSrc="../assets/"
        title="The Philly We Were Promised"
        desc="A VR experience that takes you back to the 1876 Centennial Exhibition"
      />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ProjectComponent from "@/components/ProjectComponent.vue";
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  name: "ProjectsView",
  components: {
    ProjectComponent: ProjectComponent,
    ProjectCard: ProjectCard,
  },
  props: {
    msg: String,
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

.project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
}

.card {
  position: absolute;
  margin-top: 3rem;
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
  margin: 5px 0;
}

.card-image {
  height: 1rem;
  vertical-align: middle;
  margin-right: 0.5rem;
  padding-bottom: 0.2rem;
  padding: 5px;
  display: inline-block;
}
body {
  text-align: left;
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
  padding: 1.2rem 3rem;
}
h1 {
  padding: 1.5rem 15px 0rem 3rem;
}
</style>
