<template>
  <section class="guest-book">
    <div class="guest-book__form">
      <h2 class="section-title">Guest Book</h2>
      <p>Write us a message with your sweet, nice, silly or wise 👰🤵</p>
      <p>PS tips and tricks are allowed</p>
    </div>
    <div class="guest-book__messages">
      Samawa ya ...
    </div>
  </section>
</template>

<script>
export default {
  name: "GuestBook"
}
</script>

<style scoped>
.guest-book {
  display: flex;
}
.guest-book__form {
  margin-right: 20px;
}
.guest-book__messages {
  margin-left: 20px;
}
</style>