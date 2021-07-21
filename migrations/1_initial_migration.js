const LuckyChipFactory = artifacts.require("LuckyChipFactory");

module.exports = async function (deployer) {
  await deployer.deploy(LuckyChipFactory, '0x5dE4C680d3e306eBbd94b5795905f8234B22D803');
  let instance = await LuckyChipFactory.deployed();
  await instance.setFeeTo("0x5dE4C680d3e306eBbd94b5795905f8234B22D803");
  let res = await instance.feeTo.call();
  console.log('fee - ', res)

  let INIT_CODE_HASH = await instance.INIT_CODE_HASH.call();
  console.log('INIT_CODE_HASH - ', INIT_CODE_HASH)
};
