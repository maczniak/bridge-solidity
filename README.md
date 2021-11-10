# bridge-solidity

send ->                 UpgradeBeaconProxy      (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47)
                        UpgradeBeacon           (0x3b96b42d1f4962cb21049fb237a886e2860afacb)
                        UpgradeBeaconController (0xbb6d6333fafd2cae7ef4c5efbf8f048f2f109d1b)
                        BridgeRouter            (0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6)

proveAndProcess ->      UpgradeBeaconProxy      (0x07b5B57b08202294E657D51Eb453A189290f6385)
                        UpgradeBeacon           (0x10a432946e24c49866c243a13be7205b3ef929ee)
                        UpgradeBeaconController (0xbb6d6333fafd2cae7ef4c5efbf8f048f2f109d1b)
                        Replica                 (0xfc4060e4fd5979f848b8edc8505d2f89d83b9e04)