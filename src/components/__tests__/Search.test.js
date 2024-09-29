import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCKDATA from "../Mocks/resDataList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCKDATA)
        }
    })
})

// beforeAll(() => {
//     console.log("Before all");
// });

// beforeEach(() => {
//     console.log("Before each");
// });

// afterAll(() => {
//     console.log("After all");
// });

// afterEach(() => {
//     console.log("After each");
// })

it("should render search button in body component", async () => {
    //    render(<Body />)
    await React.act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const searchBtn = screen.getByRole('button', { name: 'Search' });

    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, { target: { value: 'veg' } });

    fireEvent.click(searchBtn);

    // const resCards = screen.getAllByTestId("resList");

    // const name = screen.getByRole("h3", { name: "KFC" });

    // assertion
    //expect(name).toBeInTheDocument();


})

