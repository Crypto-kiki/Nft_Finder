import NftCard from "./NftCard";

const Nft = ({
  nftName,
  nftContract,
  nftTotalBalance,
  nftFloorPrice,
  nftImage,
}) => {
  return (
    <div className="mt-24">
      <NftCard
        nftName={nftName}
        nftContract={nftContract}
        nftTotalBalance={nftTotalBalance}
        nftFloorPrice={nftFloorPrice}
        nftImage={nftImage}
      />
    </div>
  );
};

export default Nft;
