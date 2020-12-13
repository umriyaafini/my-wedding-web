<template>
  <section class="guest-book">
    <h2 class="section-title">
      Guest Book
    </h2>
    <div class="guest-book__content">
      <div class="guest-book__form">
        <iframe
          src="https://rezafaizarahman.typeform.com/to/IizPUyxV"
          height="320px"
          width="100%"
          style="border:none;"
          title="Guest Book"
        ></iframe>
      </div>
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
        </swiper>
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
          'https://api.sheety.co/8f2a139d9a1a17f46369a4f423b4e0a4/guestBook/guestBook'
        )
          .then((response) => response.json())
          .then((json) => {
            if(json && json.guestBook.length) {
              this.messages = json.guestBook.reverse();
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
  max-width: 360px;
  background: #ecf8f7;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
}

.guest-book .swiper-pagination-bullet {
  background: #d6f0ee;
  opacity: 1;
}
.guest-book .swiper-pagination-bullet-active {
  background: #008f7b;
}
</style>
<style scoped>
.guest-book__content {
  display: flex;
}
.guest-book__form {
  flex: 1;
  margin-right: 20px;
}
.guest-book__messages {
  margin-top: 48px;
  max-width: 360px;
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
  .guest-book {
    padding: 0;
  }
  .guest-book__content {
    flex-direction: column;
    align-items: center;
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
}
</style>
