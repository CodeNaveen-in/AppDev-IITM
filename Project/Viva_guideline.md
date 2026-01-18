# Important Note

## Level 1 Viva Guidelines for MAD-1 and MAD-2

### ⏱️ Viva Duration

* You will have **30 minutes** to showcase your application.
* **No additional time** will be provided.

---

## Level-1 Viva Requirements (Updated)

* If a student is **unable to run their application without assistance from the proctor within the first 10 minutes**, they will **fail the viva**.
* If the proctor believes that the student has **not completed the project independently**, the student may be **flagged for malpractice**.
* Students must:

  * Demonstrate the **core functionality** of their application
  * Answer **1–2 theory questions**
  * Make **code modifications** during the Level-1 viva
* Students who:

  * Have **not created a GitHub repository**, or
  * Have **not added the AppDev team as collaborators**
    will incur a **penalty of 6–7 marks** on theory questions.

---

## If Absent or Unable to Complete Within 30 Minutes

* **Rescheduling is not possible** due to the high number of participants and limited time.
* The proctor will **evaluate performance based only on what is demonstrated** within the 30-minute window.

---

## Scoring and Progression

* If your score **does not meet the minimum threshold**, you will **not qualify for Level 2**.
* Avoid unnecessary arguments with proctors — this may lead to **disciplinary action**.
* ❌ **Any AI/LLM used in a code editor during the viva (MAD-1 or MAD-2) is strictly not allowed**.
* ✅ If AI/LLM was used to create the project, **mention the percentage usage in the project report** (refer to the AI usage document).

---

## Viva Schedule & Setup Instructions

* You will receive the **viva schedule email within 12–24 hours** of the scheduled time.

  * Example: If your viva is at **10 AM tomorrow**, you will receive the email **by this evening**.
* If your **PC camera is not working**, use your **phone camera**.
* Be ready with your setup **before** the viva starts.
* **Join the meet link 10 minutes early**.

---

## Trivia ⏳

* Average time for Level-1 viva:

  * **MAD-1:** 15–20 minutes
  * **MAD-2:** 25–30 minutes

---

## Submission Reminder

**Have you submitted your project?**

* If **not yet**, check the video on **how to upload the submission file**.

---

# Viva Preparation Checklist (Before Viva Starts)

### ✅ Code & Repository

* Be ready to **run the code immediately** without delays.
* Open your **GitHub profile** and repository.
* Ensure the **AppDev team is added as collaborator**.

### ⚙️ Server & Configuration

* **MAD-2 only:** Know how to configure **Celery task timings**.
* Keep **all server commands** noted in a text file for quick copy-paste.

### 🪪 Identification

* Keep your **student ID card open in the browser**.

---

## Checksum and File Testing

### 🔍 Validation

* Validate the checksum using the provided script.
* If the checksum mismatches:

  * Follow extraction and revalidation steps
  * Proctor assistance will be provided if needed

### ⚠️ Important Notes

* Avoid debugging during viva.
* Skip virtual environments if they cause issues.
* You may install packages **globally if required**.
* **Any code change will alter the checksum**.

---

## Reusing Existing Environments

* **MAD-1 & MAD-2**

  * You may cut and paste an already created `venv` **after checksum validation**
* **MAD-2**

  * You may cut and paste existing `node_modules`
  * OR install immediately using:

    ```bash
    npm install
    ```

---

## Generate Checksum

### Step 1: Install Required Packages

Run in terminal / CMD / PowerShell:

```bash
pip install checksumdir
pip install zipfile
```

If you get:

```
No module named 'pkg_resources'
```

Run:

```bash
pip install setuptools
```

---

### Step 2: Create `check.py`

Add this file to the same directory as your **unzipped project folder**.

```python
# check.py
import checksumdir

# Replace "folder_name" with the actual folder path
hash = checksumdir.dirhash("folder_name")
print("Directory Checksum:", hash)
```

Run:

```bash
python check.py
```

---

## Folder Structure

```
Viva Folder/
│
├── xyz.zip        (Downloaded file)
│
├── xyz/
│   ├── app_folder   (Submitted folder)
│   └── check.py     (Checksum file)
```

> **Note:**
> Replace `"folder_name"` with the actual folder name or path.
> Even a **single character change** will modify the checksum.

---

## If Checksum Mismatches

### Step 1: Programmatically Extract ZIP

Create `unzip.py`:

```python
from zipfile import ZipFile

# Replace "file_name" with the ZIP file path
with ZipFile("file_name", 'r') as zip:
    zip.extractall("Unzipped")

print("Extracted successfully to 'Unzipped' folder.")
```

---

### Step 2: Re-run Checksum on Extracted Folder

```python
import checksumdir

hash = checksumdir.dirhash("Unzipped")
print("Directory Checksum for Unzipped:", hash)
```

* If it still mismatches:

  * Ensure you are using the **exact file downloaded from the course portal**
  * Proceed only after **proctor confirmation**

> **Mac users:** Refer to the dedicated document if validation fails.

---

## 💡 Pro Tip

Always **test checksum and extraction scripts beforehand** to avoid last-minute surprises.