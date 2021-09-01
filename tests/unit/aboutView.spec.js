import { shallowMount } from "@vue/test-utils";
import About from "@/views/About";
import Show from "@/components/Show";

describe("about view", () => {
  const build = () => {
    const wrapper = shallowMount(About);

    return {
      wrapper,
      Show: () => wrapper.find(Show)
    };
  };

  it("renders the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the right", () => {
    const { Show } = build();
    expect(Show().exists()).toBe(true);
  });
});
