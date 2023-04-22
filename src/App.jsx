// Setup
import { Network, Alchemy } from "alchemy-sdk";
import { useEffect } from "react";
import { useState } from "react";
import Nft from "./components/Nft";

function App() {
  const settings = {
    apiKey: "t6V7kZSDHIWrkNIwlP7Q2Ptc6NZs8JmR",
    network: Network.ETH_MAINNET,
  };

  const [account, setAccount] = useState("");

  const [nfts, setNfts] = useState([]);

  const [nftName, setNftName] = useState();
  const [nftContract, setNftContract] = useState();
  const [nftTotalBalance, setNftTotalBalance] = useState();
  const [nftFloorPrice, setNftFloorPrice] = useState();
  const [nftImage, setNftImage] = useState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let response = undefined;

    if (!account) {
      return; // 빈 문자열이면 요청보내지 않음.
    }

    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      `https://eth-mainnet.g.alchemy.com/nft/v2/t6V7kZSDHIWrkNIwlP7Q2Ptc6NZs8JmR/getContractsForOwner?owner=${account}&pageSize=100&withMetadata=true`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        response = data;
        console.log(response);
        setNfts(response.contracts);

        const nfts = response.contracts;
        if (nfts.length > 0) {
          setNftName(nfts[0].name);
          setNftContract(nfts[0].address);
          setNftTotalBalance(nfts[0].totalBalance);
          setNftFloorPrice(nfts[0].opensea.floorPrice);
          setNftImage(nfts[0].media[0].gateway);
        }
      })
      .catch((err) => console.error(err));
  }, [account]);

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogOut = () => {
    setAccount("");
  };

  return (
    <>
      {account ? (
        <div className="bg-slate-400 min-h-screen">
          <div>
            <div className="flex flex-col justify-start items-end">
              <div className="text-main font-semibold text-2xl">
                {account.substring(0, 4)}...
                {account.substring(account.length - 4)}
                <button className="ml-4 btn-style" onClick={onClickLogOut}>
                  로그아웃
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              {nfts.length > 0 ? (
                nfts.map((nft) => (
                  <Nft
                    key={nft.address}
                    nftName={nft.name}
                    nftContract={nft.address}
                    nftTotalBalance={nft.totalBalance}
                    nftFloorPrice={nft.opensea.floorPrice}
                    nftImage={nft.media[0].gateway}
                  />
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-100 min-h-screen flex justify-center items-center">
          <button className="btn-style" onClick={onClickAccount}>
            <img
              className="w-12"
              src={`${process.env.PUBLIC_URL}/images/metamask.png`}
            />
          </button>
        </div>
      )}
    </>
  );
}

export default App;
