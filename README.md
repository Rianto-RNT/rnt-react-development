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

Live demo (Feel free to visit) 👉 : https://rnt-cloth.herokuapp.com/

## API Usage

Check:

[RNT Cloth API Documentation Postman](https://documenter.getpostman.com/view/16994323/UVkiSJNz)

[RNT Cloth API Documentation Swagger](https://app.swaggerhub.com/apis-docs/rnt-development-one/bootcamp-booking_api/1.0)

for more info.

## Deployment

The website is deployed with git into heroku. Below are the steps taken:

```
git init
git add -A
git commit -m "Commit message"
heroku login
heroku create
heroku config:set CONFIG_KEY=CONFIG_VALUE
git push heroku master
heroku open
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

-

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

# Acknowledgement

- This project is part of the online course I've taken at Udemy. Thanks to Andrei Neagoie for creating this awesome course! Link to the course: [Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/?src=sac&kw=react+developer+2022)
