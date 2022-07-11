[![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/01-home-page.png)](https://github.com/Rianto-RNT/rnt-react-development)

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

Live demo (Feel free to visit) 👉 : https://rnt-clothings.herokuapp.com/

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
- [GraphQL](https://graphql.org/) - A query language for API
- [Prisma](https://www.prisma.io/) - Build data-driven JavaScript & TypeScript apps in less time.
- [Hasura](https://hasura.io/) - Instant GraphQL on all your data
- [Apollo](https://www.apollographql.com/docs/apollo-server/) - The Apollo Supergraph Platform unifies GraphQL across your apps and services, unlocking faster delivery for your engineering teams.
- [Git](https://git-scm.com) - Open source distributed version control system
- [Cloudinary](https://cloudinary.com) - Effortlessly optimize, transform, upload and manage your cloud's assets.
- [Stripe](https://stripe.com/) - Online Payment Processing API payment gateway
- [Heroku](https://www.heroku.com/) - Cloud platform
- [VSCode](https://code.visualstudio.com) - Free source-code editor made by Microsoft

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
- [compression](https://github.com/expressjs/compression)
- [stripe](https://github.com/stripe/stripe-node)
- [concurently](https://github.com/open-cli-tools/concurrently)
- [axios](https://github.com/axios/axios)
- [graphql-yoga](https://github.com/dotansimha/graphql-yoga)
- [lodash](https://github.com/lodash/lodash)

## NPM Packages Backend Development

- [nodemon](https://github.com/remy/nodemon)
- [body-parser](https://github.com/expressjs/body-parser)
- [cors](https://github.com/expressjs/cors)
- [express](https://github.com/expressjs/express)
- [express-sslify](https://www.npmjs.com/package/express-sslify)
- [dotenv](https://github.com/motdotla/dotenv)
- [compression](https://github.com/expressjs/compression)

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
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/Redux-flow-diagram.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Setting up redux, redux logger (middleware), redux tools kit
  - Create Root reducer
  - Create User reducer
  - Create store (middleware)
  - Create User actions
  - Connect() and mapStateToProps in header component
  - Implementing User reducer and user action - log in the console
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/user-reducer-action-one.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/user-reducer-action-two.png)](https://github.com/Rianto-RNT/rnt-react-development)
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
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/toggle-cart-hidden-true.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/toggle-cart-hidden-false.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Add to cart styling
    - Implementing custom button in collection item
    - Invert style custom button
    - Styling collection item
  - Cart item reducer
    - implementing cart item in reducer, actions, and types
    - mapDispatchToProps add item in collection item component
    - refactor code in collection item preview
    - logger add item in redux:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/cart-reducer-add-item.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Adding multiple items to cart
    - Create cart utils
    - implementing cart utils fuction in cart reducer
    - show quantity item increase by 1 in logger redux:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/cart-utils-add-item-by-increase-quantity.png)](https://github.com/Rianto-RNT/rnt-react-development)
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
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/clear-item-from-cart.png)](https://github.com/Rianto-RNT/rnt-react-development)
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
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/persist-in-redux-1.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/persist-in-redux-2.png)](https://github.com/Rianto-RNT/rnt-react-development)
- Directory State Into Redux
  - crate directory reducer (reusable/move product category data)
  - crate directory selector
    - pull into root reducer
  - refactor code in directory component
  - logger result for sections:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/directory-sections.png)](https://github.com/Rianto-RNT/rnt-react-development)
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
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/quick-litle-diagram-to-store-data.png)](https://github.com/Rianto-RNT/rnt-react-development)
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
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/fetch-collections-start-1.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/fetch-collections-start-2.png)](https://github.com/Rianto-RNT/rnt-react-development)
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
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/google-sign-in-sagas-01.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/google-sign-in-sagas-02.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Email Sign In into Sagas
    - Refactor code in user types
    - Refactor code in user Action
    - Refactor code in User Sagas
    - Refactor code in app js
    - Refactor code at sign-in component
    - Redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/email-sign-in-sagas-01.png)](https://github.com/Rianto-RNT/rnt-react-development)
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
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/sign-out-start.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/sign-out-success.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Clear Cart Sagas
    - Create new cart type
    - Implement cart types in cart action
    - Implement cart action in cart reducer
    - Create cart sagas js file
    - Pull cart sagas into root sagas
    - Add function to fetch collection start
    - Redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/clear-cart-01.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/clear-cart-02.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Sign Up Saga
    - Create user types
    - Implementing user types in user action
    - Pull and create new fuction to fire up new user action in user sagas
    - Implementing new case statement in user reducer
    - Pull and implementing sign-up saga in sign-up component
    - Redux logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/sign-up-sagas-01.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/sign-up-sagas-02.png)](https://github.com/Rianto-RNT/rnt-react-development)
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
- Backend payment route (stripe)
  - implementing /payment route in server.js
- Connecting client to server
  - Setup Axios in stripe button component
- Deployment to Production
  - Push app to heroku with new payment success
- Context API
  - Setup app for context api
  - Context Consumer + useContext Hook
    - Create context directory
    - Context consumer implementing in collection component
    - Refactor using useContext Hook
  - Context Provider
    - Create current user context
    - refactor code in app.js
    - implementing useContext in header component (sign-in)
  - Cart Context
    - Create cart context
    - implement cart context in header component
    - pull cart context to cart icon component
  - Provider Context Pattern #1
    - Create providers folder
    - Create cart providers
    - Refactor code using new CartContext Provider (useContext Hook)
  - Provider Context Pattern #2
    - Refactor code using new CartContext Provider (Remove item from cart, checkout, and item count - useContext Hook)
- GraphQL + Apollo
  - Introduction to graphql
    - REST backend server diagram
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/backend-diagram-rest.png)](https://github.com/Rianto-RNT/rnt-react-development)
    - GraphQL backend server diagram
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/backend-diagram-graphql.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Adding items with Apollo #1
    - Create new cart dropdown container
    - Copy cart utils from redux to graphql folder
    - Add new function to resolver
    - implementing fuction in index, cart dropdown, and header
  - Adding items with Apollo #2

GraphQL Playground

```sh
query {
  collections {
    id
    title
    items {
      id
      imageUrl
      name
      price
    }
  }
}
```

- GraphQL playground result

- [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/graphql-playground-1.png)](https://github.com/Rianto-RNT/rnt-react-development)

- Introduction to Apollo
  - Setup application (firebase, stripe and more...)
  - install apollo/client + graphql
  - Setup Apollo in index.js
  - Redux logger result:
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/graphql-data-response-result.png)](https://github.com/Rianto-RNT/rnt-react-development)
- Apollo Container
  - Create coleccetion overview container
  - Move query to container
  - Implementing the collections overview container
- Query With Variables
  - Create collection container
  - Implementing Collection container
- GraphQL vs Redux Diagram
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/graphql-vs-redux-diagram.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/replace-graphql-with-apollo.png)](https://github.com/Rianto-RNT/rnt-react-development)
- Mutation On The Client #1
  - Create resolvers
  - implementing resolvers and typeDefs in index.js
  - Header container
  - Cart-icon container
  - Implementing new graphql pattern in header and cart icon
- Mutation On The Client #2
  - Create collection item container
  - Implementing collection item container to Collection preview component
- CartItem Count with Apollo
  - Cart icon container refactor code
  - refactor code using Apollo
- Mobile Support (Main App - RNT Cloth)
  - Mobile Responsiveness #1
    - Create Global style using styled component library
    - Remove App css
  - Mobile Responsiveness #2
    - Refactor styles using styled component
    - Implementing styled component
- React Peformance
  - Code Spitting Introduction
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/images/png/react-peformance.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - Introduction to react lazy
    - import react lazy in RNT Cloth app
  - React lazy + Suspense
    - Refactor code import using react lazy and suspen in app.js
    - Create Spinner component and spinner sytles
    - Implementing spinner in App.js
  - Error Boundaries
    - Using lazy and suspense in shop page
    - Create Shop style component
    - Implementing shop style in shop page
    - Create Error baoundary component and styles
    - Implementing error boundary in app.js
  - Understanding React.memo, PureComponent, shouldComponentUpdate
  - Peformance in RNT Cloth
    - Create cart item styles
    - Implementing styles in comonent
    - Implementing React memo in cart item
  - useCallback and useMemo
  - Gzipping and Compression
    - Install comression in node backend server
    - implementing compression in server.js
  - Profiler - React
    - Implementing react profiler in Home page with id = "Directory"
    - Logger result:
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/profiler-directory.png)](https://github.com/Rianto-RNT/rnt-react-development)
- Progresive Web App (PWA)
  - Introduction to PWA
    - Resouce for PWA in documentation
  - Progresive web app examples
  - [Website example for PWA](https://pokedex.org/)
  - [Hacker News PWA](https://hnpwa.com/)
  - PWA - HTTPS
    - More information to HTTPS (Check the articles down bellow)
  - Note for server.js
    - Make one minor change to make sure our code doesn't require us to use https in development.

```sh
 if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true })); <==== Right here
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
```

- PWA - App Manifest
  - Understanding manifest.json file
- PWA - service workers
  - Understanding serviceWorkers.js file
- Converting RNT Clothing to PWA
  - Create service worker js file
  - Implementing service worker in index.js
  - Icon/splashscreen in manifest.json file
  - Add/ install express-sslify
  - Updating new server.js file
- Firebase Security
  - Firebase security rules
    - Allow write, create, and update.
  - User security rule #1
    - Custom user auth rule in firebase console
    - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/firebase-user-security-rules-1.png)](https://github.com/Rianto-RNT/rnt-react-development)
  - User security rule #2
    - User security rules #2
      - Allow Read/get and Write custom rules user in firestore
  - Security rules #3
    - Only Admin can create and update collections data in firestore database
- Testing
  - Overview
  - Breakdown types of test
    - Unit Tests
    - Integration Tests
    - Automation Tests
  - Testing library
  - [Jest](https://github.com/facebook/jest)
  - [Mocha](https://github.com/mochajs/mocha)
  - [Chai](https://github.com/chaijs/chai)
  - [Jasmine](https://github.com/jasmine/jasmine.github.io)
  - [Istanbul](https://github.com/istanbuljs)
  - [Sinon](https://github.com/sinonjs/)
  - [Ava](https://github.com/avajs/ava)
  - [Tape](https://github.com/substack/tape)
  - [Enzyme](https://github.com/enzymejs/enzyme)
  - Unit tests: all small pure functions of an applications
  - Integration tests: All about cross comunications between diferent units of code.
  - Automation test: (End-to-end testing) are UI test that is always running inside a browser or browser like environment to simulate user behavior. such as typing, clicking, scrolling.
  - Automation test libraries:
  - [Cypress](https://github.com/cypress-io/cypress)
  - [Puppeteer](https://github.com/puppeteer/puppeteer)
  - [playwright](https://github.com/microsoft/playwright)
  - [Nightwatch](https://github.com/nightwatchjs/nightwatch)
  - [Web Driver Io](https://github.com/webdriverio/webdriverio)
  - [Test Cafe](https://github.com/DevExpress/testcafe)
  - [Nightmare](https://github.com/segmentio/nightmare)
  - Testing Flow Diagram:
  - [![](https://github.com/Rianto-RNT/rnt-react-development/blob/development/client/src/assets/testing-flow-diagram.png)](https://github.com/Rianto-RNT/rnt-react-development)

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

- [Fetch-POST-documentation ](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options)

- [Heroku-config-documentation](https://devcenter.heroku.com/articles/config-vars)

- [React-ContextAPI-documentation](https://reactjs.org/docs/context.html)

- [useContext-documentation](https://reactjs.org/docs/hooks-reference.html#usecontext)

- [A quick step by step guide on how to set up your own GraphQL server](https://www.apollographql.com/tutorials/fullstack-quickstart/introduction)

- [Basic GraphQL types](https://graphql.org/graphql-js/basic-types/)

- [Apollo-docs](https://www.apollographql.com/docs/react/)

- [Get-started-apollo-react](https://www.apollographql.com/docs/react/get-started)

- [Import-default-as-alias](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Importing_defaults)

- [Apolo-cache](https://www.apollographql.com/docs/react/advanced/caching/)

- [Docs-on-resolvers-apollo](https://www.apollographql.com/docs/apollo-server/data/resolvers/)

- [React-Apollo-graphql-docs](https://www.apollographql.com/docs/react/api/react-apollo/#graphqlquery-configcomponent)

- [\_media-query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

- [code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

- [react-lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)

- [react-suspense](https://reactjs.org/docs/code-splitting.html#suspense)

- [Error-boundaries](https://reactjs.org/docs/error-boundaries.html)

- [404 Images](https://www.kapwing.com/404-illustrations?ref=producthunt)

- [React-memo](https://reactjs.org/docs/react-api.html#reactmemo)

- [React-pureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)

- [React-developer-tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

- [React-useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

- [React-useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)

- [React-Profiler-API-Docs](https://reactjs.org/docs/profiler.html#usage)

- [Submitting-PWA-to-3-apps-store](http://debuggerdotbreak.judahgabriel.com/2018/04/13/i-built-a-pwa-and-published-it-in-3-app-stores-heres-what-i-learned/)

- [PWA-android-vs-ios](https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7)

- [Explore-PWA-from-arround-the-world](https://appsco.pe/)

- [What-we-can-do-today-PWA](https://whatwebcando.today/)

- [Developers-google-progresive-web-app](https://developers.google.com/search/blog/2016/11/building-indexable-progressive-web-apps?hl=en)

- [Lets-encrypt](https://letsencrypt.org/)

- [Cloud-flare](https://www.cloudflare.com/)

- [Favicon-generator](https://realfavicongenerator.net/)

- [Create-react-PWA-github](https://github.com/jeffposnick/create-react-pwa/compare/starting-point...pwa)

- [Is-service-workers-ready?](https://jakearchibald.github.io/isserviceworkerready/)

- [PWA-push-notifications](https://auth0.com/blog/introduction-to-progressive-web-apps-push-notifications-part-3/)

- [ Firebase - Structuring Cloud Firestore Security Rules](https://firebase.google.com/docs/firestore/security/rules-structure)

- [ Firebase - Authentication](https://firebase.google.com/docs/firestore/security/rules-structure)

- [ Firebase - Get multiple documents from a collection](https://firebase.google.com/docs/firestore/query-data/get-data#get_multiple_documents_from_a_collection)

- [Firebase - Data Validation](https://firebase.google.com/docs/firestore/security/rules-conditions#data_validation)

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

> /shop/:collectionId

# Acknowledgement

- This project is part of the online course I've taken at Udemy. Thanks to Zero To Mastery for creating this awesome course! Link to the course: [Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/?src=sac&kw=react+developer+2022)
