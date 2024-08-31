import countryService from "./services/country.service";
import dynamic from "next/dynamic";
import { ICountry } from "./types";
import { notFound } from "next/navigation";

const CountryData = dynamic(() => import("./components/CountryData"));

export default async function Home() {
  const res = await fetch(countryService.fetchcountries.url);
  const data:ICountry[] = await res.json();
  if (res.status !==200) {
    return (
      notFound()
    )
  }
  return (
    <>
      <CountryData data={data} />
    </>
  );
}
