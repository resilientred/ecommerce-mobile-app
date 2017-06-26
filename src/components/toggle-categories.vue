<template>
  <li>
    <div
      :class="{bold: isFolder}"
      @click="toggle">
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <div v-if="open">askkvdjadkvadjvdkjv</div>
    <ul v-if="open">
      <toggle-categories
        class="category"
        v-for="model in model.children"
        :model="model"
        :key="model.id">
      </toggle-categories>
    </ul>
  </li>
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
        open: false
      }
    },
    computed: {
      isFolder: function () {
        console.log('Children => '+this.model.children);
        if(this.model.children) {
          console.log('Length => '+this.model.children.length);
        }
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle: function (event) {
        console.log(event);
        console.log('Outside => '+this.isFolder);
        console.log('Outside open => '+this.open);
        if (this.isFolder) {
          console.log('Inside => '+this.isFolder);
          console.log('Inside open => '+this.open);
          this.open = !this.open
        }
      }
    }
  }
</script>