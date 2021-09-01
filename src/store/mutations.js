export default {
  REPLACE_FOOD_SELECTED(state, { food }) {
    state.food = food;
  },
  REPLACE_NEW_LIST(state, { newDates }) {
    state.dates = newDates;
  },
  CHANGE_DATE(state, payload) {
    state.dates = payload.dates;
  },
  REPLACE_DATE(state, payload) {
    state.date = payload.date;
  }
};
