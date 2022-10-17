console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//made an added ittem function and created a basket
//beginnging stretch goals

let basket = [];
const maxItems = 5;

function isFull(){
 if ( basket.length < maxItems){
    return false;
 }
    else {
        return true;
    }
 }
 console.log('basket')

function addItem( item){
    if (isFull()  === true){
        console.log(' Your basket is full!')
        return false;
    } else {
        basket.push(item)
        return true;
    }
}
//console.log testing

console.log( 'adding oranges', addItem('oranges'));
console.log( 'adding grapes', addItem('grapes'));
console.log( 'adding cantalooupe', addItem('cantaloupe'));


function listItems() {
    for ( item of basket) {
        console.log(item);
    }
}

//double checking to see if items are in the basket
console.log( 'my basket has', basket);

function empty() {
    basket = []
}

function removeItem(item) {
    for ( let i = 0; i < basket.length; i++){
        if (basket.indexOf(item) === i){
            basket.splice( i, 0);
            return item;
        } else {
            return null;
        }
    }
}

console.log(removeItem('oranges'))
console.log(removeItem('grapes'))
console.log(removeItem('cantaloupe'))


// Removes all items from the basket.
console.log('This will empty the basket', empty());
console.log('basket is now ', basket);