import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./component/About"; // Create this component
import OurSoftware from "./component/OurSoftware"; // Create this component
import Services from "./component/Services"; // Create this component
import ContactUs from "./component/ContactUs"; // Create this component
import Testimonal from "./component/Testimonal";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-software" element={<OurSoftware />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/testimonal" element={<Testimonal />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
