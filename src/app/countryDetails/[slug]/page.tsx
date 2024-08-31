import countryService from "@/app/services/country.service";
import { ICountry } from "@/app/types";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";


const CountryDetailsCard = dynamic(
  () => import("../../components/CountryDetailsCard")
);

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await fetch(countryService.fetchcountry.url(slug));
  const data:ICountry[] = await res.json();

  if (res.status !==200) {
    return (
      notFound()
    )
  }

  return (
    <>
      <CountryDetailsCard data={data[0]} />
    </>
  );
}
