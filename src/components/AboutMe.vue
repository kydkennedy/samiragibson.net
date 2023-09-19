<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Philly native, dog mom (x3), volunteer skateboard instructor, and I'd
      totally love to see <em>Captain Seven of Nine</em> in a new Star Trek
      Voyager spin-off.<br /><br />
      As a designer with dev experience, I strive to create fun and functional
      designs that feel familiar and wholly new at the same time. I'm
      particularly interested in content interaction, XR technologies, and
      Machine Learning.
      <br /><br />
      I've been a participant at MIT's Reality Hack for the last two years
      &#40;my team were finalists this year&#41;, it's a great place to meet
      other enthusiasts and see XR frameworks and hardware developing in
      realtime while working on passion projects.
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
  margin: 1rem 0;
}

.hello {
  padding: 20px;
}
em {
  color: $mira-lemon;
  //text-decoration: underline dotted;
  //text-underline-offset: 2px;
}

@media (max-width: 768px) {
  p {
    padding: 0 8px !important;
  }
}
</style>
