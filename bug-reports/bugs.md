# Bug Reports — QACurry BookStore

**Prepared By:** Patrick Marycynthia Ebube
**Date:** March 2026
**Application URL:** https://bookstore.qacurry.com
**Testing Type:** Manual UI Testing
**Browser:** Safari (macOS)

---

## How to Read This Document

| Column | Description |
|--------|-------------|
| **Bug ID** | Unique identifier for the bug |
| **Title** | Short description of the bug |
| **Module** | The area of the app where the bug was found |
| **Severity** | Critical / High / Medium / Low |
| **Priority** | How urgently the bug needs to be fixed |
| **Status** | Open / In Progress / Fixed / Closed |

### Severity Levels
- **Critical** — App crashes or core feature is completely broken
- **High** — Major feature is not working correctly
- **Medium** — Feature works but behaves unexpectedly
- **Low** — Minor UI/UX issue with little impact

---

## BUG-001: No Validation Message for Empty Login Fields

| Field | Details |
|-------|---------|
| **Bug ID** | BUG-001 |
| **Title** | Empty login fields show wrong error message |
| **Module** | Login |
| **Severity** | Medium |
| **Priority** | High |
| **Status** | 🔴 Open |
| **Reported By** | Patrick Marycynthia Ebube |
| **Date Found** | March 2026 |

**Steps to Reproduce:**
1. Navigate to https://bookstore.qacurry.com
2. Leave the Email field empty
3. Leave the Password field empty
4. Click the **LOGIN** button

**Expected Result:**
A specific validation message should appear telling the user that the fields are required, e.g. *"Email and Password are required"* or *"Please fill in all fields"*

**Actual Result:**
The message **"Your Login Name or Password is invalid"** is displayed — which is the same error shown for wrong credentials. This is misleading because the fields are not invalid, they are simply empty.

**Screenshot:**
<img width="837" height="1016" alt="Screenshot 2026-03-20 at 8 42 52 PM" src="https://github.com/user-attachments/assets/bf5973e9-7ce0-4941-82ce-86a7cde186ac" />


**Impact:**
Users may be confused about why they cannot log in, especially first-time users who may not realise they left a field empty.

---

## BUG-002: Generic Error Message Does Not Differentiate Between Empty Fields and Wrong Credentials

| Field | Details |
|-------|---------|
| **Bug ID** | BUG-002 |
| **Title** | Login error message is the same for both empty fields and invalid credentials |
| **Module** | Login |
| **Severity** | Medium |
| **Priority** | Medium |
| **Status** | 🔴 Open |
| **Reported By** | Patrick Marycynthia Ebube |
| **Date Found** | March 2026 |

**Steps to Reproduce:**
1. Navigate to https://bookstore.qacurry.com
2. Enter an unregistered email (e.g. `test@test.com`) and a wrong password
3. Click **LOGIN**
4. Note the error message
5. Now clear both fields and click **LOGIN** again with empty fields
6. Note the error message again

**Expected Result:**
- Empty fields → *"Please fill in all fields"*
- Wrong credentials → *"Your Login Name or Password is invalid"*
The two scenarios should display different, specific error messages.

**Actual Result:**
Both scenarios display the exact same message: **"Your Login Name or Password is invalid"** — making it impossible for the user to know whether they forgot to fill in a field or entered the wrong details.

**Screenshot:**
<img width="837" height="1016" alt="Screenshot 2026-03-20 at 8 44 27 PM" src="https://github.com/user-attachments/assets/bc30389f-e1b1-49d3-9fb6-73638b4793ec" />


**Impact:**
Poor user experience. Users cannot tell what they did wrong, which may cause unnecessary frustration and failed login attempts.

---

## BUG-003: Search Results Page Has Broken Styling and No Navigation Option

| Field | Details |
|-------|---------|
| **Bug ID** | BUG-003 |
| **Title** | Search results page turns grey and has no back/navigation button when no results are found |
| **Module** | Search |
| **Severity** | High |
| **Priority** | High |
| **Status** | 🔴 Open |
| **Reported By** | Patrick Marycynthia Ebube |
| **Date Found** | March 2026 |

**Steps to Reproduce:**
1. Log in with valid credentials
2. In the search bar, type a term that does not match any book (e.g. `xyzabc123`)
3. Click the **Submit** button

**Expected Result:**
- A clean, styled "no results found" message is displayed
- The page retains the same white background and design as the rest of the app
- A button or link is provided to allow the user to go back to the catalogue

**Actual Result:**
- The entire page background turns **grey/dark**
- Only the text `Product(s) not found.....` is shown with no styling
- There is **no back button or link** to return to the catalogue
- The ellipsis (`......`) in the message looks unprofessional

**Screenshot:**
<img width="837" height="1016" alt="Screenshot 2026-03-20 at 8 47 44 PM" src="https://github.com/user-attachments/assets/ef48fe72-197d-4558-9f74-9f1760c0946f" />


**Impact:**
Users who search for a non-existent book are stuck on a broken-looking page with no way to navigate back without using the browser back button. This is a poor user experience and makes the app look unfinished.

---

## Bug Summary Table

| Bug ID | Title | Module | Severity | Priority | Status |
|--------|-------|--------|----------|----------|--------|
| BUG-001 | Empty login fields show wrong error message | Login | Medium | High | 🔴 Open |
| BUG-002 | Login error message same for empty fields and wrong credentials | Login | Medium | Medium | 🔴 Open |
| BUG-003 | Search results page broken styling and no navigation | Search | High | High | 🔴 Open |

---

> ⚠️ This document will be updated as more bugs are discovered during testing.

