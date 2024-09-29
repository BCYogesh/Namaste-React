import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// Grouping test cases

describe("Contact us test case", () => {

    it("should render my contact us page or not", () => {
        render(<Contact />);

        // When test our component to be render or not, then we add into the JS DOM

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();

    });

    it("should render button my contact us page or not", () => {
        render(<Contact />);

        // When test our component to be render or not, then we add into the JS DOM

        const heading = screen.getByText("Submit");

        expect(heading).toBeInTheDocument();

    });


    it("should render place holder my contact us page or not", () => {
        render(<Contact />);

        // When test our component to be render or not, then we add into the JS DOM

        const heading = screen.getByPlaceholderText("name");

        expect(heading).toBeInTheDocument();

    });

    it("should render get all input my contact us page or not", () => {
        render(<Contact />);

        // When test our component to be render or not, then we add into the JS DOM

        const heading = screen.getAllByRole("textbox");

        expect(heading.length).toBe(2);

    });
})



