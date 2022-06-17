[![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/01-home-page.png)](https://github.com/Rianto-RNT/rnt-react-development)

<h1 align="center">
  <br>
  RNT Cloth - React frontend web development Specifications
  <br>
</h1>

<h4 align="center">React Development (w/ Redux, Hooks, GraphQL ) for RNT Cloth, which is an Aplication directory website built on top of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>.</h4>

 <p align="center">
 <a href="#deployed-version">Demo</a> •
  <a href="#api-usage">API Usage</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#installation">Installation</a> •
  <a href="#build-with">Build With</a> •
  <a href="#npm-packages">NPM Packages</a> •
  <a href="#demonstration">Demonstration</a> •
  <a href="#future-updates">Future Updates</a> • 
  <a href="#known-bugs">Known Bugs</a> • 
  <a href="#acknowledgement">Acknowledgement</a>
</p>

## Deployed Version

Live demo (Feel free to visit) 👉 : https://rnt-clothing.herokuapp.com/

## API Usage

Check:

[RNT Cloth API Documentation Postman](https://rnt-clothing.herokuapp.com/)

[RNT Cloth API Documentation Swagger](https://rnt-clothing.herokuapp.com/)

for more info.

## Deployment

The website is deployed with git into heroku. Below are the steps taken:

```
$  git init
$  heroku login
$  heroku create <heroku_app_name> --buildpack https://github.com/mars/create-react-app-buildpack.git
$  heroku git:remote -a <heroku_app_name>
$  git add -A
$  git commit -m "Commit message"
$  git push heroku main
$  heroku open
```

## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the dependencies by running

```sh
 npm i
 npm start

```

or

```sh
 yarn i
 yarn start

```

## Run App in Development for client / React

```sh
 npm start
```

or

```sh
 yarn start
```

## Updating packages and latest version of react

### 1) Updating Packages

Open Terminal

```sh
 git clone **Link HTTP/SSH Repository
 cd ** Into directory folder
```

remove yarn.lock

```sh
ls
rm -rf yarn.lock
```

update dev dependency

```sh
npm update -D
```

if vulnerabilities found

```sh
npm audit fix
```

install npm dependencies

```sh
npm install
```

repeate if vulnerabilities founded again
try to fix any issue

```sh
npm audit fix
npm audit
```

Run the App

```sh
npm start
```

### 2) Update latest version React to Github

```sh
code .
git add -A
git commit -m "Updated packages to latest version, remove and fixed any vulderabilities"
git push origin **branch_name
```

## Build With

- [Node.js](https://nodejs.org/en) - JS runtime environment
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Firebase](https://firebase.google.com/) - Authentication — user login and identity
- [Firebase-admin](https://firebase.google.com/) - lets you interact with Firebase from privileged environments to perform actions
- [Google Fonts](https://fonts.google.com/?query=open+sans+condensed&selection.family=Open+Sans+Condensed:300) - Great Font for your web app
- [Redux](https://redux.js.org/introduction/getting-started) - Redux is a predictable state container for JavaScript apps.effortlessly within no time.
- [VSCode](https://code.visualstudio.com) - Free source-code editor made by Microsoft
- [Git](https://git-scm.com) - Open source distributed version control system
- [Cloudinary](https://cloudinary.com) - Effortlessly optimize, transform, upload and manage your cloud's assets.
- [Stripe](https://stripe.com/) - Online Payment Processing API payment gateway
- [Heroku](https://www.heroku.com/) - Cloud platform

## NPM / YARN Packages Frontend Development

- [node-sass](https://github.com/sass/node-sass)
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- [redux](https://github.com/reduxjs/redux)
- [redux toolkit](https://github.com/reduxjs/redux)
- [redux-logger](https://github.com/LogRocket/redux-logger)
- [reselect](https://github.com/reduxjs/reselect#readme)
- [redux-persist](https://www.npmjs.com/package/redux-persist)
- [react-stripe-checkout](https://github.com/azmenak/react-stripe-checkout)
- [styled-components](https://github.com/styled-components/styled-components)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- [nodemon](https://github.com/remy/nodemon)
- [body-parser](https://github.com/expressjs/body-parser)
- [compression](https://github.com/expressjs/compression)
- [cors](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)
- [express](https://github.com/expressjs/express)
- [stripe](https://github.com/stripe/stripe-node)
- [concurently](https://github.com/open-cli-tools/concurrently)

## Demonstration

### Development Process RNT Cloth

- Homepage
  - SASS setup
  - refactoring homepage
- Menu Item Component + Style
- Directory Component + Style
- Styling Menu Item animation with cubic-bezier
  -Routing in our project
  - install react-router-dom
  - withRouter() - menu item to navigate
- Shop Page
  - Shop Data
  - collection preview component
  - collection preview style
  - shop page routes
- Collection item component
  - collection item style
  - Routing
- Header
  - Header Link
  - Logo
  - Shop button and contact button
- Sign In Page
  - Sign In Component
  - Sign in style
  - Form input component
  - Form input style
  - Custom button component
  - Google sign in authentication (firebase setup)
  - Google sign in understanding componentDidMount and componentWillUnmount google authentication
  - Integrated firebase into Auth page / application
  - Create sign in and sign out menu in header component
  - Styling sign in component and custom button
- Database Firestore (console firebase)
  - Understanding concept
  - Storing user data in firebase
  - Storing user data in App
- Sign Up Component
  - Sign up style
  - Sign up form
  - Eandling fuction
  - Enable firebase sign in and sign up with google
  - Enable firebase sign in and sign up with email and password
  - Sign up with email and password ( in the console )
  - Sign in with email and password ( in the console )
- Redux Introduction
  - Concepts
  - Redux diagram
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/Redux-flow-diagram.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Setting up redux, redux logger (middleware), redux tools kit
  - Create Root reducer
  - Create User reducer
  - Create store (middleware)
  - Create User actions
  - Connect() and mapStateToProps in header component
  - Implementing User reducer and user action - log in the console
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/user-reducer-action-one.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/user-reducer-action-two.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - implementing mapDispatchtoProps()
  - User redirect and user action type
  - Cart Component in header
    - Cart icon
    - Cart menu dropdown
    - implementing checkout button in cart dropdown
  - Implementing redux in cart
  - Cart Reducer
  - Cart Action
  - Cart Types
  - toggle cart hidden in icon header cart
  - mapStateToProps currentUser and hidden toggle in cart dropdown component
  - Logger result return boolean (True / False):
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/toggle-cart-hidden-true.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/toggle-cart-hidden-false.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Add to cart styling
    - Implementing custom button in collection item
    - Invert style custom button
    - Styling collection item
  - Cart item reducer
    - implementing cart item in reducer, actions, and types
    - mapDispatchToProps add item in collection item component
    - refactor code in collection item preview
    - logger add item in redux:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/cart-reducer-add-item.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Adding multiple items to cart
    - Create cart utils
    - implementing cart utils fuction in cart reducer
    - show quantity item increase by 1 in logger redux:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/cart-utils-add-item-by-increase-quantity.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Cart Item Component
    - cart item style
    - implementing cart item in cart dropdown menu
  - Selector in redux
    - cart icon mapStateToProps
    - install "reselect" library
    - create cart selector function
    - implementing reselect in cart selector
    - refactor code in cart icon and cart dropdown
  - User Selectors
    -refactor code using reselect library (createStructuredSelector)
  - Checkout Page
    - checkout style
    - import to app
    - conditionally cart item in dropdown menu with ternarry
    - hit checkout button and push to checkout page
    - Checkout table for product
    - styling checkout page
    - selector for cart total
    - dispatch action cart dropdown menu when checkout
  - Checkout Item Component
    - checkout item styling
    - import to checkout page
  - Remove Item From Cart
    - new cart types
    - make new function in cart action
    - cart reducer return new array when remove some item in checkout page
    - mapItemToProps in checkout item componen and refactor the code
    - result for CLEAR_ITEM_FROM_CART in redux logger:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/clear-item-from-cart.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - Increase and decrease feature in checkout item
    - styling the arrow increase-decrease quantity
    - new Remove Cart types
    - implementing remove item fuction in cart action
    - create a function to increase-decrease quantity in cart utils fined ID
    - make a new switch-case in cart reducer
    - implementing remove item and add item (increase-decrease quantity) at checkout item in checkout page.
- Session Storage + Presistance
  - Understanding Local Storage and Session Storage
  - Redux persist
    - implementing redux persist in store js
    - refactor root reducer
    - implementing persist gate in app index
    - logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/persist-in-redux-1.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/persist-in-redux-2.png)](https://github.com/Rianto-RNT/rnt-react-development)
- Directory State Into Redux
  - crate directory reducer (reusable/move product category data)
  - crate directory selector
    - pull into root reducer
  - refactor code in directory component
  - logger result for sections:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/directory-sections.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Collections state into redux
    - move shop data into redux folder
    - create shop reducer
    - create shop selectors
      - pull into root reducer
    - refactor code in shop component
  - Collection Ovrview Component
    - collection overview style
    - refactor code shop pages component
- Advanced Routing
  - Nested Routing in Shop Page
    - create Collections component
    - create Collections style
    - refactor code in shop page to access Collections route
  - Collection Routing and selector
    - Map category id of product
    - Create function to create an url param id
    - Connect mapStateToProps in collection component
- State Normalization
  - Data Normalization + Collection page
  - Collection item style = change v width (vw)
  - Implementing collection item component in collection page
  - Link url for collection item category in shop page
  - Change and naming shop data
  - Refactor code in shop selectors
- Data Flow in RNT Cloth
  - Create selecCollectionForPreview in shop selector
  - New selector code implementation in collection overview
- Payment (Stripe)
  - Introduction to Stripe
  - Stripe Integration to RNT Cloth App
    - Create Strip button component
    - Install new library: react-stripe-checkout
    - Implement stripe button payment in checkout page
    - styling the button and add info credit card number for test payment
  - Finishing touches + look ahead
  - Deploying to heroku
  - Optimizing production build
    - Remove logger in production build
- CSS In Javascript (Styled-component)
  - Styled Component in RNT Cloth #1
    - Create Home page styles
    - Implementing and refactor styles in Home page
    - Create Header Style
    - Implementing and refactor style in Header Component
  - Styled component #2
    - Refactor styled code in header.styles.jsx and header component
    - Refactor Custom button style and custom button component
- Advanced Redux + Firebase
  - Firebase Refresher
    - Understanding QueryReferences Object and QuerySnapshot Object
      - Query Snapshot
  - Moving Shop data to firebase #1
    - Create new function in firebase utils
    - Implementing new function in app.js
  - Moving Shop Data to firebase #2
    - Improve new function in firebase utils to store data into firestore
    - Implementing improve function in app.js
    - Little Diagram to store the data into firebase:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/quick-litle-diagram-to-store-data.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Bringing shop data to RNT Cloth app
    - Implementing new function in shop page
  - Adding Shop data to redux
    - Create shop types
    - Create shop actions
    - Implementing shop types and action in shop reducer
    - Implementing shop reducer in mapStateToProps at shop page
- HOC Patterns (High Order Component)
  - With Spinner HOC #1
    - Remove static shop data in RNT Cloth
    - Make collection to an ternary operation in shop selector
    - Create with spinner component (loading)
    - Create with spinner styles
  - With Spinner HOC #2
    - Implementing With Spinner in shop page
    - Set state loading
    - Refactor route in shop page and render the loading using with spinner component
- Asynchronous Redux
  - understanding Observables + observer pattern
  - Promise pattern
    - Get data from firebase firestore into RNT Cloth App
  - Redux Thunk
    - Implementing thunk in store.js middleware
    - Create new function in shop action with isFetching
    - Create new shop types
    - Implementing new types in shop reducer
    - Create and refactor code with new functions in shop actions
    - Implementing and refactor code in shop page
    - Fetching collections in redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/fetch-collections-start-1.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/fetch-collections-start-2.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Debugging the Code
    - Create new shop selector to inverse loaded collection
    - Implementing selector in shop page.
- Container Pattern
  - Create Collection container
  - Create collection-overview containner
  - Refactor code in shop page
- Things to remember: Refactoring is a tradeoff
- Redux Saga
  - sagaMiddleware
    - Implementing sagaMiddlewares in store.js
    - Create shop sagas
    - Implementing and refactor code in shop page
  - Redux Thunk into saga (middleware)
    - Pull actions in from actions to sagas (functions)
  - Understanding Functions: take(), takeEvery(), takeLatest()
  - Root Saga
    - takeLatest() in shop sagas
    - Create root sagas
    - Implementing root saga in store.js
  - Google Sign In Into Sagas
    - Create new User Types
    - Create new function in user action / implement user types in user action
    - Implement new case statement useActionTypes in User Reducer
    - In firebase utils change variable name provider to googleProvider
    - Implementing googleSignInStart in sign-in component
    - Create user sagas
    - Implementing user saga in root saga
    - Refactor code in app.js/app root
    - Redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/google-sign-in-sagas-01.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/google-sign-in-sagas-02.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Email Sign In into Sagas
    - Refactor code in user types
    - Refactor code in user Action
    - Refactor code in User Sagas
    - Refactor code in app js
    - Refactor code at sign-in component
    - Redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/email-sign-in-sagas-01.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Recreating persistence
    - Create new action types in user types (check user session)
    - Implementing types in user actions
    - Implement check user session action types in app
    - Create new persist function in firebase utils
    - Implementing get current user in user saga
  - Sign Out with Sagas
    - Create new user type
    - Implement user type in user actions
    - Pull user action in user reducer
    - Pull user reducer into user sagas
    - Implementing user sagas in Header component (signout menu)
    - Create sign-in style and refactor code in sign-in component
    - Redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/sign-out-start.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/sign-out-success.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Clear Cart Sagas
    - Create new cart type
    - Implement cart types in cart action
    - Implement cart action in cart reducer
    - Create cart sagas js file
    - Pull cart sagas into root sagas
    - Add function to fetch collection start
    - Redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/clear-cart-01.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/clear-cart-02.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Sign Up Saga
    - Create user types
    - Implementing user types in user action
    - Pull and create new fuction to fire up new user action in user sagas
    - Implementing new case statement in user reducer
    - Pull and implementing sign-up saga in sign-up component
    - Redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/sign-up-sagas-01.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/rnt-clothing/src/assets/images/png/sign-up-sagas-02.png)](https://github.com/Rianto-RNT/rnt-react-development)
- React Hook

  - useState and useEffect
  - Converting Class Component with useState
    - Refactor code in sign-in component using useState
    - Refactor code in sign-up component using useState
  - UseEffect in RNT Cloth
    - Refactor code in app.js
    - Refactor code in Shop page
  - (+) useEffect as ComponentWillUnmount() in collection component
  - (-) Remove useEffect as ComponentWillUnmount() in collection component
  - A quick recap of what we have learned about useEffect:

        // 1) ComponentDidMount

          ```sh
          //Class
          componentDidMount() {
          console.log('I just mounted!');
          }

          //Hooks
          useEffect(() => {
          console.log('I just mounted!');
          }, [])


        // 2) ComponentWillUnmount


          //Class

          componentWillUnmount() {
          console.log('I am unmounting');
          }

          //Hooks
          useEffect(() => {
          return () => console.log('I am unmounting');
          }, [])

        // 3) ComponentWillReceiveProps


         //Class
          componentWillReceiveProps(nextProps) {
              if (nextProps.count !== this.props.count) {
                  console.log('count changed', nextProps.count);
              }
          }

          //Hooks
          useEffect(() => {
              console.log('count changed', props.count);
          }, [props.count])
          ```
- Stripe Payment #2 (Backend)
  - Creating Server inside the project
    - Setup server
    - setup package.json file 
    - Create server.js file
    - Install nodemon


## TODO to fix

- All heading in admin dashboard not showing because sticky header.

## Articles

- [Handling Event - React](https://reactjs.org/docs/handling-events.html)

- [React-router-documentation](https://reacttraining.com/react-router/web/guides/quick-start)

- [Higher-Order-Components](https://reactjs.org/docs/higher-order-components.html)

- [Renaming The Default Branch From Master ](https://github.com/github/renaming)

- [About Remote Repository - Github ](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)

- [Generating a new SSH key and adding it to the ssh-agent ](https://docs.github.com/en/enterprise/2.15/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

- [ES6-Template-Strings ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

- [cubic-bezier-docs ](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function)

- [window.localStorage ](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

- [window.sessionStorage ](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

- [Optimal Hash Table vs Array ](https://www.kirupa.com/html5/hashtables_vs_arrays.htm)

- [Stripe Testing - Simulate payments to test your integration ](https://stripe.com/docs/testing#cards)

- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

- [heroku-CRA-buildpack](https://github.com/mars/create-react-app-buildpack)

- [BEM - Block Element Modifier](http://getbem.com/)

- [Firebase-batch-documentation](https://firebase.google.com/docs/firestore/manage-data/transactions)

- [CSS keyframe Animations](https://www.w3schools.com/css/css3_animations.asp)

- [Firestore-rest-api-documentation](https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls)

- [Generator-function-documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

- [Why did React add Hook? - React Hook ](https://reactjs.org/docs/hooks-intro.html)

- [useEffect-documentation - React Hook ](https://reactjs.org/docs/hooks-effect.html)

- [JSON-Placeholder-API ](https://jsonplaceholder.typicode.com)

- [Further-reading-hook-rules ](https://reactjs.org/docs/hooks-rules.html)

- [useReducer-documentation - React Hook ](https://reactjs.org/docs/hooks-reference.html#usereducer)

- [Complete-guide-to-useEffect ](https://overreacted.io/a-complete-guide-to-useeffect/)

- [react-redux-hooks-docs ](https://react-redux.js.org/next/api/hooks)

- [react-router-hooks-docs - Github React Training ](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/hooks.md)



## Future Updates

- Make User interface more beautiful with react material UI
- Implementing clean code architecture
- Refactoring code for client side (Frontend)
- Refactoring code for server (Backend)
- Improve authentication and authorization
- And More ! There's always room for improvement!

## Known Bugs

Feel free to email me at rianto.rnt@gmail.com if you run into any issues or have questions, ideas or concerns.
Please enjoy and feel free to share your opinion, constructive criticism, or comments about my work. Thank you! 🙂

## Route Structure Client Side

> /

> /shop

> /hats

> /checkout

> /sign-in

> /shop/collectionId

# Acknowledgement

- This project is part of the online course I've taken at Udemy. Thanks to Zero To Mastery for creating this awesome course! Link to the course: [Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/?src=sac&kw=react+developer+2022)
