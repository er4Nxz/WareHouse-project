import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../Components/NotFound/NotFound";
import Header from "../Components/Header/Header";
import Create from "../Components/Create/Create";
import RequirementList from "../Components/RequirementList/RequirementList";
import HomeRouter from "../Components/Home/HomeRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pt-23">
          <Routes>
            <Route path="/Home/*" element={<HomeRouter />} />
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
