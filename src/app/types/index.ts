export interface ICountry {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {}

export interface Currencies {
  SHP: Shp;
}

export interface Shp {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  eng: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  eng: Translation;
}

export interface Translation {
  official: string;
  common: string;
}

export interface IHttpResponse<T> {
  status: boolean;
  message: string | string[];
  data?: T;
}



export interface ICountryCardProps {
  flags: Flags;
  name: Name;
  capital: string[];
  population: number;
  region: string;
}

export interface ICountryDetailsProps extends ICountryCardProps {
  currencies: Currencies;
  timezones: string[];
  continents: string[];
  area: number;
  languages: Languages;
}
