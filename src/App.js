import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoesStore from "./Components/ShoesStore";
import ShoesCart from "./Components/ShoesCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ShoesStore />}>
          <Route path="cart" element={<ShoesCart />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <ShoesStore />
    // </div>
  );
}

export default App;
