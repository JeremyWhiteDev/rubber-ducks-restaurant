import { getWaiters } from "./data.js";
import { getOrders } from "./data.js";
import { getGuestOrders } from "./data.js";

const displayjtOrders =() => {

    const waiterCopy = getWaiters();
    // console.log(waiterCopy);

    const ordersCopy = getOrders();
    // console.log(ordersCopy)

    const guestCopy = getGuestOrders();
    // console.log(guestCopy)

    
const jt = [
    {     
            id:1,
            orderID: 701,
            tableID: 7,
            orderStatus: "Complete",
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
            orderStatus: "Complete",
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
            orderStatus: "Complete",
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
          
    
let htmlSection = ""


//step one: loop through guest orders
//step two: get each order to display on html
//step three: reference orders for Table IDs

for(const orders of ordersCopy) {
    if (orders.waiterID === 3) {
        htmlSection +=`<section class="jt-order">
             <div class="jt-header"><h1>Table ${orders.tableID}</h1><h1>Order ${orders.id}</h1>
             </div>`
             for(const guestOrders of guestCopy) {
                 if (guestOrders.orderID === orders.id) {
                 htmlSection +=`<ul class="jt-order-contents">
                 <h3>Drink:</h3>
                 <li>${guestOrders.drinks}</li>
                 <h3>Appetizer:</h3>
                 <li>${guestOrders.appetizer}</li>
                 <h3>Main Course:</h3>
                 <li>${guestOrders.mainCourse}</li>
                 </ul>`
                 htmlSection +=`</section>`
                }
            }
        }
    }




document.getElementById('jt').innerHTML = htmlSection;
}
displayjtOrders()
