// import logo from "./logo.svg";
import "./App.css";

import LoginPage from "./component/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Ribbon from "./component/Ribbon/Ribbon";
// import Ribbon1 from "./component/Ribbon1";
import Header from "./component/Theme/Header";
import Labels from "./component/Labels/Labels";
import Warranty from "./component/Warranty/Warranty";
import Tickets from "./component/Tickets/Tickets";
import Leads from "./component/leades/Leads";
// import Leads1 from "./component/leades/Leads1";
import Viewlead from "./component/leades/Viewlead";

// import LoginPage1 from "./component/LoginPage1";
import Product from "./component/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/viewlead" element={<Viewlead />} />
        <Route path="/ribbon" element={<Ribbon />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/product" element={<Product />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
