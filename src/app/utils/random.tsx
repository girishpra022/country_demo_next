import { ICountry } from "../types";

interface FilterValues {
  name?: string;
  region?: string;
}

export function filterCountries(
  data: ICountry[],
  values: FilterValues
): ICountry[] {
  return data.filter((item: ICountry) => {
    if (values.name && values.region) {
      return (
        item.name.common.toLowerCase().includes(values.name.toLowerCase()) &&
        item.region.toLowerCase().includes(values.region.toLowerCase())
      );
    } else if (values.name && !values.region) {
      return item.name.common.toLowerCase().includes(values.name.toLowerCase());
    } else if (!values.name && values.region) {
      return item.region.toLowerCase().includes(values.region.toLowerCase());
    } else {
      return true;
    }
  });
}

export function sortData<T>(ascending: boolean, data: T[], key: keyof T): T[] {
  return data.sort((a: T, b: T) => {
    if (a[key] < b[key]) {
      return ascending ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}
