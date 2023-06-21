<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit
      sodales massa. Phasellus condimentum metus vel ex fringilla mollis.
      Suspendisse potenti. Donec id tortor non massa lobortis mollis. Maecenas
      mi lectus, condimentum vel sem sed, malesuada vestibulum elit.
    </p>
    <a
      href="samira.gibsonCHC@gmail.com"
      target="_blank"
      rel="noopener"
      type="email"
      >Drop a line!
    </a>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/globalStyles.scss";
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
  padding: 0 15px;
}
p {
  padding: 0 15px;
}
/*#gradient-text {
    background-color: #f3ec78;
    background-image: linear-gradient(
      to top,
      #ff9a9e 0%,
      #fecfef 99%,
      #fecfef 100%
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}*/
.hello {
  padding: 20px;
}
h2 {
  font-size: 2.5rem;
  font-family: $primary-font;
  font-weight: $bold;
}
</style>
