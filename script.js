//--------------------------------------------- Problem 01------------------------------------------------------// 
//--------------------------------------------- Problem 01------------------------------------------------------// 
//--------------------------------------------- Problem 01------------------------------------------------------// 



function seerToMon(seer){

    //error for string
    if (typeof seer != 'number') {
        return 'Please give a number, not a word';
    }

    // error for less than 0
    else if (seer <= 0) {
        return 'Please give a positive number';
    }

    // fixed variable 
    const divider = 40;

    // formulla 
    let mon = seer / divider;
    return mon;
    
}
let seer = 240;
console.log(seerToMon(seer)); //result : 6



//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------





//----------------------------------------------- Problem 02 ---------------------------------------------------//
//----------------------------------------------- Problem 02 ---------------------------------------------------//
//----------------------------------------------- Problem 02 ---------------------------------------------------//


function totalSales(shirt,pant,shoe){

    //error for string type input
    if (typeof shirt != 'number' || typeof pant != 'number' || typeof shoe != 'number') {
        return 'Please order as number sir.';
    }

    //error for less than 0
    else if (shirt <= 0 || pant <= 0 || shoe <= 0) {
        return 'You have to oder at least 1 item of every product.';
    }

    //fixed price of products
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    //price by order number
    let totalShirtPrice = shirtPrice * shirt;
    let totalpantPrice = pantPrice * pant;
    let totalshoePrice = shoePrice * shoe;

    //total price
    let totalPrice = totalShirtPrice + totalpantPrice + totalshoePrice;
    return totalPrice;
}

//order number
const shirt = 5;
const pant = 5;
const shoe = 3;

console.log(totalSales(shirt,pant,shoe)); //result : 3000



//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------






//----------------------------------------------------- Problem 03 ----------------------------------------------//
//----------------------------------------------------- Problem 03 ----------------------------------------------//
//----------------------------------------------------- Problem 03 ----------------------------------------------//

function deliveryCost(product){

    //error for string type input
    if (typeof product != 'number') {
        return 'Please order as a number sir.';
    }

    // error for less than 0 
    else if (product <= 0) {
        return 'Please Order at least 1 product.';
    }

    //fixed price for product
    const first100price = 100;
    const next200price = 80;
    const upto200price = 50;

    //for 0-100 product price
    if (product <= 100) {
        let productPrice = product * first100price;
        return productPrice;
    }
    
    //for 101-200 product price
    else if (product <= 200) {
        let forFirst100price = 100 * first100price;
        let restProduct = product - 100;
        let forSecond200price = restProduct * 80;
        let finalPrice = forFirst100price + forSecond200price;
        return finalPrice;
    }
    
    //for upto 200 product price
    else {
        let forFirst100price = 100 * first100price;
        let forSecond200price = 100 * 80;
        let restProduct = product - 200;
        let forUpto200price = restProduct * 50;
        let finalPrice = forFirst100price + forSecond200price + forUpto200price;
        return finalPrice;
    }
}

console.log(deliveryCost(250)); //result : 20500


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------






//----------------------------------------------------- Problem 04-----------------------------------------------//
//----------------------------------------------------- Problem 04-----------------------------------------------//
//----------------------------------------------------- Problem 04-----------------------------------------------//




function perfectFriend(friends){

    //error for an objest as input
    if (typeof friends != 'object') {
        return 'Please make sure you are passing an array of friends.';
    }

    //error for a string as input
    else if (typeof friends == 'string') {
        return 'Please make sure you are not giving a string.';
    }

    // empty string for operation 
    let friend = '';

    //for loop to find perfect friend
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length == 5) {
            friend = element;
            break;
        }
    }
    return friend;

}

const friends = ['nil','mohaiminul','purnata','maruf','bipul','dipok'];
console.log(perfectFriend(friends)); // result : maruf



//--------------------------------------------------The end ------------------------------------------------------
//--------------------------------------------------The end ------------------------------------------------------
//--------------------------------------------------The end ------------------------------------------------------
