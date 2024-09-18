


//Exploring Functions in JavaScript


//Task 1: Create a function to handle deposits into a bank account.

let funds = 0;

function deposits(amount){
        funds += amount;
        console.log(`You have deposited: $${amount}. 
        Your current Balance is now: $${funds}`);
    }

deposits(500);


function withdraw(amount){
    if(amount <= funds){
        funds -= amount;
        console.log(`Your Witdrawal for $${amount} has been approved. Your current Balance is now: $${funds}. Please take you cash.`)
    } else{
        console.log("Insufficient Funds. GoodBye");
    }
}

withdraw(10)


function Balancestatus(){
    console.log(`Your Current Balance is $${funds}`);
}

Balancestatus();