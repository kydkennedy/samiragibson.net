<template>
  <div class="hello">
    <h1 id="title">{{ msg }}</h1>
    <form @submit.prevent="submitForm" v-if="!formSubmitted" data-netlify>
      <span>Full Name</span><br />
      <input v-model="name" type="text" placeholder="Enter your name" /><br />
      <span>Email</span><br />
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
      /><br />
      <span>Message</span><br />
      <textarea v-model="message" type="text" placeholder=""></textarea><br />
      <input class="submit" type="submit" value="Send" />
    </form>
    <div v-if="formSubmitted">
      <h3 class="fix-margin">Thanks! I'll be in touch shortly!</h3>
      <h4 class="fix-margin">
        You can email me directly at:&nbsp;
        <a href="mailto:samira.gibsonCHC@gmail.com">
          samira.gibsonCHC@gmail.com
        </a>
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      formSubmitted: false,
    };
  },
  methods: {
    submitForm: function () {
      this.formSubmitted = true;
    },
  },
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/globalStyles.scss";
form {
  padding: 10px;
  width: max-content;
  margin-left: 3%;
  margin-top: 10px;
}

input {
  padding: 4px 8px;
  margin: 4px;
  border-bottom: 5px solid rgb(0, 0, 0);
  border-right: 3px solid rgb(0, 0, 0);
  border-top: 2px solid rgb(0, 0, 0);
  border-left: 3px solid rgb(0, 0, 0);
  border-radius: 8px;
}

span {
  font-size: 18px;
  margin: 4px;
  font-weight: 500;
}

.hello {
  padding: 20px;
}

.submit {
  font-size: 15px;
  color: $primary;
  background: $bg-color;
  padding: 6px 12px;
  border: none;
  margin-top: 8px;
  cursor: pointer;
  width: 31vw;
  margin-bottom: 5%;
  font-family: $primary-font;
  font-weight: $regular;
  background: $bg-color;
  border-right: solid 0.24rem $primary;
  border-bottom: solid 0.25rem $primary;
  border-radius: 8px;
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

h4 {
  padding-left: 10px;
  margin-left: 3%;
}

textarea {
  width: 30vw !important;
  height: 10vh !important;
  border-radius: 20px;
  border-bottom: 12px solid rgb(0, 0, 0);
  border-right: 9px solid rgb(0, 0, 0);
  border-top: 3px solid rgb(0, 0, 0);
  border-left: 6px solid rgb(0, 0, 0);
}

.fix-margin {
  margin-top: -10px;
  max-width: 50vw;
  margin-left: 3%;
}

@media (max-width: 768px) {
  input {
    width: 25vw !important;
  }
  .submit {
    width: 33vw !important;
  }
  p {
    height: 2% !important;
  }
  h4 {
    font-size: 1rem;
  }
  a {
    font-size: 0.75rem !important;
  }
  .hello {
    transform: translate(-27%, -54%) !important;
    max-height: 85vh;
    width: 62%;
  }
}
</style>
