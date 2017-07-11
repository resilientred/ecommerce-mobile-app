<template>
  <div class="order-confirmation-details">
    <app-header></app-header>
    <app-subheader></app-subheader>
    <ul>
      <li>
        <v-link href="/">Home</v-link>
      </li>
    </ul>
    <!-- <scroller class="scroller"> -->
      <div class="order-confirmed">
        <div style="width: 50px;"></div>
        <div class="order-number">
          <text class="comp-title">Order Confirmed</text>
          <text>Order No. {{orderNumber}}</text>
          <text></text>
        </div>
        <text class="order-description text-small">Your order is currently being processed. Your order will be delivered to the given address as per the scheduled date and time.</text>
        <text class="button cancel-order" value="Cancel Order" type="primary" @click="cancelOrder(orderNumber)"></text>
      </div>
      <order-summary :model="orderSummaryData"></order-summary>
      <div class="more button" @click="shopMore">
        <text class="text-red font-bold">SHOP MORE</text>
        <image class="forward-icon" src="https://s2.postimg.org/4u4kccet5/forward.png"></image>
      </div>
    <!-- </scroller> -->
  </div>
</template>

<style scoped>
  .order-confirmed {
    padding: 25px;
    margin: 15px;
    background-color: #ffffff;
    box-shadow: 10px 10px 5px #cccccc;
  }
  .comp-title {
    color: #97A3A1;
    font-weight: 700;
    font-size: 48px;
  }
  .order-number {
    padding: 20px;
    border-bottom-style: solid;
    border-bottom-color: #cccccc;
    border-bottom-width: 1px;
  }
  .order-description {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 24px;
  }
  .cancel-order {
    text-align: center;
    color: #6A63B2;
    padding: 20px;
    font-weight: 600;
  }
  .more {
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .forward-icon{
    height: 40px;
    width: 70px;
    padding-left: 10px;
  }
  .text-red {
    color: #ec1c38;
  }
  .font-bold {
    font-weight: 600;
  }
</style>
<script>
  import AppHeader from '../components/app-header.vue'
  import AppSubHeader from '../components/app-subheader.vue'
  import OrderSummary from '../components/order-summary.vue'
  import VLink from '../components/VLink.vue'
  export default {
    components: {
      'app-header': AppHeader,
      'app-subheader': AppSubHeader,
      'order-summary': OrderSummary,
      'v-link': VLink
    },
    data: function() {
      return {
        orderNumber: '-',
        orderSummaryData: {
          txnNumber: '22265376264936620',
          totalAmt: 9898,
          deliveryCharges: 101,
          netAmt: 9999
        }
      }      
    },
    methods: {
      getOrderNumber: function() {
        this.orderNumber = '22265376264936620'
      },
      cancelOrder: function(orderId) {
        console.log('Order cancelled with id => '+orderId);
      },
      shopMore: function() {
        console.log('Shop more button clicked!');
      }
    },
    created: function() {
      this.getOrderNumber()
    }
  }
</script>