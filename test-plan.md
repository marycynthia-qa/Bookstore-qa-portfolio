# Test Plan — QACurry BookStore Application

**Document Version:** 2.0  
**Prepared By:** Patrick Marycynthia Ebube  
**Date:** March 2026  
**Application Under Test:** QACurry BookStore (https://bookstore.qacurry.com)  
**Testing Types:** Manual UI Testing | API Testing | Automation Testing

---

## 1. Introduction

This test plan outlines the testing strategy for the QACurry BookStore web application. The BookStore app is a browser-based application that allows users to register, log in, browse a collection of books, and manage a personal book collection. It also exposes a REST API that can be tested independently.

This document defines the scope, objectives, test approach, and deliverables for this QA portfolio project.

---

## 2. Objectives

- Verify that all core user-facing features of the BookStore UI function correctly
- Validate that the REST API endpoints return correct responses for valid and invalid inputs
- Automate key UI test scenarios using Selenium WebDriver (JavaScript)
- Identify and document any defects found during testing
- Produce professional QA artefacts suitable for a QA portfolio

---

## 3. Scope

### 3.1 In Scope

**UI Testing (Manual)**
- User Registration
- User Login / Logout
- Book Catalogue (browsing books)
- Book detail view
- User profile / dashboard

**API Testing (Postman)**
- Account endpoints: Register, Login / Generate Token
- BookStore endpoints: Get Books, Get Book by ID, Add Book, Delete Book

**Automation Testing (Selenium + JavaScript)**
- User Registration (valid and invalid inputs)
- User Login (valid credentials, invalid credentials, empty fields)
- Browse Book Catalogue
- Logout

### 3.2 Out of Scope

- Performance or load testing
- Security / penetration testing
- Mobile responsiveness testing

---

## 4. Test Approach

### 4.1 Manual UI Testing
Manual functional testing will be performed using Google Chrome. Test cases will cover both positive (happy path) and negative (error / edge case) scenarios.

### 4.2 API Testing
API testing will be performed using **Postman**. Tests will cover:
- Status code validation
- Response body validation
- Authentication / token handling
- Error message validation for invalid inputs

### 4.3 Automation Testing
Automated test scripts will be written using **Selenium WebDriver with JavaScript (Node.js)**. The automation framework will use:

| Tool | Purpose |
|------|---------|
| Selenium WebDriver | Browser automation |
| Node.js | JavaScript runtime |
| Mocha | Test framework (test structure & execution) |
| Chai | Assertion library |
| SafariDriver | Built-in browser driver for Safari (macOS) |

Scripts will be stored in the `/automation` folder of the portfolio repository and can be run locally with `npm test`.

### 4.4 Bug Reporting
All defects found will be documented using a standard format: Bug ID, Title, Steps to Reproduce, Expected Result, Actual Result, Severity, and Status.

---

## 5. Test Environment

| Item | Details |
|------|---------|
| Application URL | https://bookstore.qacurry.com |
| Browser | Safari (macOS built-in) |
| API Tool | Postman |
| Automation Language | JavaScript (Node.js) |
| Automation Tool | Selenium WebDriver |
| Browser Driver | SafariDriver (built-in, no install needed) |
| Test Framework | Mocha + Chai |
| OS | macOS |
| Test Data | New user account created specifically for testing |

---

## 6. Features to Be Tested

| # | Feature | Manual UI | API | Automated |
|---|---------|-----------|-----|-----------|
| 1 | User Registration | ✅ | ✅ | ✅ |
| 2 | User Login (valid) | ✅ | ✅ | ✅ |
| 3 | User Login (invalid) | ✅ | ✅ | ✅ |
| 4 | User Logout | ✅ | ❌ | ✅ |
| 5 | Browse Book Catalogue | ✅ | ❌ | ✅ |
| 6 | View Book Details | ✅ | ❌ | ❌ |
| 7 | Get All Books | ❌ | ✅ | ❌ |
| 8 | Get Book by ID | ❌ | ✅ | ❌ |
| 9 | Add Book to Collection | ❌ | ✅ | ❌ |
| 10 | Delete Book from Collection | ❌ | ✅ | ❌ |

---

## 7. Test Deliverables

| Deliverable | Description |
|-------------|-------------|
| Test Plan | This document |
| UI Test Cases | Manual test cases for all in-scope UI features |
| API Test Cases | Postman-based test cases for all in-scope API endpoints |
| Automation Scripts | Selenium + JavaScript test scripts in `/automation` folder |
| Bug Reports | Documented defects found during testing |
| Screenshots | Evidence captured during manual test execution |
| README | Setup guide explaining how to run the automation scripts |

---

## 8. Entry and Exit Criteria

### 8.1 Entry Criteria (Testing can begin when…)
- The application is accessible and stable
- Test plan has been reviewed
- Postman is installed and ready
- Node.js and Selenium WebDriver are installed
- A test user account can be created successfully

### 8.2 Exit Criteria (Testing is complete when…)
- All planned manual test cases have been executed
- All planned API test cases have been executed
- All automation scripts run successfully
- All discovered bugs have been logged

---

## 9. Roles and Responsibilities

| Role | Name |
|------|------|
| Test Lead / Tester | Patrick Marycynthia Ebube |

---

## 10. Test Schedule

| Activity | Timeline |
|----------|----------|
| Test Planning | Day 1 |
| UI Test Case Writing | Day 2 |
| API Test Case Writing | Day 2–3 |
| Test Execution (Manual UI + API) | Day 3–4 |
| Automation Script Writing | Day 4–5 |
| Automation Execution & Debugging | Day 5–6 |
| Bug Reporting | Ongoing |
| Final Review & Portfolio Upload | Day 7 |

---

## 11. Risks and Mitigations

| Risk | Mitigation |
|------|-----------|
| Application downtime | Re-test during off-peak hours; document if persistent |
| Test data pollution | Create a unique test account; clean up after each session |
| API changes without notice | Re-check API behaviour before each test session |
| Selenium/SafariDriver version mismatch | SafariDriver is built into macOS — keep macOS and Safari updated to avoid compatibility issues |

---

*End of Test Plan*
