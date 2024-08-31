
const baseUrl=process.env.COUNTRY_API_URL;

const countryService= {
  fetchcountries: {
    url: `${baseUrl}/all`,
  },
  fetchcountry: {
    url: (name:string)=> `${baseUrl}/name/${name}`,
  },
};

export default countryService;