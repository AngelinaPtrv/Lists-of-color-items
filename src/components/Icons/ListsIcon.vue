<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 18 18"
       :aria-labelledby="iconName"
       role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <icon-down-arrow v-if="visible"/>
      <icon-right-arrow v-else/>
    </g>
  </svg>
</template>

<script>
import IconRightArrow from '@/components/Icons/IconRightArrow';
import IconDownArrow from '@/components/Icons/IconDownArrow';

export default {
  name: "IconBase",
  components: {
    IconRightArrow,
    IconDownArrow
  },

  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>