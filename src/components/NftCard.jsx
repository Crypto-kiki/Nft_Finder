import { FaDiscord } from "react-icons/fa";
import { RxHome } from "react-icons/rx";
import { useEffect } from "react";

const NftCard = ({
  nftName,
  nftContract,
  nftTotalBalance,
  nftFloorPrice,
  nftImage,
  discord,
  webUrl,
  btcPrice,
  ethPrice,
  coinApi,
}) => {
  // 실시간 코인 가격 가져오기

  return (
    <div className="font-bold text-2xl text-gray-300 flex flex-row border border-gray-500 p-8 rounded-xl justify-start">
      <div className="rounded-lg">
        <img src={nftImage} className="w-80 h-full object-cover" />
      </div>
      <div className="ml-14 w-2/3">
        <div className="text-gray-400">Collection Name</div>
        <div className="text-4xl mb-5">{nftName}</div>
        <div className="text-gray-400">Contract Address</div>
        <div className="mb-5 text-2xl">{nftContract}</div>
        <div className="text-gray-400">Total Balance</div>
        <div className="text-3xl mb-5">{nftTotalBalance}</div>
        <div className="text-gray-400">Floor Price</div>
        {nftFloorPrice ? (
          <>
            <div>
              {nftFloorPrice} eth{" "}
              <span className="text-xl">
                ({parseInt(nftFloorPrice * ethPrice).toLocaleString()}원)
              </span>
            </div>
          </>
        ) : (
          <>0</>
        )}

        <div className="flex flex-row justify-end items-center">
          {discord ? (
            <a
              href={discord}
              target="_blank"
              className="hover:scale-125 transition-all"
            >
              <FaDiscord className="w-10 h-8 object-cover" />
            </a>
          ) : (
            <div />
          )}

          {webUrl ? (
            <a
              href={webUrl}
              target="_blank"
              className="ml-5 hover:scale-125 transition-all "
            >
              <RxHome className="w-10 h-8 object-cover" />
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default NftCard;
