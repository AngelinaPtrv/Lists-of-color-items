<template>
  <div class="images__wrap">
    <template v-if="order">
      <div
          v-for="(it, i) of item"
          :key="i"
      >
        <template v-if="it.checked">
          <item-squares-line
              :index="index"
              :quantity="it.quantity"
              :color="it.color"
          />
        </template>
      </div>
    </template>
    <template v-else>
      <item-squares-random-line
          :index="index"
          :items="item"
      />
    </template>
  </div>
</template>

<script>

import ItemSquaresLine from '@/components/ItemSquaresLine/ItemSquaresLine';
import ItemSquaresRandomLine from "@/components/ItemSquaresRandomLine/ItemSquaresRandomLine";

export default {
  name: "ItemImageContainer",

  components: {
    ItemSquaresRandomLine,
    ItemSquaresLine
  },

  props: {
    index: Number,
    item: Array,
    order: Boolean
  }
}
</script>

<style scoped>

.images__wrap {
  border: solid 1px black;
}

</style>