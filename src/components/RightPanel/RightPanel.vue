<template>
  <section class="image__wrap">
    <div
        class="image__container"
        v-for="(item, index) of lists"
        :key="index"
    >
      <div class="image__info">
        <div>List {{ index + 1 }}</div>
        <button
            @click="changeOrder(item)"
            :for="index+1"
        >
          {{item.order ? 'Перемешать' : 'Сортировать'}}
        </button>
      </div>
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
  width: 43%;
  padding: 15px;
}

.image__container {
  border: black 1px solid;
  margin-bottom: 10px;
  padding: 5px;
}

.image__info {
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #00BFFF;
  color: white;
  border-radius: 4px;
  border-style: none;
}

</style>