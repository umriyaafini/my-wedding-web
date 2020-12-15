<template>
  <div class="introduction">
    <p class="introduction__date">20.12.2020</p>

    <h1 class="introduction__title">Umriya & Reza</h1>
    <p class="introduction__sub-title">We are getting married 👰🤵</p>

    <img class="introduction__img" src="/images/umandreza.png" alt="um and reza">
  </div>
</template>

<script>
export default {
  name: 'Introduction',
}
</script>

<style>
.introduction {
  text-align: center;
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
  max-width: 400px;
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
    max-width: 320px;
  }
}
</style>