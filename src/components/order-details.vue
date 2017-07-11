<template>
  <div class="orders">
    <div class="order-details">
      <div class="order-number">
        <text>Order No:</text>
        <text>{{model.orderNumber}}</text>
      </div>
      <div class="delivery-status">
        <text>Not Delivered</text>
        <text class="text-grey text-small">{{model.deliveryDate}}</text>
      </div>
    </div>
    <product-description-short
      class="product"
      v-for="prod in model.productDetails"
      :model="prod"
      :key="prod.id">
    </product-description-short>
    <text class="button cancel-order" value="Cancel Order" type="primary" @click="cancelOrder(model.orderNumber)"></text>
  </div>
</template>

<style scoped>
  .orders {
    padding: 25px;
    margin: 15px;
    background-color: #ffffff;
    box-shadow: 10px 10px 5px #cccccc;
  }
  .order-details {
    padding: 20px;
    border-bottom-style: solid;
    border-bottom-color: #cccccc;
    border-bottom-width: 1px;
    margin-bottom: 30px;
  }
  .order-number,
  .delivery-status {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .cancel-order {
    text-align: center;
    color: #6A63B2;
    padding: 20px;
    font-weight: 600;
  }
  .text-grey {
    color: #667777;
  }
  .text-small {
    font-size: 24px;
  }
</style>

<script>
  import ProductDescriptionInShort from './product-description-short.vue'
  export default {
    name: 'order-details',
    props: {
      model: Object
    },
    components: {
      'product-description-short': ProductDescriptionInShort
    },
    data: function() {
      return {
        orderNumber: '-',
        deliveryDate: '-'
      }      
    },
    methods: {
      cancelOrder: function(orderId) {
        console.log('Order cancelled with id => '+orderId);
      }
    }
  }
</script>