<template>
  <div class="my-order-details">
    <app-header></app-header>
    <scroller class="scroller">
      <div class="my-orders">
        <order-details
          class="orders"
          v-for="order in orders.orderDetails"
          :model="order"
          :key="order.id">
        </order-details>
      </div>
      <div class="more button" @click="showOlderOrders">
        <text class="text-red font-bold">Show Older Orders</text>
      </div>
    </scroller>
  </div>
</template>

<style scoped>
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
  .text-red {
    color: #ec1c38;
  }
  .font-bold {
    font-weight: 600;
  }
</style>
<script>
  import AppHeader from '../components/app-header.vue'
  import OrderDetails from '../components/order-details.vue'

  export default {
    components: {
      'app-header': AppHeader,
      'order-details': OrderDetails
    },
    data: function() {
      return {
        orders: {
          orderDetails: [
            {
              orderNumber: '22265376264936621',
              deliveryDate: 'Wed, 11 July 2017',
              productDetails: [
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                },
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                },
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                }
              ]
            },
            {
              orderNumber: '22265376264936622',
              deliveryDate: 'Wed, 11 July 2017',
              productDetails: [
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                },
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                },
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                }
              ]
            },
            {
              orderNumber: '22265376264936623',
              deliveryDate: 'Wed, 11 July 2017',
              productDetails: [
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                },
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                },
                {
                  name: 'Voltas 155 CY 1.2 Ton 5 Star Split AC (White)',
                  url: 'https://s19.postimg.org/sm6pzlkhv/voltas-ac.png'
                }
              ]
            }
          ]
        }
      }
    },
    methods: {
      showOlderOrders: function() {
        console.log('Show older orders button clicked!');
      }
    }
  }
</script>