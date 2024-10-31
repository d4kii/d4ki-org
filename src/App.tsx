import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import NoMatch from "./NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
