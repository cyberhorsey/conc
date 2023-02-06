type Attribute = { trait_type: string; value: string };

enum NFTType {
  Ethereum,
  IMX,
  Solana,
  Cantos,
}

type NFT = {
  image: string;
  attributes: Attribute[];
  name: string;
  nftType: NFTType;
};

export { NFT, NFTType, Attribute };
