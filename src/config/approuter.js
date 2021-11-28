import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element = {<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter