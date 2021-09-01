export default {
  GET_FOOD({ state, commit }, payload) {
    let food = state.foods.find(item => item.id === parseInt(payload.id));
    commit("REPLACE_FOOD_SELECTED", { food });
  },
  DELETE_FOOD({ state, commit }, payload) {
    let date = state.date;
    let dates = state.dates;
    let newList = date.listMain.map(item => {
      if (item.id === payload.id) {
        item.foodsAsign = item.foodsAsign.filter(food => food.id != payload.foodId);
      }
      return item;
    });
    let newDates = dates.map(element => {
      if (element.id === date.id) {
        element.listMain = newList;
        element.select = newList[1].foodsAsign.length == 0 ? false : true;
      }
      return element;
    });
    commit("REPLACE_NEW_LIST", { newDates });
  },
  ADD_FOOD({ state, commit }, payload) {
    let date = state.date;
    let dates = state.dates;
    let newList = date.listMain.map(item => {
      if (item.id === 2) {
        item.foodsAsign.push(payload);
      }
      return item;
    });
    let newDates = dates.map(element => {
      if (element.id === date.id) {
        element.listMain = newList;
        element.select = newList[1].foodsAsign.length == 0 ? false : true;
      }
      return element;
    });
    commit("REPLACE_NEW_LIST", { newDates });
  },
  CHANGE_DATE({ state, commit }, payload) {
    commit("REPLACE_DATE", payload);
    commit("CHANGE_DATE", payload);
  }
};
