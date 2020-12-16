<template>
  <section class="guest-book">
    <h2 class="section-title">
      Guest Book
    </h2>
    <div class="guest-book__content">
      <div>
        <div class="guest-book__form">
          <iframe
            src="https://rezafaizarahman.typeform.com/to/IizPUyxV"
            height="320px"
            width="100%"
            style="border:none;"
            title="Guest Book"
          ></iframe>
        </div>
      </div>
      <div>
        <div class="guest-book__messages">
          <swiper ref="guestBook" :options="swiperOptions">
            <swiper-slide v-for="(message, i) in messages" :key="i">
              <div class="message-list">
                <div class="message-list__content">"{{ message.message }}"</div>
                <p class="message-list__name">
                  {{ message.name }}
                </p>
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
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

export default {
  name: 'GuestBook',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      messages: [],
      swiperOptions: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  created() {
    this.getDataMessages();
  },
  methods: {
    getDataMessages() {
      try {
        fetch(
          'http://gsx2json.com/api?id=1gvpUhAjghXlSItvCfzYm2LY98hDXrmIAvuEgYh3VXKg&sheet=1&columns=false'
        )
          .then((response) => response.json())
          .then((json) => {
            if (json &&  json.rows && json.rows.length) {
              this.messages = json.rows.reverse();
            }
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style>
.guest-book .swiper-slide {
  padding: 20px;
  border-radius: 16px;
  text-align: center;
}
.guest-book .swiper-pagination-bullet {
  background: #e5eaef;
  opacity: 1;
}
.guest-book .swiper-pagination-bullet-active {
  background: #252a31;
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
.guest-book__content {
  display: flex;
  margin: 0 -20px;
}
.guest-book__content > div {
  width: 50%;
  padding: 0 20px;
}
.guest-book__form,
.guest-book__messages {
  border: 1px solid #e8edf1;
  border-radius: 12px;
  overflow: hidden;
}
.guest-book__messages {
  background: #f5f7f9;
  display: flex;
  align-items: center;
  height: 100%;
}
.message-list__content {
  font-size: 18px;
  margin-bottom: 16px;
}
.message-list__name {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
}
@media screen and (max-width: 992px) {
  .guest-book__content {
    flex-direction: column;
    align-items: center;
  }
  .guest-book__content > div {
    width: 100%;
  }
  .guest-book__form {
    margin-bottom: 40px;
    margin-right: 0;
    width: 100%;
  }
  .guest-book__messages {
    margin-top: 24px;
    margin-left: 0;
  }
  .message-list__content {
    max-width: 240px;
    margin: 0 auto;
  }
}
</style>
