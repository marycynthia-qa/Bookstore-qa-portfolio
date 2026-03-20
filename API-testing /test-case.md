# API Test Cases — QACurry BookStore

**Prepared By:** Patrick Marycynthia Ebube
**Date:** March 2026
**Application URL:** https://bookstore.qacurry.com
**API Documentation:** https://bookstore.qacurry.com/swagger/
**Testing Type:** API Testing
**Tool:** Postman

---

## How to Read This Document

| Column | Description |
|--------|-------------|
| **Test Case ID** | Unique identifier for the test case |
| **Method** | HTTP method (GET, POST, etc.) |
| **Endpoint** | The API URL being tested |
| **Request Body** | Data sent with the request (for POST requests) |
| **Expected Status Code** | The HTTP status code expected in the response |
| **Expected Response** | What the response body should contain |

---

## MODULE 1: LOGIN API

---

### ATC-001: Login with Valid Credentials

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-001 |
| **Title** | Successful login with valid email and password |
| **Module** | Login |
| **Method** | GET |
| **Endpoint** | `/{type}/get_login/` |
| **Priority** | High |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |
| email | valid registered email |
| password | correct password |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 200 OK |
| Response | Returns user details and a success message |

**Status:** ⏳ Not Executed

---

### ATC-002: Login with Invalid Password

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-002 |
| **Title** | Login fails with incorrect password |
| **Module** | Login |
| **Method** | GET |
| **Endpoint** | `/{type}/get_login/` |
| **Priority** | High |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |
| email | valid registered email |
| password | incorrect password |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 200 OK or 401 Unauthorized |
| Response | Returns an error or empty result indicating invalid credentials |

**Status:** ⏳ Not Executed

---

### ATC-003: Login with Missing Parameters

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-003 |
| **Title** | Login request fails when email or password is missing |
| **Module** | Login |
| **Method** | GET |
| **Endpoint** | `/{type}/get_login/` |
| **Priority** | Medium |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |
| email | (leave empty) |
| password | (leave empty) |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 400 Bad Request or error response |
| Response | Error message indicating missing required parameters |

**Status:** ⏳ Not Executed

---

## MODULE 2: PRODUCTS API

---

### ATC-004: Get All Products

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-004 |
| **Title** | Successfully retrieve all books/products |
| **Module** | Products |
| **Method** | GET |
| **Endpoint** | `/{type}/get_products/` |
| **Priority** | High |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 200 OK |
| Response | Returns a list of all books with details such as title, description, price, and stock status |

**Status:** ⏳ Not Executed

---

### ATC-005: Get All Products — Verify Response Structure

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-005 |
| **Title** | Products response contains required fields |
| **Module** | Products |
| **Method** | GET |
| **Endpoint** | `/{type}/get_products/` |
| **Priority** | Medium |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 200 OK |
| Response | Each product in the response contains: id, title, description, price, and stock status |

**Status:** ⏳ Not Executed

---

### ATC-006: Get All Products with Invalid Type

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-006 |
| **Title** | API handles invalid type parameter gracefully |
| **Module** | Products |
| **Method** | GET |
| **Endpoint** | `/{type}/get_products/` |
| **Priority** | Low |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `invalidtype` |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 400 Bad Request or error response |
| Response | Error message indicating invalid type parameter |

**Status:** ⏳ Not Executed

---

## MODULE 3: ORDERS API

---

### ATC-007: Get All Orders

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-007 |
| **Title** | Successfully retrieve all orders |
| **Module** | Orders |
| **Method** | GET |
| **Endpoint** | `/{type}/get_orders/` |
| **Priority** | High |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 200 OK |
| Response | Returns a list of all orders with order ID, product, quantity, and total |

**Status:** ⏳ Not Executed

---

### ATC-008: Get a Single Order by ID

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-008 |
| **Title** | Successfully retrieve a specific order using its ID |
| **Module** | Orders |
| **Method** | GET |
| **Endpoint** | `/{type}/get_order/` |
| **Priority** | High |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |
| order_id | valid existing order ID (e.g. 6795) |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 200 OK |
| Response | Returns details of the specific order matching the provided ID |

**Status:** ⏳ Not Executed

---

### ATC-009: Get Order with Invalid Order ID

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-009 |
| **Title** | API returns error for a non-existent order ID |
| **Module** | Orders |
| **Method** | GET |
| **Endpoint** | `/{type}/get_order/` |
| **Priority** | Medium |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |
| order_id | 999999 (non-existent ID) |

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 404 Not Found or error response |
| Response | Error message indicating the order was not found |

**Status:** ⏳ Not Executed

---

### ATC-010: Post a New Order

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-010 |
| **Title** | Successfully place a new order |
| **Module** | Orders |
| **Method** | POST |
| **Endpoint** | `/{type}/post_order/` |
| **Priority** | High |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |

**Request Body:**
```json
{
  "product_id": 6,
  "quantity": 1,
  "email": "student@qacurry.com"
}
```

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 200 OK or 201 Created |
| Response | Returns success message and the new Order ID |

**Status:** ⏳ Not Executed

---

### ATC-011: Post Order with Missing Fields

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-011 |
| **Title** | Post order fails when required fields are missing |
| **Module** | Orders |
| **Method** | POST |
| **Endpoint** | `/{type}/post_order/` |
| **Priority** | Medium |

**Request Parameters:**

| Parameter | Value |
|-----------|-------|
| type | `json` |

**Request Body:**
```json
{
  "product_id": 6
}
```

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 400 Bad Request |
| Response | Error message indicating missing required fields |

**Status:** ⏳ Not Executed

---

## MODULE 4: PAYMENT API

---

### ATC-012: Process Credit Card Payment with Valid Details

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-012 |
| **Title** | Successfully process a credit card payment |
| **Module** | Payment |
| **Method** | POST |
| **Endpoint** | `/service_creditcard.php` |
| **Priority** | High |

**Request Body:**
```json
{
  "cardholder_name": "Patrick Marycynthia",
  "card_number": "1234123412341234",
  "expiry_month": "01",
  "expiry_year": "2027",
  "cvv": "123",
  "amount": 99
}
```

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 200 OK |
| Response | Returns payment success message and order confirmation |

**Status:** ⏳ Not Executed

---

### ATC-013: Process Payment with Missing Card Details

| Field | Details |
|-------|---------|
| **Test Case ID** | ATC-013 |
| **Title** | Payment fails when card details are incomplete |
| **Module** | Payment |
| **Method** | POST |
| **Endpoint** | `/service_creditcard.php` |
| **Priority** | Medium |

**Request Body:**
```json
{
  "cardholder_name": "Patrick Marycynthia",
  "card_number": ""
}
```

**Expected Result:**

| Field | Expected |
|-------|---------|
| Status Code | 400 Bad Request |
| Response | Error message indicating missing or invalid card details |

**Status:** ⏳ Not Executed

---

## Test Execution Summary

| Total Test Cases | Not Executed | Passed | Failed |
|-----------------|-------------|--------|--------|
| 13 | 13 | 0 | 0 |

> ⚠️ This section will be updated as test cases are executed in Postman.

