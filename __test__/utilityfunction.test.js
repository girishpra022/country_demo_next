import { sortData, filterCountries } from "../src/app/utils/random";

const testData = [
  { name: "India", population: 5000 },
  { name: "US", population: 2000 },
  { name: "China", population: 3000 },
];

describe("sortData", () => {
  it("sorts ascending", () => {
    const sortedData = sortData(true, testData, "population");
    expect(sortedData).toEqual([
      { name: "US", population: 2000 },
      { name: "China", population: 3000 },
      { name: "India", population: 5000 },
    ]);
  });

  it("sorts descending", () => {
    const sortedData = sortData(false, testData, "population");
    expect(sortedData).toEqual([
      { name: "India", population: 5000 },
      { name: "China", population: 3000 },
      { name: "US", population: 2000 },
    ]);
  });
});

const countryData = [
  {
    name: {
      common: "South Georgia",
      official: "South Georgia and the South Sandwich Islands",
    },
    tld: [".gs"],
    independent: false,
    region: "Antarctic",
    languages: {
      eng: "English",
    },
    flag: "🇬🇸",
    maps: {
      googleMaps: "https://goo.gl/maps/mJzdaBwKBbm2B81q9",
      openStreetMaps: "https://www.openstreetmap.org/relation/1983629",
    },
    population: 30,
  },
  {
    name: {
      common: "India",
      official: "India",
    },
    tld: [".gs"],
    independent: false,
    region: "Asia",
    languages: {
      eng: "English",
    },
    flag: "🇬🇸",
    maps: {
      googleMaps: "https://goo.gl/maps/mJzdaBwKBbm2B81q9",
      openStreetMaps: "https://www.openstreetmap.org/relation/1983629",
    },
    population: 5000,
  },
];

describe("filterCountries", () => {
  it("filters by name", () => {
    const filteredData = filterCountries(countryData, { name: "india" });
    expect(
      filteredData.every((country) =>
        country.name.common.toLowerCase().includes("india")
      )
    ).toBe(true);
  });

  it("filters by region", () => {
    const filteredData = filterCountries(countryData, { region: "antarctic" });
    expect(
      filteredData.every((country) =>
        country.region.toLowerCase().includes("antarctic")
      )
    ).toBe(true);
  });

  it("filters by name and region", () => {
    const filteredData = filterCountries(countryData, {
      name: "canada",
      region: "americas",
    });
    expect(
      filteredData.every(
        (country) =>
          country.name.common.toLowerCase().includes("canada") &&
          country.region.toLowerCase().includes("americas")
      )
    ).toBe(true);
  });

  it("returns all countries with no filter", () => {
    const filteredData = filterCountries(countryData, {});
    expect(filteredData).toEqual(countryData);
  });
});
