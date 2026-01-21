// Câu 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2
const products = [
    new Product(1, "Laptop Dell XPS", 40000000, 10, "Electronics", true),
    new Product(2, "iPhone 13 Pro", 28000000, 5, "Phone", true),
    new Product(3, "Mouse Logitech", 500000, 0, "Accessories", false),
    new Product(4, "Keyboard Mechanical", 1500000, 10, "Accessories", true),
    new Product(5, "Samsung Galaxy S22", 22000000, 8, "Phone", true),
    new Product(6, "Headphone Sony", 3500000, 0, "Accessories", true) // quantity 0 but isAvailable true implies maybe display model or out of stock but listed? logic says 'quantity > 0' for 'còn hàng'. 'isAvailable' is 'trạng thái bán'.
];

console.log("--- Câu 2: Danh sách sản phẩm ---");
console.log(products);

// Câu 3
const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log("--- Câu 3: Mảng name và price ---");
console.log(nameAndPrice);

// Câu 4
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("--- Câu 4: Sản phẩm còn hàng (quantity > 0) ---");
console.log(inStockProducts);

// Câu 5
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("--- Câu 5: Có sản phẩm giá > 30.000.000 không? ---");
console.log(hasExpensiveProduct);

// Câu 6
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log("--- Câu 6: Tất cả Accessories có isAvailable = true không? ---");
console.log(allAccessoriesAvailable);

// Câu 7
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalInventoryValue);

// Câu 8
console.log("--- Câu 8: for...of output ---");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable}`);
}

// Câu 9
console.log("--- Câu 9: for...in output (Example with first product) ---");
if (products.length > 0) {
    const p = products[0];
    for (const key in p) {
        console.log(`${key}: ${p[key]}`);
    }
}

// Câu 10
const sellingAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("--- Câu 10: Tên sản phẩm đang bán và còn hàng ---");
console.log(sellingAndInStockNames);
