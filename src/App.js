// import logo from "./logo.svg";
import "./App.css";

import LoginPage from "./component/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Ribbon from "./component/Ribbon/Ribbon";
// import Ribbon1 from "./component/Ribbon1";
import Header from "./component/Theme/Header";
import Labels from "./component/Labels/Labels";
import Warranty from "./component/Warranty/Warranty";
// import Tickets from "./component/Tickets/Tickets";
// import Leads from "./component/leades/Leads";
import Leads1 from "./component/leades/Leads1";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path="/src/component/Ribbon/Ribbon" element={<Ribbon />} /> */}
        <Route path="/ribbon" element={<Ribbon />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/warranty" element={<Warranty />} />
        {/* <Route path="/Tickets" element={<Tickets />} /> */}
        {/* <Route path="/Leads" element={<Leads />} /> */}
        <Route path="/Leads1" element={<Leads1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
