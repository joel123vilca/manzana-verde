import mutations from "@/store/mutations";
import initialState from "@/store/state";
import food from "./fixtures/food";

describe("Mutations", () => {
  let state;
  beforeEach(() => {
    state = { ...initialState };
  });

  it("set a food", () => {
    const expectedFood = {
      id: food.id,
      name: food.name,
      ingredients: food.ingredients
    };
    state.food = expectedFood;
    mutations.REPLACE_FOOD_SELECTED(state, { food });
    expect(state.food).toHaveProperty("id", 2);
    expect(state.food).toHaveProperty("name", "Pescado escalfado con trigo");
    expect(state.food).toHaveProperty(
      "ingredients",
      "Delicioso plato de pasta con pollo verduras salteadas y chia"
    );
  });
});
