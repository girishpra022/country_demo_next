import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/app/countryDetails/[slug]/page";
import { notFound } from "next/navigation";

jest.mock("next/dynamic", () => () => (props) => <div {...props} />);

jest.mock("../src/app/services/country.service", () => ({
  fetchcountry: {
    url: jest.fn((slug) => `https://restcountries.com/v3.1/name/${slug}`),
  },
}));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

global.fetch = jest.fn();

describe("Home Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders CountryDetailsCard with data", async () => {
    const mockData = [{ name: "India", code: "IN" }];
    fetch.mockResolvedValueOnce({
      status: 200,
      json: async () => mockData,
    });

    render(await Home({ params: { slug: "India" } }));

    const countryDetailsCard =screen.findByText('Name :India');
    expect(countryDetailsCard).toBeInTheDocument();
  });

  it("calls notFound when fetch returns non-200 status", async () => {
    fetch.mockResolvedValueOnce({
      status: 404,
      json: async () => [],
    });

    render(await Home({ params: { slug: "unknown" } }));

    expect(notFound).toHaveBeenCalled();
  });
});
