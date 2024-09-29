import { render, screen } from "@testing-library/react";
import RestaruantCard from "../RestaruantCard";
import MOCKDATA from "../Mocks/resMockData.json";
import "@testing-library/jest-dom"

it("should render restraurant card component with props data", () => {

    render(<RestaruantCard resData={MOCKDATA} />)

    const resName = screen.getByText("Domino's Pizza");

    // expect(resName).toBeInTheDocument();

})

it("should render restarurant card with higher order component label", () => {

    // pending
});