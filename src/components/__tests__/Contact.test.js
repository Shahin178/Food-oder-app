import Contact from "../Contact.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Component", () => {

  // beforeAll(() => {
  //   console.log("Before All" );})

  // beforeEach(() => {
  //   console.log("Before each" );})
    
  // afterEach(() => {
  //   console.log("After each" );})

  // afterAll(() => {
  //   console.log("After All" );})   
    

  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button in contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load placeholder text in contact us component", () => {
    render(<Contact />);
    const placeholderText = screen.getByPlaceholderText("Name");
    expect(placeholderText).toBeInTheDocument();
  });

  test("Should load 2 input boxes in contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes).toHaveLength(2);
  });
});
