<template>
  <div class="main">
    <app-header></app-header>
    <app-subheader></app-subheader>
    <scroller>
      <div id="categories">
        <toggle-categories
          class="category"
          v-for="cat in categoryList.categories"
          :model="cat"
          :key="cat.id">
        </toggle-categories>
      </div>

      <!-- <div class="text-center">
        <div @click="toggle" class="click-text">Click me!</div>
      </div>
      <text v-if="show" class="text">Displayed!</text> -->
    </scroller>
  </div>
</template>

<style>
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px; }
  .categories-list { width: 200px; height: 350px; background-color: #FFFFFF; box-shadow: 3px 3px 5px #ECECEC; }
  .categories .category { border-bottom: 1px solid #000000; }
  .text-center { text-align: center; }
  .click-text { padding: 20px !important; margin-bottom: 10px !important; }
</style>

<script>
  import AppHeader from './components/app-header.vue'
  import AppSubHeader from './components/app-subheader.vue'
  import ToggleCategories from './components/toggle-categories.vue'

  Vue.component('toggle-categories', ToggleCategories)

  // categories data
  var cat_content = {
    categories: [
      {
        name: 'Air Conditioner',
        children: [
          {
            name: 'Split AC',
            children: [
              {
                name: 'Split AC',
                children: [
                  { name: 'test sub' }
                ]
              },
            ]
          },
          { name: 'Window AC',
            children: [
              { name: 'test sub' }
            ]
          }
        ]
      },
      {
        name: 'Refrigerators',
        children: [
          { name: '10 litres' },
          { name: '12 litres' }
        ]
      },
      {
        name: 'Telivision',
        children: [
          { name: 'CRT' },
          { name: 'LCD' }
        ]
      },
      {
        name: 'Test'
      }
    ]
  }

  console.log(cat_content);

  export default {
    components: { 
      'app-header': AppHeader,
      'app-subheader': AppSubHeader
    },
    data: function () {
      return {
        categoryList: cat_content,
        show: false
      }
    },
    methods: {
      toggle: function () {
        console.log('Clicked!!!');
        this.show = !this.show
      }
    }
  }
</script>