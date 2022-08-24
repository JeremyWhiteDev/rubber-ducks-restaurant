const waiters = [
  {
    id: 1,
    name: "Jeremy",
  },

  {
    id: 2,
    name: "Mitchell",
  },

  {
    id: 3,
    name: "JT",
  },

  {
    id: 4,
    name: "Kyle",
  },

  {
    id: 5,
    name: "Ganesh",
  },
];

const orders = [
  //Jeremy's orders 1-3

  {
    id: 101,
    tableID: 1,
    waiterID: 1,
    orderTotal: 40.0,
    tip: 9,
  },
  {
    id: 201,
    tableID: 2,
    waiterID: 1,
    orderTotal: 23.0,
    tip: 7,
  },
  {
    id: 301,
    tableID: 3,
    waiterID: 1,
    orderTotal: 50.0,
    tip: 12,
  },

  //Mitchell's orders 4-6

  {
    id: 401,
    tableID: 4,
    waiterID: 2,
    orderTotal: 40.0,
    tip: 9,
  },
  {
    id: 501,
    tableID: 5,
    waiterID: 2,
    orderTotal: 23.0,
    tip: 7,
  },
  {
    id: 601,
    tableID: 6,
    waiterID: 2,
    orderTotal: 50.0,
    tip: 12,
  },

  //JT's orders 7-9

  {
    id: 701,
    tableID: 7,
    waiterID: 3,
    orderTotal: 40.0,
    tip: 9,
  },
  {
    id: 801,
    tableID: 8,
    waiterID: 3,
    orderTotal: 23.0,
    tip: 7,
  },
  {
    id: 901,
    tableID: 9,
    waiterID: 3,
    orderTotal: 50.0,
    tip: 12,
  },

  //Kyle's orders 10-12

  {
    id: 1001,
    tableID: 10,
    waiterID: 4,
    orderTotal: 40.0,
    tip: 9,
  },
  {
    id: 1101,
    tableID: 11,
    waiterID: 4,
    orderTotal: 23.0,
    tip: 7,
  },
  {
    id: 1201,
    tableID: 4,
    waiterID: 1,
    orderTotal: 50.0,
    tip: 12,
  },

  //Ganesh's orders 13-15

  {
    id: 1301,
    tableID: 13,
    waiterID: 5,
    orderTotal: 40.0,
    tip: 9,
  },
  {
    id: 1401,
    tableID: 14,
    waiterID: 5,
    orderTotal: 23.0,
    tip: 7,
  },
  {
    id: 1501,
    tableID: 15,
    waiterID: 5,
    orderTotal: 50.0,
    tip: 12,
  },
];

const guestOrders = [
  //Jeremy's guest orders
  {
    id: 1,
    orderID: 101,
    drinks: "Water",
    appetizer: "Curly Fries",
    mainCourse: "Turkey Leg",
  },
  {
    id: 2,
    orderID: 101,
    drinks: "Coke",
    appetizer: "N/A",
    mainCourse: "What the Duck Whole Duck",
  },
  {
    id: 3,
    orderID: 101,
    drinks: "Water No Lemon",
    appetizer: "Cheese Sticks",
    mainCourse: "Duck Confit",
  },
  {
    id: 4,
    orderID: 101,
    drinks: "Water No Lemon",
    appetizer: "Duck Yeah Onion Rings",
    mainCourse: "Turkey Burger",
  },
  {
    id: 5,
    orderID: 102,
    drinks: "Old Fahioned",
    appetizer: "Bread with Duck Butter",
    mainCourse: "Spatchcocks with Herbs",
  },
  {
    id: 6,
    orderID: 102,
    drinks: "Beareded Iris Homestyle IPA",
    appetizer: "Curly Fries",
    mainCourse: "Badass Chicken Wings",
  },
  {
    id: 7,
    orderID: 102,
    drinks: "Iced Tea",
    appetizer: "N/A",
    mainCourse: "Quail Egg Sandwich",
  },
  {
    id: 8,
    orderID: 201,
    drinks: "Old Fahioned",
    appetizer: "Bread with Duck Butter",
    mainCourse: "Peking Duck Pizza",
  },
  {
    id: 9,
    orderID: 201,
    drinks: "Beareded Iris Homestyle IPA",
    appetizer: "Curly Fries",
    mainCourse: "Roasted Pheasant",
  },
  {
    id: 10,
    orderID: 201,
    drinks: "Iced Tea",
    appetizer: "N/A",
    mainCourse: "Quail Egg Sandwich",
  },
  {
    id: 11,
    orderID: 301,
    drinks: "Cabernet Sauvignon",
    appetizer: "Curly Fries",
    mainCourse: "Chicken Alfredo",
  },
  {
    id: 12,
    orderID: 301,
    drinks: "Bushwacker",
    appetizer: "N/A",
    mainCourse: "Lemon Marinated Checkin",
  },
  {
    id: 13,
    orderID: 301,
    drinks: "Peach Tea",
    appetizer: "N/A",
    mainCourse: "Chicken Wings",
  },
  //Mitchell's guest orders
  {
    id: 1,
    orderID: 401,
    drinks: "the mallard, coke",
    appetizer: "Krinkle Cut Fries",
    mainCourse: "Rubber Duck Special",
  },
  {
    id: 2,
    orderID: 501,
    drinks: "The Canvasback",
    appetizer: "Cheese Curds",
    mainCourse: "What the Duck",
  },
  {
    id: 3,
    orderID: 601,
    drinks: "The Mallard, Domestic Duck",
    appetizer: "Krinkle Cut Fries, Fried Pickles",
    mainCourse: "Rubber Duck Special, Chicken Tenders",
  },
  //JT's guest orders
  {
    id: 1,
    orderID: 701,
    drinks: "Water",
    appetizer: "Mac and Cheese bites",
    mainCourse: "Medium Hot Wings",
  },
  {
    id: 2,
    orderID: 701,
    drinks: "Sweet Tea",
    appetizer: "French Fries",
    mainCourse: "Mild Wings",
  },
  {
    id: 3,
    orderID: 801,
    drinks: "Water",
    appetizer: "Mac and Cheese bites",
    mainCourse: "Medium Hot Wings",
  },
  {
    id: 4,
    orderID: 801,
    drinks: "Sweet Tea",
    appetizer: "French Fries",
    mainCourse: "Mild Wings",
  },
  {
    id: 5,
    orderID: 801,
    drinks: "Sweet Tea",
    appetizer: "French Fries",
    mainCourse: "Mild Wings",
  },
  {
    id: 6,
    orderID: 901,
    drinks: "Coke a cola",
    appetizer: "Cheese Fries",
    mainCourse: "Extremely Hot Wings",
  },
  {
    id: 7,
    orderID: 901,
    drinks: "Water",
    appetizer: "Mac and Cheese bites",
    mainCourse: "Medium Hot Wings",
  },
  {
    id: 8,
    orderID: 901,
    drinks: "Sweet Tea",
    appetizer: "French Fries",
    mainCourse: "Mild Wings",
  },
  {
    id: 9,
    orderID: 901,
    drinks: "Sweet Tea",
    appetizer: "French Fries",
    mainCourse: "Mild Wings",
  },
  //Kyles guest orders
  {
    id: 1,
    orderID: 1001,
    drinks: "Sweet Tea",
    appetizer: "Loaded Nachos",
    mainCourse: "Cluckin Hot Wings",
  },
  {
    id: 2,
    orderID: 1101,
    drinks: "Buffalo Trace Bourbon",
    appetizer: "Fried Pickles",
    mainCourse: "Wingman BBQ Wings",
  },
  {
    id: 3,
    orderID: 1201,
    drinks: "Water",
    appetizer: "Chips and Salsa",
    mainCourse: "Feeling Peckish Chicken Quesadilla",
  },

  //Ganesh's guest orders

  {
    id: 1,
    orderID: 1301,
    drinks: "Soda",
    appetizer: "Fried Pickles",
    mainCourse: "Fried Chicken Sandwich",
  },
  {
    id: 2,
    orderID: 1301,
    drinks: "Ice Tea",
    appetizer: "French Fries",
    mainCourse: "House Chicken Salad",
  },
  {
    id: 3,
    orderID: 1301,
    drinks: "Diet Soda",
    appetizer: "House Special Chips",
    mainCourse: "Meatball Pasta",
  },
  {
    id: 4,
    orderID: 1401,
    drinks: "Lemonade",
    appetizer: "Tomato Basil Soup",
    mainCourse: "Fried Chicken Sandwich",
  },
  {
    id: 5,
    orderID: 1401,
    drinks: "Iced Tea",
    appetizer: "French Fries",
    mainCourse: "Cesar salad",
  },
  {
    id: 6,
    orderID: 1401,
    drinks: "Soda",
    appetizer: "Bruschetta",
    mainCourse: "Chciken Alfredo",
  },
  {
    id: 7,
    orderID: 1501,
    drinks: "Diet Soda",
    appetizer: "Chicken Wings",
    mainCourse: "Grilled Chicken Sandwich",
  },
];

export const getWaiters = () => {
  const copyOfWaiters = waiters.map((server) => ({ ...server }));
  return copyOfWaiters;
};
export const getOrders = () => {
  const copyOfOrders = orders.map((order) => ({ ...order }));
  return copyOfOrders;
};
export const getGuestOrders = () => {
  const copyOfGuestOrders = guestOrders.map((guest) => ({ ...guest }));
  return copyOfGuestOrders;
};
