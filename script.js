import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB, generateDummyData } from "./dataGenerator.js";

const app = express();
const PORT = 3000;

// Serve static files (index.html)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

await connectDB();

app.get("/generate-data", async (req, res) => {
    try {
        const data = await generateDummyData();
        res.json(data);
        console.log("✅ Data generated successfully!");
    } catch (error) {
        console.error("❌ Failed to generate data:", error);
        res.status(500).json({ error: "Failed to generate data." });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
