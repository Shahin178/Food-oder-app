import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import UserContext from "./utils/UserContext.js";

const App = () => {
  const [userInfo, setUserInfo]= useState();

  useEffect(()=>{
    const data={
      name:"shahin Bano",
    }
    setUserInfo(data.name)
  },[])

  return (
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default App;
export { appRouter };
