<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      I’m passionate about creating beautiful, functional and intuitive digital
      experiences. I’m currently working as a UX/UI designer at a digital agency
      in Philadelphia. I’m also a freelance designer and developer. I’m always
      looking for new opportunities to collaborate on exciting projects.
    </p>
    <h3>Links</h3>
    <ul>
      <li>
        <a
          href="https://www.dropbox.com/s/lfjv1hnzkhfi5ws/samira_gibson_2023-compressed.pdf?dl=0"
          target="_blank"
          rel="noopener"
          >Resume</a
        >
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/samira-gibson-02429436/"
          target="_blank"
          rel="noopener"
          >LinkedIn</a
        >
      </li>
      <li>
        <a href="https://github.com/kydkennedy" target="_blank" rel="noopener"
          >GitHub
        </a>
      </li>
    </ul>
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
}
.hello {
  padding: 20px;
}
</style>
