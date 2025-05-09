import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import PrivateRoutes from "./PrivateRoutes";
import TableUsers from "../components/TableUsers";
import NotFound from "../components/NotFound";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/users"
          element={
            <PrivateRoutes>
              <TableUsers />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
