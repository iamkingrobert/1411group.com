import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Consulting from "./Pages/Consulting";
import Careers from "./Pages/Careers";
import TechSolution from "./Pages/TechSolution";
import ConnectLagos from "./Pages/ConnectLagos";
import Training from "./Pages/Training";
import SoftwareEngineering from "./Courses/SoftwareEngineering";
import DataAnalysis from "./Courses/DataAnalysis";
import UIUX from "./Courses/UI-UX";
import ProductManagement from "./Courses/ProjectManagement";
import CommunityManagement from "./Courses/CommunityManagement";
import CyberSecurity from "./Courses/CyberSecurity";
import ErrorPage from "./Pages/ErrorPage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import WhyChooseUs from "./Pages/WhyChooseUs";
import StartUpAccelerator from "./Pages/StartUpAccelerator";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="*" element={<ErrorPage />} />{" "}
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/join-us" element={<Careers />} />
        <Route path="/startup-accelerator" element={<StartUpAccelerator />} />
        <Route path="/our-solutions" element={<TechSolution />} />
        <Route path="/connect-lagos" element={<ConnectLagos />} />
        <Route
          path="/courses/software-engineering"
          element={<SoftwareEngineering />}
        />
        <Route path="/courses/data-analysis" element={<DataAnalysis />} />
        <Route path="/courses/ui-ux" element={<UIUX />} />
        <Route
          path="/courses/product-management"
          element={<ProductManagement />}
        />
        <Route
          path="/courses/community-management"
          element={<CommunityManagement />}
        />
        <Route path="/courses/cyber-security" element={<CyberSecurity />} />
      </Route>
    )
  );
  return <RouterProvider router={route} />;
}

export default App;
