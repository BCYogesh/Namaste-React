import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("Should render header component with login button", () => {

    // JSDOM
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const button = screen.getByRole("button", { name: 'Log in' });

    // Assertion
    expect(button).toBeInTheDocument();
});

it("Should button login/logout click event", () => {
    // JSDOM
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const logIn = screen.getByRole("button", { name: 'Log in' });
    fireEvent.click(logIn);

    const logOut = screen.getByRole("button", { name: "Log out" });
    // Assertion
    expect(logOut).toBeInTheDocument();
})