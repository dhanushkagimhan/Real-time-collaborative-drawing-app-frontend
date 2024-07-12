import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import Unauthorized from "../pages/Unauthorized";

export default function UserProtectedRoute() {
  const [cookies] = useCookies(["userJWT"]);

  if (cookies.userJWT == null) {
    return <Unauthorized />;
  }

  return <Outlet />;
}
