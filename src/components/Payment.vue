<template>
  <div class="payment" v-if="show">
    <div class="payment-inside">
      <div class="payment__header">
        <button class="payment__close-btn" @click="handleClose">
          <img src="/images/cross.svg" alt="close modal" />
        </button>
      </div>
      <div class="payment__body">
        <div class="payment__form">
          <iframe
            src="https://rezafaizarahman.typeform.com/to/BBB5CODT"
            height="320px"
            width="100%"
            style="border:none;"
            title="Payment Delivery"
          ></iframe>
        </div>
        <div class="payment__method">
          <h4>Nomor rekening yang tersedia</h4>
          <details>
            <summary>GO-PAY</summary>
            <div class="payment__method-detail">
              <p>Kirim ke nomor <b>+62 85 7747 93937</b></p>
              <p>Atau scan QR Code di bawah ini</p>
              <picture>
                <source
                  type="image/webp"
                  srcset="/images/payment/gopay.webp"
                />
                <source
                  type="image/png"
                  srcset="/images/payment/gopay.jpg"
                />
                <img src="/images/payment/gopay.jpg" alt="gopay qr" />
              </picture>
            </div>
          </details>
          <details>
            <summary>OVO</summary>
            <div class="payment__method-detail">
              <p>Kirim ke nomor <b>+62 8522 866 9196</b></p>
              <p>Atau scan QR Code di bawah ini</p>
              <picture>
                <source
                  type="image/webp"
                  srcset="/images/payment/ovo.webp"
                />
                <source
                  type="image/png"
                  srcset="/images/payment/ovo.jpg"
                />
                <img src="/images/payment/ovo.jpg" alt="ovo qr" />
              </picture>
            </div>
          </details>
          <details>
            <summary>DANA</summary>
            <div class="payment__method-detail">
              <p>Kirim ke nomor <b>+62 8522 866 9196</b></p>
              <p>Atau scan QR Code di bawah ini</p>
              <picture>
                <source
                  type="image/webp"
                  srcset="/images/payment/dana.webp"
                />
                <source
                  type="image/png"
                  srcset="/images/payment/dana.jpg"
                />
                <img src="/images/payment/dana.jpg" alt="dana qr" />
              </picture>
            </div>
          </details>
          <details>
            <summary>BCA</summary>
            <div class="payment__method-detail">
              <p>Kirim ke nomor rekening <b>0097139818</b></p>
              <p>Atau scan QR Code di bawah ini</p>
              <picture>
                <source
                  type="image/webp"
                  srcset="/images/payment/bca.webp"
                />
                <source
                  type="image/png"
                  srcset="/images/payment/bca.jpg"
                />
                <img src="/images/payment/bca.jpg" alt="bca qr" />
              </picture>
            </div>
          </details>
          <details>
            <summary>JENIUS</summary>
            <div class="payment__method-detail">
              <p>Kirim ke nomor rekening <b>90011114944</b></p>
              <p>Atau ke Cashtag</p>
              <h3>$umriya</h3>
            </div>
          </details>
        </div>
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
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
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
  padding: 0px 32px 32px;
  overflow: auto;
}
.payment__header {
  text-align: right;
  position: sticky;
  top: 0;
  background: #fff;
  padding: 32px 0 16px;
}
.payment__close-btn {
  border: none;
  background: none;
  cursor: pointer;
}
/* Accordion */
.payment__method h4 {
  font-size: 16px;
  line-height: 24px;
}
.payment__method details {
  border: 1px solid #e8edf1;
  margin-bottom: 24px;
  border-radius: 12px;
}
.payment__method summary {
  padding: 16px;
  text-align: left;
  font-weight: 600;
}
.payment__method-detail {
  border-top: 1px solid #e8edf1;
  padding: 16px;
}
.payment__method-detail img {
  max-width: 240px;
}
@media screen and (max-width: 992px) {
  .payment-inside {
    margin: 40px auto 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
