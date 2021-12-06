const Replica = artifacts.require("Replica");
const UpgradeBeaconController = artifacts.require("UpgradeBeaconController");
const UpgradeBeacon = artifacts.require("UpgradeBeacon");
const UpgradeBeaconProxy = artifacts.require("UpgradeBeaconProxy");
const BridgeRouter = artifacts.require("BridgeRouter")

module.exports = async function(deployer) {
  // proveAndProcess
  
  // contracts/optics/to/Replica.sol constructor()
  //   uint32 _localDomain - 6648936 'eth'
  //   uint256 _processGas - gas per process tx, must be >= 850000
  //   uint256 _reserveGas - safety margin for process tx gas, must be >= 15000
  await deployer.deploy(Replica, 6648936, 850000, 15000);
  await deployer.deploy(UpgradeBeaconController);
  await deployer.deploy(UpgradeBeacon, Replica.address, UpgradeBeaconController.address); // _initialImplementation (address): Replica.address, _controller (address): UpgradeBeaconController.address
  
  // contracts/optics/to/Replica.sol initialize()
  //   uint32 _remoteDomain - domain of remote chain, 63656c6f (celo)
  //   address _updater - address of updater agent, 0xdb2091535eb0ee447ce170ddc25204fea822dd81
  //   bytes32 _committedRoot - 0x0000000000000000000000000000000000000000
  //   uint256 _optimisticSeconds - confirmation time, 2a30 (3 hours)
  const _initializationCalldata1 = "0xe7e7a7b70000000000000000000000000000000000000000000000000000000063656c6f000000000000000000000000db2091535eb0ee447ce170ddc25204fea822dd8100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a30";
  await deployer.deploy(UpgradeBeaconProxy, UpgradeBeacon.address, _initializationCalldata1); // _localDomain: UpgradeBeacon.address, _initializationCalldata (bytes)

  // send
  await deployer.deploy(BridgeRouter);

  await deployer.deploy(UpgradeBeacon, BridgeRouter.address, UpgradeBeaconController.address); // _initialImplementation (address): Replica.address, _controller (address): UpgradeBeaconController.address
  
  // contracts/optics/from/BridgeRouter.sol initialize()
  //   address _tokenBeacon - BridgeToken (UpgradeBeacon) address, 0xc494bfee14b5e1e118f93cfedf831f40dfa720fa
  //   address _xAppConnectionManager - XAppConnectionManager address, 0xcec158a719d11005bd9339865965bed938beafa3
  const _initializationCalldata2 = "0x485cc955000000000000000000000000c494bfee14b5e1e118f93cfedf831f40dfa720fa000000000000000000000000cec158a719d11005bd9339865965bed938beafa3";
  await deployer.deploy(UpgradeBeaconProxy, UpgradeBeacon.address, _initializationCalldata2); // _localDomain: UpgradeBeacon.address, _initializationCalldata (bytes)
};
