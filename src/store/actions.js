export default {
  GET_FOOD({ state, commit }, payload) {
    let food = state.foods.find(item => item.id === parseInt(payload.id));
    commit("REPLACE_FOOD_SELECTED", { food });
  },
  DELETE_FOOD({ state, commit }, payload) {
    let list = state.listMain;
    let newList = list.map(item => {
      if (item.id === payload.id) {
        item.foodsAsign = item.foodsAsign.filter(food => food.id != payload.foodId);
      }
      return item;
    });
    commit("REPLACE_NEW_LIST", { newList });
  },
  ADD_FOOD({ state, commit }, payload) {
    let list = state.listMain;
    let newList = list.map(item => {
      if (item.id === 2) {
        item.foodsAsign.push(payload);
      }
      return item;
    });
    commit("REPLACE_NEW_LIST", { newList });
  }
};
