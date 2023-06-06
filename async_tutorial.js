 const stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 
function placeOrder(fruitName, production){
    setTimeout(() => {
        console.log(`order placed, ${stocks.fruits[fruitName]} flavor selected`);
        production();

    }, 2000);

    


}

function startProd(){
    setTimeout(() => {
        console.log("production has started");
        setTimeout(() => {
            console.log("fruit has been cut");
        }, 2000);

    }, 0);
}

placeOrder(2, startProd);