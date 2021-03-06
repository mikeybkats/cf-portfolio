# cf-portfolio
### project description
This is a portfolio site to display michael barakat's work. It is / has been / is being produced for credit and partial completion of codefellows 301 (a code school in Seattle, WA).

### user stories (as supplied by 301 class)
##### class 01  
1. As a developer, I need my site to use valid and semantic markup, so that employers will love me.
2. As the creator, I need the page to link to my social and GitHub pages, so that visitors can follow me, and I can build my audience.
3. As a visitor, I want the viewport properly sized, so that content fits all the size I have available.
4. As a visitor, I want the primary nav to be responsive with a menu, so that I can get around using any device.
5. As a visitor, I want to see projects one per row on mobile, so that I can read the detail easily. ***- end class-02 - 11/28/2016 -***

##### class 02
6. As a developer, I want portfolio items displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects.
7. As a developer, I want my CSS organized (think SMACSS) so that I can find my stylings swiftly.
8. As a visitor, I want the portfolio to show the newest material on top so that I can easily see the developers recent work. ***- end class-02 - 11/29/2016 -***

##### class 03
1. As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.
  - This means your links do NOT navigate to a new page.
  - Instead, your "single page app" shows only the section related to the navigation tab that is selected.
  - You can use 'data-' attributes to associate a content section with a particular tab
  -Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.
2. As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.

##### class 04
1. As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily.
2. As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles.

### technical requirements (as supplied by 301 class)
##### class 01
- Be sure to use proper viewport settings.
- Use mobile-first design principles when adding CSS.
- Add new styles in any media queries as needed to make the page look good on desktop screens.  

##### class 02
- Think of some ideas for your source data, and code it up in its own file! Build out an array of three objects to start with, all having similar properties.
- Create a new .js file with the appropriate methods to help modify your source data to help render it to the DOM:
Use good Object Oriented code: Create a constructor function for projects or source data.
- Leave as little in the window (global) namespace as possible: attach functions to objects, etc.
- Use jQuery to clone the example markup for each project, as you add additional content.
Your "Project" prototype should have a .toHtml() function that adds new data to the DOM.
- Refactor your CSS into a base, layout, and module structure where applicable.

##### class 03
- Use event delegation whenever appropriate.
- Add click handlers to at least one nav section.
- Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
- When classes and IDs are needed, pick semantic names. There is to be no $('#content .content') nonsense!

##### class 04
- Add Handlebars to your blogging system.
- Organize your CSS code according to SMACSS, with at least a file for base, layout, and modules.
