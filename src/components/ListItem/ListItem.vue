<template>
  <div class="items__wrap">
    <div class="items__info">
      <input
          type="checkbox"
          v-model="checked"
      />
      <div>Item {{ index + 1 }}</div>
    </div>
    <div class="items__input">
      <input
          type="number"
          min="0"
          v-model="quantity"
      />
      <input
          type="color"
          v-model="item.color"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",

  props: {
    item: Object,
    index: Number,
    indexOfList: Number
  },

  computed: {
    quantity: {
      get() {
        return this.item.quantity;
      },
      set(value) {
        this.item.quantity = +value;
      }
    },
    checked: {
      get() {
        return this.item.checked;
      },
      set(value) {
        this.$store.commit('setCheckedList', {indexOfList: this.indexOfList, index: this.index, value})
      }
    }
  }
}
</script>

<style scoped>

.items__wrap {
  display: flex;
  justify-content: space-around;
}

.items__info {
  display: flex;
}

input[type=number]{
  border: none;
  width: 35px;
}

input[type=number]:focus-visible{
  outline: none;
}

input[type=color] {
  background-color: white;
  border: none;
  width: 20px;
}

</style>