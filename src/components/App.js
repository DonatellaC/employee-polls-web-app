import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import Login from "./Login";

const App = ({ authedUser, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <>
      {authedUser ? (
        <>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/new-question" element={<NewQuestion />} />
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
