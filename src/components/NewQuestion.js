const NewQuestion = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};

  return (
    <form onSubmit={handleSubmit}>
      <h1>Would You Rather</h1>
      <p>Create Your Own Poll</p>
      <label>
        First Option
        <input
          placeholder="Option One"
          type="text"
          name="option1"
          // value={}
          onChange={handleChange}
        />
      </label>
      <label>
        Second Option
        <input
          placeholder="Option Two"
          type="text"
          name="option2"
          // value={}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewQuestion;
