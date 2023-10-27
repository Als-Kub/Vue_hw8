<template>
  <div>
    <footer class="footer center">
      <div class="footer__left">
        <div class="logo">
          <img
            src="@/assets/img/Main/Logo.svg"
            alt="Logo icon"
            class="logo__icon"
          />
          <p class="logo__text">Interno</p>
        </div>
        <p class="footer__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <a href="#" class="footer__link footer__link_margin"
          ><img src="@/assets/img/Main/footer_icon_1.svg" alt="Footer icon"
        /></a>
        <a href="#" class="footer__link"
          ><img src="@/assets/img/Main/footer_icon_2.svg" alt="Footer icon"
        /></a>
      </div>
      <div class="footer__center">
        <h3 class="footer__title">Pages</h3>
        <NavigationComp :style1="style1" :style2="style2" />
      </div>
      <div class="footer__right">
        <h3 class="footer__title">Contact</h3>
        <p class="footer__text">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p class="footer__text footer__text_lign-height">contact@interno.com</p>
        <p class="footer__text footer__text_lign-height">(123) 456 - 7890</p>
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationComp from "./NavigationComp.vue";

export default {
  data() {
    return {
      style1: "footer__nav_flex",
      style2: "footer__nav__link_font",
    };
  },
  components: {
    NavigationComp,
  },
};
</script>

<style scoped></style>
