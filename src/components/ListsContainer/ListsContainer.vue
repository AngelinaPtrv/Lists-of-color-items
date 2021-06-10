<template>
  <div>
    <div class="lists__container">
      <div @click="changeVisible(list)">
        <list-icon
            width="13"
            height="13"
            icon-name="arrow"
            :visible="list.visible"
        />
      </div>
        <input
            type="checkbox"
            v-model="checked"
            :class="list.checkedList ? 'checkbox__point' : ''"
        />
        <div
            class="noselect"
            @click="changeVisible(list)"
        >
          List {{ index + 1 }}
        </div>
    </div>
    <list-items-container
        :class="list.visible ? 'lists__items-visible' : 'lists__items'"
        :items="list.items"
        :indexOfList="index"
    />
  </div>
</template>

<script>
import ListItemsContainer from '@/components/ListItemsContainer/ListItemsContainer';
import ListIcon from '@/components/Icons/ListsIcon';

export default {
  name: "ListsContainer",

  components: {
    ListItemsContainer,
    ListIcon
  },

  props: {
    list: Object,
    index: Number
  },

  computed: {
    checked: {
      get() {
        return this.list.checked;
      },
      set(value) {
        this.$store.commit('setCheckedItems', {index: this.index, value});
      }
    }
  },

  methods: {
    changeVisible(obj) {
      obj.visible = !obj.visible
    }
  }
}
</script>

<style scoped>

.lists__container {
  display: flex;
}

.lists__hide,
.lists__items {
  display: none;
}

.lists__items-visible {
  display: flex;
  flex-direction: column;
}

.noselect {
  user-select: none;
}

.checkbox__point {
  position: relative;
}

.checkbox__point:before {
  content: '▪';
  position: absolute;
  top: -1px;
  left: 4px;
}

</style>