const mutations = {
  setArrayOfItems(state, array) {
    state.arrayOfItems = array;
  },

  removeColor(state, payload) {
    let {color, index} = payload;
    const arrayOfItem = state.arrayOfItems[index].items;
    const i = arrayOfItem.findIndex(item => item.color === color);
    arrayOfItem[i].quantity--;
  },

  setCheckedItems(state, payload) {
    const listObj = state.arrayOfItems[payload.index];
    listObj.items.forEach(item => item.checked = payload.value);
    listObj.checkedList = false;
    listObj.checked = payload.value;
  },

  setCheckedList(state, payload) {
    const listObj = state.arrayOfItems[payload.indexOfList];
    listObj.items[payload.index].checked = payload.value;
    let countOfTrue = listObj.items.filter(item => item.checked).length;
    if (countOfTrue === 0) {
      listObj.checked = false;
      listObj.checkedList = false;
    } else if (countOfTrue === listObj.items.length) {
      listObj.checked = true;
      listObj.checkedList = false;
    } else {
      listObj.checked = false;
      listObj.checkedList = true;
    }
  }
};

export default mutations;