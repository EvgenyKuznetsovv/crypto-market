import { AssetData } from "../../../shared/api/types";

export interface UserPortfolioModalProps {
  apiData: AssetData[];
  onClose: () => void;
  opened: boolean;
}
