# AI Percentage Check

### Combined Usage Breakdown Table – MAD-1 and MAD-2 Projects

| Component / Tool                  | Purpose / Role in Project                          | MAD-1 Usage % | MAD-2 Usage % | Notes                                                                 |
| --------------------------------- | -------------------------------------------------- | ------------- | ------------- | --------------------------------------------------------------------- |
| Flask (App + API)                 | Backend logic, routing, request handling           | 20%           | 18%           | In MAD-2, Flask is mainly used to serve REST APIs                     |
| SQLite + SQLAlchemy               | Data modeling, relationships, persistence          | 15%           | 12%           | Mostly similar usage; MAD-2 may have fewer direct queries due to APIs |
| HTML + Jinja2                     | Server-side template rendering                     | 15%           | 2%            | Heavy in MAD-1; replaced by Vue in MAD-2                              |
| Bootstrap / CSS                   | Styling and layout                                 | 8%            | 8%            | UI libraries used in both, more flexible in MAD-2                     |
| JavaScript / AJAX (vanilla)       | Interactivity, client-side logic                   | 5%            | 2%            | More in MAD-1 due to Jinja forms; Vue replaces this in MAD-2          |
| Authentication (Login/Auth)       | Login/logout, role-based control                   | 10%           | 10%           | May shift from Flask-Login (MAD-1) to token-based (MAD-2)             |
| Admin CRUD Logic                  | Manage users/quizzes/services, etc.                | 10%           | 5%            | More frontend-driven in MAD-2                                         |
| User Logic (Quiz/Booking)         | Core user flow: attempts, bookings, usage          | 10%           | 7%            | Built in Vue + API in MAD-2                                           |
| Validation (Client + Server)      | Form and input validation                          | 2%            | 3%            | JS/Flask-WTF/etc. in MAD-1, Vue + backend in MAD-2                    |
| Charts / Data Visualization       | Display results/scores/analytics                   | 3%            | 2%            | Optional in both                                                      |
| Testing / Debugging               | Ensuring correctness and robustness                | <1%           | 1%            | Rarely automated; more manual                                         |
| APIs / External Integration       | Fetching or posting data to external/internal APIs | 2%            | 5%            | Emphasis increases in MAD-2                                           |
| Vue.js (Core + Router)            | Reactive frontend, routing, page rendering         | —             | 25%           | Vue is central in MAD-2, not used in MAD-1                            |
| Axios / Fetch (API Communication) | Handling async API calls from frontend             | —             | 5%            | Replaces traditional form POSTs in MAD-2                              |
| Vuex / Pinia (State Management)   | Global state handling in frontend                  | —             | 2%            | Optional; used in larger MAD-2 apps                                   |

---

## Summary View (Category-wise Totals)

| Category                     | MAD-1 Total % | MAD-2 Total % | Notes                                         |
| ---------------------------- | ------------- | ------------- | --------------------------------------------- |
| Backend (Flask + DB)         | 35%           | 30%           | Slightly reduced in MAD-2 due to API model    |
| Frontend (HTML / JS)         | 28%           | 40%           | Shift from Jinja to Vue-based architecture    |
| Styling / UI                 | 8%            | 8%            | No significant difference                     |
| Auth + CRUD Logic            | 20%           | 15%           | Logic moves from backend templates to APIs    |
| Extras (Charts / API / etc.) | 9%            | 7%            | Still optional, depending on student projects |