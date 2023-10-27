<template>
  <nav class="nav" :class="style1">
    <router-link
      v-for="link in LinkArr"
      :key="link.id"
      :to="link.url"
      class="nav__link"
      :class="style2"
      >{{ link.name }}</router-link
    >
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    style1: String,
    style2: String,
  },
  data() {
    return {};
  },

  computed: {
    ...mapState(["LinkArr"]),
  },
};
</script>

<style scoped></style>
