import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { MainLayout } from "./utility/components";
import Error404 from "./pages/Error404";
import { Register } from "./pages/authentication";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProtectedRoute } from "./middlewares";
import { MainBoard } from "./pages/protected";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route element={<UserProtectedRoute />}>
              <Route path="/main-board" element={<MainBoard />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
