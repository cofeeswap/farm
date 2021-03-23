const CofeToken = artifacts.require("CofeToken");
const MasterChef = artifacts.require("MasterChef");
const SyrupBar = artifacts.require("SyrupBar");
const Timelock = artifacts.require("Timelock");

module.exports = async function(deployer) {

    var devaddr = "0x1b4575B957Edf12158ad1f408bDe76b3909aC3df";
    var adminaddr = "0xE1A014d212fb6B5902e5Ae0A5AF5FaC6A9423cfA";

    var cofeToken_addr = "0xf0eebaB492D4E3c7500F30401534fb1eb9635e2d";
    var syrupBar_addr = "0x3f690D5c753d4077584408926ac822353c8aFfeb";

    // Deploy Contracts

    // await deployer.deploy(CofeToken).then(function() {
    //     return deployer.deploy(SyrupBar, CofeToken.address).then(function() {
    //         return deployer.deploy(MasterChef, CofeToken.address, SyrupBar.address, devaddr, "1000000000000000000", '4598214');
    //     })
    // })

    // await deployer.deploy(Timelock, adminaddr, "43200");
    return deployer.deploy(MasterChef, cofeToken_addr, syrupBar_addr, devaddr, "1000000000000000000", '4598214');
    
};
