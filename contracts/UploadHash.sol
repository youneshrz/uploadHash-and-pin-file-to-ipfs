// SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

contract UploadHash {

    mapping(string => string) public nameToHash;

    function Setfile(string memory _hash,string memory _name) public  {
        nameToHash[_name] = _hash;
    }
    function Getfile(string memory _name) public view returns(string memory)  {

        return nameToHash[_name];
    }

}