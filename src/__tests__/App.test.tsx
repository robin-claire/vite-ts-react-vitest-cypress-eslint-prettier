import { render } from "@testing-library/react";
import App from "../App";

test("App", () => {
  const { getByText } = render(<App />);

  expect(getByText("App")).not.toBeNull();
});
