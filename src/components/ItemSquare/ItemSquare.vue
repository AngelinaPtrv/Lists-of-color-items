<template>
  <div
      class="square"
      @click="remove"
      :style="{backgroundColor: color}"
  />
</template>

<script>
export default {
  name: "ItemSquare",

  props: {
    color: String,
    index: Number
  },

  methods: {
    remove(){
      this.$store.commit('removeColor', {color: this.color, index: this.index});
    }
  }
}
</script>

<style scoped>

.square {
  overflow-wrap: break-word;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 2px 0 0;
}

</style>