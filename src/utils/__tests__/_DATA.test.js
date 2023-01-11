import { _saveQuestion } from "../_DATA";

describe("Save question", () => {
  it("should return a question if successful", async () => {
    const question = {
      optionOneText: "JavaScript",
      optionTwoText: "TypeScript",
      author: "Sarah Edo",
    };
    const result = await _saveQuestion(question);
    expect(result.optionOne).toBeDefined();
    expect(result.optionTwo).toBeDefined();
    expect(result.author).toBeDefined();
  });

  it("should return an error if unsuccessful", async () => {
    const invalidQuestion = {
      optionOneText: "",
      optionTwoText: "",
      author: "",
    };
    await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
