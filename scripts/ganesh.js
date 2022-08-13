const waiters = [
  {
    id: 1,
    name: "Ganesh",
    orders: [1, 2],
  },
];

const menu = [
  {
    id: 1,
    name: "Chicken Wings",
    type: "Appetizer",
    price: 5.99,
  },
  {
    id: 2,
    name: "Fried Pickles",
    type: "Appetizer",
    price: 4.99,
  },
  {
    id: 3,
    name: "French Fries",
    type: "Appetizer",
    price: 3.99,
  },
  {
    id: 4,
    name: "Grilled Chicken Sandwich",
    type: "Sandwiches",
    price: 8.99,
  },
  {
    id: 5,
    name: "Fried Chicken Sandwich",
    type: "Sandwiches",
    price: 8.99,
  },
  {
    id: 6,
    name: "House Chicken Salad",
    type: "Salad",
    price: 8.99,
  },
  {
    id: 7,
    name: "Soda",
    type: "Drinks",
    price: 1.99,
  },
  {
    id: 8,
    name: "Iced Tea",
    type: "Drinks",
    price: 1.99,
  },
];

const orders = [
  {
    id: 1,
    tableId: 1,
    status: "in progress",
    totalAmount: 47.91,
    tipAmount: 5.0,
  },
  {
    id: 2,
    tableId: 2,
    status: "in progress",
    totalAmount: 32.94,
    tipAmount: 3.0,
  },
  {
    id: 3,
    tableId: 3,
    status: "completed",
    totalAmount: 32.94,
    tipAmount: 4.0,
  },
  {
    id: 4,
    tableId: "not assigned",
    status: "not started",
    totalAmount: 0,
    tipAmount: 0,
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
  {
    id: 3,
    guests: [
      {
        id: 6,
        guestName: "Don",
        foodOrdered: [1, 5, 7],
        status: "completed",
      },
      {
        id: 7,
        guestName: "Tim",
        foodOrdered: [2, 6, 8],
        status: "completed",
      },
    ],
  },
  {
    id: "not assigned",
    guests: [
      {
        id: 8,
        guestName: "Victor",
        foodOrdered: [],
        status: "not started",
      },
    ],
  },
];

// for (const waiter of waiters) {
//   console.log(`Waiter Name: ${waiter.name}`);
//   for (const orderId of waiter.orders) {
//     const order = orders.find(({ id }) => id === orderId);
//     const table = tables.find(({ id }) => id === order.tableId);
//     console.log(
//       "-------------------------------------------------------------------------------------"
//     );
//     console.log(
//       `Order ID: ${order.id}, Status: ${order.status}, Table ID: ${order.tableId}`
//     );
//     for (const guests of table.guests) {
//       console.log(
//         `Guest Name: ${guests.guestName}, Order Status: ${guests.status}`
//       );
//       for (const item of guests.foodOrdered) {
//         const menuOrdered = menu.find(({ id }) => id === item);
//         console.log(
//           `Menu ID: ${item}, Category: ${menuOrdered.type}, Item Name: ${menuOrdered.name}`
//         );
//       }
//     }
//     console.log(
//       "-------------------------------------------------------------------------------------"
//     );
//   }
// }

function createElement(elementName, className) {
  let htmlElement = document.createElement(elementName);
  htmlElement.className = className;
  return htmlElement;
}

// ganesh section
let parent = document.getElementById("ganesh");

//ganesh section parent
let ganeshSectionParent = parent.appendChild(
  createElement("div", "ganesh-section-parent")
);

// section header div

let ganeshSectionHeader = ganeshSectionParent.appendChild(
  createElement("div", "ganesh-section-header")
);

let ganeshSectionHeaderH2 = createElement("h2", "ganesh-none");
ganeshSectionHeaderH2.textContent = "Ganesh's Dashboard";

ganeshSectionHeader.innerHTML = ganeshSectionHeaderH2.outerHTML;

for (const order of orders) {
  // section header card
  let ganeshSectionCard = ganeshSectionParent.appendChild(
    createElement("div", `ganesh-section-card${order.id}`)
  );
  let ganeshCardOrderParent = ganeshSectionCard.appendChild(
    createElement("div", `ganesh-card-order-parent`)
  );

  let ganeshCardOrderIdLabel = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-order-id-label`)
  );
  ganeshCardOrderIdLabel.textContent = "Order ID";
  let ganeshCardOrderIdValue = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-order-id-value`)
  );
  ganeshCardOrderIdValue.textContent = order.id;

  let ganeshCardStatusLabel = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-status-label`)
  );
  ganeshCardStatusLabel.textContent = "Status";
  let ganeshCardStatusValue = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-status-value`)
  );
  ganeshCardStatusValue.textContent = order.status;

  let ganeshCardTableIdLabel = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-table-id-label`)
  );
  ganeshCardTableIdLabel.textContent = "Table ID";
  let ganeshCardTableIdValue = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-table-id-value`)
  );
  ganeshCardTableIdValue.textContent = order.tableId;

  let ganeshCardGuests = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-guests`)
  );

  const table = tables.find(({ id }) => id === order.tableId);

  for (const guests of table.guests) {
    let ganeshCardGuestParent = ganeshCardGuests.appendChild(
      createElement("div", `ganesh-card-guest-parent`)
    );

    let ganeshCardGuestNameLabel = ganeshCardGuestParent.appendChild(
      createElement("div", `ganesh-card-guest-name-label`)
    );
    ganeshCardGuestNameLabel.textContent = "Guest Name";

    let ganeshCardGuestNameValue = ganeshCardGuestParent.appendChild(
      createElement("div", `ganesh-card-guest-name-value`)
    );
    ganeshCardGuestNameValue.textContent = guests.guestName;

    let ganeshCardGuestOrderStatusLabel = ganeshCardGuestParent.appendChild(
      createElement("div", `ganesh-card-guest-order-status-label`)
    );
    ganeshCardGuestOrderStatusLabel.textContent = "Order Status";

    let ganeshCardGuestOrderStatusValue = ganeshCardGuestParent.appendChild(
      createElement("div", `ganesh-card-guest-order-status-value`)
    );
    ganeshCardGuestOrderStatusValue.textContent = guests.status;

    let ganeshCardGuestOrderItems = ganeshCardGuestParent.appendChild(
      createElement("div", `ganesh-card-guest-order-items`)
    );
    let ganeshCardGuestOrderItemsUl = ganeshCardGuestOrderItems.appendChild(
      createElement("ul", `ganesh-none`)
    );

    for (const item of guests.foodOrdered) {
      const menuOrdered = menu.find(({ id }) => id === item);

      let ganeshCardGuestOrderItemsUlLi =
        ganeshCardGuestOrderItemsUl.appendChild(
          createElement("li", `ganesh-card-guest-order-list-item`)
        );

      ganeshCardGuestOrderItemsUlLi.textContent = `${menuOrdered.type}: ${menuOrdered.name} ........................ $${menuOrdered.price}`;
    }
  }

  let ganeshCardOrderTotalEmpty = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-order-total-empty`)
  );
  ganeshCardOrderTotalEmpty.textContent = "";

  let ganeshCardOrderTotalLabel = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-order-total-label`)
  );
  ganeshCardOrderTotalLabel.textContent = "Order Total:";

  let ganeshCardOrderTotalValue = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-order-total-value`)
  );
  ganeshCardOrderTotalValue.textContent = `$${order.totalAmount}`;

  let ganeshCardOrderTipLabel = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-order-tip-label`)
  );
  ganeshCardOrderTipLabel.textContent = "Tip:";

  let ganeshCardOrderTipValue = ganeshCardOrderParent.appendChild(
    createElement("div", `ganesh-card-order-tip-value`)
  );
  ganeshCardOrderTipValue.textContent = `$${order.tipAmount}`;
}

let ganeshCardTotalTipEmpty1 = ganeshSectionParent.appendChild(
  createElement("div", `ganesh-card-total-tip-empty-1`)
);
ganeshCardTotalTipEmpty1.textContent = "";

let ganeshCardTotalTipLabel = ganeshSectionParent.appendChild(
  createElement("div", `ganesh-card-total-tip-label`)
);
ganeshCardTotalTipLabel.textContent = "Total Tip:";

let ganeshCardTotalTipValue = ganeshSectionParent.appendChild(
  createElement("div", `ganesh-card-total-tip-value`)
);
ganeshCardTotalTipValue.textContent = `$12.00`;
