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
import Tickets from "./component/Tickets/Tickets";
// import Leads from "./component/leades/Leads";
// import Leads1 from "./component/leades/Leads1";
// import Viewlead from "./component/leades/Viewlead";
// import Leads2 from "./component/leades/Leads2";
// import DateWiseDialog from "./component/leades/DateWiseDialog";
// import LeadComments from "./component/leades/LeadComments";
// import Leads5 from "./component/leades/Leads5";
import Leads3 from "./component/leades/Leads3";
import Viewlead1 from "./component/leades/Viewlead1";
import LoginPage2 from "./component/LoginPage2";
import helpers from "./component/helper/helper";
// import LoginPage1 from "./component/LoginPage1";

function App() {
  // if (!helpers.isLogin()) {
  //   return <LoginPage2 />;
  // }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route exact path="/" element={<LoginPage />} /> */}
        {/* <Route exact path="/" element={<LoginPage1 />} /> */}
        <Route exact path="/" element={<LoginPage2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/viewlead1" element={<Viewlead1 />} />
        {/* <Route path="/src/component/Ribbon/Ribbon" element={<Ribbon />} /> */}
        <Route path="/ribbon" element={<Ribbon />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/Tickets" element={<Tickets />} />
        {/* <Route path="/Leads" element={<Leads />} /> */}
        {/* <Route path="/Leads2" element={<Leads2 />}> */}
        <Route path="/Leads3" element={<Leads3 />}>
          {/* <Route path="/DateWiseDialog" element={<DateWiseDialog />} />
          <Route path="/LeadComments" element={<LeadComments />} /> */}
        </Route>
        {/* <Route path="/Leads5" element={<Leads5 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
