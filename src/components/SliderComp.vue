<template>
  <div class="slider center">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img src="@/assets/img/Project_details/img1.jpg" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img src="@/assets/img/Project_details/img2.jpg" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img src="@/assets/img/Project_details/img3.jpg" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./style.css";
import "@/assets/styles/style.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>
