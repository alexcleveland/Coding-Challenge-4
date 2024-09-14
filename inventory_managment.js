// Task 1 Create an Inventory Array of Product Objects 
const Inventory = [
    {name: 'Laptop', price: 1100, quantity: 15, lowStockLevel: 2 },
    {name: 'Cellphone', price: 1000, quantity: 9, lowStockLevel: 1 },
    {name: 'TV', price: 2000, quantity: 11, lowStockLevel: 2 },
    {name: 'Earbuds', price: 300, quantity: 30, lowStockLevel: 5},
    {name: 'Desktop', price: 1500, quantity: 6, lowStockLevel: 1},
];

// Task 2 Create a Function to Display Product Details
function displayProdcuctDetails(product){
    const stockStat = product.quantity <=product.lowStockLevel
    ?"Low Stock" :"In Stock"
    console.log(`Product Name:${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Stock Level: ${stockstat}`);
    console.log(`Number in Stock: ${prodcuct.quantity}`);
    }

    