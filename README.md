# Ecoyaan Checkout Flow – Frontend Assignment

## Overview

This project is a simplified checkout flow inspired by Ecoyaan. It demonstrates building a multi-step checkout experience using **Next.js (App Router)** with **Server-Side Rendering (SSR)**, clean component architecture, and responsive UI.

The application allows users to:

1. Review items in their cart
2. Enter shipping address details
3. Confirm the order and simulate a payment
4. View a success state after completing the checkout


---

# HOST URL

* 

---

---

# Tech Stack

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* **Context API** for state management
* **Next.js API Routes** for mock backend data

---

# Architectural Choices

## 1. Next.js App Router

The project uses the **Next.js App Router** to leverage modern features like **React Server Components** and improved routing architecture.

Server components are used to fetch cart data during rendering, demonstrating **server-side rendering (SSR)**.

---

## 2. Server-Side Rendering (SSR)

The cart data is fetched on the server inside the page component using:

```
fetch("/api/cart", { cache: "no-store" })
```

Using `cache: "no-store"` ensures the request is executed **on every request**, making the page behave like traditional SSR (`getServerSideProps` in Pages Router).

This ensures:

* Faster initial page load
* SEO-friendly content
* Server-rendered data

---

## 3. State Management

The **Context API** is used to maintain global state across checkout steps.

Stored state includes:

* Order

This allows data to persist while navigating between:

* Cart page
* Address form
* Payment confirmation page

---

## 4. Component-Based Architecture

Reusable UI components were created to keep the code modular and maintainable.

Examples:

* `CartItem`
* `OrderSummary`
* `AddressForm`

This improves readability and makes the UI easier to extend.

---

## 5. Mock Backend

A mock backend API is implemented using **Next.js API Routes**.

Example route:

```
/api/cart
```

This returns mock cart data used to render the cart page via SSR.

---


# Checkout Flow

1. **Cart Page**

   * Displays cart items fetched via SSR
   * Shows subtotal, shipping fee, and total
   * User proceeds to checkout

2. **Shipping Address Page**

   * User enters shipping details
   * Basic validation for email and phone number

3. **Payment Confirmation Page**

   * Displays order summary and shipping address
   * User clicks **Pay Securely**

4. **Success Page**

   * Displays order success message

---

# Running the Project Locally

### 1. Clone the repository

```
git clone https://github.com/MBrahul/ecoyaan_assignment.git
```

### 2. Navigate to the project

```
cd ecoyaan_assigment
```

### 3. Install dependencies

```
npm install
```

### 4. Run the development server

```
npm run dev
```

### 5. Open the application

Visit:

```
http://localhost:3000
```


# Deployment

The application can be deployed easily using **Vercel**

---
