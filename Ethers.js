# DECENTRALIZED FINANCE (DEFI) APPLICATION
Building a decentralized finance (DeFi) application for lending and borrowing tokens based on dynamic interest rates is a fun and worthwhile task. Your entire kit: smart contract code, frontend description, deployment instructions, and example outputs — all configured for a test blockchain.

---

## ???? Smart Contract: Lending & Borrowing with Dynamic Interest

### ✅ Features:
- Accrual of interest over time on deposits
- Collateralized borrowing
- Utilization-driven adjustment of interest rates

```solidity
// SPDX-License-Identifier: MIT
```
pragma solidity ^0.8.0;

contract DeFiLending {
    struct Deposit {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Deposit) public deposits;
    mapping(address => uint256) public borrowings;

    uint256 public totalDeposits;
    uint256 public totalBorrowed;
uint256 public baseRate = 5; // 5% per annum
    uint256 public rateMultiplier = 15;

    event Deposited(address indexed user, uint256 amount);
    event Borrowed(address indexed user, uint256 amount);
    event Repaid(address indexed user, uint256 amount);

    function getInterestRate() public view returns (uint256) {
uint256 utilization = (totalBorrowed * 100) / (totalDeposits + 1);
        return baseRate + (utilization * rateMultiplier) / 100;
    }

    function deposit() external payable {
        deposits[msg.sender].amount += msg.value;
        deposits[msg.sender].timestamp = block.timestamp;
totalDeposits += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function borrow(uint256 _amount) external {
        require(deposits[msg.sender].amount >= _amount, "Insufficient collateral");
        borrowings[msg.sender] += _amount;
        totalBorrowed += _amount;
payable(msg.sender).transfer(_amount);
        emit Borrowed(msg.sender, _amount);
    }

    function repay() external payable {
        require(borrowings[msg.sender] >= msg.value, "Repay amount exceeds debt");
        borrowings[msg.sender] -= msg.value;
        totalBorrowed -= msg.value;
emit Repaid(msg.sender, msg.value);
    }

    function calculateInterest(address user) public view returns (uint256) {
        Deposit memory dep = deposits

# DECENTRALIZED FINANCE (DEFI) APPLICATION
 A DEFI APPLICATION FOR LENDING AND BORROWING TOKENS WITH INTEREST RATES CALCULATED DYNAMICALLY
I used Ethers.js for running my code 
  #OUTPUT#
