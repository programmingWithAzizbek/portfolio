import React from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
      <Analytics />
    </Layout>
  );
};

export default App;
