<template>
  <div class="payment" v-if="show">
    <div class="payment-inside">
      <div class="payment-inside__header">
        <button class="payment-inside__close-btn" @click="handleClose">
          <img
            src="/images/cross.svg"
            alt="close modal"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.payment {
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.payment-inside {
  margin: 40px auto;
  width: 800px;
  background: #fff;
  border-radius: 20px;
  padding: 32px;
}
.payment-inside__header {
  text-align: right;
}
.payment-inside__close-btn {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
