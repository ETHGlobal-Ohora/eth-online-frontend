import { BrowserProvider } from "ethers";
import web3auth from "../../config/web3auth.config";

export const useGetSigner = () => {
  const getSigner = async () => {
    const web3authProvider = await web3auth!.connect();
    const ethersProvider = new BrowserProvider(web3authProvider!);
    return ethersProvider.getSigner();
  };

  return getSigner;
};
