import { mount, shallowMount } from "@vue/test-utils";
import CartItem from "../../../src/components/CartItem.vue";
import TestTest from "../../../src/components/TestTest.vue";

// console.log(CartItem);

describe("TestComponent", () => {
  test("is present", () => {
    const wrapper = mount(TestTest);
    const div = wrapper.find("h1");
    expect(div.exists()).toBe(true);
  });
});

// Testing the cart item component

describe("CartItem", () => {
  const wrapper = mount(CartItem, {
    props: {
      item: { title: "test", qty: 1, price: 100 },
    },
  });
  const div = wrapper.find("h3");

  test("renders", async () => {
    expect(div.exists()).toBe(true);
  });

  test("renders 2", async () => {
    expect(wrapper.html()).toContain("<h3>test</h3>");
  });
});
