<template>
  <section class="award">
    <h2 class="section-title">
      Thank you to everyone who made our life so fun
    </h2>
    <div>
      <swiper ref="awardCard" :options="swiperOptions">
        <swiper-slide v-for="(nominee, i) in nominees" :key="i" width="280">
          <div class="award-card">
            <p class="award-card__title">
              Our Choice Award Category {{ nominee.category }}
            </p>
            <div class="award-card__winner">
              <p>Goes to ...</p>
              <div class="award-card__winner-list">
                <a
                  class="award-card__nominee"
                  v-for="(winner, w) in nominee.winners"
                  :href="winner.link"
                  :key="w"
                  target="blank"
                >
                  <img
                    :src="winner.img"
                    :alt="winner.title"
                    class="award-card__nominee-img"
                    :title="winner.title"
                  />
                  <p>{{ winner.title }}</p>
                </a>
              </div>
            </div>
            <div class="award-card__candidate">
              <p>Nomination</p>
              <div class="award-card__candidate-list">
                <a
                  class="award-card__nominee"
                  v-for="(candidate, c) in nominee.candidate"
                  :href="candidate.link"
                  :key="c"
                  target="blank"
                >
                  <img
                    :src="candidate.img"
                    class="award-card__nominee-img"
                    :alt="candidate.title"
                    :title="candidate.title"
                  />
                </a>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import awardNominee from '../data/awardNominee.json';

export default {
  name: 'Award',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      nominees: awardNominee.data,
      swiperOptions: {
        spaceBetween: 40,
        lazy: true,
        slidesPerView: 'auto',
      },
    };
  },
};
</script>

<style>
.award .swiper-slide {
  width: 280px;
}
.award .swiper-container {
  overflow: unset;
}
</style>
<style scoped>
.award-card {
  border: 1px solid #262830;
  border-radius: 16px;
  padding: 16px;
  width: 280px;
	background: #ffffff;
}
.award-card__title {
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 16px;
}
.award-card__winner,
.award-card__winner > p,
.award-card__candidate,
.award-card__candidate > p {
  margin-bottom: 16px;
}
.award-card__nominee {
  display: inline-block;
  text-align: center;
  text-decoration: none;
}
.award-card__nominee img {
  max-width: 48px;
}
.award-card__nominee p {
  font-size: 12px;
  line-height: 22px;
  color: #262830;
}

.award-card__candidate-list,
.award-card__winner-list {
  display: flex;
}
.award-card__candidate-list a,
.award-card__winner-list a {
  margin-right: 16px;
}
</style>
