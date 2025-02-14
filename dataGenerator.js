// ? Generate a dummy data in a collection
// ? called "Employees" in a DB called "company"
// todo :
// {
//     name: "Arpan",
//     salary: 450001212,
//     language: "python",
//     city: "Dhanbad",
//     isManager: true
// }
// * Generator 10 such records when a button called "generate data" is clicked.
// * Create a Express app with mongoose to achieve it.
// * Everytime the button is clicked, you should clear the collection.

// ------------------------------------------------------------------------------

import mongoose from "mongoose";

// Connecting to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/company", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected!");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
    }
};

// Defining Schema & Model
const employeesSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
});
const Employee = mongoose.model("Employee", employeesSchema);

// Generating Dummy Data
export const generateDummyData = async () => {
    // Clear existing data
    await Employee.deleteMany({});
    console.log("🗑️ Old data cleared!");

    const languages = ["Python", "JavaScript", "Java", "C++", "Go"];
    const cities = ["Dhanbad", "Mumbai", "Delhi", "Kolkata", "Bangalore"];

    // Generate 10 records
    const dummyData = Array.from({ length: 10 }, () => ({
        name: `Arpan_${Math.floor(Math.random() * 1000)}`,
        salary: Math.floor(Math.random() * 1000000) + 500000,
        language: languages[Math.floor(Math.random() * languages.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        isManager: Math.random() > 0.5,
    }));

    // Insert into MongoDB
    await Employee.insertMany(dummyData);
    console.log("✅ 10 dummy records added!");

    return { message: "✅ Dummy data generated successfully!" };
};