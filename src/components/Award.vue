<template>
	<section class="award">
		<h2 class="section-title">
			Thank you to everyone who made our life so fun
		</h2>
		<div>
			<swiper ref="awardCard" :options="swiperOptions">
				<swiper-slide  v-for="(nominee, i) in nominees" :key="i" width="280">
					<div class="award-card">
            <p class="award-card__title">
              Our Choice Award Category {{ nominee.category }}
            </p>
            <div class="award-card__winner">
              <p>Goes to ...</p>
              <a class="award-card__nominee">
                <div class="award-card__nominee-img"></div>
                <p>{{ nominee.winner.title }}</p>
              </a>
            </div>
            <div class="award-card__candidate">
              <p>Nomination</p>
              <div class="award-card__candidate-list">
                <a class="award-card__nominee" v-for="(candidate, c) in nominee.candidate" :key="c">
                  <div class="award-card__nominee-img"></div>
                </a>
              </div>
            </div>
          </div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
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
				pagination: {
					el: '.swiper-pagination',
				},
			},
		};
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
	},
	mounted() {
		console.log('Current Swiper instance object', this.swiper);
		this.swiper.slideTo(3, 1000, false);
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
}
.award-card__title {
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 16px;
}
.award-card__nominee-img {
  border: 1px solid #262830;
  border-radius: 16px;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
}
.award-card__winner,
.award-card__winner > p,
.award-card__candidate,
.award-card__candidate > p {
  margin-bottom: 16px;
}

.award-card__candidate-list {
  display: flex;
}
.award-card__candidate-list a {
  margin-right: 16px;
}
</style>
