# Student Management System  
A combined **Java Console Application + Full-Stack Web Application** to manage student data using **Java, HTML, JavaScript, Node.js, Express.js, and SQLite Database**.

This project demonstrates:

- Core Java & OOP Concepts  
- CRUD Operations  
- ArrayList Data Structure  
- REST API (Express.js)  
- Web Frontend (HTML + JS)  
- SQLite Database Integration  

---

## 🚀 Project Overview

The **Student Management System** allows users to:

### **Java Console Version**
- Add a Student  
- View All Students  
- Search Student by Roll Number  
- Delete Student  
- Exit Application  

This was the original version created using **Java + ArrayList**.

---

## 🌐 Web Application Version (Frontend + Backend)

To upgrade the project, a modern **full-stack version** is added with:

- HTML + CSS + JavaScript frontend  
- Node.js backend (Express.js)
- SQLite database for persistent storage  
- Full CRUD functionality from browser  

Users can perform the following operations directly from the browser:

### ✔ Add Student  
### ✔ View Students  
### ✔ Search by Roll  
### ✔ Update Student  
### ✔ Delete Student  

---

# 📂 Project Structure

```
Student-Management-System-Java/
│
├── web-demo/
│   ├── backend/
│   │   ├── server.js
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── students.db   (ignored in Git)
│   │
│   └── frontend/
│       ├── index.html
│       └── (static files if added)
│
├── StudentManagementSystem.java   (core Java console app)
├── README.md
└── .gitignore
```

---

# 🛠️ Tech Stack

### **Frontend**
- HTML5
- CSS3
- JavaScript (Fetch API)

### **Backend**
- Node.js  
- Express.js  
- SQLite Database  

### **Java Console Version**
- Java  
- OOP  
- ArrayList  
- Loops & Conditions  

---

# 🔌 REST API Documentation

### **GET** `/students`
Returns all students.

### **GET** `/students/:roll`
Returns a student by roll number.

### **POST** `/students`
Adds a new student.  
Body:
```json
{
  "roll": 101,
  "name": "Hitesh Sharma",
  "course": "BTech CSE"
}
```

### **PUT** `/students/:roll`
Updates name & course of a student.  
Body:
```json
{
  "name": "New Name",
  "course": "New Course"
}
```

### **DELETE** `/students/:roll`
Deletes a student by roll.

---

# ▶️ How to Run the Java Console App

```
javac StudentManagementSystem.java
java StudentManagementSystem
```

---

# ▶️ How to Run the Backend (Node.js + SQLite)

```
cd web-demo/backend
npm install
node server.js
```

Server will run at:

```
http://localhost:3000
```

---

# ▶️ How to Run the Frontend

Option 1: Open directly in browser  
```
web-demo/frontend/index.html
```

Option 2: VS Code Live Server  
```
Right-click → Open With Live Server
```
---

# 🏗️ System Architecture

```
Frontend (HTML + JS)
      │
      ▼
REST API (Node.js + Express)
      │
      ▼
SQLite Database
```

Java version works separately as an offline console-based module.

---

# ⭐ Features Summary

### **Java Version**
- Simple, fast console app  
- Demonstrates OOP, CRUD, ArrayList  

### **Web Version**
- Modern UI  
- Update & Delete support  
- Real database (SQLite)  
- REST API  
- Fully modular structure  

---

# 📘 Why This Project Is Special

- Shows **both** Java and Full-Stack skills  
- Ideal for training submission / viva  
- Clean and professional repository  
- Good for resume & GitHub portfolio  
- Demonstrates real CRUD system end-to-end  

---

# 👨‍💻 Author

**Hitesh Sharma**  
B.Tech CSE  
Full Stack Developer | Java | MERN | Python  

GitHub: https://github.com/HITESHSHARMA1175  
LinkedIn: https://www.linkedin.com/in/hiteshsharma01  

---

# 🎉 Conclusion

This project demonstrates a complete learning journey:

**Java → Web Frontend → Backend → Database → REST API → GitHub Version Control**

A perfect full-stack training project.

