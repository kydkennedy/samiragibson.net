<template>
  <div class="projects">
    <ProjectComponent />
    <!--<div id="project-one">
      <ProjectCard
        class="project-card this"
        imageSrc="https://via.placeholder.com/100"
        title="The Philly We Were Promised"
        desc="An interactive map view showing how Philadelphia could've looked if the city had followed through on its plans to revitalize in the early 2000s."
      />
    </div>
    <div id="project-two">
      <ProjcetCard
        class="project-card that"
        imageSrc="https://via.placeholder.com/100"
        title="Philly Icons We Loved in 2022"
        desc="A Philadelphia Inquirer interactive poll of the city's favorite icons, from Quinta Brunson to Gritty. Who's your fave of 2022? "
      />
    </div>-->
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
    // ProjectCard: ProjectCard,
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
</style>
