To create these multi-stakeholder, high-fidelity prototypes in Figma, use this comprehensive description to set up your design file and build your components.

**Figma High-Fidelity Multi-Stakeholder Mushroom Farm Management Platform Prototype**

**Project Setup:**

* **Design Style:** Clean, modern, light UI with soft, diffused shadows.
* **Color Palette:** Standardized professional colors (e.g., #2ECC71 green for normal, #E74C3C red for alert, #3498DB blue for system), and a range of light and dark grays.
* **Typography:** A legible sans-serif font family (like Inter or Poppins) for all text, with defined styles for headings, subheadings, and body text.
* **Interaction:** Create interactive components with states for hover, press, focus, and smooth transitions (e.g., card expansion, modals). Add prototype connections for navigation.

---

### Phase 1: Unified Login Flow (Pre-Stakeholder Access)

**Screen 1: Unified Login Screen**

* **Layout:** A centered card within a clean canvas.
* **Header:** A simple, high-fidelity, stylized mushroom farm logo with text "Mushroom Farm Central."
* **Body:**
* Title: "Sign In to Your Dashboard."
* Two high-fidelity input fields with labels ("Email", "Password") and clear ghost text (e.g., "Enter your email"). A "Forgot Password?" link.
* Primary "Sign In" button (e.g., solid blue, high-fidelity).
* "Or Sign In With" section with high-fidelity icons (Google, Apple, Microsoft).
* Interaction Note: Clicking "Sign In" with valid credentials uses the backend user role to determine which stakeholder dashboard is shown. (You can simulate this in Figma using different frames for each user type after the interaction).



**Screen 2: Loading / Role Detection (Optional)**

* A brief "Verifying Your Role..." screen with a modern, circular progress loader, transitioning smoothly to the correct stakeholder dashboard.

---

### Phase 2: Farmer Stakeholder Flow (Refined and High-Fidelity)

**Prototype Flow A (Based on image_0.png, but refined):**
This flow is for an individual farmer's monitoring. Create a high-fidelity version of the existing layouts.

* **Screen 1: Farmer Dashboard (Refined image_0.png top-right)**
* High-fidelity version of the multi-sensor grid. Use rich colors and maybe real background photos of mushrooms in each sensor card.
* Add smooth chart integration directly onto the cards or as a detailed modal that opens upon clicking. Add a "Yield History" tab to this screen for the aggregator's data source.


* **Screen 2: Farmer Detailed Sensor View (Refined image_0.png bottom-middle)**
* High-fidelity charts with real data lines and smooth animations.


* **Screen 3: Farmer Settings (Refined image_0.png bottom-right)**
* Polished interactive range slider and form fields.



---

### Phase 3: Aggregator Stakeholder Flow (New Dashboard)

**Prototype Flow B: Multi-Farmer Yield Aggregator Dashboard**

* **Screen 1: Aggregator Dashboard (Overview)**
* **Header:** "My Mushroom Farm - Aggregator Portal." Standard Figma status bar and profile dropdown.
* **Controls (Top Bar):** High-fidelity date range picker (e.g., "This Week"), and a search field ("Search Farmers").
* **Dashboard Cards (Overview):**
* Card 1: "Total Yield (Current Period): [540 kg]". Small line chart showing daily aggregate trend.
* Card 2: "Number of Submitting Farmers: [8]".
* Card 3: "Active Alerts: [2]". Clicking opens a modal list.


* **Visualization:** A high-fidelity, paginated data table showing yield submissions from multiple farmers.
* Columns: Farmer Name (Clickable), Location, Submit Date, Yield (kg), Mushroom Variety, Quality Status.
* Example Row: John Doe | Farm A | Oct 26, 2023 | 65 kg | Oyster | Grade A.
* Action: A button in each row: "View Farmer Profile."




* **Screen 2: Farmer Detail View (Modal)**
* A high-fidelity modal that opens when a farmer's name is clicked. Shows:
* Top Profile Card (Photo, Name, Location).
* A detailed line chart of "Farmer A's Yield over Time (Selected Period)."
* A summary table of their sensors (similar to the farmer's own view).





---

### Phase 4: System Admin Stakeholder Flow (New Management Console)

**Prototype Flow C: Platform Administration Console**

* **Screen 1: Admin Dashboard (Overview)**
* **Layout:** A sophisticated dashboard with a persistent left-side navigation panel.
* **Sidebar Navigation:** Dashboard, Users (Selected), Farms, System Logs, Global Settings.
* **Main Body:** Summary cards (Total Users: [12], Total Farmers: [8], Total Aggregators: [3], Total Admins: [1]).
* A high-fidelity data table of all users.
* Columns: Photo, Name, Email, Role (Dropdown: Farmer/Aggregator/Admin), Joined Date, Status (Active/Inactive), Actions (Edit/Delete).
* Action Buttons: High-fidelity "Edit" (pencil) and "Delete" (trash can) icons.


* **Top Controls:** A prominent "Add New User" primary button. Filters by role. Search bar.


* **Screen 2: Add / Edit User (Modal or Dedicated Screen)**
* A high-fidelity form for user creation/editing.
* Fields: First Name, Last Name, Email, Password, Role (Dropdown: Farmer, Aggregator, Admin), Farm Link (Conditional dropdown, e.g., only if Role is Farmer, shows a list of farms).
* Action Buttons: High-fidelity "Cancel" (secondary) and "Save" (primary) buttons.


* **Screen 3: Delete Confirmation (Modal)**
* A simple, high-fidelity confirmation modal: "Are you sure you want to delete user 'John Doe'?" With "Delete" (red) and "Cancel" buttons.



---

### High-Fidelity Prototype Interactions (The Glue):

Use Figma's advanced prototyping to make the screens interactive.

* **Unified Login:** Connection from the Login "Sign In" button with "Role Detection" interaction. The final "go to" screen should be a different frame depending on a "variable" (simulated by having separate prototypes you can click through, e.g., one for Farmer, one for Aggregator, one for Admin, to simulate the logic). A better way is to make each user type and then create a flow starting from the login for each.
* **Figma State Management:** Make the sensor cards in the Farmer dashboard interactive components. Clicking specific sensors expands them into detailed charts or modals.
* **Aggregator Table:** Clicking on a farmer's name opens the detailed profile modal. Filtering and sorting interactions for the table.
* **Admin Console:** Make the sidebar navigation work smoothly. Clicking "Add New User" opens the modal. Delete icons trigger the confirmation modal.
* **General UI:** Add subtle hover effects to buttons and interactive components for a professional feel. Add smooth transitions between screens and when modals open and close.