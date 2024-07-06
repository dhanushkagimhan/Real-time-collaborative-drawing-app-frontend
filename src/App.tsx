import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { MainLayout } from "./utility/components";
import Error404 from "./pages/Error404";
import { Register } from "./pages/authentication";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
