import { ethers } from "hardhat";

async function main() {
  const Aurafactory = await ethers.getContractFactory("Aura");
  const Aura = await Aurafactory.deploy();

  await Aura.deployed();

  console.log("Aura deployed to:", Aura.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
