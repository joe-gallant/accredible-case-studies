# Accredible case studies

Ensure you've got NodeJS installed on your machine. (Recommended v12 for this project).

### 1) Install dependencies
Clone the repo and install the dependencies using the command: `npm install`

### 2) Serve the application
You can spin the site up locally using the command: `npm run start`.
The site will then be available on http://localhost:8000/

### 3) Use the CMS locally
You can use the CMS locally through http://localhost:8000/. **But beware** - publishing changes will commit to master and will trigger a Netlify deploy (if configured).

### 4) When making changes to the CMS layout you should follow these steps:
Update the config.yml file with the new fields on your develop branch.
Merge develop into master.
Go onto the CMS and add in the content which you want on the site then click publish.
Merge master into develop and start the integration.
When developing we had problems with content not being available on certain branches, but following this process made it easier.