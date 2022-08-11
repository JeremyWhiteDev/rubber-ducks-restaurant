//create jeremy object with array of order objects.

const jeremy = [
    {   id: 1,
        orderNumber: 101,
        orderStatus: "Active",
        tableID: 1,
        tip: 3,
        tableOrder: [
            {   id: 1,
                guestSeat: 1,
                drink: "Water",
                appetizer: "Curly Fries",
                mainCourse: "Turkey Leg",
                rewardsCustomer: true
            },
            {   id: 2,
                guestSeat: 2,
                drink: "Coke",
                appetizer: "N/A",
                mainCourse: "What the Duck Whole Duck",
                rewardsCustomer: false
            },
            {   id: 3,
                guestSeat: 3,
                drink: "Water No Lemon",
                appetizer: "Cheese Sticks",
                mainCourse: "Duck Confit",
                rewardsCustomer: false
            },
            {   id:4,
                guestSeat: 4,
                drink: "Water No Lemon",
                appetizer: "Duck Yeah Onion Rings",
                mainCourse: "Turkey Burger",
                rewardsCustomer: false
            }
        ]
    },
    {   id: 5,
        orderNumber: 102,
        orderStatus: "Complete",
        tip: 20,
        tableID: 1,
        tableOrder: [
            {   id: 6,
                guestSeat: 1,
                drink: "Old Fahioned",
                appetizer: "Bread with Duck Butter",
                mainCourse: "Spatchcocks with Herbs",
                rewardsCustomer: true
            },
            {   id: 7,
                guestSeat: 2,
                drink: "Beareded Iris Homestyle IPA",
                appetizer: "Curly Fries",
                mainCourse: "Badass Chicken Wings",
                rewardsCustomer: true
            },
            {   id: 8,
                guestSeat: 3,
                drink: "Iced Tea",
                appetizer: "N/A",
                mainCourse: "Quail Egg Sandwich",
                rewardsCustomer: true
            }
        ]
    },
    {   id: 9,
        orderNumber: 201,
        tableID: 2,
        orderStatus: "Active",
        tip: 0,
        tableOrder: [
            {   id: 10,
                guestSeat: 1,
                drink: "Old Fahioned",
                appetizer: "Bread with Duck Butter",
                mainCourse: "Peking Duck Pizza",
                rewardsCustomer: true
            },
            {   id: 11,
                guestSeat: 2,
                drink: "Beareded Iris Homestyle IPA",
                appetizer: "Curly Fries",
                mainCourse: "Roasted Pheasant",
                rewardsCustomer: true
            },
            {   id: 12,
                guestSeat: 3,
                drink: "Iced Tea",
                appetizer: "N/A",
                mainCourse: "Quail Egg Sandwich",
                rewardsCustomer: true
            }
        ]
    },
    {   id: 13,
        orderNumber: 301,
        tableID: 3,
        orderStatus: "Active",
        tip: 0,
        tableOrder: [
            {
                guestSeat: 1,
                drink: "water",
                appetizer: "Curly Fries",
                mainCourse: "Roasted Turkey Breast",
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
let jeremyOrderTotal = 0;
let jeremyTipTotal = 0;

//I'm going to: grab the orders. For each order I'm going to use the order # and Table number as a header. I'm then going to go to the table order section and format it to be the following:
// Drinks: water(seat Number), 
//appetizers: curly fries(seat number),
// main courses: meal(seat Number)

//loop reminder
// for (const bananas of jeremy) {
//     console.log(bananas.orderNumber)
//     waiter = waiter + bananas.orderNumber;
// }


for (const table of jeremy) {
    //if order is complete, then add section with additional "complete" class with different styling"
     if (table.orderStatus === "Complete") {
        jeremyTipTotal += table.tip;
        jeremyOrderTotal += 1;
        waiterSection += `
     <section class ="jeremy-order complete">
     <div class="jeremy-header"><h1>Order #${table.orderNumber}</h1>
     <h3>Table #${table.tableID}</h3><h3>Status: ${table.orderStatus}</h3><h3>Tip for Order: $${table.tip}</div>
     
     </section>`

    //else, just add section with "jeremy-order"
    } else {
        waiterSection += `
     <section class ="jeremy-order">`


     // add div for header of card and start ul for drinks
    waiterSection +=`
     <div class="jeremy-header"><h1>Order #${table.orderNumber}</h1>
     <h3>Table #${table.tableID}</h3><h3>Status: ${table.orderStatus}</div>
     
     <ul><h3>Drinks:</h3>`;
    
     //separate loop just targeting drinks 
     for (let i = 0; i < table.tableOrder.length; i++) {
        waiterSection += `
        <li>Seat ${table.tableOrder[i]["guestSeat"]}: ${table.tableOrder[i]["drink"]}</li>`;
    }
    //closing drinks list
    waiterSection += `
    </ul>`

    //separate loop just targeting apps
     waiterSection += `
     <ul><h3>Appetizers:</h3>`;
     for (let i = 0; i < table.tableOrder.length; i++) {
        waiterSection += `
        <li>Seat ${table.tableOrder[i]["guestSeat"]}: ${table.tableOrder[i]["appetizer"]}</li>`;
    }

    //closing apps list
    waiterSection += `
    </ul>`

    //separate loop just targeting mains
     waiterSection += `
    <ul><h3>Main Course:</h3>`;
     for (let i = 0; i < table.tableOrder.length; i++) {
        waiterSection += `
        <li>Seat ${table.tableOrder[i]["guestSeat"]}: ${table.tableOrder[i]["mainCourse"]}</li>`;
    }

    //closing mains list and entire section
    waiterSection += `
    </ul></section>`
}


}

waiterSection += `<div class="jeremy-footer"><h3>Tip Total Today: $${jeremyTipTotal}</h3>
<h3>Total Orders Completed Today:${jeremyOrderTotal}</h3></div>`
console.log(waiterSection);

document.getElementById("jeremy").innerHTML = waiterSection;

