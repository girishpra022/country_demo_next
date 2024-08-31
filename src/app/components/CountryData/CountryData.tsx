"use client";
import { ICountry } from "@/app/types";
import { Button, Grid2, Paper } from "@mui/material";
import { FC, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCard from "../CountryCard";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputField from "../Display/InputField";
import { filterCountries, sortData } from "@/app/utils/random";

interface ISearch {
  region: string;
  name: string;
  capital: string;
}

interface IData {
  data: ICountry[];
}

const CountryData: FC<IData> = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const { handleSubmit, control, reset } = useForm<ISearch>({
    defaultValues: {
      region: "",
      name: "",
    },
    mode: "onChange",
  });
  const [asending, setAsending] = useState(true);

  const searchData = (values: ISearch) => {
    setFilteredData(filterCountries(data, values));
  };

  const handleSortData = () => {
    reset();
    setFilteredData(sortData<ICountry>(asending, data, "population"));
    setAsending(!asending);
  };

  return (
    <>
      <Paper elevation={1} sx={{ maxWidth: 1200, mb: 3, padding: 2, mt: 10 }}>
        <Grid2
          size={{ xs: 12 }}
          container
          spacing={2}
          display="flex"
          flexDirection="row"
        >
          <Grid2>
            <form onSubmit={handleSubmit(searchData)}>
              <InputField
                name="region"
                label="Region"
                type="text"
                props={{ name: "region", control: control }}
                sx={{ maxWidth: 200, mr: 2, mb: 2 }}
                required={false}
              />

              <InputField
                name="name"
                label="Name"
                type="text"
                props={{ name: "name", control: control }}
                sx={{ maxWidth: 200, mr: 2, mb: 2 }}
                required={false}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 1, ml: 5, padding: 1, width: 150 }}
              >
                <FilterListIcon sx={{ mr: 1 }} />
                Filter
              </Button>
            </form>
          </Grid2>
          <Grid2>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 1, ml: 5, padding: 1, width: 150 }}
              onClick={handleSortData}
            >
              <SortIcon sx={{ mr: 1 }} /> Sort
            </Button>
          </Grid2>
        </Grid2>
      </Paper>

      {filteredData &&
        filteredData.map((country: ICountry) => {
          return (
            <Fragment key={country.flags.png}>
              <CountryCard
                name={country.name}
                capital={country.capital}
                population={country.population}
                flags={country.flags}
                region={country.region}
              />
            </Fragment>
          );
        })}
    </>
  );
};

export default CountryData;
