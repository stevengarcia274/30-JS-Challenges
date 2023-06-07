 const stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let isShopOpen = true;


 let order = (time, work) => {

    return new Promise( (resolve, reject) => {

        if(isShopOpen){
            resolve( work() );
        }else{
            reject(console.log("our shop is closed"));
        }


    });
 };