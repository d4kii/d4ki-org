import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import NoMatch from "./NoMatch";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
