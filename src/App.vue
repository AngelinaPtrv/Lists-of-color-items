<template>
  <div
      id="app"
      class="app__wrap"
  >
    <left-panel :lists="lists" />
    <right-panel :lists="lists"/>
  </div>
</template>

<script>

import LeftPanel from '@/components/LeftPanel/LeftPanel';
import RightPanel from '@/components/RightPanel/RightPanel';

export default {
  name: 'App',

  components: {
    LeftPanel,
    RightPanel
  },

  data() {
    return {
      lists: []
    }
  },

  created() {
    this.$store.dispatch('fillArrayOfItems')
      .then(() => this.lists = this.$store.getters.getArrayOfItems)
  }
}
</script>

<style>

.app__wrap {
  border: solid 1px black;
  padding: 10px;
  margin: auto;
  width: 60vw;
  display: flex;
  justify-content: space-between;
}

</style>
