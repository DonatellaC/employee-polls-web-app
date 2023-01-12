import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ name, avatarURL }) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new-question">New Question</Link>
        </li>
      </ul>
      <div>
        <div>
          <img src={avatarURL} alt={name} />
          <span>{name}</span>
        </div>
        <button>Logout</button>
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
