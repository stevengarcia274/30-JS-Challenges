const stocks = {
    fruits : ["strawberry", "grape", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms){
    return new Promise( (resolve, reject ) => {
        if(isShopOpen){
            setTimeout(resolve, ms);
            
        }else{
            reject(console.log("shop is closed"));
        }
    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.fruits[0]} chosen`);

        console.log("start production");

        await time(2000);
        console.log("fruit is chopped");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

        await time(1000);
        console.log("machine started");

        await time(2000);
        console.log(`${stocks.holder[1]} selected as container`);

        await time(2000);
        console.log("ice cream served");

        
    }
    catch(error){
        console.log("customer left");

    }
    finally{
        console.log("day is done");
    }
}

kitchen();