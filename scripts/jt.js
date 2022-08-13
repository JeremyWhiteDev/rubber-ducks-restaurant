const jt = [
    {
            
        orderNumber: 701,
            orderStatus: "Complete",
            tableID: 7,
            tableOrder: [
            {
                
                guestSeat: 1,
                drink: "Sweet Tea",
                side: "French Fries",
                mainCourse: "Hot Chicken Wings",
                rewardsCustomer: true
            },
            {
                
                guestSeat: 2,
                drink: "Sweet Tea",
                side: "French Fries",
                mainCourse: "Mild Wings",
                rewardsCustomer: true 
            }
        ]
            },
            {
            
            orderNumber: 801,
            orderStatus: "Complete",
            tableID: 8,
            tableOrder: [
            {
                
                guestSeat: 1,
                drink: "Water",
                side: "Mac and Cheese bites",
                mainCourse:"Medium Hot Wings",
                rewardsCustomer:false
            },
            {  
                 
                guestSeat: 2,
                drink: "Sweet Tea",
                side: "French Fries",
                mainCourse: "Mild Wings",
                rewardsCustomer: true
            },   
            {  
                 
                guestSeat: 3,
                drink: "Sweet Tea",
                side: "French Fries",
                mainCourse: "Mild Wings",
                rewardsCustomer: true 
            }
        ]
            },
            {

            orderNumber: 901,
            orderStatus: "Not Complete",
            tableID: 9,
            tableOrder: [
            {
                     
                    guestSeat:1,
                    drink: "Coke a cola",
                    side: "Cheese Fries",
                    mainCourse: "Extremely Hot Wings",
                    rewardsCustomer: true
            },
            {
                    
                    guestSeat: 2,
                    drink: "Water",
                    side: "Mac and Cheese bites",
                    mainCourse:"Medium Hot Wings",
                    rewardsCustomer:false
            },
            {
                    
                    guestSeat: 3,
                    drink: "Sweet Tea",
                    side: "French Fries",
                    mainCourse: "Mild Wings",
                    rewardsCustomer: true
            },
            {   
                    
                    guestSeat: 4,
                    drink: "Sweet Tea",
                    side: "French Fries",
                    mainCourse: "Mild Wings",
                    rewardsCustomer: true
            }
        ] 
    }
]          
    

let htmlSection = "";





for (const table of jt) {
 
     if (table.orderStatus === "Complete") {
        htmlSection += `
     <section class ="jt-order complete">`

    
    } else {
        htmlSection += `
     <section class ="jt-order">`}

     
    htmlSection +=`
     <div class="jt-header"><h1>Order #${table.orderNumber}</h1>
     <h3>Table #${table.tableID}</h3><h3>Status: ${table.orderStatus}</div>
     
     <ul class="jt-order-contents"><h3>Drinks:</h3>`;
    
    
     for (let i = 0; i < table.tableOrder.length; i++) {
        htmlSection += `
        <li>${table.tableOrder[i]["drink"]}(#${table.tableOrder[i]["guestSeat"]})</li>`;
    }
   
    htmlSection += `
    </ul>`

    
     htmlSection += `
     <ul class="jt-order-contents"><h3>Sides:</h3>`;
     for (let i = 0; i < table.tableOrder.length; i++) {
        htmlSection += `
        <li>${table.tableOrder[i]["side"]}(#${table.tableOrder[i]["guestSeat"]})</li>`;
    }

    htmlSection += `
    </ul>`

     htmlSection += `
    <ul class="jt-order-contents"><h3>Main Course:</h3>`;
     for (let i = 0; i < table.tableOrder.length; i++) {
        htmlSection += `
        <li>${table.tableOrder[i]["mainCourse"]}(#${table.tableOrder[i]["guestSeat"]})</li>`;
    }

    
    htmlSection += `
    </ul></section>`
     
   

}
console.log(htmlSection);

document.getElementById("jt").innerHTML = htmlSection;
