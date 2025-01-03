# NAMASTE REACT LIVE COURSE - AKSHAY SAINI

Namaste React Live Course is live course by Akshay Saini (Founder of NamasteDev, teacher, ex-UBER and creator of Namaste Javascript Series on YouTube)

This repository consists of all the _Learnings_ and _Assignments_ done in this Course.
There will be 2 commits for each class - 1st for the Code and 2nd for the Assignment.

# ASSIGNMENT 1

### What is _Emmet_?

**_Emmet_** is a toolkit which helps developers to write code snippets using some shortcuts allowing easier creation of boilterplate code in the applications.

### Difference between _Library_ and _Framework_?

Library and Framework are both a set of code which is written by someone else to ease up the coding process.

The major difference between the two is that with **_'Library'_**, the developer decides the flow of code and thus have more freedom while coding and in whatever flow we want whereas in case of a **_'Framework'_**, the framework is the in charge of the flow of code thus the developer has to flow a set of rules defined by the framework and has got less freedom while coding

### What is _CDN_? Why do we use it?

_CDN_ is **_'Content Delivery Network'_**. It is a group of servers which may be distributed globally that allows us to utilize the some resources/assets/pieces of code directly by embedding a link inside our code. Majorly developer use it when they either want to _utilize some components of code quickly_ or when they want to _keep their own codebase lighter_ by just embedding the directly from the existing server instead of putting the resources on their own servers.

### Why is React known as React?

React is known as _'React'_ because of _its ability to react to changes in the data_. Whenever any data is changed in a React component, React automatically renders that component and the changes are reflected at each and every instance where the data was used.

### What is _crossorigin_ in script tag?

The **_'crossorigin'_** attribute in script tag allows us to _provide support for **CORS**_, i.e. defining how a CORS request is to be handled. CORS, which is **_Cross-Origin Resource Sharing_**, is a mechanism to indicate the origins(domain or port) from where it is safe to obtain different kinds of data or resources.

### What is difference between _React_ and _ReactDOM_

**_React_** is a Javascript Library which used to build _User Interfaces_ and **_ReactDOM_** is a Javascript Library which gives React the ability to interact which the _Browser DOM_

### What is difference between _react.development.js_ and _react.production.js_ files via CDN?

**_react.development.js_** is used when we want to use React on our local machine, inside the development environment where **_react.production.js_** is a minified/optimized version of React (because the debugger isn't present) which is used at the production environment

### What is _async_ and _defer_?

**_async_** and **_defer_** are boolean attributes that are used in script tag to load external scripts efficiently into our code.
When a page is loaded 2 things happen: **_HTML Parsing_** and **_Loading of the Scripts_**.

In the normal scenario, while the browser is parsing the HTML line by line, if a script tag is encountered, the browser stops HTML parsing and fetches the script and runs it immediately. After this, the browser agains goes back to HTML parsing.

When we use **_async_** attribute in script tag, in case the script tag in encountered, the browser asynchronously fetches the script, thus the HTML parsing and script fetching is happening simultaneously and as soon as the whole script is fetched, the browser stops HTML parsing and starts executing the script. Once the script is done executing, browser again goes back to parsing the HTML.

Now when we use **_defer_** attribute is script tag, in case the script tag in encountered, the browser asynchronously fetches the script, thus the HTML parsing and script fetching is happening simultaneously but the script is executed only when the browser is done with HTML parsing.

With **_async_** we can't be sure of the order in which the scripts maybe executed but with **_defer_** we can, so when we want to execute multiple scripts which are dependent on each other, we use **_defer_**. In scenarios where we want load some external script that is independent of our code(for example: _Google Analytics_), we use **_async_** attribute.

## Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watcher Algorithm - C++
- Caching while Development - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compression
- Consistent Hashing
- Code Splitting
- Differential Bundling - Compatible with older versions of browser
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - Removing unused code
- Different Dev and Production Bundles
- Super fast build Algorithm
- Zero Config
- Transitive Dependencies

## Food Ordering App

#### Header

- Logo
- Nav Items
- Cart

#### Body

- Search Bar
- Restraunt List
  - Restraunt Card
    - Image
    - Name
    - Ratings
    - Cusines

#### Footer

- Links
- Copyright
