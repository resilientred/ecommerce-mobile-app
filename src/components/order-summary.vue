<template>
  <div class="order-details">
    <text class="comp-title">ORDER SUMMARY</text>
    <div class="order-number">
      <text>TXN No.</text>
      <text>{{model.txnNumber}}</text>
    </div>
    <div class="order-charges">
      <div class="total-value">
        <text class="total-cart-text text-grey">Total Cart Value</text>
        <text class="total-cart-amt">{{model.totalAmt}}</text>
      </div>
      <div class="delivery-charges">
        <text class="delivery-text text-grey">Delivery Charges</text>
        <text class="delivery-amt">{{model.deliveryCharges}}</text>
      </div>
    </div>
    <div class="net-payable">
      <text class="net-amt-text">Net Payable Amount</text>
      <text class="net-amt">{{model.netAmt}}</text>
    </div>
  </div>
</template>

<style scoped>
.order-details {
  background-color: #FFFFFF;
  box-shadow: 10px 10px 5px rgb(0, 0, 0) !important;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.comp-title {
  color: #ec1c38;
  font-size: 48px;
}
.comp-title,
.order-number,
.order-charges,
.net-payable {
  padding-top: 20px;
  padding-bottom: 20px;
}
.order-number,
.total-value,
.delivery-charges,
.net-payable {
  flex-direction: row;
  justify-content: space-between;
}
.net-payable {
  border-top-style: solid;
  border-top-color: #cccccc;
  border-top-width: 1px;
  font-size: 24px;
}
.text-grey {
  color: #6D7777;
}
</style>
<script>
  export default({
    name: 'order-summary',
    props: {
      model: Object
    },
    data: function () {
      return {
        txnNumber: '-',
        totalValue: 0,
        deliveryAmt: 0,
        netAmt: 0
      }
    }
  })
</script>