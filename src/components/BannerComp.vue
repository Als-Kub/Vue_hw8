<template>
  <div class="banner center-wide">
    <div class="banner__box" :class="style">
      <div v-if="show" class="banner__content">
        <h2 class="banner__title">{{ title }}</h2>
        <p class="banner__links">
          <router-link class="banner__link" to="/">Home</router-link>
          <router-link class="banner__link" :to="link">{{
            linkName
          }}</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    style: String,
    show: Boolean,
    linkName: String,
    link: String,
  },
};
</script>

<style scoped></style>
