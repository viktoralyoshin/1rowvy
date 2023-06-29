import { useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Catalog from "./components/Catalog";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
    </>
  );
}

export default App;
