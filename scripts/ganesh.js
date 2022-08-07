const waiter = {
  id: 1,
  orders: [1, 2],
};

const orders = [
  {
    id: 1,
    tableId: 1,
    status: "in progress",
  },
  {
    id: 2,
    tableId: 2,
    status: "in progress",
  },
];

const tables = [
  {
    id: 1,
    guests: [
      {
        id: 1,
        guestName: "John",
        foodOrdered: [1, 5, 7],
        status: "in progress",
      },
      {
        id: 2,
        guestName: "Bob",
        foodOrdered: [2, 4, 8],
        status: "in progress",
      },
      {
        id: 3,
        guestName: "Jane",
        foodOrdered: [3, 5, 7],
        status: "in progress",
      },
    ],
  },
  {
    id: 2,
    guests: [
      {
        id: 4,
        guestName: "Adam",
        foodOrdered: [2, 4, 8],
        status: "completed",
      },
      {
        id: 5,
        guestName: "Ray",
        foodOrdered: [1, 6, 7],
        status: "completed",
      },
    ],
  },
];

const menu = [
  {
    id: 1,
    name: "Chicken Wings",
    type: "Appetizer",
  },
  {
    id: 2,
    name: "Fried Pickles",
    type: "Appetizer",
  },
  {
    id: 3,
    name: "French Fries",
    type: "Appetizer",
  },
  {
    id: 4,
    name: "Grilled Chicken Sandwich",
    type: "Sandwiches",
  },
  {
    id: 5,
    name: "Fried Chicken Sandwich",
    type: "Sandwiches",
  },
  {
    id: 6,
    name: "House Chicken Salad",
    type: "Salad",
  },
  {
    id: 7,
    name: "Soda",
    type: "Drinks",
  },
  {
    id: 8,
    name: "Iced Tea",
    type: "Drinks",
  },
];

for (const order of orders) {
  console.log(order);
}
