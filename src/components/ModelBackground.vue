<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <canvas></canvas>
</template>

<script>
export default {
  name: "ModelBackground",
};
</script>

<style scoped lang="scss">
canvas {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-attachment: fixed;
  background-image: url("@/assets/gengar_bg.webp");
  background-size: cover;
  position: absolute;
}
</style>
