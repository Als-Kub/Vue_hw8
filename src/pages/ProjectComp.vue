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
    <div class="category center">
      <div class="category__box">
        <button
          v-for="(tab, index) in tabs"
          @click="toggleStatus(tab, index)"
          :key="index"
          :class="{ category__button_active: tab.status }"
          class="category__button"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <div class="project center">
      <div class="project__cards">
        <ProjectCard
          v-for="(card, index) in cards[currentIndex]"
          :key="card.id"
          :card="card"
          :index="index"
        />
      </div>
      <PaginationComp />
    </div>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "../components/FooterComp.vue";
import HeaderComp from "../components/HeaderComp.vue";
import PaginationComp from "../components/PaginationComp.vue";
import ProjectCard from "../components/ProjectCard.vue";
import BannerComp from "../components/BannerComp.vue";

import img_bathroom1 from "@/assets/img/Project/Bathroom_1.jpeg";
import img_bathroom2 from "@/assets/img/Project/Bathroom_2.jpg";
import img_bathroom3 from "@/assets/img/Project/Bathroom_3.jpg";
import img_bathroom4 from "@/assets/img/Project/Bathroom_4.jpg";
import img_bathroom5 from "@/assets/img/Project/Bathroom_5.jpg";
import img_bathroom6 from "@/assets/img/Project/Bathroom_6.jpeg";
import img_bathroom7 from "@/assets/img/Project/Bathroom_7.jpg";
import img_bathroom8 from "@/assets/img/Project/Bathroom_8.jpg";
import img_bedroom1 from "@/assets/img/Project/Bedroom_1.jpg";
import img_bedroom2 from "@/assets/img/Project/Bedroom_2.jpg";
import img_bedroom3 from "@/assets/img/Project/Bedroom_3.jpg";
import img_bedroom4 from "@/assets/img/Project/Bedroom_4.jpg";
import img_bedroom5 from "@/assets/img/Project/Bedroom_5.jpg";
import img_bedroom6 from "@/assets/img/Project/Bedroom_6.jpg";
import img_bedroom7 from "@/assets/img/Project/Bedroom_7.jpg";
import img_bedroom8 from "@/assets/img/Project/Bedroom_8.jpg";
import img_kitchen1 from "@/assets/img/Project/Kitchen_1.jpg";
import img_kitchen2 from "@/assets/img/Project/Kitchen_2.jpeg";
import img_kitchen3 from "@/assets/img/Project/Kitchen_3.jpg";
import img_kitchen4 from "@/assets/img/Project/Kitchen_4.jpg";
import img_kitchen5 from "@/assets/img/Project/Kitchen_5.jpg";
import img_kitchen6 from "@/assets/img/Project/Kitchen_6.jpg";
import img_kitchen7 from "@/assets/img/Project/Kitchen_7.jpg";
import img_kitchen8 from "@/assets/img/Project/Kitchen_8.jpg";
import img_livingroom1 from "@/assets/img/Project/Livingroom_1.jpeg";
import img_livingroom2 from "@/assets/img/Project/Livingroom_2.jpeg";
import img_livingroom3 from "@/assets/img/Project/Livingroom_3.jpg";
import img_livingroom4 from "@/assets/img/Project/Livingroom_4.jpg";
import img_livingroom5 from "@/assets/img/Project/Livingroom_5.jpg";
import img_livingroom6 from "@/assets/img/Project/Livingroom_6.jpg";
import img_livingroom7 from "@/assets/img/Project/Livingroom_7.jpg";
import img_livingroom8 from "@/assets/img/Project/Livingroom_8.jpg";

export default {
  data() {
    return {
      starStatus: true,
      currentIndex: 1,
      title: "Our project",
      style: "banner_project",
      show: true,
      link: "/project-details",
      linkName: "Project",

      tabs: [
        { name: "Bathroom", status: false },
        { name: "Bedroom", status: true },
        { name: "Kitchen", status: false },
        { name: "LivingArea", status: false },
      ],

      cards: [
        [
          {
            id: 1,
            img: img_bathroom1,
            title: "Minimal Bathroom",
          },
          {
            id: 2,
            img: img_bathroom2,
            title: "Minimal Bathroom",
          },
          {
            id: 3,
            img: img_bathroom3,
            title: "Classic Minimal Bathroom",
          },
          {
            id: 4,
            img: img_bathroom4,
            title: "Modern Bathroom",
          },
          {
            id: 5,
            img: img_bathroom5,
            title: "Minimal Bathroom table",
          },
          {
            id: 6,
            img: img_bathroom6,
            title: "System Table",
          },
          {
            id: 7,
            img: img_bathroom7,
            title: "Modern Bathroom",
          },
          {
            id: 8,
            img: img_bathroom8,
            title: "Modern Bathroom",
          },
        ],
        [
          {
            id: 9,
            img: img_bedroom1,
            title: "Minimal Bedroom",
          },
          {
            id: 10,
            img: img_bedroom2,
            title: "Minimal Bedroom",
          },
          {
            id: 11,
            img: img_bedroom3,
            title: "Classic Minimal Bedroom",
          },
          {
            id: 12,
            img: img_bedroom4,
            title: "Modern Bedroom",
          },
          {
            id: 13,
            img: img_bedroom5,
            title: "Minimal Bedroom table",
          },
          {
            id: 14,
            img: img_bedroom6,
            title: "System Table",
          },
          {
            id: 15,
            img: img_bedroom7,
            title: "Modern Bedroom",
          },
          {
            id: 16,
            img: img_bedroom8,
            title: "Modern Bedroom",
          },
        ],
        [
          {
            id: 17,
            img: img_kitchen1,
            title: "Modern Bedroom",
          },
          {
            id: 18,
            img: img_kitchen2,
            title: "Minimal Kitchen",
          },
          {
            id: 19,
            img: img_kitchen3,
            title: "Classic Minimal Kitchen",
          },
          {
            id: 20,
            img: img_kitchen4,
            title: "Modern Kitchen",
          },
          {
            id: 21,
            img: img_kitchen5,
            title: "Minimal Kitchen table",
          },
          {
            id: 22,
            img: img_kitchen6,
            title: "System Table",
          },
          {
            id: 23,
            img: img_kitchen7,
            title: "Modern Kitchen",
          },
          {
            id: 24,
            img: img_kitchen8,
            title: "Modern Kitchen",
          },
        ],
        [
          {
            id: 25,
            img: img_livingroom1,
            title: "Minimal Living room",
          },
          {
            id: 26,
            img: img_livingroom2,
            title: "Minimal Living room",
          },
          {
            id: 27,
            img: img_livingroom3,
            title: "Classic Minimal Bathroom",
          },
          {
            id: 28,
            img: img_livingroom4,
            title: "Modern Living room",
          },
          {
            id: 29,
            img: img_livingroom5,
            title: "Minimal Living table",
          },
          {
            id: 30,
            img: img_livingroom6,
            title: "System Table",
          },
          {
            id: 31,
            img: img_livingroom7,
            title: "Modern Living room",
          },
          {
            id: 32,
            img: img_livingroom8,
            title: "Modern Living room",
          },
        ],
      ],
    };
  },

  methods: {
    toggleStatus(tab, index) {
      this.tabs[this.currentIndex].status = false;
      tab.status = !tab.status;
      this.currentIndex = index;
    },
  },

  components: {
    HeaderComp,
    FooterComp,
    ProjectCard,
    PaginationComp,
    BannerComp,
  },
};
</script>

<style scoped></style>
