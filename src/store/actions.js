import {data} from '@/data';

const actions = {
  fillArrayOfItems({commit}) {
    const items = [];
    data.forEach(item => items.push({
      items: item.map(item => {return {...item, checked: false }}),
      visible: false,
      checked: false,
      checkedList: false,
      order: false
    }));
    commit('setArrayOfItems', items)
  }
};

export default actions;