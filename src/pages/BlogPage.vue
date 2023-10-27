<template>
  <div>
    <HeaderComp />
    <BannerComp
      :title="title"
      :style="style"
      :show="show"
      :link="link"
      :linkName="linkName"
    />
    <section class="post center">
      <h2 class="post__title">Latest Post</h2>
      <div class="post__content">
        <div class="post__double-box">
          <div class="post__img-box">
            <img
              src="@/assets/img/Blog/post_img.jpg"
              alt="card img"
              class="post__img"
            />
          </div>
        </div>
        <div class="post__desc">
          <h3 class="post__subtitle">
            Low Cost Latest Invented Interior <br />
            Designing Ideas
          </h3>
          <p class="post__text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p class="post__text post__text_mb">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div class="post__date">
            <p class="post__date-text">26 December,2022</p>

            <button class="button-round button-round_margin-bottom">
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
    <section class="blog center">
      <h2 class="blog__title blog__title_align-left">Articles & News</h2>

      <div class="blog__cards">
        <CardComp
          v-for="(card, index) in cards"
          :key="card.id"
          :card="card"
          :index="index"
        />
      </div>
      <PaginationComp />
    </section>
    <FooterComp />
  </div>
</template>

<script>
import PaginationComp from "../components/PaginationComp.vue";
import BannerComp from "../components/BannerComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import CardComp from "../components/CardComp.vue";
import FooterComp from "../components/FooterComp.vue";

import img1 from "@/assets/img/Blog/blog_img1.jpg";
import img2 from "@/assets/img/Blog/blog_img2.jpg";
import img3 from "@/assets/img/Blog/blog_img3.jpg";
import img4 from "@/assets/img/Blog/blog_img4.jpg";
import img5 from "@/assets/img/Blog/blog_img5.jpg";
import img6 from "@/assets/img/Blog/blog_img6.jpg";

export default {
  data() {
    return {
      title: "Articles & News",
      style: "banner_blog",
      show: true,
      link: "/blog-details",
      linkName: "Blog",
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
        {
          id: 4,
          img: img4,
          desc: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction",
          title_end: "Work",
          date: "26 December, 2022 ",
        },
        {
          id: 5,
          img: img5,
          desc: "Living Design",
          title: "Low Cost Latest Invented Interior Designing",
          title_end: "Ideas.",
          date: "22 December, 2022 ",
        },
        {
          id: 6,
          img: img6,
          desc: "Interior Design",
          title: "Best For Any Office & Business Interior",
          title_end: "Solution.",
          date: "25 December, 2022 ",
        },
      ],
    };
  },

  components: {
    HeaderComp,
    FooterComp,
    CardComp,
    BannerComp,
    PaginationComp,
  },
};
</script>

<style scoped></style>
