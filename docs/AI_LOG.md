Tool: Claude. Used for: the folder structure, the static SPA frontend (navbar, router, page views), the draft ERD, AGENTS.md and .gitignore.

**Case 1: AI was wrong or produced poor code**
What was wrong: The AI generated the "Add" button and popup title on the Categories page as "Add categorie". It made words singular by removing the last letter, which breaks for "Categories".
How I noticed: Going through the website 50 times
How I fixed it: I changed both labels to "Add category" in frontend/views/categories.html.

**Case 2: AI was wrong or produced poor code**
What was wrong: The AI generated Edit, Delete, Save and Look up buttons that look functional but do nothing when clicked, and it did not mark them as placeholders. It also made the Admin link visible to everyone and the Log out link only changes the page.
How I noticed: I clicked the buttons while testing the site and nothing happened.
How I fixed it: Added a tooltip to the placeholder buttons saying they are connected to the backend in Milestone 4, and added a rule about it to AGENTS.md.
