import { RouterProvider } from "react-router-dom";
import { router } from "./utils/Routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
