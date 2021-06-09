<template>
  <div class="items__wrap">
    <div class="items__info">
      <input
          type="checkbox"
          v-model="checked"
      />
      <div>Item {{ item }}</div>
    </div>
    <div class="items__input">
      <input/>
      <input type="color"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListOfItems",

  props: {
    item: Number,
    checkedItems: Boolean,
    checkedItem: Boolean
  },

  // data() {
  //   return {
  //     check: false
  //   }
  // },

  computed: {
    checked: {
      get() {
        return this.checkedItems;
      },
      set() {
        this.checkedItem = !this.checked;
      }
    },
  }
}
</script>

<style scoped>

.items__wrap {
  justify-content: space-around;
}
.items__info {
  display: flex;
}
.items__input input {
  border: none;
  width: 18px;
}

</style>