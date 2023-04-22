import NftCard from "./NftCard";

const Nft = ({
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
  return (
    <div className="mt-24 w-2/3">
      <NftCard
        nftName={nftName}
        nftContract={nftContract}
        nftTotalBalance={nftTotalBalance}
        nftFloorPrice={nftFloorPrice}
        nftImage={nftImage}
        discord={discord}
        webUrl={webUrl}
        btcPrice={btcPrice}
        ethPrice={ethPrice}
        coinApi={coinApi}
      />
    </div>
  );
};

export default Nft;
