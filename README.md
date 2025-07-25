﻿# MongoUserHub
## 📌 Overview
**UserManagerAPI with MongoDB** is an enhanced RESTful API built using **Node.js**, **Express.js**, and **MongoDB** (via **Mongoose**). It expands upon a basic user management system by introducing persistent data storage and full CRUD functionality backed by a MongoDB database.

This project is part of a backend assignment focusing on database connectivity, schema design with validations, CRUD operations, advanced middleware implementation, and robust API design practices.

### 🔗 Project Links
- 🗂️ GitHub Repo: [UserFlowAPI](https://github.com/RAVI8054/MongoUserHub)

---
##✨Features
## ✨ Features
- ✅ **MongoDB Integration via Mongoose**
  - Connects to a MongoDB database using Mongoose ORM  
  - Schema-based model with built-in validation
- 🔁 **Full CRUD Operations with MongoDB**
  - Create, Read, Update, and Delete users from the database  
  - Uses MongoDB ObjectId for precise user targeting
- 🔍 **Retrieve User Data**
  - Fetch all users from the database  
  - Fetch a specific user by their unique MongoDB ObjectId
- ➕ **Add New Users**
  - Accepts JSON input to create new user documents  
  - Validates fields like `firstName`, `lastName`, and `hobby`
- 🔄 **Update Existing Users**
  - Update user records via ObjectId  
  - Includes validation on update requests
- ❌ **Delete Users**
  - Remove users by ObjectId  
  - Responds with appropriate status and confirmation
- 🧩 **Advanced Middleware**
  - Logs HTTP methods, request URLs, and status codes  
  - Validates incoming data on POST and PUT requests
- 🛑 **Robust Error Handling**
  - Handles invalid ObjectIds, missing fields, and non-existent users  
  -Uses HTTP status codes like 400, 404, 201, and 200 appropriately
 ---
##  🔗 API Endpoints
- GET `/users` - List all users
- GET `/users/:id` - Get user by ID
- POST `/user` - Create user (requires JSON body with firstName, lastName, hobby)
- PUT `/user/:id` - Update user (requires JSON body with firstName, lastName, hobby)
- DELETE `/user/:id` - Delete user by ID
--- 
## 📁Project Structure
UserFlowAPI/
```
UserFlowAPI/
├── controllers/
│   └── users.controller.js
├── middleware/
│   └── users.middleware.js
├── models/
│   └── users.model.js
├── routes/
│   └── users.routes.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
```
---
##🚀Getting Started
### 📁 Prerequisites
- Node.js (v14+ recommended)
- npm
### 🛠️Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/RAVI8054/MongoUserHub.git
   cd UserFlowAPI
2. Install dependencies:
   ```bash
   npm install 
3. Start the server:
   ```bash
   npm run start
4. Open your browser and go to:
    ```bash
    http://localhost:3000
---

---

