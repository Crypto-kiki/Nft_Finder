const NftCard = ({
  nftName,
  nftContract,
  nftTotalBalance,
  nftFloorPrice,
  nftImage,
}) => {
  return (
    <div className="font-bold text-2xl text-black">
      <div>Image : {nftImage} </div>
      <div>Project Name : {nftName}</div>
      <div>Contract Address : {nftContract}</div>
      <div>Total Balance : {nftTotalBalance}</div>
      <div>Floor Price : {nftFloorPrice}</div>
    </div>
  );
};

export default NftCard;
