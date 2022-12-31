import React from "react";
import Routes from "./Routes";
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

// //ReactDOM.render(<Routes/>,document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <>
//     <React.StrictMode>
//       <RouterProvider router={Routes} />
//     </React.StrictMode>
//     </>
//   )

// TODO: CheckOnce Again 



ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <React.StrictMode>
      <RouterProvider router={Routes} />
    </React.StrictMode>
    </>
  );
  