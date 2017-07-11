<template>
  <div>
    <text
      class="category-name"
      @click="toggle">
      {{model.name}}
      <span v-if="isFolder">[{{isOpen ? '-' : '+'}}]</span>
    </text>
    <div v-if="isOpen">
      <toggle-categories
        class="category"
        v-for="sc in model.children"
        :model="sc"
        :key="sc.id">
      </toggle-categories>
    </div>
  </div>
</template>

<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: 600;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: none;
  }
  .category-name {
    display: flex;
    padding: 10px;
  }
</style>

<script>
  export default {
    name: 'toggle-categories',
    props: {
      model: Object
    },
    data: function () {
      // console.log('Open => '+open);
      return {
        isOpen: false
      }
    },
    computed: {
      isFolder: function () {
        // console.log('Children => '+this.model.children.name);
        if(this.model.children) {
          console.log('Length => '+this.model.children.length);
        }
        if(this.model.children && (this.model.children.length > 0)) {
          return true
        } else {
          return false
        }
        // return this.model.children && this.model.children.length
      }
    },
    methods: {
      toggle: function () {
        // console.log('Outside => '+this.isFolder);
        // console.log('Outside open => '+this.open);
        if (this.isFolder) {
          // console.log('Inside => '+this.isFolder);
          // console.log('Inside Before open => '+this.open);
          // this.open = !this.open
          this.isOpen = !this.isOpen
          console.log('Inside After is open => '+this.isOpen);
          // return this.open
        }
      }
    }
  }
</script>