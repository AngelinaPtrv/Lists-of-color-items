const getters = {
  getArrayOfItems(state) {
    return state.arrayOfItems;
  },

  getCheckedElement: (state) =>
    (index) => {
    console.log(index);
      console.log(state.arrayOfItems.filter(item => item[index]).checked);
      return state.arrayOfItems.filter(item => item[index]).checked;
    },

  getCheckedList(state) {
    return state.checkedList;
  }
};

export default getters;