import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/new-question" element={<NewQuestion />} />
      </Routes>
    </>
  );
};

export default App;
