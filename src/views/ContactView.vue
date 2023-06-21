<template>
  <div class="contact">
    <ContactForm
      msg="
      Wanna chat or make something cool? Let’s get in touch!"
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
