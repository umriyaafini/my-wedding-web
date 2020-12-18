<template>
  <div class="introduction">
    <select v-model="$i18n.locale">
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang.val"
      >
        {{ lang.label }}
      </option>
    </select>
    <p class="introduction__date">20.12.2020</p>

    <h1 class="introduction__title">Umriya & Reza</h1>
    <p class="introduction__sub-title">{{ $t('introduction.caption') }}</p>

    <picture>
      <source type="image/webp" srcset="/images/umandreza.webp" />
      <source type="image/jpeg" srcset="/images/umandreza.jpeg" />
      <source type="image/jpeg" srcset="/images/umandreza.png" />
      <img
        src="/images/umandreza.png"
        alt="um and reza"
        class="introduction__img"
        width="820"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam === 'en') {
      this.$i18n.locale = 'en';
    }
  },
  data() {
    return {
      langs: [
        {
          val: 'en',
          label: 'EN',
        },
        {
          val: 'id',
          label: 'ID',
        },
      ],
    };
  },
};
</script>

<style>
.introduction {
  text-align: center;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  font-size: 14px;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #e8edf1;
  position: absolute;
  right: 16px;
  top: 16px;
}
.introduction__date {
  font-size: 28px;
  line-height: 49px;
  margin-top: 80px;
  margin-bottom: 120px;
}
.introduction__title {
  font-size: 48px;
  line-height: 84px;
  margin: 0;
}
.introduction__sub-title {
  font-size: 24px;
  line-height: 40px;
  margin: 0;
}
.introduction__img {
  margin-top: 120px;
  max-width: 820px;
}

@media screen and (max-width: 992px) {
  .introduction__date {
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 60px;
  }
  .introduction__title {
    font-size: 40px;
    line-height: 70px;
  }
  .introduction__img {
    margin-top: 40px;
    max-width: 360px;
  }
}
</style>
