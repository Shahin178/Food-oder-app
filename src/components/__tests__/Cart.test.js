import RestaurantMenu from "../RestaurantMenu.jsx";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import Headers from "../Header.jsx";
import Cart from "../Cart.jsx";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Headers />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Platters (3)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("itemList").length).toBe(3);

  const cartBtn = screen.getByText("Cart - 0");
  expect(cartBtn).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart - 1")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - 2")).toBeInTheDocument();

  
  fireEvent.click(cartBtn);
  expect(screen.getAllByTestId("itemList").length).toBe(5);
  
  fireEvent.click(screen.getByText("Clear Cart"));
  expect(screen.getByText("Your cart is empty!")).toBeInTheDocument();
  expect(screen.getAllByTestId("itemList").length).toBe(3);
});
