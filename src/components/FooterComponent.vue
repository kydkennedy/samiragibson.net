<template>
  <div>
    <footer>
      <p>copyright 2023 <b>@</b> SamiraGibson.net</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer-Component",
};
</script>

<style scoped lang="scss">
@import "@/assets/globalStyles.scss";

* {
  box-sizing: border-box;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 2rem;
  background: rgb($mira-lemon, $alpha: 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-top: 5px solid rgb(0, 0, 0);
  border-bottom: 5px solid rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $primary-font;
  font-weight: $regular;
  color: $primary;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
  z-index: 0;
}
</style>
