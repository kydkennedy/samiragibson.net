<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p>
        I’m passionate about creating beautiful, functional and intuitive
        digital experiences. Currently working as a freelance UX/UI designer |
        developer.I’m always looking for new opportunities to collaborate on
        exciting projects.
      </p>
      <ul class="links-list">
        <div class="link-holder">
          <li class="content-links">
            <a
              href="https://www.dropbox.com/s/lfjv1hnzkhfi5ws/samira_gibson_2023-compressed.pdf?dl=0"
              target="_blank"
              rel="noopener"
              >Resume
            </a>
          </li>
        </div>
        <div class="link-holder">
          <li class="content-links">
            <a
              href="https://www.linkedin.com/in/samira-gibson-02429436/"
              target="_blank"
              rel="noopener"
              >LinkedIn
            </a>
          </li>
        </div>
        <div class="link-holder">
          <li class="content-links">
            <a
              href="https://github.com/kydkennedy"
              target="_blank"
              rel="noopener"
              >GitHub
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
    flex-direction: column-reverse;
  }
  .hello {
    transform: translate(-27%, -54%) !important;
    max-height: 85vh;
  }
}
</style>
