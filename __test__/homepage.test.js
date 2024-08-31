import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/app/page";

jest.mock("next/dynamic", () => () => (props) => <div>{props.children}</div>);

jest.mock("../src/app/components/CountryData", () => ({ data }) => (
  <div data-testid="country-data">{JSON.stringify(data)}</div>
));

global.fetch = jest.fn();

describe("FirstPage Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders CountryData with fetched data", async () => {
    const mockData = [{ id: 1, name: "India" }];
    fetch.mockResolvedValueOnce({
      status: 200,
      json: async () => mockData,
    });

    render(await Home());

    waitFor(() => {
      expect(screen.getByTestId("country-data")).toHaveTextContent(
        JSON.stringify(mockData)
      );
    });
  });
});
