# UI Test Cases — QACurry BookStore

**Prepared By:** Patrick Marycynthia Ebube
**Date:** March 2026
**Application URL:** https://bookstore.qacurry.com
**Testing Type:** Manual UI Testing
**Browser:** Safari (macOS)

---

## MODULE 1: LOGIN

---

### TC-001: Successful Login with Valid Credentials

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-001 |
| **Title** | Successful login with valid email and password |
| **Module** | Login |
| **Priority** | High |
| **Precondition** | User has a registered account |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to https://bookstore.qacurry.com | Login page loads with Email field, Password field, and LOGIN button visible |
| 2 | Enter a valid registered email | Email field accepts input |
| 3 | Enter the correct password | Password field accepts input and masks characters |
| 4 | Click the **LOGIN** button | User is redirected to the dashboard (welcome.php) and greeted with "Hello [Name]" |

**Status:** ⏳ Not Executed

---

### TC-002: Login with Wrong Password

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-002 |
| **Title** | Login fails with incorrect password |
| **Module** | Login |
| **Priority** | High |
| **Precondition** | User has a registered account |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to https://bookstore.qacurry.com | Login page loads successfully |
| 2 | Enter a valid registered email | Email field accepts input |
| 3 | Enter an incorrect password | Password field accepts input |
| 4 | Click the **LOGIN** button | Error message is displayed and user remains on login page |

**Status:** ⏳ Not Executed

---

### TC-003: Login with Unregistered Email

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-003 |
| **Title** | Login fails with an email that is not registered |
| **Module** | Login |
| **Priority** | High |
| **Precondition** | None |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to https://bookstore.qacurry.com | Login page loads successfully |
| 2 | Enter an email that does not exist in the system | Email field accepts input |
| 3 | Enter any password | Password field accepts input |
| 4 | Click the **LOGIN** button | Error message is displayed and user remains on login page |

**Status:** ⏳ Not Executed

---

### TC-004: Login with Both Fields Empty

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-004 |
| **Title** | Login fails when both fields are empty |
| **Module** | Login |
| **Priority** | Medium |
| **Precondition** | None |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to https://bookstore.qacurry.com | Login page loads successfully |
| 2 | Leave the email field empty | Field remains empty |
| 3 | Leave the password field empty | Field remains empty |
| 4 | Click the **LOGIN** button | Validation error is shown prompting user to fill required fields |

**Status:** ⏳ Not Executed

---

### TC-005: Password Field is Masked

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-005 |
| **Title** | Password characters are hidden when typed |
| **Module** | Login |
| **Priority** | Medium |
| **Precondition** | None |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to https://bookstore.qacurry.com | Login page loads successfully |
| 2 | Click on the Password field and type any characters | Characters are masked (shown as dots or asterisks) |

**Status:** ⏳ Not Executed

---

## MODULE 2: DASHBOARD & BOOK CATALOGUE

---

### TC-006: Dashboard Loads After Login

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-006 |
| **Title** | Dashboard displays correctly after successful login |
| **Module** | Dashboard |
| **Priority** | High |
| **Precondition** | User has valid credentials |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Log in with valid credentials | Dashboard loads at welcome.php |
| 2 | Observe the page | "Hello [Name]" greeting is displayed, navbar shows BookStore, Books, Orders, Cart, Search bar, and Logout link |
| 3 | Observe the book listing | Books are displayed in Grid view with title, category, description, price, Details and Add to cart buttons |

**Status:** ⏳ Not Executed

---

### TC-007: Toggle Between List and Grid View

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-007 |
| **Title** | User can switch between List and Grid view on the dashboard |
| **Module** | Dashboard |
| **Priority** | Low |
| **Precondition** | User is logged in |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Log in and observe dashboard | Books displayed in default Grid view |
| 2 | Click the **List** icon | Books switch to List view layout |
| 3 | Click the **Grid** icon | Books switch back to Grid view layout |

**Status:** ⏳ Not Executed

---

### TC-008: Search for a Book

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-008 |
| **Title** | User can search for a book using the search bar |
| **Module** | Search |
| **Priority** | High |
| **Precondition** | User is logged in |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Log in and observe the navbar | Search bar and Submit button are visible |
| 2 | Type a book title in the search bar (e.g. "Fast Cars") | Search field accepts input |
| 3 | Click the **Submit** button | Results matching the search term are displayed |

**Status:** ⏳ Not Executed

---

### TC-009: Search for a Non-Existent Book

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-009 |
| **Title** | Search returns no results for an invalid book name |
| **Module** | Search |
| **Priority** | Medium |
| **Precondition** | User is logged in |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Log in and locate the search bar | Search bar is visible |
| 2 | Type a title that does not exist (e.g. "xyzabc123") | Search field accepts input |
| 3 | Click the **Submit** button | A "no results" message is displayed or the page shows an empty state |

**Status:** ⏳ Not Executed

---

### TC-010: View Book Details

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-010 |
| **Title** | User can view full details of a book |
| **Module** | Book Details |
| **Priority** | High |
| **Precondition** | User is logged in |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Log in and observe the book catalogue | Books are listed with a Details button |
| 2 | Click the **Details** button on any book | Book details page (moreInfo.php) loads showing book image, title, description, price, stock status, Back and Add to cart buttons |

**Status:** ⏳ Not Executed

---

### TC-011: Back Button on Book Details Page

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-011 |
| **Title** | Back button returns user to the book catalogue |
| **Module** | Book Details |
| **Priority** | Low |
| **Precondition** | User is on the Book Details page |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to any book's details page | Book details page loads |
| 2 | Click the **Back** button | User is returned to the book catalogue/dashboard |

**Status:** ⏳ Not Executed

---

## MODULE 3: CART

---

### TC-012: Add a Book to Cart

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-012 |
| **Title** | User can add a book to the cart |
| **Module** | Cart |
| **Priority** | High |
| **Precondition** | User is logged in |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Log in and observe book catalogue | Books are listed with Add to cart buttons |
| 2 | Click **Add to cart** on any book | Book is added to cart |
| 3 | Click **Cart** in the navbar | Cart page (viewCart.php) loads showing the book, price, quantity, subtotal, and total |

**Status:** ⏳ Not Executed

---

### TC-013: Remove a Book from Cart

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-013 |
| **Title** | User can remove a book from the cart |
| **Module** | Cart |
| **Priority** | High |
| **Precondition** | At least one book is in the cart |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to the Cart page | Cart displays the added book(s) with a red delete (trash) icon |
| 2 | Click the red **delete icon** next to a book | Book is removed from the cart |
| 3 | Observe the cart | Cart is empty or updated total is shown |

**Status:** ⏳ Not Executed

---

### TC-014: Cart Total Calculates Correctly

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-014 |
| **Title** | Cart total reflects correct price based on quantity |
| **Module** | Cart |
| **Priority** | High |
| **Precondition** | At least one book is in the cart |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to the Cart page | Cart shows product, price, quantity, and subtotal |
| 2 | Observe the quantity and subtotal | Subtotal = Price × Quantity (e.g. $99 × 2 = $198) |
| 3 | Observe the total at the bottom | Total matches the sum of all subtotals |

**Status:** ⏳ Not Executed

---

### TC-015: Continue Shopping Button on Cart Page

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-015 |
| **Title** | Continue Shopping button returns user to book catalogue |
| **Module** | Cart |
| **Priority** | Low |
| **Precondition** | User is on the Cart page |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to the Cart page | Cart page loads |
| 2 | Click **Continue Shopping** | User is redirected back to the book catalogue |

**Status:** ⏳ Not Executed

---

## MODULE 4: CHECKOUT & PAYMENT

---

### TC-016: Proceed to Checkout

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-016 |
| **Title** | User can proceed to checkout from the cart |
| **Module** | Checkout |
| **Priority** | High |
| **Precondition** | At least one book is in the cart |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Navigate to Cart page | Cart page loads with items |
| 2 | Click the **Checkout** button | Order Preview page (checkout.php) loads showing product, price, quantity, subtotal, total, shipping details, and payment options |

**Status:** ⏳ Not Executed

---

### TC-017: Pay Offline and Place Order

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-017 |
| **Title** | User can place an order using Pay Offline option |
| **Module** | Checkout |
| **Priority** | High |
| **Precondition** | User is on the Order Preview page |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | On the Order Preview page, observe payment options | Three payment buttons are visible: Pay with Card, Pay offline & Place Order, Secure Pay offline & Place Order |
| 2 | Click **Pay offline & Place Order** | Order is placed and Order Status page loads showing "Your order has submitted successfully" and an Order ID |

**Status:** ⏳ Not Executed

---

### TC-018: Pay with Card — Valid Details

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-018 |
| **Title** | User can pay using card with valid card details |
| **Module** | Payment |
| **Priority** | High |
| **Precondition** | User is on the Order Preview page |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | On the Order Preview page, click **Pay with Card** | Card payment form appears with Card Holder's Name, Card Number, Card Exp. Date, and CVV fields |
| 2 | Enter valid card holder name | Field accepts input |
| 3 | Enter a valid card number | Field accepts numeric input |
| 4 | Select expiry month and year | Dropdowns update correctly |
| 5 | Enter CVV | Field accepts input |
| 6 | Click **Pay [Amount] USD** | Order is placed successfully and Order Status page is displayed |

**Status:** ⏳ Not Executed

---

### TC-019: Secure Pay with CAPTCHA Verification

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-019 |
| **Title** | User can complete secure checkout using CAPTCHA |
| **Module** | Payment |
| **Priority** | High |
| **Precondition** | User is on the Order Preview page |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | On the Order Preview page, click **Secure Pay offline & Place Order** | CAPTCHA section appears with a code image and input field |
| 2 | Read the CAPTCHA code displayed | CAPTCHA text is visible and readable |
| 3 | Enter the correct CAPTCHA code in the input field | Field accepts input |
| 4 | Click **Secure Checkout** | Order is placed and Order Status page shows success message with Order ID |

**Status:** ⏳ Not Executed

---

### TC-020: CAPTCHA Refresh

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-020 |
| **Title** | User can refresh CAPTCHA if unreadable |
| **Module** | Payment |
| **Priority** | Medium |
| **Precondition** | User is on the Secure Pay CAPTCHA section |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Click **Secure Pay offline & Place Order** | CAPTCHA section appears |
| 2 | Click the **here** link to refresh the CAPTCHA | A new CAPTCHA code image is generated and displayed |

**Status:** ⏳ Not Executed

---

## MODULE 5: ORDERS & LOGOUT

---

### TC-021: View Orders

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-021 |
| **Title** | User can view their placed orders |
| **Module** | Orders |
| **Priority** | High |
| **Precondition** | User has placed at least one order |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Log in and click **Orders** in the navbar | Orders page loads showing the user's order history |
| 2 | Observe the orders list | Previously placed orders are listed with relevant details |

**Status:** ⏳ Not Executed

---

### TC-022: Successful Logout

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-022 |
| **Title** | User can successfully log out |
| **Module** | Logout |
| **Priority** | High |
| **Precondition** | User is logged in |

**Steps:**

| # | Action | Expected Result |
|---|--------|----------------|
| 1 | Log in with valid credentials | User is on the dashboard |
| 2 | Click **Logout** in the navbar | User is redirected to the login page and session is ended |
| 3 | Click the browser back button | User is NOT taken back to the dashboard (session is properly cleared) |

**Status:** ⏳ Not Executed

---

## Test Execution Summary

| Total Test Cases | Not Executed | Passed | Failed |
|-----------------|-------------|--------|--------|
| 22 | 22 | 0 | 0 |

> ⚠️ This section will be updated as test cases are executed.
