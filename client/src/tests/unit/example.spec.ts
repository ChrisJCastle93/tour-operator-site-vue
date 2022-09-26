import { mount } from "@vue/test-utils";

// // import CartItem from "../../../src/components/CartItem.vue";

// #1 INTIAL CHECK
import TestTest from "../../components/TestTest.vue";
describe("#1 Test - Is it working?", () => {
  test("is present", () => {
    const wrapper = mount(TestTest);
    const div = wrapper.find("h1");
    expect(div.exists()).toBe(true);
  });
});

// // #2 TEST THAT TOURS ARE LOADING ON THE HOMEPAGE
// jest.mock("../../services/TourService");
// import getTours from "../../services/TourService";
// // import HomeView from "../../views/HomeView.vue";
// import { Tour } from "../../types/types";

import { obj } from "./tours";

console.log(obj);

// beforeEach(() => {
//   jest.clearAllMocks();
// });

// const mockedGetTours = getTours as unknown as jest.Mock<Tour[]>;

// describe("MessageDisplay", () => {
//   it("Calls getMessage and displays message", async (): Promise<void> => {
//     const parsedData = obj as never;
//     mockedGetTours.mockResolvedValueOnce(parsedData);
//     // mockedGetTours.mockResolvedValueOnce({ tours });
//     // const wrapper = mount(HomeView);

//     // await flushPromises();
//     expect(getTours).toHaveBeenCalledTimes(1);

//     // const message = wrapper.find('[data-testid="message"]').text();
//     // expect(message).toEqual(mockMessage);
//   });
// });

// // #3 TEST THAT REVIEWS ARE LOADING ON THE HOMEPAGE

// // #4 TEST THAT CLICKING LEAVE A REVIEW OPENS UP A MODAL

// // #5 MOCK AN API CALL AXIOS

// // #6

// // #7

// // #8

// // #9

// // #10

// // Testing the cart item component

// // describe("CartItem", () => {
// //   const wrapper = mount(CartItem, {
// //     props: {
// //       item: { title: "test", qty: 1, price: 100 },
// //     },
// //   });
// //   const div = wrapper.find("h3");

// //   test("renders", async () => {
// //     expect(div.exists()).toBe(true);
// //   });

// //   test("renders 2", async () => {
// //     expect(wrapper.html()).toContain("<h3>test</h3>");
// //   });
// // });
