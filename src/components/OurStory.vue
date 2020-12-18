<template>
  <section class="our-story">
    <h2 class="section-title">
      {{ $t('ourStory.title') }}
    </h2>
    <div class="our-story__stories">
      <swiper ref="ourStories" :options="swiperOptions">
        <swiper-slide v-for="(stories, i) in ourStories" :key="i">
          <div class="stories">
            <div class="stories__caption">
              {{ $t(`ourStory.stories[${i}]`) }}
            </div>
            <div class="stories__photos">
              <picture
                v-for="(photos, photosIndex) in stories.photos"
                :key="photosIndex"
              >
                <source type="image/webp" :data-srcset="photos.webp" />
                <source type="image/jpeg" :data-srcset="photos.png" />
                <img
                  :data-src="photos.png"
                  :alt="photos.title"
                  class="swiper-lazy"
                />
              </picture>
            </div>
          </div>
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
import ourStories from '../data/ourStories.json';

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
      ourStories: ourStories.data,
      swiperOptions: {
        spaceBetween: 16,
        slidesPerView: 'auto',
        freeMode: true,
        lazy: {
          loadPrevNext: true,
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
  width: 486px;
}
.our-story .swiper-slide img {
  max-width: 100%;
  border-radius: 12px;
  display: block;
}
.our-story .swiper-pagination-bullet {
  background: #ffffff;
  opacity: 1;
}
.our-story .swiper-container {
  overflow: unset;
}
.our-story .swiper-pagination-bullet-active {
  background: #262830;
}
.our-story .swiper-button-prev::after,
.our-story .swiper-button-next::after {
  display: none;
}
.our-story .swiper-button-prev {
  left: -64px;
}
.our-story .swiper-button-next {
  right: -64px;
}
.our-story .swiper-button-prev,
.our-story .swiper-button-next {
  box-shadow: 0px 2px 4px rgba(110, 116, 134, 0.32);
  background: #ffffff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 8px;
}
@media screen and (max-width: 992px) {
  .our-story .swiper-button-prev,
  .our-story .swiper-button-next {
    display: none;
  }
}
</style>
<style scoped>
.stories {
  display: flex;
}

.stories__caption {
  width: 240px;
  border: 1px solid #e8edf1;
  border-radius: 16px;
  height: 345px;
  padding: 16px;
  display: flex;
  align-items: center;
  margin-right: 16px;
}

.stories__photos {
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 992px) {
  .our-story {
    flex-direction: column;
    align-items: center;
  }
}
</style>
