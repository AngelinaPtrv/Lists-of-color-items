<template>
  <div>
    <div
        v-for="(item, index) of items"
        :key="index"
    >
      <list-item
          :item="item"
          :index="index"
          :indexOfList="indexOfList"
      />
    </div>
  </div>
</template>

<script>

import ListItem from '@/components/ListItem/ListItem';

export default {
  name: "ListItemsContainer",

  components: {
    ListItem
  },

  props: {
    items: Array,
    indexOfList: Number
  }
}
</script>

<style scoped>

</style>