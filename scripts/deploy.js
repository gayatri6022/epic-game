const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["CatDog", "A creechur", "Shuckle"],       // Names
    ["https://m.media-amazon.com/images/M/MV5BYTg5YzY4YWMtZDEzMC00ZGNiLTgwNzUtYjZkNmU3NTk2MGRlXkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg", // Images
    "https://i.imgflip.com/4kkwpb.png", 
    "https://cdn2.bulbagarden.net/upload/thumb/c/c7/213Shuckle.png/1200px-213Shuckle.png"],
    [350, 500, 350],                    // HP values
    [50, 75, 40],                       // Attack damage values
    "Mew",                       // Boss name
    "https://i.imgur.com/As1Dh5k.png", // Boss image
    1100, // Boss hp
  50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
//  let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
//txn = await gameContract.mintCharacterNFT(2);
//await txn.wait();
//attack test
//txn = await gameContract.attackBoss();
//await txn.wait();

//txn = await gameContract.attackBoss();
//await txn.wait();

// Get the value of the NFT's URI.
//let returnedTokenUri = await gameContract.tokenURI(1);
//console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
