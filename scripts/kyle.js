const kyle = [
    {
        orderNumber: 1001,
        tableID: 10,
        orderStatus: "Complete",
        tableOrder: 1,
        guestSeat: 1,
        drink: "Sweet Tea",
        appetizer: "Loaded Nachos",
        mainCourse: "Cluckin Hot Wings",
        rewardsCustomer: true
            
        
    },

   
    {
        orderNumber: 1101,
        tableID: 11,
        orderStatus:"Complete",
        tableOrder: 2,
        guestSeat: 2,
        drink: "Buffalo Trace Bourbon",
        appetizer: "Fried Pickles",
        mainCourse:"Wingman BBQ Wings",
        rewardsCustomer:false
            
        
    },
      
         
    {
        orderNumber: 1201,
        orderStatus:"Complete",
        tableID: 12,
        tableOrder: 3,
        guestSeat:3,
        drink: "Water",
        appetizer: "Chips and Salsa",
        mainCourse: "Feeling Peckish Chicken Quesadilla",
        rewardsCustomer: true
                    
                

    },
]
         

let htmlSection =`<h3 class="section-header">Kyle's Dashboard</h3>`; 
for (const order of kyle) {
htmlSection += ` <h1>Table ${order.tableID}</h1>
<ul>
    <li> Order Number: ${order.orderNumber}</li>
    <li>Order Status: ${order.orderStatus}</li>
    <li>Guest Seat: ${order.guestSeat}</li>
    <li>Drink: ${order.drink}</li>
    <li>Appetizer: ${order.appetizer}</li>
    <li>Main Course: ${order.mainCourse}</li>
    <li>Rewards Customer: ${order.rewardsCustomer}</li>
</ul>`


}
// Sending JavaScript to HTML//
document.getElementById('kyle').innerHTML = htmlSection