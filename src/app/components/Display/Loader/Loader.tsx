import CircularProgress from "@mui/material/CircularProgress";
import { LoaderContainer } from "./Loader.styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress color="primary" />
    </LoaderContainer>
  );
};

export default Loader;
