import { BrowserRouter, Route, Routes } from "react-router-dom";
import { applicationRoutes as routes } from "../config";
import {
  BookPage,
  ClothePage,
  ElectronicPage,
  HomePage,
  MenFashionPage,
  WomenFashionPage,
} from "pages";
import { Navbar } from "components/navbar";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.books} element={<BookPage />} />
        <Route path={routes.clothes} element={<ClothePage />} />
        <Route path={routes.electronics} element={<ElectronicPage />} />
        <Route path={routes.womenFashion} element={<WomenFashionPage />} />
        <Route path={routes.menFashion} element={<MenFashionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
