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

-----

## Handover Notes

Netlify CMS created the MD file.
Gatsby turns them into static files.
React styled components.

Codebase run through:
- Config at run.
- Yarn or NPM. They've been using NPM.
- gatsby-node run at build time.
- gatsby-config is plugins.
- netlify.toml - commands.
- Publish in the CMS applies changes to master.

static/img is the CMS image store.
static/admin/congif.yml is the CMS config.

src/cms/preview-templates/* - preview in the CMS.
^ trying to use the same template that the page will use.

src/components - each component and a global SaSS file.
React functional components, not class components.
useState is a custom react hook. 
useEffects for your lifecycle methods.
Styled components, keeps it scoped to the component. You can input properties.

src/img - images.

src/pages - hosting the MD files.
Within netlify CMS it'll update those files.
Gatsby is looking in that folder.

src/templates - page templates.

case-study-parent - uses a static query so is a strange exception.

src/services - utility functions.
Filters have been extracted into there.

Not using any state management.

Routing. Gatsby does it based what's in the Pages folder. It'll generate the routes from there.
index file within a folder it'll take the folder name.

CMS access.
Identity option in netlify.
