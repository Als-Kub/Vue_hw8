<template>
  <div>
    <HeaderComp />
    <BannerComp :title="title" :style="style" :show="show" />
    <section class="article center">
      <div class="article__wrapper">
        <article class="article__atr1">
          <h2 class="article__title">{{ articles[currentIndex].title1 }}</h2>
          <div class="article__img-box">
            <img
              :src="articles[currentIndex].img"
              alt="Article img"
              class="article__img"
            />
          </div>
          <div class="article__date-box">
            <p class="article__date">{{ articles[currentIndex].date }}</p>
            <p class="article__date-text">Interior / Home / Decore</p>
          </div>
          <p class="article__text">
            {{ articles[currentIndex].text1 }}
          </p>
          <p class="article__text">
            {{ articles[currentIndex].text2 }}
          </p>
        </article>
        <div class="quote">
          <p class="quote__symbol">“</p>
          <p class="quote__text">The details are not the details.</p>
          <p class="quote__text">They make the design.</p>
        </div>
        <article class="article__atr2">
          <h2 class="article__title article__title_mb">
            {{ articles[currentIndex].title2 }}
          </h2>
          <p class="article__text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered.
          </p>
          <ul class="article__ul">
            <li class="article__li">
              <p class="article__text-number">1</p>
              <p class="article__text article__text_mb">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
            </li>
            <li class="article__li">
              <p class="article__text-number">2</p>
              <p class="article__text article__text_mb">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
            </li>
            <li class="article__li">
              <p class="article__text-number">3</p>
              <p class="article__text article__text_mb">
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
            </li>
          </ul>
          <div class="article__img-box">
            <img
              src="@/assets/img/Blog_details/Blog_details_2.jpg"
              alt="Article img"
              class="article__img"
            />
          </div>
          <p class="article__text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered.
          </p>
        </article>
      </div>
      <div class="tags">
        <h3 class="tags__title">Tags</h3>
        <div class="tags__buttons-box">
          <button
            v-for="(tag, index) in tags"
            @click="toggleStatus(tag, index)"
            :key="index"
            :class="{ tags__active: tag.status }"
            class="tags__button"
          >
            {{ tag.name }}
          </button>
        </div>
      </div>
    </section>
    <FooterComp />
  </div>
</template>

<script>
import BannerComp from "../components/BannerComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import FooterComp from "../components/FooterComp.vue";
import img1 from "@/assets/img/Blog_details/Blog_details_1_1.jpg";
import img2 from "@/assets/img/Blog_details/Blog_details_1_2.jpg";
import img3 from "@/assets/img/Blog_details/Blog_details_1_3.jpg";
import img4 from "@/assets/img/Blog_details/Blog_details_1_4.jpg";
import img5 from "@/assets/img/Blog_details/Blog_details_1_5.jpg";

export default {
  data() {
    return {
      title: "",
      style: "banner_blog_details",
      show: false,
      currentIndex: 0,
      tags: [
        { name: "Kitchen", status: true },
        { name: "Bedroom", status: false },
        { name: "Building", status: false },
        { name: "Architecture", status: false },
        { name: "Kitchen Planning", status: false },
        { name: "Bedroom", status: false },
      ],

      articles: [
        {
          title1: "Let’s Get Solution for Building Construction Work",
          img: img1,
          date: "26 December, 2022 ",
          text1:
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2:
            "Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          title2: "Design sprints are great",
        },
        {
          title1: "Find your perfect bedroom for watching sweet dreams",
          img: img2,
          date: "28 February, 2023 ",
          text1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          text2:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          title2: "This is a special place",
        },
        {
          title1: "Our every building is special",
          img: img3,
          date: "08 September, 2023 ",
          text1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          text2:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          title2: "The history of counstruction industry",
        },
        {
          title1: "This architecture style creates a difference",
          img: img4,
          date: "10 June, 2023 ",
          text1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          text2:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          title2: "Design and Architecture... What new it brings to us",
        },
        {
          title1: "This is a critical step for comfortable home space",
          img: img5,
          date: "20 AugustFebruary, 2023 ",
          text1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          text2:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          title2: "Various kitchen styles and space planning aproaches",
        },
        {
          title1: "Find your bedroom for watchig sweet dreams",
          img: img2,
          date: "28 February, 2023 ",
          text1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          text2:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod inventore maxime sit harum ullam odio perferendis dicta quam ad laborum iure facilis, dignissimos aspernatur tempora, impedit reiciendis. Qui, ducimus obcaecati!",
          title2: "Let’s Get Solution for Building Construction Work",
        },
      ],
    };
  },

  methods: {
    toggleStatus(tag, index) {
      this.tags[this.currentIndex].status = false;
      tag.status = !tag.status;
      this.currentIndex = index;
    },
  },

  components: { HeaderComp, FooterComp, BannerComp },
};
</script>

<style scoped></style>
