<template>
  <div class="projects">
    <h1>Projects</h1>
    <p>
      Currently volunteering @ BarCamp Philly, Eastern Service Workers
      Association, and RWTH as a web designer, dev, and skateboard instructor.
      You can find links to some of my recent work below.
    </p>
    <ul class="links-list">
      <div class="link-holder">
        <li class="content-links">
          <a
            href="https://2023.barcampphilly.org/"
            target="_blank"
            rel="noopener"
            >BarCamp Philly
          </a>
        </li>
      </div>
      <div class="link-holder">
        <li class="content-links">
          <a
            href="https://www.inquirer.com/news/philadelphia/inq2/philadelphia-development-projects-stadiums-parks-venues-failed-20221130.html"
            target="_blank"
            rel="noopener"
            >The Philly We Were Promised
          </a>
        </li>
      </div>
      <div class="link-holder">
        <li class="content-links">
          <a
            href="https://www.figma.com/proto/qLaRbVzbAd3AAq2uPUuz2T/Interactive-Article-Planned-Philadelphia-CS?type=design&node-id=3-12&t=IHziU6jErZNT9rjB-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A12&mode=design"
            target="_blank"
            rel="noopener"
            >Inquirer Case Study
          </a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
//import ProjectCard from "@/components/ProjectCard.vue";
export default {
  name: "ProjectComponent",
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
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
li {
  display: inline-block;
  padding: 0 20px;
}
a {
  color: $primary;
  text-decoration: none;
  font-size: 0.9rem;
}
p {
  padding: 0 1.3rem;
  margin: 1rem 0;
}
h1 {
  padding: 0 20px;
}

.projects {
  position: absolute;
  top: 40%;
  left: 51%;
  transform: translate(-30%, -25%); //-55% when adding second card
  padding: 5px;
  border-radius: 5px;
  color: #000000;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 5px;
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
  padding-bottom: 1.3rem;
}
.content-links {
  font-family: $primary-font;
  font-weight: $regular;
  color: $primary;
  height: 2rem;
  margin: 2%;
  padding-top: 1rem;
  /*& :hover {

  }*/
}

.link-holder {
  background: $bg-color;
  border-right: solid 0.24rem $primary;
  border-bottom: solid 0.25rem $primary;
  border-radius: 15px;
  text-align: center;
  width: 25%;
  margin-left: 3%;
  padding: 2px 0 12px 0;
}
//moves each project card addded to this component down on the page so they don't overlap
@media (max-width: 768px) {
  p {
    padding: 0 1.3rem !important;
  }
  .link-holder {
    width: 100%;
    text-align: center;
    margin-bottom: 3%;
    margin-left: 0 !important;
  }
  h3 {
    text-align: center;
  }

  ul {
    flex-direction: column-reverse;
  }
}
</style>
