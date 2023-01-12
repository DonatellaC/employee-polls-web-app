import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Nav = ({ name, avatarURL, dispatch }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(null));
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/leaderboard" className="navbar-link">
          Leaderboard
        </Link>
        <Link to="/new-question" className="navbar-link">
          New Question
        </Link>
      </div>
      <div className="navbar-right">
        <img src={avatarURL} alt={name} className="navbar-avatar" />
        <span className="navbar-username">{name}</span>
        <button className="navbar-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  const { name, avatarURL } = users[authedUser];

  return {
    name,
    avatarURL,
  };
};

export default connect(mapStateToProps)(Nav);
