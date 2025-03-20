import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./app";
import { Home } from "./components/home/home";
import { Team1 } from "./components/team/team";
import { Pricing2 } from "./components/pricing/pricing";
import { Contact1 } from "./components/contact/contactMessenger";
import { Contact7 } from "./components/contact/contact";
import { FAQ1 } from "./components/faq/faq";
import { Signup } from "./components/login/signup";
import { Login3 } from "./components/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "team",
        element: <Team1 />,
      },
      {
        path: "leasingPrice",
        element: <Pricing2 />,
      },
      {
        path: "contactMessenger",
        element: <Contact1 />,
      },
      {
        path: "contact",
        element: <Contact7 />,
      },
      {
        path: "faq",
        element: <FAQ1 />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login3 />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
