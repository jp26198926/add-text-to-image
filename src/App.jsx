import { Route, Routes } from "react-router-dom";
import Container from "./layout/Container";
import DataContainer from "./page/DataContainer";
import ResultContainer from "./page/ResultContainer";

function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/" element={<DataContainer />} />
        <Route path="/result" element={<ResultContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
