<template>
  <div>
    <header class="header center">
      <div class="logo">
        <img
          src="@/assets/img/Main/Logo.svg"
          alt="Logo icon"
          class="logo__icon"
        />
        <p class="logo__text">Interno</p>
      </div>
      <NavigationComp />
    </header>
  </div>
</template>

<script>
import NavigationComp from "./NavigationComp.vue";

export default {
  components: {
    NavigationComp,
  },
};
</script>

<style scoped></style>
