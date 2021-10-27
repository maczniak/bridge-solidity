const Replica = artifacts.require("Replica");
const UpgradeBeaconController = artifacts.require("UpgradeBeaconController");
const UpgradeBeacon = artifacts.require("UpgradeBeacon");
const UpgradeBeaconProxy = artifacts.require("UpgradeBeaconProxy");

module.exports = async function(deployer) {
  await deployer.deploy(Replica, 6648936, 850000, 15000); // _localDomain: 6648936, _processGas: 850000, _reserveGas: 15000
  await deployer.deploy(UpgradeBeaconController);
  await deployer.deploy(UpgradeBeacon, Replica.address, UpgradeBeaconController.address); // _initialImplementation (address): Replica.address, _controller (address): UpgradeBeaconController.address
  
  const _initializationCalldata = "0xe7e7a7b70000000000000000000000000000000000000000000000000000000063656c6f000000000000000000000000db2091535eb0ee447ce170ddc25204fea822dd8100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a30";
  await deployer.deploy(UpgradeBeaconProxy, UpgradeBeacon.address, _initializationCalldata); // _localDomain: UpgradeBeacon.address, _initializationCalldata (bytes)
};
