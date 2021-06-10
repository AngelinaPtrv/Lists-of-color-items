<template>
  <section class="lists__wrap">
    <div
        v-for="(list, index) of lists"
        :key="index"
    >
    <lists-container :list="list" :index="index"/>
    </div>
  </section>
</template>

<script>

import ListsContainer from '@/components/ListsContainer/ListsContainer';


export default {
  name: "LeftPanel",

  components: {
    ListsContainer
  },

  props: {
    lists: Array
  }


}
</script>

<style scoped>

.lists__wrap {
  border: black 1px solid;
  width: 40%;
}



</style>