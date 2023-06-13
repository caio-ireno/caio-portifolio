import { Route, Routes } from "react-router-dom";
import { Index } from "../pages/Index";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};
