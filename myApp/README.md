
  
# cra-redux-observable








## Getting Started

1. Clone this repo

`https://github.com/hazooma/Redux-Observable-With-NodeJs.git`

2. To run, go to project folder and run

`$ npm install`
or
`$ yarn install` (if you are using yarn)

3. Now start dev server by running -

`$ npm start`
or
`$ yarn start`

4. If the browser does not automatically for any reason visit - http://localhost:3000/

For more create-react-app commands refer `package.json`

## Code structure

### Components
Most of the generic layout is built in `/src/App.js` just as found in the original Create-React-App. The key thing to notice here is that we have included our one and only component to that file: namely `<xxxComponent />` which has been imported from our `/src/components` folder. I recommend you keep all of your components there unless you feel need to move them elsewhere.

### The Redux Store

The majority of the bootstrap code for the store is located in `/src/store.js`. By default, the [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)  is enabled so feel free to open that in Google Chrome to see what our Redux store looks like. 

**Note:** You will only benefit from having this enabled if you install the Google Chrome Extension which can be found at the above Redux Devtools hyperlink.

### Redux-Observable Integration

The logic for your reducers (aka Redux logic) will all be contained with `/src/reducers/`. The logic for your epics (aka Redux-Observable) will all be contained in `/src/epics`.

#### Understand that every action will go to a Reducer before going into any Epic. 



## Recommended Resources

[Official Facebook Documentation on React](https://reactjs.org/docs/getting-started.html) 

[Official Redux Documentation](https://redux.js.org/)

[Official Redux-Observable Documentation](https://redux-observable.js.org/)

[Official RxJS Documentation](https://rxjs-dev.firebaseapp.com/)


