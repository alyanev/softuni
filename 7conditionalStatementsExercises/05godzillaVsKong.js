/*
Movie Budget Checker: "Godzilla vs. Kong"

Create a function that determines whether the available budget is sufficient
to start filming the movie "Godzilla vs. Kong".

Rules:
- The set decor costs 10% of the total budget.
- If there are more than 150 extras, a 10% discount is applied to the total costume cost.

Input Parameters:
The function receives 3 arguments:
1. budget (Real number) – Total available budget (range: 1.00 to 1,000,000.00)
2. artists (Integer) – Number of extras (range: 1 to 500)
3. dress (Real number) – Price per costume (range: 1.00 to 1000.00)

Output:
The function should print two lines:

- If the expenses exceed the budget:
  "Not enough money!"
  "Wingard needs {amount over budget} leva more."

- If the budget is sufficient:
  "Action!"
  "Wingard starts filming with {remaining amount} leva left."

All monetary values should be formatted to two decimal places.
*/


function movie(budget, artists, dress) {
    // Calculate decor price (10% of the budget)
    let decorPrice = budget * 0.1;

    // Calculate total dress price
    let dressPrice = dress * artists;

    // Apply discount if more than 150 artists
    if (artists > 150) {
        dressPrice *= 0.9;
    }

    // Total cost
    let totalCost = decorPrice + dressPrice;

    // Compare total cost with budget
    if (totalCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    }
}
