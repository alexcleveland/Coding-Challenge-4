// Task 1 Create an Inventory Array of Product Objects 
const inventory = [
    {name: 'Laptop', price: 1100, quantity: 15, lowStockLevel: 2 },
    {name: 'Cellphone', price: 1000, quantity: 9, lowStockLevel: 1 },
    {name: 'TV', price: 2000, quantity: 11, lowStockLevel: 2 },
    {name: 'Earbuds', price: 300, quantity: 30, lowStockLevel: 5},
    {name: 'Desktop', price: 1500, quantity: 6, lowStockLevel: 1},
];

// Task 2 Create a Function to Display Product Details
function displayProductDetails(product){
    const stockStat = product.quantity <=product.lowStockLevel
    ? "Low Stock" :"In Stock";
    console.log(`Product Name:${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Stock Level: ${stockStat}`);
    console.log(`Number in Stock: ${product.quantity}`);
    }

// Task 3 Create Function to Update Product Stock After Sales
function updateStock(product, unitsSold) {
        product.quantity -= unitsSold;
        if (product.quantity <= product.lowStockLevel) {
            console.log(`${product.name} Stock is low:${product.quantity}`);
        } else {
            console.log(`${product.name} stock left: ${product.quantity}`);
        }  }

// Task 4 Create a Function to Check Low Stock Products

function checkLowStock(){
    inventory.forEach(product =>
        product.quantity <= product.lowStockLevel && 
        console.log(`${product.name} Low stock`)
        );}

// Task 5 Create a function to calculate total inventory value 
function calculateInventoryValue() {
    const totalValue = inventory.reduce((total, product) => total + (product.price * product.quantity), 0);
    console.log(`Total Inventory Value: $${totalValue}`);
    return totalValue;}


 // Task 6 Create function to process a sale

function processSale(productName, unitsSold){
    const product= inventory.find(item => item.name === productName);
    if (product){
        updateStock(product, unitsSold);}
        else {
            console.log(`Error: ${productName} Not Found`)};
        }


        //Here is a list of the console commands for the functions
        //for the displayProductDetails function you need to type "displayProductDetails(inventory,?) the ?= a number 0-4
        //for updateStock function that is updatestock(productname, than a number sold or removed)
        // calculateInventoryValue is calculateInventoryValue()
        //processSale is processSale("product Name", then a number)
