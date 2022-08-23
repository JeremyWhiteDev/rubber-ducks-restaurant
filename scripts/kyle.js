import { getWaiters } from "./data.js";
import { getOrders } from "./data.js";
import { getGuestOrders } from "./data.js";

let kylehtmlSection =""
const displaykyleOrders =() => {
const waiterCopy=getWaiters()
const ordersCopy=getOrders()
const guestCopy=getGuestOrders()

for(const orders of ordersCopy) {
    if (orders.waiterID === 4) {
        for(const guestOrders of guestCopy) {
            if (guestOrders.orderID === orders.id) 
             kylehtmlSection +=` <h1>Table ${orders.tableID}</h1>
              <ul>
                 <li> Order Number: ${guestOrders.orderID}</li>
                 <li>Drink: ${guestOrders.drinks}</li>
                 <li>Appetizer: ${guestOrders.appetizer}</li>
                 <li>Main Course: ${guestOrders.mainCourse}</li>
             </ul>`
         }
    }
}

for (const orders of guestCopy) {
    if (orders.waiterID === 4) {
    kylehtmlSection += ` <h1>Table ${orders.tableID}</h1>
    // <ul>
    //     <li> Order Number: ${orders.orderID}</li>
    //     <li>Drink: ${orders.drinks}</li>
    //     <li>Appetizer: ${orders.appetizer}</li>
    //     <li>Main Course: ${orders.mainCourse}</li>
    // </ul>`
    }
}

// let kylehtmlSection =`<h3 class="section-header">Kyle's Dashboard</h3>`; 
// for (const order of kyle) {
// kylehtmlSection += ` <h1>Table ${order.tableID}</h1>
// <ul>
//     <li> Order Number: ${order.orderNumber}</li>
//     <li>Order Status: ${order.orderStatus}</li>
//     <li>Guest Seat: ${order.guestSeat}</li>
//     <li>Drink: ${order.drink}</li>
//     <li>Appetizer: ${order.appetizer}</li>
//     <li>Main Course: ${order.mainCourse}</li>
//     <li>Rewards Customer: ${order.rewardsCustomer}</li>
// </ul>`


// }
// Sending JavaScript to HTML//
document.getElementById('kyle').innerHTML = kylehtmlSection
}
displaykyleOrders()