import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "@fontsource-variable/inter";
import "./index.css";
import { Buttons } from "./components/buttons/Buttons";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex p-2 items-center justify-center">
        <Link to="buttons" className="underline">
          Buttons
        </Link>
      </div>
    ),
  },
  {
    path: "buttons",
    element: <Buttons />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
