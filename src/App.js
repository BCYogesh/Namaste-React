import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaruantMenu from "./components/RestaruantMenu";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));


const AppLayout = () => {

  const [userName, setUserName] = useState('');


  useEffect(() => {
    const firstName = {
      name: 'Gokila'
    }
    setUserName(firstName.name);
  }, [])

  return (
    // update the context ddta
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grossary",
        element:
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaruantMenu />,
      },
    ],
    errorElement: <Error />,
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
