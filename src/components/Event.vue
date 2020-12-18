<template>
  <section class="event">
    <div class="event__desc">
      <h2 class="section-title">
        {{ $t('event.title') }}
      </h2>
      <p class="event__date">{{ $t('event.date') }}</p>
      <p>{{ $t('event.day') }}</p>
      <p>{{ $t('event.place') }}</p>
      <br/>
      <p class="event__disclaimer">
        {{ $t('event.disclaimer') }}
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