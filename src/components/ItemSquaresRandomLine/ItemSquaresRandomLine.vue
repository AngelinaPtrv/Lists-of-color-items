<template>
  <div class="line">
    <template v-for="(item, i) of getItems">
      <item-square
          :key="i"
          :color="item"
          :index="index"
      />
    </template>
  </div>
</template>

<script>

import ItemSquare from "@/components/ItemSquare/ItemSquare";

export default {
  name: "ItemSquaresRandomLine",

  components: {
    ItemSquare
  },

  props: {
    items: Array,
    index: Number
  },

  computed: {
    getItems() {
      let arr = [];
      this.items.forEach(item => item.checked && (arr = arr.concat(Array(item.quantity).fill(item.color))));
      this.shuffle(arr);
      return arr;
    }
  },

  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}
</script>

<style scoped>

.line {
  line-height: 10px;
  margin-bottom: 3px;
  margin-top: 3px;
}

</style>