<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <a href="#" target="_blank" rel="noopener">Uploading shortly...</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
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
</style>
