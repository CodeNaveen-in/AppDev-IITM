# Milestones for Hospital Management System

## Modern Application Development I (MAD-I)

**Project:** Hospital Management System (HMS)

The project is divided into:

* **Milestone 0 (Mandatory)**
* **Core Requirements (6 Milestones)**
* **Recommended / Optional Enhancements (5 Milestones)**

🔹 Core milestones can be completed **in any order**
🔹 Optional milestones should be started **only after core milestones are completed**
🔹 Each milestone has a **fixed Git commit message** that must be used

---

## Milestone 0: GitHub Repository Setup (Mandatory)

**Deadline:** 30/11/2025
**Expected Time:** 1 day
**Completion Progress:** 5%

### Tasks

* Create a **private GitHub repository**
* Add a `README.md` with a short project description
* Set up `.gitignore` (optional)
* Commit and push the initial setup
* Add **MADI-cs2003** as collaborator (refer to git tracker document)
* Refer video: *Adding GitHub Collaborator using VSCode and WSL*

**Git Commit Message:**

```
Milestone-0 HMS-MAD-1
```

---

## Core Requirements (6 Milestones)

### 1. Database Models and Schema Setup

| Item                | Details  |
| ------------------- | -------- |
| Expected Time       | 5–7 days |
| Completion Progress | 18%      |

**Requirements**

* Create models: Admin (predefined), Doctor, Patient, Department/Specialization, Appointment, Treatment
* Define relationships (Doctor–Patient via Appointment, Appointment–Treatment)
* Database must be created **programmatically** (no DB browser/manual creation)

**Git Commit Message**

```
Milestone-HMS DB-Relationship
```

---

### 2. Authentication and Role-Based Access

| Item                | Details |
| ------------------- | ------- |
| Expected Time       | 5 days  |
| Completion Progress | 10%     |

**Requirements**

* Patient registration and login
* Doctor and Admin login (Admin is predefined)
* Doctors cannot self-register
* Role-based dashboards (Admin / Doctor / Patient)

**Git Commit Message**

```
Milestone-HMS Auth-RBAC
```

---

### 3. Admin Dashboard and Management

| Item                | Details  |
| ------------------- | -------- |
| Expected Time       | 7–9 days |
| Completion Progress | 23%      |

**Admin Functionalities**

* Dashboard showing total doctors, patients, appointments
* Add/update doctor profiles
* View all appointments (past & upcoming)
* Search patients (name, ID, contact)
* Search doctors (name, specialization)
* Blacklist/remove doctors or patients

**Git Commit Message**

```
Milestone-HMS Admin-Dashboard-Management
```

---

### 4. Doctor Dashboard and Appointment/Treatment Management

| Item                | Details |
| ------------------- | ------- |
| Expected Time       | 7 days  |
| Completion Progress | 17%     |

**Doctor Functionalities**

* View assigned appointments (daily/weekly)
* Mark appointments as Completed / Cancelled
* Enter diagnosis, treatment, prescriptions
* View patient medical history
* Update availability schedule (next 7 days)
* Login credentials via Admin or optional email

**Git Commit Message**

```
Milestone-HMS Doctor-Dashboard-Management
```

---

### 5. Patient Dashboard and Appointment System

| Item                | Details |
| ------------------- | ------- |
| Expected Time       | 7 days  |
| Completion Progress | 12%     |

**Patient Functionalities**

* Register, login, update profile
* Search doctors (name/specialization)
* Book, reschedule, cancel appointments
* View upcoming appointments with status
* View past appointments with diagnosis & prescriptions

**Git Commit Message**

```
Milestone-HMS Patient-Dashboard-Management
```

---

### 6. Appointment History and Conflict Prevention

| Item                | Details |
| ------------------- | ------- |
| Expected Time       | 5 days  |
| Completion Progress | 15%     |

**Requirements**

* Maintain complete appointment & treatment history
* Prevent double booking of doctors
* Status handling: Booked / Completed / Cancelled
* Access:

  * Admin & Doctor → All patient records
  * Patient → Own records only

**Git Commit Message**

```
Milestone-HMS Appointment-Treatment
```

---

## Recommended / Optional Enhancements (5 Milestones)

| Milestone                     | Expected Time | Git Commit Message                |
| ----------------------------- | ------------- | --------------------------------- |
| API Integration               | 7 days        | `Milestone-HMS Created-API`       |
| Charts & Visualization        | 5 days        | `Milestone-HMS Charts`            |
| Frontend & Backend Validation | 5 days        | `Milestone-HMS Validation`        |
| Responsive UI & Styling       | 5 days        | `Milestone-HMS Responsive-UI`     |
| Flask-Login & Security        | 5–7 days      | `Milestone-HMS Flask-Integration` |

**Notes**

* APIs should support at least **4 HTTP methods**
* Flask-RESTful is optional
* Enhancements are **not graded** but improve project quality

---

## Final Submission

| Item                      | Details |
| ------------------------- | ------- |
| Expected Time             | 2 days  |
| Progress After Completion | 100%    |

**Submission Requirements**

* ZIP file with full codebase
* 3–5 page project report
* 3–10 minute demo video (Google Drive, public access)
* Video link included in report
* Mandatory AI usage declaration (even if 0%)
* Refer video: *How to Submit App Dev 1 & 2 Projects | IITM BS*

**Git Commit Message**

```
Milestone-HMS Final-Submission
```

---

## Tracking Progress

Students should:

* Use **Git commits** for every milestone
* Test features after completing each milestone
* Log issues and fixes in `README.md` or GitHub Issues

---

## Timeline Overview – Core Milestones

| Milestone           | Avg Time | Split (%) | Progress (%) |
| ------------------- | -------- | --------- | ------------ |
| GitHub Setup        | 1 day    | 5%        | 5%           |
| Database Setup      | 5–7 days | 18%       | 23%          |
| Authentication      | 5 days   | 10%       | 33%          |
| Admin Dashboard     | 7–9 days | 23%       | 56%          |
| Doctor Dashboard    | 7 days   | 17%       | 73%          |
| Patient Dashboard   | 7 days   | 12%       | 85%          |
| Appointment History | 5 days   | 15%       | 100%         |

---

## Extra Work Overview

| Milestone                     | Avg Time |
| ----------------------------- | -------- |
| API Integration               | 7 days   |
| Charts & Visualization        | 5 days   |
| Frontend & Backend Validation | 5 days   |
| Responsive UI                 | 5 days   |
| Flask Login & Security        | 5–7 days |

---

## Final Notes

* Time estimates are **averages**
* **Milestone 0 + all 6 core milestones** are evaluated in **Viva-1**
* Enhancements are optional but useful for **Best Course Project nomination**
* Milestones can be completed in **any order**
* Multiple commits allowed, but **exact commit message is mandatory** for milestone completion
* Entire codebase **must be pushed to GitHub before viva submission**