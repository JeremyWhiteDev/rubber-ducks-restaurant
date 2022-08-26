import { getWaiters } from "./data.js";
import { getOrders } from "./data.js";
import { getGuestOrders } from "./data.js";

const waiters = getWaiters();
const orders = getOrders();
const guests = getGuestOrders();

const createElement = (elementName, cssId, cssClass, content) => {
  let htmlElement = document.createElement(`${elementName}`);
  if (cssId.trim()) htmlElement.id = cssId.trim();
  if (cssClass.trim()) htmlElement.className = cssClass.trim();
  if (content.trim()) htmlElement.textContent = content.trim();

  return htmlElement;
};

// ganesh section
const parent = document.getElementById("ganesh");

//ganesh section parent
const ganeshSectionParent = parent.appendChild(
  createElement(`div`, ``, `ganesh-section-parent`, ``)
);

// section header div

const ganeshSectionHeader = ganeshSectionParent.appendChild(
  createElement(`div`, ``, `ganesh-section-header`, ``)
);

const ganeshSectionHeaderH2 = createElement(`h2`, ``, ``, `Ganesh's Dashboard`);
ganeshSectionHeader.innerHTML = ganeshSectionHeaderH2.outerHTML;

let cardSectionId = 0;

for (const waiter of waiters) {
  if (waiter.id === 5) {
    for (const order of orders) {
      if (order.waiterID === waiter.id) {
        // section header card
        const ganeshSectionCard = ganeshSectionParent.appendChild(
          createElement(`div`, ``, `ganesh-section-card${++cardSectionId}`, ``)
        );
        const ganeshCardOrderParent = ganeshSectionCard.appendChild(
          createElement(`div`, ``, `ganesh-card-order-parent`, ``)
        );

        ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-order-id-label`, `Order ID`)
        );

        ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-order-id-value`, `${order.id}`)
        );
        ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-status-label`, `Status`)
        );

        ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-status-value`, `Active`)
        );

        ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-table-id-label`, `Table ID`)
        );

        ganeshCardOrderParent.appendChild(
          createElement(
            `div`,
            ``,
            `ganesh-card-table-id-value`,
            `${order.tableID}`
          )
        );

        const ganeshCardGuests = ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-guests`, ``)
        );

        for (const guest of guests) {
          if (guest.orderID === order.id) {
            const ganeshCardGuestParent = ganeshCardGuests.appendChild(
              createElement(`div`, ``, `ganesh-card-guest-parent`, ``)
            );
            ganeshCardGuestParent.appendChild(
              createElement(
                `div`,
                ``,
                `ganesh-card-guest-name-label`,
                `Guest ID:`
              )
            );
            ganeshCardGuestParent.appendChild(
              createElement(
                `div`,
                ``,
                `ganesh-card-guest-name-value`,
                `${guest.id}`
              )
            );
            ganeshCardGuestParent.appendChild(
              createElement(
                `div`,
                ``,
                `ganesh-card-guest-order-status-label`,
                ``
              )
            );
            ganeshCardGuestParent.appendChild(
              createElement(
                `div`,
                ``,
                `ganesh-card-guest-order-status-value`,
                ``
              )
            );
            const ganeshCardGuestOrderItems = ganeshCardGuestParent.appendChild(
              createElement(`div`, ``, `ganesh-card-guest-order-items`, ``)
            );
            const ganeshCardGuestOrderItemsUl =
              ganeshCardGuestOrderItems.appendChild(
                createElement(`ul`, ``, ``, ``)
              );
            ganeshCardGuestOrderItemsUl.appendChild(
              createElement(
                `li`,
                ``,
                `ganesh-card-guest-order-list-item`,
                `Appetizer: ${guest.appetizer} `
              )
            );
            ganeshCardGuestOrderItemsUl.appendChild(
              createElement(
                `li`,
                ``,
                `ganesh-card-guest-order-list-item`,
                `Main Course: ${guest.mainCourse} `
              )
            );
            ganeshCardGuestOrderItemsUl.appendChild(
              createElement(
                `li`,
                ``,
                `ganesh-card-guest-order-list-item`,
                `Drinks: ${guest.drinks} `
              )
            );
          }
        }
        ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-order-total-empty`, ``)
        );

        ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-order-total-label`, `Total:`)
        );
        ganeshCardOrderParent.appendChild(
          createElement(
            `div`,
            ``,
            `ganesh-card-order-total-value`,
            `$${order.orderTotal}`
          )
        );
        ganeshCardOrderParent.appendChild(
          createElement(`div`, ``, `ganesh-card-order-tip-label`, `Tip:`)
        );
        ganeshCardOrderParent.appendChild(
          createElement(
            `div`,
            ``,
            `ganesh-card-order-tip-value`,
            `$${order.tip}`
          )
        );
      }
    }
    ganeshSectionParent.appendChild(
      createElement(`div`, ``, `ganesh-card-total-tip-empty-1`, ``)
    );
    ganeshSectionParent.appendChild(
      createElement(`div`, ``, `ganesh-card-total-tip-empty-1`, ``)
    );
    ganeshSectionParent.appendChild(
      createElement(`div`, ``, `ganesh-card-total-tip-empty-1`, ``)
    );
    ganeshSectionParent.appendChild(
      createElement(`div`, ``, `ganesh-card-total-tip-label`, `Total Tip:`)
    );
    ganeshSectionParent.appendChild(
      createElement(`div`, ``, `ganesh-card-total-tip-value`, `$28.00`)
    );
  }
}
