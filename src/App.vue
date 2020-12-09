<template>
  <div id="app">
    <introduction />
    <our-story />
    <event />
    <award />
    <guest-book />
    <support-us />
  </div>
</template>

<script>
import Introduction from "./components/Introduction";
import OurStory from "./components/OurStory";

const Event = () => import("./components/Event");
const Award = () => import("./components/Award");
const GuestBook = () => import("./components/GuestBook");
const SupportUs = () => import("./components/SupportUs");

export default {
  name: 'App',
  components: {
    Introduction,
    OurStory,
    Event,
    Award,
    GuestBook,
    SupportUs
  }
}
</script>

<style>
body {
  font-size: 16px;
  line-height: 28px;
  color: #262830;
}
p {
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 960px;
  margin: 0 auto;
}
section {
  padding: 0 40px;
  margin-bottom: 80px;
}
@media screen and (max-width: 992px) {
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    margin-bottom: 40px;
    max-width: 360px;
  }
}
</style>
