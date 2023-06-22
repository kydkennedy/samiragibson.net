<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
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
  height: 100%;
  width: 100;
}
h3 {
  margin: 0px 0 0;
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
