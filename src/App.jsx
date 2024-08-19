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

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/consulting' element={<Consulting/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/our-solutions' element={<TechSolution/>}/>
        <Route path='/connect-lagos' element={<ConnectLagos/>}/>
        <Route path='/training' element={<Training/>}/>
        {/* <Route path='/shop' element={<Shop/>}/>
    <Route path='/shop/:id' element={<Detail/>}/>
    <Route path='*' element={<ErrorPage/>}/> */}
      </Route>
    )
  );
  return <RouterProvider router={route} />;
}

export default App;
