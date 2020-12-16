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
import Introduction from './components/Introduction';
import OurStory from './components/OurStory';
import Event from './components/Event';

const Award = () =>
  import(/* webpackChunkName: 'Award' */ './components/Award');
const GuestBook = () =>
  import(/* webpackChunkName: 'GuestBook' */ './components/GuestBook');
const SupportUs = () =>
  import(/* webpackChunkName: 'SupportUs' */ './components/SupportUs');

export default {
  name: 'App',
  components: {
    Introduction,
    OurStory,
    Event,
    Award,
    GuestBook,
    SupportUs,
  },
};
</script>

<style>
body {
  font-size: 16px;
  line-height: 28px;
  color: #262830;
  overflow-x: hidden;
}
p {
  margin: 0;
}
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
#app {
  font-family: 'Work Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1120px;
  margin: 0 auto;
}
section {
  padding: 48px 88px;
  margin: 40px auto;
  border-radius: 24px;
}
.section-title {
  font-size: 30px;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 24px;
}
@media screen and (max-width: 992px) {
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }

  section {
    padding: 0 24px;
    margin-bottom: 40px;
    max-width: 360px;
  }
}
</style>
