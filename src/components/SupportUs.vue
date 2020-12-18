<template>
  <section class="support-us">
    <h2 class="section-title">Next Chapter</h2>

    <div class="support-us__photos">
      <swiper ref="hampersPhotos" :options="swiperOptions">
        <swiper-slide v-for="(photos, i) in hampersPhotos" :key="i">
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

    <p>
      Your prayers and blessings mean a lot to us and is all we ask for. Loved
      ones know we are passionate about sustainable living. If you'd still like
      to contribute, please support us and the planet to live sustainably by
      considering to reuse your belonging everyday in your life.
    </p>
    <div class="support-us__product-desc">
      <b>This zero waste essential kit will help you to start:</b>
      <br /><br />
      <p>1 Set cutlery made from mahogany: spoon, fork and chopsticks</p>
      <p>1 Set stainless steel staws</p>
      <p>Organic soap (flavor: charcoal / jasmine / coffee)</p>
      <p>100 pcs wooden cotton bud</p>
      <p>Loofah Sponge (± 10cm)</p>
      <p>1 Bamboo toothbrush</p>
    </div>

    <button class="support-us__CTA" @click="handleOpenModalPayment">
      Get The Essential Kit / Support Us
    </button>

    <payment :show="isModalPaymentVisible" @close="handleCloseModalPayment" />
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import hampersPhotos from '../data/hampersPhotos.json';

const Payment = () => import(/* webpackChunkName: 'Payment' */ './Payment');

export default {
  name: 'SupportUs',
  components: {
    Swiper,
    SwiperSlide,
    Payment,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      isModalPaymentVisible: false,
      hampersPhotos: hampersPhotos.data,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 24,
        lazy: {
          loadPrevNext: true,
        },
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
  methods: {
    handleOpenModalPayment() {
      this.isModalPaymentVisible = true;
      document.body.style.overflow = 'hidden';
    },
    handleCloseModalPayment() {
      this.isModalPaymentVisible = false;
      document.body.style.overflow = 'unset';
    },
  },
};
</script>

<style>
.support-us .swiper-slide {
  width: 360px;
}
.support-us .swiper-slide img {
  max-width: 100%;
  border-radius: 40px;
}
.support-us .swiper-pagination-bullet {
  background: #ffffff;
  opacity: 1;
}
.support-us .swiper-pagination-bullet-active {
  background: #262830;
}
.support-us .swiper-button-prev::after,
.support-us .swiper-button-next::after {
  display: none;
}

.support-us .swiper-button-prev,
.support-us .swiper-button-next {
  box-shadow: 0px 2px 4px rgba(110, 116, 134, 0.32);
  background: #ffffff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 8px;
}
</style>
<style scoped>
.support-us {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.support-us__photos {
  margin-bottom: 24px;
  max-width: 360px;
}
p {
  max-width: 600px;
}
.support-us__CTA {
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: #262830;
  color: #ffffff;
  cursor: pointer;
  line-height: 28px;
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 120px;
  font-weight: 600;
}
.support-us__product-desc {
  background: #f5f7f9;
  border-radius: 24px;
  padding: 32px;
  margin-top: 24px;
}

@media screen and (max-width: 992px) {
  .support-us__product-desc {
    padding: 16px;
  }
}
</style>
