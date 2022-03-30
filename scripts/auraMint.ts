import { ethers } from "hardhat";

async function main() {
    const signers = await ethers.getSigners();
    const account = signers[0];

  const Aurafactory = await ethers.getContractFactory("Aura", account);
  const Aura = await Aurafactory.deploy();

  const AuraContract = await Aura.deployed();

  console.log("Aura deployed to:", Aura.address);

  const mintTxn = await AuraContract.mint(account.address, 0, 4, [])
  await mintTxn.wait();

  const balance = await AuraContract.totalSupply(0);
  //   console.log(balance)
  console.log(balance.toString())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
