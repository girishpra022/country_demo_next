"use client";
import { ICountryCardProps } from "@/app/types";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { CardContainer } from "./CountryCard.styles";

const CountryCard: FC<ICountryCardProps> = ({
  name,
  flags,
  capital,
  population,
  region,
}) => {
  const router = useRouter();

  return (
    <Grid container spacing={2} mb={3}>
      <Grid size={{ xs: 12, md: 6, lg: 6, xl: 4 }}>
        <CardContainer>
        <Card
          sx={{
            maxWidth: 320,
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
            <Link
              href={`/countryDetails/${name.common}`}
              style={{ marginBottom: 2, fontFamily: "bold", fontSize: 25 }}
            >
              Name :{name.common}
            </Link>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              Capital :{capital}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              Population:{population}
            </Typography>
            <Typography variant="body1">Region:{region}</Typography>
          </CardContent>
        </Card>
        </CardContainer>
      </Grid>
    </Grid>
  );
};

export default CountryCard;
