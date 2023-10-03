# Project Kashy Website

## Tasks:

- [x] Copy Tin's file from his GitHub repo and my database from my branch over to this repo
- [x] Clear the previous page layout from the current repo
- [x] Apply the new layout to the current repo
- [ ] Check responsive status
	+ [ ] How does the page look on a phone?
	+ [ ] How does the page look on a tablet?
	+ [ ] How does the page look on a laptop?
	+ [ ] How does the page look on a desktop?
- [x] Set up routing for the page
- [x] Make the `index.tsx` file as the routes controller
- [x] Create a separate `home.tsx` file to store the code for the Home page
- Responsive ideas:
	+ [ ] Burger menu as nav bar for phone and tablet
	+ [ ] Expand info (+ form?) using buttons for the Home page
	+ [ ] Collapsible sections for the About Us page
	+ [ ] Scrollable Review section
- [ ] Find inspirations to redesign the other sections of the page
*(emphasise on simplicity, not everything needs to be a piece of art)*
*(use Figma to design the page if needed)*
	+ [ ] About Us page
	+ [ ] Contact Us page
	+ [ ] Easter Egg page? 
- [x] Apply the working database to this repo
- [x] Establish connection with the database
- [x] (Test) Retrieve data from the database's `workrequest` table
- [ ] Process user's input data
  - [ ] Separate the user's full name into first name and last name
  - [ ] Store service choice as text, rather than its id
  - [ ] Store comments to its full length
- [ ] Add the user's data into the `workrequest` table
- [ ] Notify Kashy/the customer that the data has been successfully added to the table
- [ ] Combine current work with Daniel's to send an email only if the data is successfully added
- [ ] Implement a layer of authentication for accessing the API?
  - Using JSON Web Tokens?
  - Using simple authentication (username + password)?
- [ ] (Diagnostic) Delete data from the database's `workrequest` table

## Notes:

- Set up the `.env` file using the **DevSetupGuide.pdf** file in the OneDrive folder every time this repo is cloned.

- Add the `.env` file into `.gitignore` file.

- Create a new `.env` file every time the repository is cloned using the info in the `DevSetupGuide.pdf` file, which includes
  + AWS_HOST
  + AWS_USER
  + AWS_PASS
  + AWS_DB
  
- Directory of `app.ts` is `./src/backend/database/routes`