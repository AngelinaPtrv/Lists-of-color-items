<template>
  <section class="image__wrap">
    <div
        v-for="(item, index) of lists"
        :key="index"
    >
      <div>List {{ index + 1 }}</div>
      <button
          @click="changeOrder(item)"
          :for="index+1"
      >
        {{item.order ? 'Перемешать' : 'Сортировать'}}
      </button>
      <item-image-container
          :order="item.order"
          :index="index"
          :item="item.items"
      />
    </div>
  </section>
</template>

<script>


import ItemImageContainer from '@/components/ItemImageContainer/ItemImageContainer';

export default {
  name: "RightPanel",
  components: {
    ItemImageContainer
  },

  props: {
    lists: Array
  },

  methods: {
    changeOrder(obj){
      obj.order = !obj.order;
    }
  }
}
</script>

<style scoped>

.image__wrap {
  border: black 1px solid;
  width: 40%;
}

</style>