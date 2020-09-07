## Check Every time for creating new project give the following command 
   ### `npx create-react-app appName`
   ### `cd appName`
   ### `npm start`

   ## For  solving the load issues when it is showing the following error 'unhandled error'
   ### `npm install react-scripts@3.4.3` 
   

   For adding Bootstrap using create-react-app
 ### `npm install --save bootstrap`
 ### then add the `import 'bootstrap/dist/css/bootstrap.css';` `into src/index.js` file.
                           
                           Or, 

   ## To Add react-Bootstrap run the following command inside the project folder 
   ### `npm install react-bootstrap bootstrap`

   After that add the 'bootstrap.min.css' file inside your folder anywhere or add the cdn link into your html file.
   ### `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>`

       or,
  ## you can use material UI which functionality is as same as bootstrap  
  ### `npm install @material-ui/core` 
                or add the cdn link on the html file for material UI  
  ### `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`
          

   For using FontAwesome use the following command 
  ###  `npm i --save @fortawesome/fontawesome-svg-core`
  ### `npm install --save @fortawesome/free-solid-svg-icons`
  ### `npm install --save @fortawesome/react-fontawesome`


    And then import the following for using fontawesome 
   ### `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome`
   ### `import { faCoffee } from '@fortawesome/free-solid-svg-icons`

   ### After that use --> `<FontAwesomeIcon icon={faCoffee} />` for getting the icon.

   ## For using the charts use Recharts link : `https://recharts.org/en-US/guide/installation`
   ### `npm install recharts`



## Available Scripts



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
