<template>
  <div class="ticker-wrap">
    <div class="ticker">
      <div class="ticker__item">{{ item1 }}</div>
      <div class="ticker__item">{{ item2 }}</div>
      <div class="ticker__item">{{ item3 }}</div>
      <div class="ticker__item">{{ item4 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsTicker",
  props: {
    item1: String,
    item2: String,
    item3: String,
    item4: String,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/globalStyles.scss";
* {
  box-sizing: border-box;
  $duration: 30s;
}

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
}

.ticker-wrap {
  position: relative;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 2rem;
  background-color: rgba($secondary, 0.9);
  padding-left: 100%;
  box-sizing: content-box;
  background: rgba(15, 15, 15, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  .ticker {
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: 30s;
    animation-duration: 30s;

    &__item {
      display: inline-block;
      padding: 0 2rem;
      font-size: 1rem;
      color: white;
    }
  }
}

body {
  padding-bottom: 5rem;
  width: 100%;
}
h1,
h2,
p {
  padding: 0 5%;
}
</style>
