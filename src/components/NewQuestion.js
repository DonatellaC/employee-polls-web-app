import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewQuestion = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};

  return (
    <Form className="form-new-question" onSubmit={handleSubmit}>
      <h1>Would You Rather</h1>
      <p className="text-center">Create Your Own Poll</p>
      <Form.Group className="mb-3" controlId="firstOption">
        <Form.Label>First Option</Form.Label>
        <Form.Control
          placeholder="Option One"
          type="text"
          name="option1"
          //  value={}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="secondOption">
        <Form.Label>Second Option</Form.Label>
        <Form.Control
          placeholder="Option Two"
          type="text"
          name="option1"
          //  value={}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewQuestion;
