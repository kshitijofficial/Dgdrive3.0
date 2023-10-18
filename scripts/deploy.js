
const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();
  await upload.deployed();
  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// If you are geting this error with above code then try using the code below
// TypeError: upload.deployed is not a function
//     at main (D:\Blockchain Projects\Decentralize-Drive\scripts\deploy.js:7:16)
//     at processTicksAndRejections (node:internal/process/task_queues:95:5)

const hre = require("hardhat");

async function main() {
  
  const upload = await hre.ethers.deployContract("Upload");
  await upload.waitForDeployment();

  console.log("Library deployed to:", upload.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
