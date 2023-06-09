import { BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
     
    </>
  );
};

export default App;
