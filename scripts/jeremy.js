//IMPORTING DATA FROM SOURCE
import { getWaiters } from "./data.js";
import { getOrders } from "./data.js";
import { getGuestOrders } from "./data.js";

//RESTAURANT PART 1

//CREATE JEREMY OBJECT WITH ARRAY OF ORDERS
// const jeremy = [
//     {   id: 1,
//         orderNumber: 101,
//         orderStatus: "Active",
//         tableID: 1,
//         tip: 3,
//         tableOrder: [
//             {   id: 1,
//                 guestSeat: 1,
//                 drink: "Water",
//                 appetizer: "Curly Fries",
//                 mainCourse: "Turkey Leg",
//                 rewardsCustomer: true
//             },
//             {   id: 2,
//                 guestSeat: 2,
//                 drink: "Coke",
//                 appetizer: "N/A",
//                 mainCourse: "What the Duck Whole Duck",
//                 rewardsCustomer: false
//             },
//             {   id: 3,
//                 guestSeat: 3,
//                 drink: "Water No Lemon",
//                 appetizer: "Cheese Sticks",
//                 mainCourse: "Duck Confit",
//                 rewardsCustomer: false
//             },
//             {   id:4,
//                 guestSeat: 4,
//                 drink: "Water No Lemon",
//                 appetizer: "Duck Yeah Onion Rings",
//                 mainCourse: "Turkey Burger",
//                 rewardsCustomer: false
//             }
//         ]
//     },
//     {   id: 5,
//         orderNumber: 102,
//         orderStatus: "Complete",
//         tip: 20,
//         tableID: 1,
//         tableOrder: [
//             {   id: 6,
//                 guestSeat: 1,
//                 drink: "Old Fahioned",
//                 appetizer: "Bread with Duck Butter",
//                 mainCourse: "Spatchcocks with Herbs",
//                 rewardsCustomer: true
//             },
//             {   id: 7,
//                 guestSeat: 2,
//                 drink: "Beareded Iris Homestyle IPA",
//                 appetizer: "Curly Fries",
//                 mainCourse: "Badass Chicken Wings",
//                 rewardsCustomer: true
//             },
//             {   id: 8,
//                 guestSeat: 3,
//                 drink: "Iced Tea",
//                 appetizer: "N/A",
//                 mainCourse: "Quail Egg Sandwich",
//                 rewardsCustomer: true
//             }
//         ]
//     },
//     {   id: 9,
//         orderNumber: 201,
//         tableID: 2,
//         orderStatus: "Active",
//         tip: 0,
//         tableOrder: [
//             {   id: 10,
//                 guestSeat: 1,
//                 drink: "Old Fahioned",
//                 appetizer: "Bread with Duck Butter",
//                 mainCourse: "Peking Duck Pizza",
//                 rewardsCustomer: true
//             },
//             {   id: 11,
//                 guestSeat: 2,
//                 drink: "Beareded Iris Homestyle IPA",
//                 appetizer: "Curly Fries",
//                 mainCourse: "Roasted Pheasant",
//                 rewardsCustomer: true
//             },
//             {   id: 12,
//                 guestSeat: 3,
//                 drink: "Iced Tea",
//                 appetizer: "N/A",
//                 mainCourse: "Quail Egg Sandwich",
//                 rewardsCustomer: true
//             }
//         ]
//     },
//     {   id: 13,
//         orderNumber: 301,
//         tableID: 3,
//         orderStatus: "Active",
//         tip: 0,
//         tableOrder: [
//             {
//                 guestSeat: 1,
//                 drink: "Cabernet Sauvignon",
//                 appetizer: "Curly Fries",
//                 mainCourse: "Chicken Alfredo",
//                 rewardsCustomer: true
//             },
//             {
//                 guestSeat: 2,
//                 drink: "Bushwacker",
//                 appetizer: "N/A",
//                 mainCourse: "Lemon Marinated Checkin",
//                 rewardsCustomer: true
//             },
//             {
//                 guestSeat: 3,
//                 drink: "Peach Tea",
//                 appetizer: "N/A",
//                 mainCourse: "Chicken Wings",
//                 rewardsCustomer: true
//             }
//         ]
//     }

// ]

//START HTML CODE
// let waiterSection = `<h3 class="section-header">Jeremy's Section</h3>`;
// let jeremyOrderTotal = 0;
// let jeremyTipTotal = 0;

//ALGORITHM for FOR LOOP
//  I'm going to: grab the orders. For each order I'm going to use the order # and Table    number as a header. I'm then going to go to the table order section and format it to be the following:
//  Drinks: water(seat Number),
//  appetizers: curly fries(seat number),
//  main courses: meal(seat Number)

//START FOR LOOP
// for (const table of jeremy) {
//IF ORDER IS COMPLETE, ADD "complete" CLASS
//  if (table.orderStatus === "Complete") {
//     jeremyTipTotal += table.tip;
//     jeremyOrderTotal += 1;
//     waiterSection += `
//  <section class ="jeremy-order complete">
//  <div class="jeremy-header"><h1>Order #${table.orderNumber}</h1>
//  <h3>Table #${table.tableID}</h3><h3>Status: ${table.orderStatus}</h3><h3>Tip for Order: $${table.tip}</div>
//  </section>`

//ELSE, JUST ADD START OF HTMLSECTION
//     } else {
//         waiterSection += `
//      <section class ="jeremy-order">`

//      // ADD DIV FOR HEADER AND START SECTION FOR DRINKS
//     waiterSection +=`
//      <div class="jeremy-header"><h1>Order #${table.orderNumber}</h1>
//      <h3>Table #${table.tableID}</h3><h3>Status: ${table.orderStatus}</div>

//      <ul><h3>Drinks:</h3>`;

//      //SEPARATE LOOP FOR JUST TARGETING DRINKS
//      for (let i = 0; i < table.tableOrder.length; i++) {
//         waiterSection += `
//         <li>Seat ${table.tableOrder[i]["guestSeat"]}: ${table.tableOrder[i]["drink"]}</li>`;
//     }
//     //CLOSING DRINKS LIST
//     waiterSection += `
//     </ul>`

//     //SEPARATE LOOP FOR JUST TARGETING APPS
//      waiterSection += `
//      <ul><h3>Appetizers:</h3>`;
//      for (let i = 0; i < table.tableOrder.length; i++) {
//         waiterSection += `
//         <li>Seat ${table.tableOrder[i]["guestSeat"]}: ${table.tableOrder[i]["appetizer"]}</li>`;
//     }

//     //CLOSING APPS LIST
//     waiterSection += `
//     </ul>`

//     //SEPARATE LOOP JUST TARGETING MAINS
//      waiterSection += `
//     <ul><h3>Main Course:</h3>`;
//      for (let i = 0; i < table.tableOrder.length; i++) {
//         waiterSection += `
//         <li>Seat ${table.tableOrder[i]["guestSeat"]}: ${table.tableOrder[i]["mainCourse"]}</li>`;
//     }

//     //CLOSING MAINS LIST AND ENTIRE ORDER SECTION
//     waiterSection += `
//     </ul></section>`
// }

// }

// ADD SEPERATE DIV FOR TIP TOTALS AND TOTAL ORDERS COMPLETED.
// waiterSection += `<div class="jeremy-footer"><h3>Tip Total Today: $${jeremyTipTotal}</h3>
// <h3>Total Orders Completed Today: ${jeremyOrderTotal}</h3></div>`
// console.log(waiterSection);

//DISPLAY ON DOM
// document.getElementById("jeremy").innerHTML = waiterSection;

//RESTAURANT PART 2

//ALGORITHM FOR DATA RESTRECTURE
// step one :  loop through ordersCopy
// step two: if the current object of the orderCopy loop has a waiterID that matches 1, then....
//step three: loop through the orders array, and if the current object of that loop has an orderID that matches the  id of the current object in ordersCopy, then....
//step four: print that value to the HTML
//step five: repeat steps 3&4 for appetizers and mains

//FUNCTION FOR DISPLAYING ORDERS TO DOM
const displayJeremysOrders = () => {
  // ASSIGN DATA COPIES TO VARIABLES
  const waiterCopy = getWaiters();
  const ordersCopy = getOrders();
  const guestOrdersCopy = getGuestOrders();

  //START HTML SECTION
  let jeremySection = `<h3 class="section-header">Jeremy's Section</h3>`;

  //MAIN FOR LOOP FOR ITERATING OVER ORDERS DATA
  for (const order of ordersCopy) {
    if (order.waiterID === 1) {
      jeremySection += `
            <section class ="jeremy-order">
            <div class="jeremy-header"><h1>Order #${order.id}</h1><h3>Table #${order.tableID}</h3><h3>Status: Complete</div>`;

      //SEPARATE LOOP FOR DRINKS
      jeremySection += `
            <ul><h3>Drinks:</h3>`;
      for (const guestOrder of guestOrdersCopy) {
        if (guestOrder.orderID === order.id) {
          jeremySection += `
                    <li>${guestOrder.drinks}</li>`;
        }
      }

      //SEPARATE LOOP FOR APPS
      jeremySection += "</ul>";
      jeremySection += `
            <ul><h3>Appetizers:</h3>`;
      for (const guestOrder of guestOrdersCopy) {
        if (guestOrder.orderID === order.id) {
          jeremySection += `
                    <li>${guestOrder.appetizer}</li>`;
        }
      }

      //SEPARATE LOOP FOR MAINS
      jeremySection += "</ul>";
      jeremySection += `
            <ul><h3>Mains:</h3>`;
      for (const guestOrder of guestOrdersCopy) {
        if (guestOrder.orderID === order.id) {
          jeremySection += `
                    <li>${guestOrder.mainCourse}</li>`;
        }
      }
      //CLOSE CURRENT ORDER SECTION
      jeremySection += "</ul></section>";
    }
  }
  //PUT FINAL VARIABLE ON DOM
  document.getElementById("jeremy").innerHTML = jeremySection;
};

//REFACTOR PT 3
// filter ordersCopy by waiter id,
// filter guestOrdersCopy to only have objects that have orderIDs that exist in the filtered ordersCopy list
//loop over the top level orders array
//filter JeremyGuestOrders again to only have orders that match the current orderID
//create empty arrays for drinks, apps, and mains
//loop over the filterd order array, which only has the orders of the current target, and push the respective food items to theire respective arrays
//use string interpolation and join method to create order card.

//NEW FUNCTION FOR DISPLAYING ORDERS TO DOM
const newDisplayJeremysOrders = () => {
  //GET FULL DATA STRUCTRES
  const guestOrdersCopy = getGuestOrders();
  const ordersCopy = getOrders();

  //CREATE VARIABLE FOR TOTALLING TIPS
  let jeremyTipTotal = 0;

  //FILTER DATA STRUCTURES FOR ONLY RELEVANT ORDERS
  const jeremyOrders = ordersCopy.filter((element) => {
    return element.waiterID === 1;
  });
  const jeremyGuestOrders = guestOrdersCopy.filter((element) => {
    if (
      jeremyOrders.find((x) => {
        return x.id === element.orderID;
      })
    ) {
      return element;
    }
  });
  //CREATE VARIABLE TO ADD HTML TO
  let jeremySection = `<h3 class="section-header">Jeremy's Section</h3>`;
  //MAIN LOOP THROUGH ORDERS
  for (const order of jeremyOrders) {
    //FILTER GUEST ORDERS THAT ONLY MATCH ID OF CURRENT ORDER
    const currentGuestOrders = jeremyGuestOrders.filter((element) => {
      if (order.id === element.orderID) {
        return element;
      }
    });

    //CREATE ARRAYS TO PUSH SPECIFC ORDER ITEMS TO
    const currentDrinks = [];
    const currentApps = [];
    const currentMains = [];

    //FOR LOOP FOR ITERATING OVER FILTERED ORDERS, CREATING ARRAYS OF SPECIFC ITEMS FOR THE CURRENT ORDER
    for (const thisOrder of currentGuestOrders) {
      currentDrinks.push(`<li>${thisOrder.drinks}</li>`);
      currentApps.push(`<li>${thisOrder.appetizer}</li>`);
      currentMains.push(`<li>${thisOrder.mainCourse}</li>`);
    }
    //ADD ELEMENTS FROM THOSE ARRAYS
    jeremySection += `
                <section class ="jeremy-order">
                <div class="jeremy-header"><h1>Order #${
                  order.id
                }</h1><h3>Table #${order.tableID}</h3><h3>Status: Complete</div>
                <ul><h3>Drinks:</h3>
                ${currentDrinks.join(`
                `)}
                </ul>
                <ul><h3>Appetizers:</h3>
                ${currentApps.join(`
                `)}
                </ul>
                <ul><h3>Mains:</h3>
                ${currentMains.join(`
                `)}</ul></section>`;
    //ADD TIP TO JEREMY TIP TOTAL
    jeremyTipTotal += order.tip;
  }
  //ADD TIP TOTAL SECTION TO HTML VARIABLE
  jeremySection += `<div class="jeremy-footer"><h3>Tip Total Today: $${jeremyTipTotal}</h3>
  <h3>Total Orders Completed Today: ${"3"}</h3></div>`;
  //PUT FINISHED HTML SECTION ON DOM
  document.getElementById("jeremy").innerHTML = jeremySection;
  // console.log(jeremySection)
};

//RUN FUNCTION
//displayJeremysOrders()
newDisplayJeremysOrders();
//
//navBar animation

window.onscroll = function () {
  shrinkNavbar();
};

const shrinkNavbar = () => {
  const navBar = document.getElementById("header-bar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.classList.add("shrink-header");
  } else {
    navBar.classList.remove("shrink-header");
  }
};
