import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  it("should render App component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
  });
});
