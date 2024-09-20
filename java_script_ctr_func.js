///Exploring Conditional Statements and Loops

//Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

function login(username, password) {
    if (username == "user1" && password == "password1") {
      isLoggedIn = true;
      console.log("Account Verify, Thank you for logging in");
    } else {
      console.log("Incorrect User or Password. Please try again.");
    }
  }


  let cart = [];
  function addToCart(item) {    
    if (isLoggedIn) {
      cart.push(item);
      console.log("Login success items are ready to be added to cart");
    } else {
      console.log("User is currently not logged in. unable to execute command.");
    }
  }

  login("user1", "password1");
  addToCart("item");

//   Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart. You can hard code this out by just creating item variables or for EXTRA CREDIT figure out a way to grab user inputs using prompt(). 
  
  let products = ["PS5","Black-Ops 6","Macbook Pro", "External HardDrive" ]; 

  const prompt=require("prompt-sync")({sigint:true});

  let userOption = prompt("Please confirm you'll like to move forward with adding items to cart.(confirm or deny)  "); 
  
  if (userOption == 'confirm'){
      for (let product of products){
          console.log(product);
      }
  }
  else{
      console.log("No items added to cart");
  }


  
  //     Task 3: Calculate the total cost of the items in the cart and display it to the user.


  if (userOption== 'confirm'){
        let prices = [699, 100, 3000, 150];
        let total = 0;
        for (let i = 0; i < products.length; i++){
            total += prices[i];
        }
        console.log("Total : $" + total);
  }
  else{
    console.log("Total: $"+ 0);
  }
 


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
        console.log(`Your Witdrawal for $${amount} has been approved. Your current Balance is now: $${funds}. Please take your cash.`)
    } else{
        console.log("Insufficient Funds. GoodBye");
    }
}

withdraw(10)


function Balancestatus(){
    console.log(`Your Current Balance is $${funds}`);
}

Balancestatus();