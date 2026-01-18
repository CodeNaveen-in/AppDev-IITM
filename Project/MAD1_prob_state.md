# Hospital Management System (HMS)

## Modern Application Development I (MAD-I)

Hospitals need efficient systems to manage **patients, doctors, appointments, and treatments**.
Many hospitals still rely on manual registers or disconnected software, which leads to:

* Poor record management
* Scheduling conflicts
* Difficulty tracking patient history

You are required to build a **Hospital Management System (HMS) web application** that allows **Admins, Doctors, and Patients** to interact with the system based on their roles.

---

## Mandatory Frameworks

The project **must** be built using the following technologies:

* **Backend:** Flask
* **Frontend:** Jinja2, HTML, CSS, Bootstrap
* **Database:** SQLite
  ❌ No other database is permitted

### Important Notes

* All demos must be possible on your **local machine**
* The database **must be created programmatically**

  * Using model code or table creation scripts
  * ❌ Manual DB creation (e.g., DB Browser for SQLite) is **not allowed**

---

## Roles & Functionalities

### 👤 Admin (Hospital Staff)

* Pre-existing superuser (created programmatically)
* Add, update, and delete doctor profiles
* View and manage all appointments
* Search patients or doctors by name/specialization

---

### 👨‍⚕️ Doctor

* Log in to view assigned appointments
* Mark appointments as completed
* Enter diagnosis and treatment notes
* View patient medical history

---

### 🧑‍🤝‍🧑 Patient

* Register, log in, and update profile
* Search doctors by specialization and availability
* Book, reschedule, or cancel appointments
* View appointment history and treatment details

---

## Key Terminologies

### Admin

A user with the highest level of access who manages doctors, appointments, and hospital data.

### Doctor

A medical professional registered in the system who consults patients.

### Patient

A user seeking medical care through the system.

---

### Appointment

A scheduled meeting between a patient and a doctor.

**Attributes**

* Patient ID
* Doctor ID
* Date
* Time
* Status (Booked / Completed / Cancelled)
* Additional fields as required

---

### Treatment

A record of medical care provided during an appointment.

**Attributes**

* Appointment ID
* Diagnosis
* Prescription
* Notes
* Additional fields as required

---

### Department / Specialization

Medical field in which a doctor specializes.

**Attributes**

* Department ID
* Department Name
* Description
* Doctors Registered
* Additional fields as required

> ⚠️ The above tables and fields are **not exhaustive**. Students may add more as needed.

---

## Reference Application

* [https://mocdoc.com/](https://mocdoc.com/)

---

## Application Wireframe

**Hospital Management Application**

> The provided wireframe illustrates application flow only.
>
> * Exact UI replication is **not mandatory**
> * Students are encouraged to design their own UI
> * Functional flow must remain intact

---

## Core Features

### Admin Functionalities

* Dashboard displaying:

  * Total doctors
  * Total patients
  * Total appointments
* Admin must pre-exist (no registration allowed)
* Add/update doctor profiles
* View all appointments (past & upcoming)
* Search doctors and patients
* Edit doctor and patient details
* Remove or blacklist doctors/patients

---

### Doctor Functionalities

* Dashboard showing:

  * Daily/weekly appointments
  * Assigned patients
* Mark appointments as Completed or Cancelled
* Set availability for next 7 days
* Add diagnosis, treatment, and prescriptions
* View complete patient history

---

### Patient Functionalities

* Self-registration and login
* Dashboard displaying:

  * All departments/specializations
  * Doctor availability (next 7 days)
* View doctor profiles
* Book and cancel appointments
* View upcoming appointments and status
* View past appointments with diagnosis & prescriptions
* Edit personal profile

---

## Other Core Functionalities

* Prevent double booking for the same doctor at the same time
* Dynamic appointment status updates:

  * Booked → Completed → Cancelled
* Search functionality:

  * Admin & Patient: Doctor name / specialization
  * Admin: Patient name, ID, contact info
* Maintain complete patient treatment history
* Access control:

  * Patients → View own history
  * Doctors → View assigned patient history
  * Admin → View all records

---

## Recommended / Optional Functionalities

* Create API resources for:

  * Users
  * Appointments
  * Other entities (selective)
* APIs can be implemented using:

  * JSON responses (min. 4 HTTP methods), or
  * `flask_restful`
* Use external libraries for charts (e.g., Chart.js)
* Frontend validation (HTML5 / JavaScript)
* Backend validation in Flask controllers
* Responsive UI using CSS or Bootstrap
  ❌ No other styling libraries allowed
* Secure authentication using:

  * `flask_login`
  * `flask_security`
* Any additional relevant feature

---

## Evaluation & Submission

Students must submit:

* **Project code (ZIP file)**
* **Project report (≤ 5 pages)**

### Report Must Include

* Student details
* Project description & approach
* AI/LLM declaration
* Frameworks & libraries used
* ER diagram with all tables & relationships
* API endpoints (if implemented)
* Drive link to demo video

📌 AI Usage:

* If AI/LLM is used, **percentage usage must be declared**
* Declaration is mandatory (even if usage = 0%)

📄 Resources:

* Project report template (demo)
* AI usage declaration document

---

## Video Presentation Guidelines (Advised)

### Suggested Structure

1. Introduction (≤ 30 sec)
2. Problem approach (30 sec)
3. Key features demo (90 sec)
4. Additional features (30 sec)

### Video Rules

* Duration: **5–10 minutes**
* Camera feed: Optional but recommended
* Upload to **student Google Drive**
* Access: *Anyone with the link*
* Video link must be included in the report

---

## Viva Examination

* Examiner will:

  * Watch the video
  * Ask for a **live demo**
  * Request **code changes**
  * Ask theory questions (course-related)

---

## Instructions & Updates

* This is a **live document**
* Problem statement will be frozen on or before **20/09/2025**
* Updates will be announced officially
* Project must be submitted as **a single ZIP file**