const mongoose = require('mongoose');

const mongoURI = 'mongodb://AjayKaragir95:Ajay95@cluster0-shard-00-00.lmbwd.mongodb.net:27017,cluster0-shard-00-01.lmbwd.mongodb.net:27017,cluster0-shard-00-02.lmbwd.mongodb.net:27017/foodiez?ssl=true&replicaSet=atlas-6joecv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected to MongoDB");

        const db = mongoose.connection.db;

        // Ensure collections exist before fetching
        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);

        if (!collectionNames.includes("food_items") || !collectionNames.includes("foodCategory")) {
            throw new Error("❌ Required collections (food_items, foodCategory) are missing in the database.");
        }

        // Fetch food_items
        const foodItems = await db.collection("food_items").find({}).toArray();

        // Fetch foodCategory
        const foodCategories = await db.collection("foodCategory").find({}).toArray();

        // Store globally
        global.food_items = foodItems;
        global.foodCategory = foodCategories;

        console.log("✅ Food items and categories fetched successfully");

    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err.message);
        process.exit(1); // Exit process on failure
    }
};

module.exports = mongoDB;
