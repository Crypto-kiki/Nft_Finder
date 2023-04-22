// Setup
import { Network, Alchemy } from "alchemy-sdk";
import { useEffect } from "react";
import { useState } from "react";
import Nft from "./components/Nft";
import axios from "axios";
import { TbCoinBitcoin } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";

function App() {
  const settings = {
    apiKey: "t6V7kZSDHIWrkNIwlP7Q2Ptc6NZs8JmR",
    network: Network.ETH_MAINNET,
  };

  const [account, setAccount] = useState("");

  const [nfts, setNfts] = useState([]);
  const [discord, setDiscord] = useState("");
  const [webUrl, setWebUrl] = useState("");

  const [nftName, setNftName] = useState("");
  const [nftContract, setNftContract] = useState("");
  const [nftTotalBalance, setNftTotalBalance] = useState("");
  const [nftFloorPrice, setNftFloorPrice] = useState("");
  const [nftImage, setNftImage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [btcPrice, setBtcPrice] = useState("");
  const [ethPrice, setEthPrice] = useState("");

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
          setDiscord(nfts[0].opensea.discordUrl);
          setWebUrl(nfts[0].opensea.externalUrl);
        }
      })
      .catch((err) => console.error(err));
  }, [account]);

  const coinApi = async () => {
    try {
      const response = await axios.get(
        `https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH`
      );
      const btcPrice = response.data[0].trade_price;
      const ethPrice = response.data[1].trade_price;
      setBtcPrice(btcPrice);
      setEthPrice(ethPrice);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    coinApi();
  }, []);

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
        <div className="bg-gray-700 text-gray-300 min-h-screen pb-40 box-border">
          <header className="sticky top-0 bg-gradient-to-r from-gray-400 w-full h-24 px-12 flex flex-row justify-between items-center">
            <a href="#" className="text-3xl font-bold text-gray-700">
              NFT Overview
            </a>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center text-lg">
                <div className="flex">
                  <TbCoinBitcoin className="inline w-7 h-7 object-cover" />{" "}
                  {btcPrice.toLocaleString()}원
                </div>
                <div className="mr-20 ml-10">
                  <FaEthereum className="inline w-5 h-5 object-cover" />{" "}
                  {ethPrice.toLocaleString()}원
                </div>
                <div>총 자산:</div>
              </div>
              <div>
                {account.substring(0, 4)}...
                {account.substring(account.length - 4)}
              </div>
              <button
                className="ml-8 border border-gray-400 py-3 px-5 rounded-lg hover:bg-gray-500 hover:text-black"
                onClick={onClickLogOut}
              >
                Log Out
              </button>
            </div>
          </header>

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
                    discord={nft.opensea.discordUrl}
                    webUrl={nft.opensea.externalUrl}
                    btcPrice={btcPrice}
                    ethPrice={ethPrice}
                    coinApi={coinApi}
                  />
                ))
              ) : (
                <div className="min-h-screen text-4xl flex flex-col items-center justify-center">
                  Loading...
                </div>
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
