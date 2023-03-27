const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("upload file test", function () {

  it("Deployment of contract", async function () {

    // const [owner] = await ethers.getSigners();

    const ContractUpload = await ethers.getContractFactory("UploadHash");

    const ContractDeploy = await ContractUpload.deploy();

    const hashFile = await ContractDeploy.Setfile('gghghgiuguiuscouastvo','gg');

    expect(await ContractDeploy.Getfile('gg')).to.equal('gghghgiuguiuscouastvo');

  });
});