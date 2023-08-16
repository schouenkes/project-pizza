// Start Here

// Iteration 0 - Working with the alert() method
//
alert(
  `Welcome to our Javascript Pizzeria. 
This little program will be executed without the necessity of using DOM Elements or functions in order to enhance your knowledge, Ready to Start? - Click 'OK' to begin.`
);

const userName = prompt("Please enter your name:");
alert(`Nice to meet you, ${userName}!`);

const foodChoice = parseInt(
  prompt(
    `What type of food would you like to order?
        Enter a number: 
        1 - Pizza
        2 - Pasta
        3 - Salad
      `
  )
);

let foodType = "";
if (foodChoice === 1) {
  foodType = "Pizza";
} else if (foodChoice === 2) {
  foodType = "Pasta";
} else if (foodChoice === 3) {
  foodType = "Salad";
} else {
  alert("Invalid choice. Please select a number between 1 and 3.");
  process.exit(1);
}

alert(`You've chosen ${foodType}!`);

let subtypeChoice = 0;
if (foodChoice === 1) {
  subtypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type:
        Enter a number: 
        1- Napolitana
        2 - Hawaian
        3 - Pepperoni
        `
    )
  );
} else if (foodChoice === 2) {
  subtypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type:
        Enter a number:
        1 - Spaghetti Carbonara 
        2 - Fettuccine Alfredo
        3 - Cheesy Tortellini 
        `
    )
  );
} else if (foodChoice === 3) {
  subtypeChoice = parseInt(
    prompt(
      `Select a ${foodType} type:
        Enter a number: 
        1 - Caesar Salad
        2 - Caprese Salad
        3 - Greek Salad
    `
    )
  );
} else {
  alert("Invalid choice.");
  process.exit(1);
}

let subtype = "";
if (foodType === "Pizza") {
  if (subtypeChoice === 1) {
    subtype = "Napolitana pizza";
  } else if (subtypeChoice === 2) {
    subtype = "Hawaiian pizza";
  } else if (subtypeChoice === 3) {
    subtype = "Capricciosa pizza";
  } else {
    alert("Invalid pizza type choice.");
    process.exit(1);
  }
} else if (foodType === "Pasta") {
  if (subtypeChoice === 1) {
    subtype = "Spaghetti Carbonara";
  } else if (subtypeChoice === 2) {
    subtype = "Fettuccine Alfredo";
  } else if (subtypeChoice === 3) {
    subtype = "Cheesy Tortellini";
  } else {
    alert("Invalid pasta type choice.");
    process.exit(1);
  }
} else if (foodType === "Salad") {
  if (subtypeChoice === 1) {
    subtype = "Caesar salad";
  } else if (subtypeChoice === 2) {
    subtype = "Caprese salad";
  } else if (subtypeChoice === 3) {
    subtype = "Greek salad";
  } else {
    alert("Invalid salad type choice.");
    process.exit(1);
  }
} else {
  alert("Invalid choice.");
  process.exit(1);
}

alert(`You've chosen ${subtype}!`);

const ageChoice = parseInt(
  prompt(`Is this food for:
            Enter a number: 
            1 - Child
            2 - Adult
    `)
);

let orderMessage = "";
if (ageChoice === 1) {
  orderMessage = `One child sized ${subtype} will be prepared for you. That'll be €10. Are you sure you want to order this?`;
} else if (ageChoice === 2) {
  orderMessage = `One adult sized ${subtype} will be prepared for you. That'll be €15. Are you sure you want to order this?`;
} else {
  alert("Invalid age choice. Please select 1 for Child or 2 for Adult.");
  process.exit(1);
}

const confirmationChoice = parseInt(
  prompt(`${orderMessage}
        Enter a number to confirm: 
        1 - Yes
        2 - No
    `)
);

if (confirmationChoice === 1) {
  alert(
    "Thank you for your order! Your delicious meal will be prepared. See you soon! 👋🏼"
  );
} else if (confirmationChoice === 2) {
  alert("No problem, come back and order anytime you want.");
} else {
  alert("Invalid choice. Please select 1 for Yes or 2 for No.");
}
