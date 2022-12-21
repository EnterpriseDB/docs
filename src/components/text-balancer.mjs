import balanceText from "balance-text";
import { useEffect } from "react";

const TextBalancer = () => {
  useEffect(() => {
    balanceText();
    balanceText.updateWatched();
  });
  return null;
};

export default TextBalancer;
