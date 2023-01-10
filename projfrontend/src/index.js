import React from "react";
import RoutesFile from "./RoutesFile";
import ReactDOM from 'react-dom/client';
import {RouterProvider, BrowserRouter as Router} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <React.StrictMode>
      <RouterProvider router={RoutesFile} />
    </React.StrictMode>
    </>
  );


