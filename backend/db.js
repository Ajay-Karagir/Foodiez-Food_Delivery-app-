const mongoose = require('mongoose');
const mongoURI = 'mongodb://AjayKaragir95:Ajay95@cluster0-shard-00-00.lmbwd.mongodb.net:27017,cluster0-shard-00-01.lmbwd.mongodb.net:27017,cluster0-shard-00-02.lmbwd.mongodb.net:27017/foodiez?ssl=true&replicaSet=atlas-6joecv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const db = mongoose.connection.db;

        // Fetch food_items
        const foodItemsCollection = db.collection("food_items");
        const foodItems = await foodItemsCollection.find({}).toArray();

        // Fetch foodCategory
        const foodCategoryCollection = db.collection("foodCategory");
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        // Store globally
        global.food_items = foodItems;
        global.foodCategory = foodCategories;

        console.log("Food items and categories fetched successfully");

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB;
