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
    
}












