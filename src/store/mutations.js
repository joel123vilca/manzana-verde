export default {
  REPLACE_FOOD_SELECTED(state, { food }) {
    state.food = food;
  },
  REPLACE_NEW_LIST(state, { newList }) {
    state.listMain = newList;
  }
};
