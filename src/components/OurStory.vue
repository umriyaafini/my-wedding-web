<template>
	<section class="our-story">
		<div class="our-story__desc">
			<h2 class="section-title">
				Our Story
			</h2>
			<p>
				We first met 7 years ago in a campus community. We met again at the same
				company after two years of not seeing each other. We had a really
				magical time in our long-distance relationship between Jakarta, Jogja,
				and Semarang. And now, we are ready to start another magical time
				together.
			</p>
		</div>
		<div class="our-story__photos">
			<swiper ref="ourStoryPhotos" :options="swiperOptions">
				<swiper-slide>
					<img src="../assets/our-story/photos-1.png" />
				</swiper-slide>
        <swiper-slide>
					<img src="../assets/our-story/photos-1.png" />
				</swiper-slide>
        <swiper-slide>
					<img src="../assets/our-story/photos-1.png" />
				</swiper-slide>
        <swiper-slide>
					<img src="../assets/our-story/photos-1.png" />
				</swiper-slide>
        <swiper-slide>
					<img src="../assets/our-story/photos-1.png" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
	name: 'OurStory',
	components: {
		Swiper,
		SwiperSlide,
	},
	directives: {
		swiper: directive,
	},
	data() {
		return {
			swiperOptions: {
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
.our-story {
  display: flex;
}
.our-story__photos {
  max-width: 360px;
}
.our-story__desc {
  flex: 1;
}
.our-story__desc p {
  max-width: 400px;
}

@media screen and (max-width: 992px) {
  .our-story {
    flex-direction: column;
    align-items: center;
  }

  .our-story__desc {
    margin-bottom: 40px;
  }
}
</style>
