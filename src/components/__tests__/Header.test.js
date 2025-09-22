import { Provider } from "react-redux";
import Header from "../Header.jsx";
import { fireEvent, render, screen } from "@testing-library/react";
import appstore from "../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

test("should render header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  // const loginButton = screen.getByRole("button", {name: "Login"}); //more specific if multiple buttons
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

test("should render header component with a cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart - 0");
  expect(cartItem).toBeInTheDocument();
});

test("should render header component with a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("should change login button to logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
