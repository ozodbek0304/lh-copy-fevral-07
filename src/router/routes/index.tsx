import SingleApartment from "../../views/SingleApartment";
import ObjectPage from "../../views/ObjectPage";
import Home from "../../views/Home";
import News from "../../views/News";
import AboutCompany from "../../views/AboutCompany";

export const routes = [
  {
    link: "/",
    element: <Home />,
  },
  {
    link: "/object/:objectId",
    element: <ObjectPage />
  },
  
  {
    link: "/object/:objectId/:apartmentId",
    element: <SingleApartment />
  },
  {
    link: "/news",
    element: <News />
  },
  {
    link: "/about-company",
    element: <AboutCompany />
  },
]