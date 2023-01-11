const Login = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Log In:</label>
        <select>
          <option>Select a user</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
