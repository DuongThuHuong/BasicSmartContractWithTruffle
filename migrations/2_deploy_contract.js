const simpleContract = artifacts.require('simpleContract');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(simpleContract);
};
