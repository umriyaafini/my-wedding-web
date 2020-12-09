<template>
  <section class="event">
    <div class="event__desc">
      <h2 class="section-title">
        Wedding Ceremony
      </h2>
      <p>December 20, 2020</p>
      <p> Sunday, 09.00 AM</p>
      <br/>
      <p>
        Due to the existence of Covid-19, we sincerely apologize because it is not possible to invite all of you to our wedding ceremony. Our sincere thanks for the prayers and blessings you are given.
      </p>
    </div>
    <div class="event__photos">
      <img src="../assets/ceremony.png" alt="event" />
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
  flex-direction: row-reverse;
}
.event__desc {
  flex: 1;
}

@media screen and (max-width: 992px) {
  .event {
    flex-direction: column;
    align-items: center;
  }

  .event__desc {
    margin-bottom: 40px;
  }
}
</style>