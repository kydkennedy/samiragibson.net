<template>
  <div class="project">
    <ProjectComponent
      msg="
      Projects"
    />
    <div class="card">
      <div class="card-img">
        <img src="@/assets/logo.png" />
        <div class="card-title">
          <h3>The Philly We Were Promised</h3>
        </div>
      </div>
      <div class="card-desc">
        <p>
          A look at sites and attractions planned for the City of Philadelphia,
          but never built.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectComponent from "@/components/ProjectComponent.vue";
//import ProjectCard from "@/components/ProjectCard.vue";
export default {
  name: "ProjectsView",
  components: {
    ProjectComponent: ProjectComponent,
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
}
p {
  padding: 0 15px;
}

.card {
  position: fixed;
  top: 60%;
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
</style>
