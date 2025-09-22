import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should search resList with pizza text input", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
      </BrowserRouter>
    ));

    const intitalCards=screen.getAllByTestId("resCard");
    expect(intitalCards.length).toBe(8); 
    const searchBtn = screen.getByRole("button", { name:"Search"});
    // const searchInput = screen.getByPlaceholderText("Search for restaurants");
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Pizza" } });
    fireEvent.click(searchBtn);
    //assert screen should load 2 cards
    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1); 
});

test("should filter top rated restaurants when filter button is clicked",async()=>{
 await act(async ()=> render(
  <BrowserRouter>
  <Body />
  </BrowserRouter>
 ));

 const intitalCards= screen.getAllByTestId("resCard");
  expect(intitalCards.length).toBe(8);
  const filterbrn= screen.getByRole("button",{name:"Top Rated Restaurants" });
  fireEvent.click(filterbrn);
  const filteredCards= screen.getAllByTestId("resCard");
  expect(filteredCards.length).toBe(5); 
})