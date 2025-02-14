# 🛠️ **Dummy Data Generator**  

A simple tool to generate dummy data for the **"Employees"** collection in a **MongoDB** database named **"company"**. Useful for testing and development purposes in web applications.

---

## 🚀 **Features**  

 🔹 **Generates 10 dummy records** of employee data each time the "Generate Data" button is clicked.  
 🔹 **Clears existing records** before adding new ones.  
 🔹 **Randomly generates names, salaries, languages, cities, and manager status**.  
 🔹 **Built with Express and Mongoose** for seamless integration with MongoDB.  

---

## ⚙️ **Technologies Used**  

- 🐍 **Node.js**  
- 🛢️ **MongoDB (Mongoose)**  
- 🚀 **Express**  

---

## ⚒️ **Project Structure**  

```
📂 dummy-data-generator  
 ├── 📂 node_modules  
 ├── 📂 public  
 │   └── index.html (User interface)  
 ├── 🛠️ dataGenerator.js (Generates dummy data)  
 ├── 🚀 script.js (Express server)  
 ├── 📦 package.json  
 ├── 📦 package-lock.json  
 └── 📄 .gitignore  
```

---

## ⚙️ **Installation & Setup**  

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/Arpan-Saha-25/Dummy-Data-Generator.git
cd dummy-data-generator
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Start MongoDB** (Ensure MongoDB is running locally)  
```bash
mongod
```

4️⃣ **Run the server**  
```bash
node script.js
```

---

## 🛠️ **How It Works**  

- 🌐 **Access App**: Open **http://localhost:3000** in your browser.  
- 🎯 **Generate Data**: Click the **"Generate Data"** button.  
- 🔄 **Automatic Data Refresh**: Each click clears the existing collection and adds 10 fresh records.  

---

## 🧠 **Understanding the Data Generation**  

The **`dataGenerator.js`** file generates dummy records with the following structure:  

```json
{
    "name": "Arpan_123",
    "salary": 734892,
    "language": "Python",
    "city": "Dhanbad",
    "isManager": true
}
```

### **How Data is Generated**  
- **Name**: Randomized with a suffix (e.g., `Arpan_123`).  
- **Salary**: A random number between **500,000** and **1,500,000**.  
- **Language**: Chosen from **Python, JavaScript, Java, C++, Go**.  
- **City**: Chosen from **Dhanbad, Mumbai, Delhi, Kolkata, Bangalore**.  
- **Manager**: Randomly **true** or **false**.  

---

## 🔍 **Endpoints**  

- **`GET /generate-data`**: Generates 10 dummy records and clears old ones.  
- **Static files** served from the `/public` directory.  

### **Example Response:**  
```json
{
    "message": "✅ Dummy data generated successfully!"
}
```

---

## ⚠️ **Troubleshooting**  

1. **MongoDB Connection Failed**  
   - Ensure **MongoDB is running** locally on **`mongodb://127.0.0.1:27017/company`**.  
   - Check your connection string in **`dataGenerator.js`**.  

2. **Server Not Starting**  
   - Run **`node script.js`** again.  
   - Make sure **`mongoose`** and **`express`** are installed.  

3. **Data Not Generating**  
   - Check the server logs for errors.  
   - Refresh the browser and click the button again.  

---

## 👨‍💻 **Future Improvements (Optional)**  

- 🚀 Add a **user-friendly interface** for more control over the generated data.  
- 🔍 Integrate **more fields** like age, department, or joining date.  
- 📦 Add **Docker support** for easier deployment.  

---

💡 **Happy Coding! 😊**
