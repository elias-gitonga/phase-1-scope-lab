// Write your solution in this file!
var customerName = 'bob';


function upperCaseCustomerName() {
    return customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer = 'not bob'; 
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; 
}


const leastFavoriteCustomer = 'someone';


function changeLeastFavoriteCustomer() {
    
    leastFavoriteCustomer = 'someone else'; 
}

console.log(upperCaseCustomerName());
console.log(bestCustomer); 

overwriteBestCustomer(); 
console.log(bestCustomer); 

console.log(leastFavoriteCustomer); 
changeLeastFavoriteCustomer(); 
