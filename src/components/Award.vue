<template>
  <section class="award">
    <h2 class="section-title">
      {{ $t('award.title') }}
    </h2>
    <div class="award-category">
      <h3>🍪 {{ $t('award.entertainment') }}</h3>
      <swiper ref="awardCard" :options="swiperOptions">
        <swiper-slide
          v-for="(nominee, i) in entertainmentNominees"
          :key="i"
          width="280"
        >
          <div class="award-card award-entertainment">
            <p class="award-card__title">
              {{ $t(`award.entertainmentCategoryTitle[${i}]`) }}
            </p>
            <div class="award-card__winner">
              <p class="award__section-title">{{ $t('award.winner') }}</p>
              <div class="award-entertainment__winner">
                <a
                  v-for="(winner, w) in nominee.winners"
                  :href="winner.link"
                  :key="w"
                  target="blank"
                >
                  <template v-if="isMobileView">
                    <picture>
                      <source
                        type="image/webp"
                        :data-srcset="winner.img.webp"
                      />
                      <source type="image/jpeg" :data-srcset="winner.img.png" />
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
                        :data-src="winner.img.png"
                        :alt="winner.title"
                        class="swiper-lazy"
                      />
                    </picture>
                  </template>
                  <template v-else>
                    <picture>
                      <source type="image/webp" :srcset="winner.img.webp" />
                      <source type="image/jpeg" :srcset="winner.img.png" />
                      <img
                        :src="winner.img.png"
                        :alt="winner.title"
                        class="swiper-lazy"
                      />
                    </picture>
                  </template>
                  <p>🏆 {{ winner.title }}</p>
                </a>
              </div>
            </div>
            <div class="award-entertainment__candidate">
              <p class="award__section-title">{{ $t('award.nomination') }}</p>
              <div class="award-entertainment__candidate-list">
                <a
                  v-for="(candidate, c) in nominee.candidate"
                  :href="candidate.link"
                  :key="c"
                  target="blank"
                >
                  <template v-if="isMobileView">
                    <picture>
                      <source
                        type="image/webp"
                        :data-srcset="candidate.img.webp"
                      />
                      <source
                        type="image/jpeg"
                        :data-srcset="candidate.img.png"
                      />
                      <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
                        :data-src="candidate.img.png"
                        :alt="candidate.title"
                        class="swiper-lazy"
                      />
                    </picture>
                  </template>
                  <template v-else>
                    <picture>
                      <source type="image/webp" :srcset="candidate.img.webp" />
                      <source type="image/jpeg" :srcset="candidate.img.png" />
                      <img
                        :src="candidate.img.png"
                        :alt="candidate.title"
                        class="swiper-lazy"
                      />
                    </picture>
                  </template>
                  <p>{{ candidate.title }}</p>
                </a>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="award-category">
      <h3>🍪 {{ $t('award.app') }}</h3>
      <swiper ref="awardCard" :options="swiperOptions">
        <swiper-slide v-for="(nominee, i) in appNominees" :key="i" width="280">
          <div class="award-card award-app">
            <p class="award-card__title">
              {{ $t(`award.appCategoryTitle[${i}]`) }}
            </p>
            <div class="award-card__winner">
              <p class="award__section-title">{{ $t('award.winner') }}</p>
              <div class="award-app__winner-list">
                <a
                  v-for="(winner, w) in nominee.winners"
                  :href="winner.link"
                  :key="w"
                  target="blank"
                >
                  <template v-if="isMobileView">
                    <picture>
                      <source
                        type="image/webp"
                        :data-srcset="winner.img.webp"
                      />
                      <source type="image/jpeg" :data-srcset="winner.img.png" />
                      <img
                        :data-src="winner.img.png"
                        :alt="winner.title"
                        class="swiper-lazy"
                      />
                    </picture>
                  </template>
                  <template v-else>
                    <picture>
                      <source type="image/webp" :srcset="winner.img.webp" />
                      <source type="image/jpeg" :srcset="winner.img.png" />
                      <img
                        :src="winner.img.png"
                        :alt="winner.title"
                        class="swiper-lazy"
                      />
                    </picture>
                  </template>
                  <p>🏆 {{ winner.title }}</p>
                </a>
              </div>
            </div>
            <div class="award-app__candidate">
              <p class="award__section-title">{{ $t('award.nomination') }}</p>
              <div class="award-app__candidate-list">
                <a
                  v-for="(candidate, c) in nominee.candidate"
                  :href="candidate.link"
                  :key="c"
                  target="blank"
                >
                  <template v-if="isMobileView">
                    <picture>
                      <source
                        type="image/webp"
                        :data-srcset="candidate.img.webp"
                      />
                      <source
                        type="image/jpeg"
                        :data-srcset="candidate.img.png"
                      />
                      <img
                        :data-src="candidate.img.png"
                        :alt="candidate.title"
                        class="swiper-lazy"
                      />
                    </picture>
                  </template>
                  <template v-else>
                    <picture>
                      <source type="image/webp" :srcset="candidate.img.webp" />
                      <source type="image/jpeg" :srcset="candidate.img.png" />
                      <img
                        :src="candidate.img.png"
                        :alt="candidate.title"
                        class="swiper-lazy"
                      />
                    </picture>
                  </template>
                  <p>{{ candidate.title }}</p>
                </a>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide key="spotify" width="280">
          <div class="award-card spotify-card">
            <p class="award-card__title">
              {{ $t('award.appCategoryTitle[3]') }}
            </p>
            <iframe
              src="https://open.spotify.com/embed/playlist/0wBdD5ZFRemZrIkCXZEhLU"
              width="246"
              height="312"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Spotify Playlist"
            ></iframe>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import awardApplication from '../data/awardApplication.json';
import awardEntertainment from '../data/awardEntertainment.json';

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
      appNominees: awardApplication.data,
      entertainmentNominees: awardEntertainment.data,
      swiperOptions: {
        spaceBetween: 24,
        slidesPerView: 'auto',
        lazy: {
          loadPrevNext: true,
        },
      },
      isMobileView: window.innerWidth <= 583,
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
a {
  color: #262830;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.award-card {
  border: 1px solid #e8edf1;
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
.spotify-card {
  background: #0c0c0c;
  color: #fff;
}
.award__section-title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Entertainment Award */
.award-entertainment__winner p {
  font-weight: 14px;
  line-height: 24px;
  font-weight: 600;
}

.award-entertainment__candidate-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}

.award-entertainment__candidate-list a {
  display: inline-block;
  width: 50%;
  padding: 0 8px;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 18px;
}

.award-card__winner {
  margin-bottom: 16px;
}
.award-category {
  margin-top: 48px;
}

/* App Award */
.award-app__winner-list {
  display: flex;
  margin: 0 -8px;
}
.award-app__winner-list a {
  width: 50%;
  padding: 0 8px;
  font-weight: 600;
}
.award-app__candidate-list {
  display: flex;
  justify-content: space-between;
}

.award-app__candidate-list img {
  width: 48px;
  height: 48px;
}
.award-app__candidate-list a {
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
}
</style>
