"use client";
import { ICountryDetailsProps } from "@/app/types";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

import { FC } from "react";
import Grid from "@mui/material/Grid2";

import { CardContainer } from "../CountryCard/CountryCard.styles";

interface IData {
  data: ICountryDetailsProps;
}

const CountryDetailsCard: FC<IData> = ({
  data: {
    area,
    capital,
    continents,
    currencies,
    flags,
    languages,
    name,
    population,
    region,
    timezones,
  },
}) => {
  return (
    <Grid
      container
      spacing={2}
      mb={3}
      mt={10}
      size={{ xs: 10, md: 6, lg: 6, xl: 4 }}
    >
      <CardContainer>
        <Card
          sx={{
            maxWidth: 500,
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          key={name.common}
        >
          <Image
            height="200"
            src={flags.svg}
            width="300"
            alt={name.common}
            priority
            style={{ padding: 5, marginLeft: 5, border: 2 }}
          />

          <CardContent>
            <Typography variant="body1">Name :{name.common}</Typography>
            <Typography variant="body1">Capital :{capital}</Typography>
            <Typography variant="body1">Population:{population}</Typography>
            <Typography variant="body1">Region:{region}</Typography>
            <Typography variant="body1">Continent:{continents}</Typography>
            {/* <Typography variant="body1">currencies:{currencies.SHP}</Typography>  */}
            {languages && (
              <>
                <Typography variant="body1">
                  languages:
                  {Object.values(languages).toString().split(",").join(", ")}
                </Typography>
                <Typography variant="body1">
                  TimeZones:
                  {Object.values(timezones).toString().split(",").join(", ")}
                </Typography>{" "}
              </>
            )}
          </CardContent>
        </Card>
      </CardContainer>
    </Grid>
  );
};

export default CountryDetailsCard;
