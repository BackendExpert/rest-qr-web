import Burger from '../../../assets/Burger.jpg'
import Choco from '../../../assets/Choco.jpg'
import Pizza from '../../../assets/PizzaItem.webp'


const topitemdata = [
    {
        id: 1,
        image: Pizza,
        name: "Grilled Chicken Steak",
        submenu: "Main Course",
        price: 12.5,
        ratings: 4.8,
        type: ["last_week", "all_time"]
    },
    {
        id: 2,
        image: Burger,
        name: "Spicy Beef Burger",
        submenu: "Burger",
        price: 9.5,
        ratings: 4.7,
        type: ["last_month"]
    },
    {
        id: 3,
        image: Choco,
        name: "Garlic Butter Shrimp",
        submenu: "Seafood",
        price: 14.0,
        ratings: 4.9,
        type: ["last_week", "last_month", "all_time"]
    },
    {
        id: 4,
        image: Choco,
        name: "Chicken Fried Rice",
        submenu: "Rice",
        price: 7.5,
        ratings: 4.6,
        type: ["all_time"]
    },
    {
        id: 5,
        image: Choco,
        name: "BBQ Ribs",
        submenu: "Grill",
        price: 16.0,
        ratings: 4.8,
        type: ["last_week", "last_month"]
    },
    {
        id: 6,
        image: Pizza,
        name: "Creamy Alfredo Pasta",
        submenu: "Pasta",
        price: 11.0,
        ratings: 4.7,
        type: ["all_time"]
    },
    {
        id: 7,
        image: Burger,
        name: "Hot Chicken Wings",
        submenu: "Starter",
        price: 8.0,
        ratings: 4.6,
        type: ["last_week", "all_time"]
    },
    {
        id: 8,
        image: Burger,
        name: "Beef Steak Platter",
        submenu: "Steak",
        price: 18.5,
        ratings: 4.9,
        type: ["last_month", "all_time"]
    },
    {
        id: 9,
        image: Pizza,
        name: "Seafood Platter",
        submenu: "Seafood",
        price: 20.0,
        ratings: 4.9,
        type: ["last_week"]
    },
    {
        id: 10,
        image: Choco,
        name: "Cheesy Loaded Fries",
        submenu: "Fast Food",
        price: 6.5,
        ratings: 4.5,
        type: ["last_week", "last_month", "all_time"]
    },
    {
        id: 11,
        image: Burger,
        name: "Chicken Shawarma Wrap",
        submenu: "Wrap",
        price: 7.0,
        ratings: 4.7,
        type: ["last_month"]
    },
    {
        id: 12,
        image: Pizza,
        name: "Tandoori Chicken",
        submenu: "Grill",
        price: 13.5,
        ratings: 4.8,
        type: ["all_time"]
    },
    {
        id: 13,
        image: Burger,
        name: "Mushroom Cream Soup",
        submenu: "Soup",
        price: 5.5,
        ratings: 4.4,
        type: ["last_week", "last_month"]
    },
    {
        id: 14,
        image: Choco,
        name: "Pepperoni Pizza Slice",
        submenu: "Pizza",
        price: 4.5,
        ratings: 4.6,
        type: ["all_time"]
    },
    {
        id: 15,
        image: Pizza,
        name: "Chocolate Lava Dessert",
        submenu: "Dessert",
        price: 6.0,
        ratings: 4.9,
        type: ["last_week", "all_time"]
    }
];

export default topitemdata;