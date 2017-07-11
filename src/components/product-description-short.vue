<template>
  <div class="product-details-short">
    <text class="product-name text-grey">{{model.name}}</text>
    <div class="product-image">
      <image class="image" :src="model.url" style="height: 100px; width: 150px;"></image>
    </div>
  </div>
</template>
<style scoped>
  .product-details-short {
    padding: 20px;
    flex-direction: row;
    height: 120px;
  }
  .product-name {
    flex: 7;
    flex-direction: column;
    justify-content: space-between;
    font-size: 28px;
  }
  .product-image {
    flex: 3;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .product-image .image {
    height: 150px;
    width: 150px;
  }
  .text-grey {
    color: #6D7777;
  }
</style>
<script>
  export default {
    name: 'product-description-short',
    props: {
      model: Object
    },
    data: function() {
      return {
        name: '--',
        url: '--'
      }
    }
  }
</script>