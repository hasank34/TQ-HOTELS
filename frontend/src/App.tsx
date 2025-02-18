import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/index";
import Home from "./pages/home/index";
import Create from "./pages/create/index";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/place/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
