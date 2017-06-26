<template>
  <div class="main">
    <app-header></app-header>
    <app-subheader></app-subheader>
    <scroller class="scroller">
      <ul id="categories">
        <toggle-categories
          class="category"
          v-for="cat in categoryList.categories"
          :model="cat"
          :key="cat.id">
        </toggle-categories>
      </ul>
    </scroller>
  </div>
</template>

<style>
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px; }
  .categories-list { margin: 10px; width: 200px; height: 350px; background-color: #FFFFFF; box-shadow: 3px 3px 5px #ECECEC; }
  .categories .category { border-bottom: 1px solid #000000; }
  .text-center { text-align: center; }
</style>

<script>
  import AppHeader from './components/app-header.vue'
  import AppSubHeader from './components/app-subheader.vue'
  import ToggleCategories from './components/toggle-categories.vue'

  // categories data
  var cat_content = {
    categories: [
      {
        name: 'Air Conditioner',
        children: [
          { name: 'Split AC' },
          { name: 'Window AC' }
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
      }
    ]
  }

  console.log(cat_content);

  export default {
    components: { 
      'app-header': AppHeader,
      'app-subheader': AppSubHeader,
      'toggle-categories': ToggleCategories
    },
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      items: [
        { message: 'Lorem' },
        { message: 'Dolor' },
        { message: 'Sit' },
        { message: 'Amet' },
        { message: 'Portico' }
      ],
      categoryList: cat_content
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>