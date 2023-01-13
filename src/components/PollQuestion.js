import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { handleAnswer } from "../actions/questions";

const PollQuestion = ({ authedUser, questions, users, dispatch }) => {
  const navigate = useNavigate();
  const questionId = useParams().question_id;
  const question = questions[questionId];
  const avatar = users[question.author].avatarURL;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      handleAnswer({
        authedUser,
        qid: questionId,
        // answer,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div className="text-center">
            <Card.Title>Poll by {question.author}</Card.Title>
            <Image roundedCircle src={avatar} alt={question.author} />
            <Card.Text>Would you rather</Card.Text>
            <p>{question.optionOne.text}</p>
            <p>{question.optionTwo.text}</p>
          </div>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={handleClick}>
              Click
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  users,
  authedUser,
  questions,
});

export default connect(mapStateToProps)(PollQuestion);
