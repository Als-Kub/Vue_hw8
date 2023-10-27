<template>
  <HeaderComp />
  <section class="top center">
    <div class="top__box">
      <h1 class="top__title">Let Your Home Be Unique</h1>
      <p class="top__text">
        There are many variations of the passages of lorem Ipsum fromavailable,
        majority.
      </p>
      <button class="button">
        <span class="button__text">Get Started</span
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
      </button>
    </div>
  </section>
  <section class="projects center">
    <h2 class="projects__title">Follow Our Projects</h2>
    <p class="projects__text">
      It is a long established fact that a reader will be distracted by the of
      readable content of page lookings at its layouts points.
    </p>
    <div class="projects__cards">
      <div class="card">
        <div class="card__img-box card__img-box_radius-tr">
          <img
            src="@/assets/img/Main/project_img1.jpg"
            alt="card img"
            class="card"
          />
        </div>
        <div class="card__content">
          <div class="card__desc">
            <h3 class="card__title">Modern Kitchan</h3>
            <p class="card__text">Decor / Artchitecture</p>
          </div>
          <button class="button-round">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card__img-box card__img-box_radius-tl">
          <img
            src="@/assets/img/Main/project_img3.jpg"
            alt="card img"
            class="card"
          />
        </div>
        <div class="card__content">
          <div class="card__desc">
            <h3 class="card__title">Modern Kitchan</h3>
            <p class="card__text">Decor / Artchitecture</p>
          </div>
          <button class="button-round">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card__img-box card__img-box_radius-br">
          <img
            src="@/assets/img/Main/project_img4.jpg"
            alt="card img"
            class="card"
          />
        </div>
        <div class="card__content">
          <div class="card__desc">
            <h3 class="card__title">Modern Kitchan</h3>
            <p class="card__text">Decor / Artchitecture</p>
          </div>
          <button class="button-round">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card__img-box card__img-box_radius-bl">
          <img
            src="@/assets/img/Main/project_img1.jpg"
            alt="card img"
            class="card"
          />
        </div>
        <div class="card__content">
          <div class="card__desc">
            <h3 class="card__title">Modern Kitchan</h3>
            <p class="card__text">Decor / Artchitecture</p>
          </div>
          <button class="button-round">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  <div class="results center">
    <div class="results__box">
      <div class="results__content results__content_border-left">
        <p class="results__digit">12</p>
        <p class="results__text">Years Of Experiance</p>
      </div>
      <div class="results__content">
        <p class="results__digit">85</p>
        <p class="results__text">Success Project</p>
      </div>
      <div class="results__content">
        <p class="results__digit">15</p>
        <p class="results__text">Active Project</p>
      </div>
      <div class="results__content results__content_border-right">
        <p class="results__digit">95</p>
        <p class="results__text">Happy Customers</p>
      </div>
    </div>
  </div>
  <section class="blog center">
    <h2 class="blog__title">Articles & News</h2>
    <p class="blog__text">
      It is a long established fact that a reader will be distracted by the of
      readable content of a page when lookings at its layouts the points of
      using.
    </p>
    <div class="blog__cards">
      <CardComp
        v-for="(card, index) in cards"
        :key="card.id"
        :card="card"
        :index="index"
      />
    </div>
  </section>
  <FooterComp />
</template>

<script>
import FooterComp from "../components/FooterComp.vue";
import CardComp from "../components/CardComp.vue";
import HeaderComp from "../components/HeaderComp.vue";

import img1 from "@/assets/img/Blog/blog_img1.jpg";
import img2 from "@/assets/img/Blog/blog_img2.jpg";
import img3 from "@/assets/img/Blog/blog_img3.jpg";

export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          img: img1,
          desc: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction",
          title_end: "Work",
          date: "26 December, 2022 ",
        },
        {
          id: 2,
          img: img2,
          desc: "Living Design",
          title: "Let’s Get Solution For Building Construction",
          title_end: "Work",
          date: "22 December, 2023 ",
        },
        {
          id: 3,
          img: img3,
          desc: "Interior Design",
          title: "Best For Any Office & Business Interior",
          title_end: "Solution",
          date: "25 December, 2022 ",
        },
      ],
    };
  },

  components: { HeaderComp, FooterComp, CardComp },
};
</script>

<style scoped></style>
