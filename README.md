# 🔍 Semantic Search Engine for MongoDB Documents

## 📌 Project Overview
This project is a **Semantic Search Engine** built using the **MERN stack + Python AI/NLP**.  
It allows users to perform **context-based search** instead of traditional keyword matching.

The system uses **sentence embeddings** to understand the meaning of queries and returns the most relevant MongoDB documents.

---

## 🚀 Features
- 🔎 Semantic search using NLP
- ⚡ Fast API-based architecture
- 🧠 AI-powered query understanding
- 📂 MongoDB document storage
- 🌐 Full-stack MERN application
- 📊 Cosine similarity ranking

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### AI/NLP
- Python
- FastAPI
- Sentence Transformers

---

## 🏗️ Project Structure

semantic-search-engine/
│
├── backend-node/
│   └── index.js
│
├── ai-service/
│   ├── main.py
│   ├── embed.py
│
├── frontend/
│   └── src/
│       └── App.js
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/monika-176-com/semantic-search-engine.git  
cd semantic-search-engine

---

### 2️⃣ Setup MongoDB
- Create a cluster on MongoDB Atlas  
- Create:  
  - Database: `semantic_db`  
  - Collection: `documents`  
- Insert sample documents  

---

### 3️⃣ Run AI Service (Python)
cd ai-service  
pip install -r requirements.txt  
uvicorn main:app --reload  

👉 Runs on: http://127.0.0.1:8000

---

### 4️⃣ Generate Embeddings
python embed.py

---

### 5️⃣ Run Backend (Node.js)
cd backend-node  
npm install  
node index.js  

👉 Runs on: http://localhost:5000

---

### 6️⃣ Run Frontend (React)
cd frontend  
npm install  
npm start  

👉 Runs on: http://localhost:3000

---

## 🔄 Workflow
User Query → React UI → Node.js → Python API → MongoDB → Results

---

## 🧠 How It Works
1. User enters a query  
2. Query is converted into a vector using Sentence Transformer  
3. MongoDB documents already have stored embeddings  
4. Cosine similarity is calculated  
5. Top relevant results are returned  

---

## 📸 Future Improvements
- 📄 PDF upload and search  
- 🔐 User authentication (JWT)  
- ⚡ MongoDB Vector Search integration  
- 🤖 Chatbot interface  
- 📊 Search result highlighting  

---

## 🎯 Use Cases
- Document search systems  
- Knowledge base search  
- Resume filtering systems  
- Enterprise data search  

---

## 👨‍💻 Author
J Monika

---

## ⭐ Acknowledgements
- Sentence Transformers  
- MongoDB Atlas  
- FastAPI  
- React