<template>
  <div class="hello">
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
            >BarCamp 14
          </a>
        </li>
      </div>
      <div class="link-holder">
        <li class="content-links">
          <a
            href="https://www.inquirer.com/news/philadelphia/inq2/philadelphia-development-projects-stadiums-parks-venues-failed-20221130.html"
            target="_blank"
            rel="noopener"
            >Planned Philly
          </a>
        </li>
      </div>
      <div class="link-holder">
        <li class="content-links">
          <a
            href="https://www.figma.com/proto/qLaRbVzbAd3AAq2uPUuz2T/Interactive-Article-Planned-Philadelphia-CS?type=design&node-id=3-12&t=IHziU6jErZNT9rjB-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A12&mode=design"
            target="_blank"
            rel="noopener"
            >Inq C.S.
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
h3 {
  margin: 20px 0 0;
  padding: 0 20px;
}
ul {
  list-style-type: none;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $primary;
  text-decoration: none;
  margin-top: 2%;
}
p {
  padding: 0 15px;
  margin: 1rem 0;
}
.hello {
  padding: 20px;
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
  padding: 0px 0 20px 0;
}

@media (max-width: 768px) {
  p {
    padding: 0 5px;
  }
  .link-holder {
    width: 100%;
    text-align: center;
    margin-bottom: 3%;
    margin-left: 0 !important;
    height: 50px;
  }

  .link-holder li {
    padding-bottom: 2px;
  }

  h3 {
    text-align: center;
  }

  ul {
    flex-direction: column;
  }
  .hello {
    transform: translate(-27%, -54%) !important;
    max-height: 85vh;
  }
}
</style>
