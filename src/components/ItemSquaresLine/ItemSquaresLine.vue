<template>
  <div class="line">
    <item-square v-for="qty of quantity" :index="index" :key="qty" :color="color"/>
  </div>
</template>

<script>
import ItemSquare from "@/components/ItemSquare/ItemSquare";

export default {
  name: "ItemSquaresLine",

  components: {
    ItemSquare
  },

  props: {
    quantity: Number,
    color: String,
    index: Number
  },
}
</script>

<style scoped>

.line {
  line-height: 10px;
  margin-bottom: 3px;
  margin-top: 3px;
}

</style>