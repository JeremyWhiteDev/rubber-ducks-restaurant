import { getWaiters } from "./data.js";
import { getOrders } from "./data.js";
import { getGuestOrders } from "./data.js";

// const mitchell = [
//      {
//         id:1,
//         orderNumber: 401,
//         tableID: 4,
//         drinks: 'the mallard, coke',
//         appetizer: 'Krinkle Cut Fries',
//         mainCourse: 'Rubber Duck Special',
//         rewardsCustomer: false,
//         tableOrderOne: 
//               {
//                 guestSeat: 1,
//                 drink: "The Mallard",
//                 appetizer: "Krinkle Cut Fries",
//                 mainCourse: "Rubber Duck Special",
//                 rewardsCustomer: true  
//             },
//         tableOrderTwo:
//             {
//                 guestSeat: 2,
//                 drink: "Domestic Duck",
//                 appetizer: "Fried Pickles",
//                 mainCourse: "Chicken Tenders",
//                 rewardsCustomer: false  
//             }
    // },
    // tableFive = {
    //     id:2,
    //     orderNumber: 501,
    //     tableID: 5,
    //     drinks: "The Canvasback",
    //     appetizer: "Cheese Curds",
    //     mainCourse: "What the Duck",
    //     rewardsCustomer: true,
    //     tableOrder: 
    //         {
    //             id:1,
    //             guestSeat: 1,
    //             drink: "The Canvasback",
    //             appetizer: "Cheese Curds",
    //             mainCourse: "What the Duck",
    //             rewardsCustomer: true    
    //         }
    // },
    // tableSix = {
    //     id:3,
    //     tableNumber: 6,
    //     orderNumber: 601,
    //     tableID: 6,
    //     drinks: 'The Mallard, Domestic Duck',
    //     appetizer: 'Krinkle Cut Fries, Fried Pickles',
    //     mainCourse: 'Rubber Duck Special, Chicken Tenders',
    //     rewardsCustomer: true,
    //     tableOrderOne: 
    //           {
    //             guestSeat: 1,
    //             drink: "The Mallard",
    //             appetizer: "Krinkle Cut Fries",
    //             mainCourse: "Rubber Duck Special",
    //             rewardsCustomer: true  
    //         },
    //     tableOrderTwo:
    //         {
    //             guestSeat: 2,
    //             drink: "Domestic Duck",
    //             appetizer: "Fried Pickles",
    //             mainCourse: "Chicken Tenders",
    //             rewardsCustomer: false  
    //         }
    //       }   
        // ]
//JS to HTML


const displaymitchellsOrders = () => {
const waiterCopy = getWaiters()
const ordersCopy = getOrders()
const guestCopy = getGuestOrders()


let mitchellhtmlSection = '';

// step one: guest orders for loop
// step two: get each order to display on html
// step three: reference orders for Table Ids

// find waiter iD =2 
// find id that matches order Id
// print to html 

for (const order of ordersCopy) {
    if (order.waiterID === 2) {
        for (const guestOrder of guestCopy) {
            if (guestOrder.orderID === order.id) {
                mitchellhtmlSection += `<div class="card">
                <div class="mitchellContainer">
                    <h3 id='mh3'>Table ${order.tableID}</h3>
                    <h4 id='mh4'>Orders</h4>
                    <ul id="morderItems">
                        <li id='mli'>Drink: ${guestOrder.drinks}</li>
                        <li id='mli'>App: ${guestOrder.appetizer} </li>
                        <li id='mli'>Main Course: ${guestOrder.mainCourse}</li>
                    </ul>
                </div>
            </div>`
            }
        }
    }
}


document.getElementById('mitchell').innerHTML = mitchellhtmlSection
}
displaymitchellsOrders()

// for (const mitchellsOrders of guestCopy) {
//     mitchellhtmlSection += `<div class="card">
//     <div class="mitchellContainer">
//         <h3 id='mh3'>Table ${mitchellsOrders}</h3>
//         <h4 id='mh4'>Orders</h4>
//         <ul id="morderItems">
//             <li id='mli'>Drink: ${mitchellsOrders.drinks}</li>
//             <li id='mli'>App: ${mitchellsOrders.appetizer} </li>
//             <li id='mli'>Main Course: ${mitchellsOrders.mainCourse}</li>
//             <li id='mli'>Rewards Customer: ${mitchellsOrders.rewardsCustomer}</li>
//         </ul>
        
//     </div>
// </div>`
// }

// for (const mitchellsOrders of mitchell) {
//     mitchellhtmlSection += `<div class="card">
//     <div class="mitchellContainer">
//         <h3 id='mh3'>Table ${mitchellsOrders.tableID}</h3>
//         <h4 id='mh4'>Orders</h4>
//         <ul id="morderItems">
//             <li id='mli'>Drink: ${mitchellsOrders.drinks}</li>
//             <li id='mli'>App: ${mitchellsOrders.appetizer} </li>
//             <li id='mli'>Main Course: ${mitchellsOrders.mainCourse}</li>
//             <li id='mli'>Rewards Customer: ${mitchellsOrders.rewardsCustomer}</li>
//         </ul>
        
//     </div>
// </div>`
// }
// document.getElementById('mitchell').innerHTML = mitchellhtmlSection