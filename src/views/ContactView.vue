<template>
  <div class="contact">
    <ContactForm
      msg="
      Let's Chat!"
    />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "ContactView",
  props: {
    msg: String,
  },
  components: {
    ContactForm,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalStyles.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
