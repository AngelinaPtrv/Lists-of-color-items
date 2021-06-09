<template>
  <section class="lists__wrap">
    <div
        v-for="(obj, index) of quantity"
        :key="index"
    >
      <input
          type="checkbox"
          :id="index"
          class="lists__hide"
          v-model="obj.visible"/>
      <icon-base
          width="13"
          height="13"
          icon-name="arrow"
      >
        <template v-if="obj.visible">
          <icon-down-arrow />
        </template>
        <template v-else>
          <icon-right-arrow />
        </template>
      </icon-base>
      <template v-if="!obj.checkedItem">
        <input
            type="checkbox"
            v-model="obj.checkedItems"
        />
      </template>
      <template v-else>
        <input
            type="radio"
            v-model="obj.checkedItem"
        />
      </template>
      <label :for="index"> List {{ ++index }}</label>
      <list-of-items
          :class="obj.visible ? 'lists__items-visible' : 'lists__items'"
          v-for="item of obj.items"
          :item="item"
          :checkedItems="obj.checkedItems"
          :checkedItem="obj.checkedItem"
          :key="item"/>
    </div>
  </section>
</template>

<script>

import ListOfItems from '@/components/ListOfItems/ListOfItems';
import IconBase from '@/components/Icons/IconBase';
import IconRightArrow from '@/components/Icons/IconRightArrow';
import IconDownArrow from '@/components/Icons/IconDownArrow';

export default {
  name: "ListsOfItems",

  components: {
    ListOfItems,
    IconBase,
    IconRightArrow,
    IconDownArrow
  },

  props: {
    quantity: Array
  }
}
</script>

<style scoped>

.lists__wrap {
  border: black 1px solid;
  width: 40%;
}
.lists__hide,
.lists__items {
  display: none;
}
.lists__items-visible {
  display: flex;
}

</style>