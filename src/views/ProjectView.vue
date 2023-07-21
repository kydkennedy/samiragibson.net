<template>
  <div>{{ msg }}</div>
</template>
<script>
export default {
  name: "ProjectView",
  props: {
    msg: String,
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
