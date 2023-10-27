<template>
  <div>
    <HeaderComp />
    <BannerComp :title="title" :style="style" :show="show" />
    <section class="content center">
      <div class="content__box">
        <h2 class="content__heading">{{ ProjectDetailsContent.heading }}</h2>
        <p class="content__text1">{{ ProjectDetailsContent.text1 }}</p>
        <p class="content__text2">{{ ProjectDetailsContent.text2 }}</p>
      </div>
    </section>
    <SliderComp />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "../components/FooterComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import BannerComp from "../components/BannerComp.vue";
import SliderComp from "../components/SliderComp.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "",
      style: "banner_project_details",
      show: false,
    };
  },

  computed: {
    ...mapState(["ProjectDetailsContent"]),
  },

  components: {
    HeaderComp,
    FooterComp,
    BannerComp,
    SliderComp,
  },
};
</script>

<style scoped></style>
