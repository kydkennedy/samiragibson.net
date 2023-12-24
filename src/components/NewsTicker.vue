<template>
  <div class="ticker-wrap">
    <div class="ticker">
      <div class="ticker__item">
        {{ item1 }}
        <img class="ticker_icon" />
        <!--<hr class="ticker_hr" />-->
      </div>

      <div class="ticker__item">
        {{ item2 }}
        <img class="ticker_icon" src="@/assets/vulcan-hand.png" />
        <!--<hr class="ticker_hr" />-->
      </div>

      <div class="ticker__item">
        {{ item3 }}
        <!--<img class="ticker_icon" src="@/assets/wedding-ring-alt.png" />-->
      </div>
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
    transform: translate3d(-100%, 0, 0);
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
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  position: relative;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 2rem;
  padding-left: 100%;
  box-sizing: content-box;
  background: rgb($mira-lemon, $alpha: 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-top: 5px solid rgb(0, 0, 0);
  border-bottom: 5px solid rgb(0, 0, 0);

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
      color: $primary;
      font-family: $primary-font;
      font-weight: $regular;
    }
  }
}
.ticker_icon {
  height: 1.3rem;
  vertical-align: middle;
  margin-left: 0.5rem;
  padding-bottom: 0.2rem;
}

/*.ticker_hr {
  border: 1px solid rgba($primary, $alpha: 1);
  height: 2px;
  width: 2px;
  align-self: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
}*/

body {
  padding-bottom: 5rem;
}
h1,
h2,
p {
  padding: 0 5%;
}
</style>
