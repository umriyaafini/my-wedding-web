<template>
  <section class="support-us">
    <h2 class="section-title">Next Chapter</h2>

    <div class="support-us__photos">
      <swiper ref="hampersPhotos" :options="swiperOptions">
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

    <p>Your prayers and blessings mean a lot to us and is all we ask for. Loved ones know we are passionate about sustainable living. If you'd still like to contribute, please support us and the planet to live sustainably by considering to reuse your belonging everyday in your life. <br/>This zero waste essential kit will help you to start.</p>

    <button class="support-us__CTA">
      Get the essential kit / Support Us
    </button>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: "SupportUs",
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
}
</script>

<style scoped>
.support-us {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.support-us__photos {
  margin-bottom: 16px;
}
p {
  max-width: 509px;
}
.support-us__CTA {
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: #262830;
  color: #FFFFFF;
  cursor: pointer;
  line-height: 28px;
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 120px;
}
</style>