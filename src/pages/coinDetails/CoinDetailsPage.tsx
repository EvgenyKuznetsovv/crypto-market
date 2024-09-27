import { useParams } from "react-router-dom";

import { CoinDetails } from "../../widgets";

const CoinDetailsPage = () => {
  const { id } = useParams();

  return <CoinDetails id={id ?? ""} />;
};

export default CoinDetailsPage;
