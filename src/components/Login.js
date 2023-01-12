import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Login = ({ users, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectedUser));
  };

  return (
    <div>
      <form>
        <h1>Login</h1>
        <label>Select a user:</label>
        <div>
          {users.map((user) => {
            const { id, avatarURL, name } = user;

            return (
              <div key={id}>
                <img src={avatarURL} alt={name} />
                <label>{name}</label>
                <input
                  type="radio"
                  name="user"
                  value={user.id}
                  onChange={(e) => setSelectedUser(e.target.value)}
                />
              </div>
            );
          })}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users).map((id) => users[id]),
  };
};

export default connect(mapStateToProps)(Login);
