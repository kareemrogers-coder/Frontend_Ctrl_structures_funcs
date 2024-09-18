### Exploring Functions in JavaScript

**Problem Statement:** Your task is to develop a JavaScript program that simulates a simple banking system. The program should include functions to perform basic banking operations such as deposit, withdrawal, and balance inquiry.

**Task 1:** Create a function to handle deposits into a bank account.

```js
let funds = 0;

function deposits(amount){
        funds += amount;
        console.log(`You have deposited: $${amount}. 
        Your current Balance is now: $${funds}`);
    }

deposits(500);
```

**Task 2:** Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

```js
function withdraw(amount){
    if(amount <= funds){
        funds -= amount;
        console.log(`Your Witdrawal for $${amount} has been approved. Your current Balance is now: $${funds}. Please take you cash.`)
    } else{
        console.log("Insufficient Funds. GoodBye");
    }
}

withdraw(10)
```

**Task 3:** Develop a function to check the current balance of the account.

```js
function Balancestatus(){
    console.log(`Your Current Balance is $${funds}`);
}

Balancestatus();
```

