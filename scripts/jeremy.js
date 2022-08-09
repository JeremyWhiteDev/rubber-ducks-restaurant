const jeremy = [
    {
        orderNumber: 101,
        orderStatus: "Complete",
        tableID: 1,
        tableOrder: [
            {
                guestSeat: 1,
                drink: "Water",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            },
            {
                guestSeat: 2,
                drink: "Coke",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            },
            {
                guestSeat: 3,
                drink: "Water No Lemon",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: false
            },
            {
                guestSeat: 4,
                drink: "Water No Lemon",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: false
            }
        ]
    },
    {
        orderNumber: 102,
        orderStatus: "Active",
        tableID: 1,
        tableOrder: [
            {
                guestSeat: 1,
                drink: "Water",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            },
            {
                guestSeat: 2,
                drink: "Coke",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            },
            {
                guestSeat: 3,
                drink: "Water No Lemon",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            }
        ]
    },
    {
        orderNumber: 201,
        tableID: 2,
        orderStatus: "Active",
        tableOrder: [
            {
                guestSeat: 1,
                drink: "water",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            },
            {
                guestSeat: 2,
                drink: "water",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            },
            {
                guestSeat: 3,
                drink: "water",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            }
        ]
    },
    {
        orderNumber: 301,
        tableID: 3,
        orderStatus: "Active",
        tableOrder: [
            {
                guestSeat: 1,
                drink: "water",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            },
            {
                guestSeat: 2,
                drink: "water",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            },
            {
                guestSeat: 3,
                drink: "water",
                appetizer: "Curly Fries",
                mainCourse: "Chicken Wings",
                rewardsCustomer: true
            }
        ]
    }
    
]

// console.log("hello World")

let waiterSection = "";


//I'm going to: grab the orders. For each order I'm going to use the order # and Table number as a header. I'm then going to go to the table orderr section and format it to be the following:

// Drinks: water(seat Number), 

//appetizers: curly fries(seat number),

// main courses: meal(seat Number)


for (const bananas of jeremy) {
    console.log(bananas.orderNumber)
    waiter = waiter + bananas.orderNumber;
}


for (const table of jeremy) {
    //if order is complete, then add section with additional "complete" class with different styling"
     if (table.orderStatus === "Complete") {
        waiterSection += `
     <section class ="jeremy-order complete">`

    //else, just add section with "jeremy-order"
    } else {
        waiterSection += `
     <section class ="jeremy-order">`}

     // add div for header of card and start ul for drinks
    waiterSection +=`
     <div class="jeremy-header"><h1>Order #${table.orderNumber}</h1>
     <h3>Table #${table.tableID}</h3><h3>Status: ${table.orderStatus}</div>
     
     <ul><h3>Drinks:</h3>`;
   
     for (let i = 0; i < table.tableOrder.length; i++) {
        waiterSection += `
        <li>${table.tableOrder[i]["drink"]}(#${table.tableOrder[i]["guestSeat"]})</li>`;
    }
    waiterSection += `
    </ul>`

     waiterSection += `
     <ul><h3>Appetizers:</h3>`;
     for (let i = 0; i < table.tableOrder.length; i++) {
        waiterSection += `
        <li>${table.tableOrder[i]["appetizer"]}(#${table.tableOrder[i]["guestSeat"]})</li>`;
    }
    waiterSection += `
    </ul>`
     waiterSection += `
    <ul><h3>Main Course:</h3>`;
     for (let i = 0; i < table.tableOrder.length; i++) {
        waiterSection += `
        <li>${table.tableOrder[i]["mainCourse"]}(#${table.tableOrder[i]["guestSeat"]})</li>`;
    }
    waiterSection += `
    </ul></section>`
     
   

}
console.log(waiterSection);

// document.getElementById("jeremy").innerHTML = waiterSection;

