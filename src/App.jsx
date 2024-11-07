import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FoodAffordability from "./pages/Food-Affordability/FoodAffordability";
import ChildMortality from "./pages/Food-Affordability/ChildMortality";
import ClimateChange from "./pages/Food-Affordability/ClimateChange";

import './App.css';


function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/food-affordability">
          <Route index={true} element={<FoodAffordability/>}></Route>
          <Route path="child-mortality" element={<ChildMortality/>} />
          <Route path="climate-change" element={<ClimateChange/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
