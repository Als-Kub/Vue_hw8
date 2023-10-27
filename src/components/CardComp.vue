<template>
  <div class="blog__card-box">
    <p class="blog__card-desc">
      {{ card.desc }}
    </p>
    <div class="card" :class="addStyle">
      <div class="card__img-box card__img-box-radius_double">
        <img :src="card.img" alt="card img" class="card" />
      </div>
      <h3 class="card__title card__title_margin">
        {{ card.title }} <br />
        {{ card.title_end }}
      </h3>
      <div class="card__content">
        <div class="card__desc">
          <p class="card__text">{{ card.date }}</p>
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
</template>

<script>
export default {
  props: {
    card: Object,
    index: Number,
  },

  computed: {
    addStyle() {
      let counter = 1;
      for (let i = 0; i < this.index; i++) {
        counter++;
        if (counter > 3) {
          counter = 1;
        }
      }
      return "card_desc_" + counter;
    },
  },
};
</script>

<style scoped></style>
