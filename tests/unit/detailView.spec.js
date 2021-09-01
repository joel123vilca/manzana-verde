import { shallowMount, createLocalVue } from "@vue/test-utils";
import Detail from "@/views/Detail";
import Food from "@/components/Food";
import Vuex from "vuex";
import initialState from "@/store/state";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("detail view", () => {
  let store, getters;
  let commit;
  let state;
  beforeEach(() => {
    store = new Vuex.Store({
      getters
    });
    commit = jest.fn();
    state = { ...initialState };
  });
  const build = () => {
    const wrapper = shallowMount(Detail, {
      store,
      localVue
    });

    return {
      wrapper,
      Food: () => wrapper.find(Food)
    };
  };

  it("renders the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the right", () => {
    const { Food } = build();
    expect(Food().exists()).toBe(true);
  });

  it("vuex in food", () => {
    const { Food } = build();
    expect(Food().vm.food).toBe(store.getters.food);
  });
});
