import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";
import Header from "@/components/Orders/Header";
import Main from "@/components/Orders/Main";

describe("home view", () => {
  const build = () => {
    const wrapper = shallowMount(Home);

    return {
      wrapper,
      Header: () => wrapper.find(Header),
      Main: () => wrapper.find(Main)
    };
  };

  it("renders the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the right", () => {
    const { Header, Main } = build();
    expect(Header().exists()).toBe(true);
    expect(Main().exists()).toBe(true);
  });
});
