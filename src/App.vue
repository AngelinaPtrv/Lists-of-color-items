<template>
  <div
      id="app"
      class="app__wrap"
  >
    <lists-of-items :quantity="quantityOfItems" />
    <image-of-items :quantityOfColor="quantityColorItems"/>
  </div>
</template>

<script>

import ListsOfItems from '@/components/ListsOfItems/ListsOfItems';
import ImageOfItems from '@/components/ImageOfItems/ImageOfItems';

export default {
  name: 'App',

  components: {
    ListsOfItems,
    ImageOfItems
  },

  data() {
    return {
      quantityOfItems: [
        {visible: false, items: 4, checkedItems: false, checkedItem: false, id: 1},
        {visible: false, items: 6, checkedItems: false, checkedItem: false, id: 2},
        {visible: false, items: 7, checkedItems: false, checkedItem: false, id: 3},
        {visible: false, items: 9, checkedItems: false, checkedItem: false, id: 4},
        {visible: false, items: 10, checkedItems: false, checkedItem: false, id: 5}
      ]
    }
  },

  computed: {
    quantityColorItems() {
      return this.quantityOfItems.filter(list => list.checkedItems)
    }
  }
}
</script>

<style>

.app__wrap {
  display: flex;
  justify-content: space-around;
}

</style>
