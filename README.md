# 🍕 Food Order App (Bestellapp) - JS Logic & Cart Management

![Bestellapp Preview](https://repository-images.githubusercontent.com/1098097815/4309fb78-42ba-406d-a0f2-6cea49418bdc)

**Bestellapp** is an interactive food ordering application built to master complex shopping cart logic and real-time data synchronization. This project focuses on **State Management** and **CRUD** (Create, Read, Update, Delete) operations within a Vanilla JavaScript environment.

## 🚀 Live Demo
👉 [View Live Project](https://artur-groblicki.developerakademie.net/Bestellapp/index.html)

## 🎯 Educational Goals
This project was a major milestone in handling application state and business logic:
* **Array Management:** Adding, removing, and updating product objects within a cart array.
* **Computational Logic:** Automatically calculating subtotals, delivery fees, and grand totals in real-time.
* **Conditional Rendering:** Dynamically displaying an "Empty Cart" message or the product list based on the cart's state.
* **Persistent UI Updates:** Mastering the flow of data where a change in JavaScript logic instantly triggers a visual DOM update.

## ✨ Key Features
* **Dynamic Menu Rendering:** The food menu is generated programmatically from JavaScript objects for easy maintenance.
* **Functional Shopping Cart:** Users can increase, decrease, or remove items directly within the sidebar.
* **Real-time Price Calculation:** High-precision calculation of prices and delivery costs as the user interacts with the app.
* **Responsive Layout:** A mobile-optimized experience where the cart adapts from a sidebar on desktop to a user-friendly view on mobile devices.

## 🧠 Technical Challenges

### 1. Data & View Synchronization
The main challenge was ensuring the UI stayed in sync with the underlying data array. I implemented a render function that triggers whenever the cart state changes, ensuring the user always sees accurate pricing and quantities.

### 2. Edge Case Handling (Cart Logic)
Implementing logic that completely removes an item from the array when the quantity reaches zero, rather than just displaying "0," was crucial for maintaining a clean data structure and preventing calculation errors.

### 3. Responsive Component Design
Designing a "Sticky" cart that remains accessible while browsing long menus required a deep understanding of CSS positioning and Flexbox, especially when transitioning to a mobile-first overlay layout.

## 🛠️ Built With
* **JavaScript (ES6+):** Cart logic, mathematical calculations, and dynamic DOM manipulation.
* **HTML5:** Semantic structure for a professional food menu and checkout flow.
* **CSS3:** Custom components, responsive design patterns, and interactive UI elements.

---
**Author:** Artur Groblicki  
**Portfolio:** Working on it 🏗️



