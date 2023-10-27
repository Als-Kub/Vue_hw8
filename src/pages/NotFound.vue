<template>
  <HeaderComp />
  <section class="main padding">
    <div class="main__content">
      <h1 class="main__title">404</h1>
      <h2 class="main__subtitle">
        We are sorry, but the page you requested was not found
      </h2>
      <button class="button">
        <router-link to="/" class="button__text"> Back To Home</router-link
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
        >
          <path
            d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>

        <!-- <span class="button__text">Back To Home</span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
        >
          <path
            d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg> -->
      </button>
    </div>
    <div class="main__image">
      <img
        src="@/assets/img/NotFound/404_img.jpg"
        alt="404 img"
        class="main__img"
      />
    </div>
  </section>
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";

export default {
  components: {
    HeaderComp,
  },
};
</script>

<style scoped></style>
