import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import NotFound from "../Components/NotFound/NotFound";
import Header from "../Components/Header/Header";
import Create from "../Components/Create/Create";
import RequirementList from "../Components/RequirementList/RequirementList";
import Inventory from "../Components/Inventory/Inventory";
import SideBar from "../Components/SideBar/SidBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pt-23" id="page">
          <Routes>
            <Route path="/" element={<Inventory />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/RequirementList" element={<RequirementList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
