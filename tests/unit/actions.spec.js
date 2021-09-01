import actions from "@/store/actions";
import initialState from "@/store/state";
import food from "./fixtures/food";

describe("Store actions", () => {
  let commit;
  let state;
  beforeEach(() => {
    commit = jest.fn();
    state = { ...initialState };
  });

  it("get food by id", async () => {
    const expectedFood = {
      id: 2
    };
    actions.GET_FOOD({ state, commit }, expectedFood);
    expect(commit).toHaveBeenCalledWith("REPLACE_FOOD_SELECTED", { food });
  });
});
