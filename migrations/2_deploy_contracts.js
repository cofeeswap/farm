const CofeToken = artifacts.require("CofeToken");
const MasterChef = artifacts.require("MasterChef");
const SyrupBar = artifacts.require("SyrupBar");
const Timelock = artifacts.require("Timelock");

module.exports = async function(deployer) {

    var devaddr = "";

    // Deploy Contracts

    await deployer.deploy(CofeToken).then(function() {
        return deployer.deploy(SyrupBar, CofeToken.address).then(function() {
            return deployer.deploy(MasterChef, CofeToken.address, SyrupBar.address, devaddr, "1000000000000000000", '4598214');
        })
    })
    
};
