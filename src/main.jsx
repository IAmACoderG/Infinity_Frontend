import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Login, NewPost, SignUp, MyProfile, UserProfile } from "./pages";
import { AuthProtectionLayout } from "./components";
import Search from "./pages/Search/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthProtectionLayout authentication>
            <Home />
          </AuthProtectionLayout>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <AuthProtectionLayout authentication>
            <MyProfile />
          </AuthProtectionLayout>
        ),
      },
      {
        path: "/users/:id",
        element: (
          <AuthProtectionLayout authentication>
            <UserProfile />
          </AuthProtectionLayout>
        ),
      },
      {
        path: "/new-post",
        element: (
          <AuthProtectionLayout authentication>
            <NewPost />
          </AuthProtectionLayout>
        ),
      },
      {
        path: "/search",
        element: (
          <AuthProtectionLayout authentication>
            <Search />
          </AuthProtectionLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthProtectionLayout authentication={false}>
            <SignUp />
          </AuthProtectionLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthProtectionLayout authentication={false}>
            <Login />
          </AuthProtectionLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
