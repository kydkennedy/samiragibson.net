<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Philly native, dog mom (x3), volunteer skateboard instructor, and I'd
      totally love to see <em>Capt. Seven of Nine</em> in a new Star Trek show.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
p {
  padding: 0 15px;
}

.hello {
  padding: 20px;
}
em {
  color: $mira-lemon;
  text-decoration: underline dotted;
  text-underline-offset: 2px;
}
</style>
