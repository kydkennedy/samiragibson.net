<template>
  <div class="projects">
    <ProjectComponent
      msg="
      Projects"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectComponent from "@/components/ProjectComponent.vue";
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
</style>
