import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import Login from "./Login";

const App = ({ authedUser, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <>
      {authedUser ? (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add" element={<NewQuestion />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
