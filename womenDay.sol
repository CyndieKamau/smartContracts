// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * Happy Int'l Women's Day Smart Contract!!!
 * By Cyndie 0-0
 */
contract womenDay {

   string public message;
    
    constructor() {
        message = "You are Bold."
                  "You are Beautiful."
                  "You are Brilliant."
                  "Happy International Women's Day.";
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}



