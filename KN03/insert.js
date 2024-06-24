var product1 = new ObjectId();
var product2 = new ObjectId();
var product3 = new ObjectId();
var product4 = new ObjectId();
var product5 = new ObjectId();

db.products.insertMany([
    {
        _id: product1,
        name: "Laptop",
        price: 699.95,
        description: "A Modern Laptop with Top features"
    },
    {
        _id: product2,
        name: "Smart Watch",
        price: 249.50,
        description: "Wearable Computer on your wrist"
    },
    {
        _id: product3,
        name: "Wired Headphones",
        price: 24.95,
        description: "Cheap with mediocre quality"
    },
    {
        _id: product4,
        name: "USB Drive 64GB",
        price: 12.0,
        description: "USB Drive for storing your files on the go"
    },
    {
        _id: product5,
        name: "Teapot",
        price: 418.0,
        description: "Why do i exist? That is the question"
    }
]);

var order1 = new ObjectId();
var order2 = new ObjectId();
var order3 = new ObjectId();
var order4 = new ObjectId();

db.orders.insertMany([
    {
        _id: order1,
        orderDate: new Date("2023-07-09"),
        orderCompleted: true,
        orderedProducts: [product1, product4],
        Invoice: {
            _id: new ObjectId(),
            refNumber: 11230983954,
            netPrice: 711.95,
            dueDate: new Date("2023-08-09")
        }
    },
    {
        _id: order2,
        orderDate: new Date("2024-09-05"),
        orderCompleted: false,
        orderedProducts: [product2],
        Invoice: {
            _id: new ObjectId(),
            refNumber: 897234657,
            netPrice: 249.50,
            dueDate: new Date("2024-10-05")
        }
    },
    {
        _id: order3,
        orderDate: new Date("2024-09-12"),
        orderCompleted: false,
        orderedProducts: [product3, product4],
        Invoice: {
            _id: new ObjectId(),
            refNumber: 65672348797,
            netPrice: 36.95,
            dueDate: new Date("2024-10-12")
        }
    },
    {
        _id: order4,
        orderDate: new Date("1970-01-01"),
        orderCompleted: true,
        orderedProducts: [product5],
        Invoice: {
            _id: new ObjectId(),
            refNumber: 2000,
            netPrice: 418.0,
            dueDate: new Date("1970-02-01")
        }
    }
]);

