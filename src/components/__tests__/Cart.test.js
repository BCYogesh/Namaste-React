import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import RestaurantMenu from '../RestaruantMenu';
import MOCK_DATA from '../Mocks/resMenu.json';
import { Provider } from 'react-redux';
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);

it("should load restaurant menu component", async () => {
    await React.act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Recommended(20)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId('foodItems').length).toBe(20);

    const addBtn = screen.getAllByRole('button', { name: 'Add +' });

    expect(screen.getByText('Cart - 0 Items')).toBeInTheDocument();

    fireEvent.click(addBtn[0]);

    expect(screen.getByText('Cart - 1 Items')).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(21);

});

