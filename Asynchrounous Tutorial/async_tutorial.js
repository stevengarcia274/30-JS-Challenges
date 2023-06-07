const stocks = {
    fruits : ["strawberry", "grape", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = false;

function time(ms){
    return new Promise( (resolve, reject) => {
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
        console.log("order processed");
        await time(0000);
        console.log("begin production");
        await time(1000);
        console.log("the fruit has been chopped");
        await time(1000);
        console.log("product served");

    }
    catch(error){
        console.log("customer left");
    }
    finally{
        console.log("end of day");
    }
}

kitchen();