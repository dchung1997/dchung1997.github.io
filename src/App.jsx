import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FoodAffordability from "./pages/Food-Affordability/FoodAffordability";
import ChildMortality from "./pages/Food-Affordability/ChildMortality";
import ClimateChange from "./pages/Food-Affordability/ClimateChange";
import Agricultural from "./pages/Food-Affordability/Agricultural";
import Manufacturing from "./pages/Food-Affordability/Manufacturing";

import './App.css';


function App() {

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/food-affordability">
          <Route index={true} element={<FoodAffordability/>}></Route>
          <Route path="child-mortality" element={<ChildMortality/>} />
          <Route path="climate-change" element={<ClimateChange/>} />
          <Route path="agriculture" element={<Agricultural/>} />
          <Route path="manufacturing" element={<Manufacturing/>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
