import { useState } from "react";
import { connect } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DashboardCard from "./DashboardCard";

const Dashboard = ({ users, questionsAnswered, questionsUnanswered }) => {
  const [key, setKey] = useState("unanswered");

  return (
    <>
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="unanswered" title="Unanswered polls">
          {questionsUnanswered.map((question) => (
            <DashboardCard
              key={question.id}
              question={question}
              author={users[question.author]}
            />
          ))}
        </Tab>
        <Tab eventKey="answered" title="Answered polls">
          {questionsAnswered.map((question) => (
            <DashboardCard
              key={question.id}
              question={question}
              author={users[question.author]}
            />
          ))}
        </Tab>
      </Tabs>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  const questionAnswered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  const questionUnanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const allQuestions = Object.values(questions).sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return {
    authedUser,
    questionsAnswered: allQuestions.filter(questionAnswered),
    questionsUnanswered: allQuestions.filter(questionUnanswered),
    users,
  };
};

export default connect(mapStateToProps)(Dashboard);
