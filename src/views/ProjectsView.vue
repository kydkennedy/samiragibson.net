<template>
  <div class="project">
    <ProjectComponent
      msg="
      Projects"
    />
    <ProjectCard
      imgUrl="../assets/logo.png"
      title="Planned Philly"
      desc="An interactive map of Philadelphia’s development projects that were never finished."
    />
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
}
</style>
