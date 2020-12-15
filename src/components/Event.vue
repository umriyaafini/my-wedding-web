<template>
  <section class="event">
    <div class="event__desc">
      <h2 class="section-title">
        Wedding Ceremony
      </h2>
      <p class="event__date">December 20, 2020</p>
      <p>A Sunday, 09.00 AM</p>
      <p>Semarang, Indonesia</p>
      <br/>
      <p class="event__disclaimer">
        Due to the existence of Covid-19, we sincerely apologize because it is not possible to invite all of you to our wedding ceremony. Our sincere thanks for the prayers and blessings you are given.
      </p>
    </div>
    <div class="event__photos">
      <img src="/images/ceremony.png" alt="event" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Event"
}
</script>

<style>
.event {
  display: flex;
  align-items: center;
}
.event__desc {
  width: 50%;
  margin-right: 40px;
}
.event__date {
  font-weight: 600;
}
.event__disclaimer {  
  font-size: 12px;
  line-height: 18px;
}

@media screen and (max-width: 992px) {
  .event {
    flex-direction: column;
    align-items: center;
  }

  .event__desc {
    margin-bottom: 40px;
    margin-right: 0;
    width: 100%;
  }
}
</style>