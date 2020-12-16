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
        <swiper-slide v-for="(photos, i) in ourStoryPhotos" :key="i">
          <picture>
            <source type="image/webp" :data-srcset="photos.img.webp" />
            <source type="image/jpeg" :data-srcset="photos.img.jpg" />
            <img
              :data-src="photos.img.jpg"
              :alt="photos.title"
              class="swiper-lazy"
            />
          </picture>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev">
          <img src="/images/circle-arrow-left.svg" alt="prev" />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <img src="/images/circle-arrow-right.svg" alt="next" />
        </div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import ourStoryPhotos from '../data/ourStoryPhotos.json';

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
      ourStoryPhotos: ourStoryPhotos.data,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 24,
        lazy: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>
<style>
.our-story .swiper-slide {
  width: 360px;
}
.our-story .swiper-slide img {
  max-width: 100%;
  border-radius: 40px;
}
.swiper-pagination-bullet {
  background: #ffffff;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #262830;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}
.swiper-button-prev,
.swiper-button-next {
  box-shadow: 0px 2px 4px rgba(110, 116, 134, 0.32);
  background: #ffffff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 8px;
}
</style>
<style scoped>
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
