import "./App.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-neutral-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
