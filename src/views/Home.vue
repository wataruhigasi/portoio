<template>
  <div>
    <top-page id="topPage" style="width: 90%; margin: auto"></top-page>
    <scroll style="width: 90%; margin: auto"></scroll>
    <introduction
      id="introduction"
      style="width: 90%; margin: auto"
    ></introduction>
    <biography id="biography" style="width: 90%; margin: auto"></biography>
    <activity id="activity" style="width: 90%; margin: auto"></activity>
    <production id="production" style="width: 90%; margin: auto"></production>
  </div>
</template>

<script>
import TopPage from "../components/TopPage";
import Introduction from "../components/Introduction";
import Biography from "../components/Biography";
import Activity from "../components/Activity";
import Production from "../components/Production";
import Scroll from "../components/Scroll";

export default {
  components: {
    TopPage,
    Introduction,
    Biography,
    Activity,
    Production,
    Scroll,
  },
  data() {
    return {};
  },
  // methods: {
  //   toScroll(val) {
  //     const element = document.getElementById(val);
  //     const topPosition = element.getBoundingClientRect().top;
  //     window.scrollTo(0, topPosition);
  //   },
  // },
};
</script>

<style scoped>
</style>