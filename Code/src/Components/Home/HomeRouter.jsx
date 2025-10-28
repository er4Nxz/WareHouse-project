import { Route, Routes } from "react-router-dom";
import Index from "./Index/Index";
import Edit from "./Edit/Edit";

const HomeRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default HomeRouter;
