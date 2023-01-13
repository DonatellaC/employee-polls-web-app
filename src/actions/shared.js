import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, addAnswerToUser } from "./users";
import { receiveQuestions, handleAnswer } from "./questions";

export const handleInitialData = (info) => {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    return await saveQuestionAnswer(info).catch((e) => {
      dispatch(handleAnswer(info));
      dispatch(addAnswerToUser(info));
      console.warn("Error in handleSaveQuestionAnswer: ", e);
    });
  };
};
