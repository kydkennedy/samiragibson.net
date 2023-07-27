<template>
  <div class="project">
    <div>
      <ProjectComponent />
    </div>
    <div id="project-one">
      <ProjectCard
        imageSrc="https://via.placeholder.com/100"
        title="The Philly We Were Promised"
        desc="An interactive map view showing how Philadelphia could've looked if the city had followed through on its plans to revitalize in the early 2000s."
      />
    </div>
    <div class="project-two">
      <ProjcetCard
        imageSrc="https://via.placeholder.com/100"
        title="Philly Icons We Loved in 2022"
        desc="A Philadelphia Inquirer interactive poll of the city's favorite icons, from Quinta Brunson to Gritty. Who's your fave of 2022? "
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
