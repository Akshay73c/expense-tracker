# Expense-Tracker

## Overview
This full-stack webapp enables the user to track and manage expenses effectively. It features a React frontend for user interactions and a Spring Boot backend for data management, leveraging a MySQL database for persistence.

## Technologies

**Backend:**
- Java version 17
- Spring Boot 3.2.X
- Databse: MySQL with Spring Data JPA

**Frontend:**
- ReactJS
- Axios 

## Features

- Individual expense tracking
- User creation and management
- Expense creation and list display for individual users.
- Expense categorization

**Project Structure**
- backend-springboot: Contains SpringBoot backend code
- frontend-react: Contains React frontend code

## Setup and Running

**Prerequisites:**
- Java 17
- MySQL database
- npm

**Steps:**

1. Clone the repository:
   ```bash
   git clone <invalid URL removed>

2. Set up the backend:

- Create a MySQL database named expense-tracker.
- Update database credentials in src/main/resources/application.properties.
    - Replace your_database_username with your MySQL username.
    - Replace your_database_password with your MySQL password.
      
- Build and run the backend:
  (Run the BackendSpringbootApplication.java file)
  ```bash
  cd backend-springboot
  ./mvnw spring-boot:run
  
3. Set up the frontend:

- Install dependencies:
  ```bash
  cd frontend-react
  npm install

- Start the development server:
  ```bash
  npm start

4. Access the application:
- Open http://localhost:3000 (or the specified frontend port) in your browser.
