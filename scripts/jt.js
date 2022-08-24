import { getWaiters } from "./data.js";
import { getOrders } from "./data.js";
import { getGuestOrders } from "./data.js";

const displayjtOrders =() => {

    const waiterCopy = getWaiters();
    console.log(waiterCopy);

    const ordersCopy = getOrders();
    console.log(ordersCopy)

    const guestCopy = getGuestOrders();
    console.log(guestCopy)

    
const jt = [
    {     
            id:1,
            orderID: 701,
            tableID: 7,
            tableOrder: 
            {
                id:1,
                guestSeat: 1,
                drinks: "Sweet Tea",
                appetizer: "French Fries",
                mainCourse: "Hot Chicken Wings"
            },
            id:2,
            orderID: 801,
            tableID: 8,
            tableOrder:
            {
                id:3,
                guestSeat: 1,
                drinks: "Water",
                appetizer: "Mac and Cheese bites",
                mainCourse:"Medium Hot Wings",
            },
            id:4,
            orderID: 901,
            tableID: 9,
            tableOrder:
            {
                id:5,
                guestSeat:1,
                drinks: "Coke a cola",
                appetizer: "Cheese Fries",
                mainCourse: "Extremely Hot Wings",
            }
    }   
]  
          
    
let htmlSection = `<div class="jt-h1"><h1>Table</h1>`


//step one: loop through guest orders
//step two: get each order to display on html
//step three: reference orders for Table IDs

for(const orders of ordersCopy) {
    if (orders.waiterID === 3) {
        for(const guestOrders of guestCopy) {
            if (guestOrders.orderID === orders.id) 
             htmlSection +=` ${orders.tableID}

            <ul>
                 <li>Drink: ${guestOrders.drinks}</li>
                 <li>Appetizer: ${guestOrders.appetizer}</li>
                 <li>Main Course: ${guestOrders.mainCourse}</li>
             <ul>`
             
             
             
            }
        }
    }

    for (const orders of guestCopy) {
        if (orders.waiterID === 3) {
        htmlSection += ` <h1>Table ${orders.tableID}</h1>
        // <ul>
        //     <li> Order Number: ${orders.orderID}</li>
        //     <li>Drink: ${orders.drinks}</li>
        //     <li>Appetizer: ${orders.appetizer}</li>
        //     <li>Main Course: ${orders.mainCourse}</li>
        // </ul>`
        }
    }

document.getElementById('jt').innerHTML = htmlSection;
}
displayjtOrders()
