import React from "react";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const AppLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default AppLayout;
