pragma solidity =0.5.16;

import '../LuckyChipERC20.sol';

contract ERC20 is LuckyChipERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
