# Standards

## API's
We will be using the es6 fetch library for fetching data from API's. (API's are the REST-services)
For older browsers and IE(...) we will be using the babel polyfill.

All API functions will be located in the src/api directory and should be exported in the index.js file

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Component and Containers

The React application should be broken in (very) small components and containers. Components and containers should always start with a capital.
Components generally does not contain state, the containers extends components and more likely have state.

### Component
example of a component:
```javascript
var Component = ({user}) => <span>{`hello${user}`}</span>
```

Location components: src/components
All components should have it's one directory, the index.js file should contain/export the component. The components directory should have an index.js in which all components should be exported.

### Container
example of a container:
```javascript
class Container extends React.Component {
  constructor () {
    super()
    this.state = {
      value: 0
    }
  }
  render () {
    return (
      <button onClick={() => this.setState({value: this.state.value + 1})}>
        {this.state.value}
      </button>
    )
  }
}
```

Location containers: src/containers
Every container should have it's own directory in which the following files can be present:
* index.js (the container)
* actions.js (the Redux actions creators)
* constants.js (Redux actions names and other constants)
* reducer.js (the Redux reducer for this container)
* selectors.js (the selectors for selecting data from the redux store)

The state of containers should be stored in Redux.

More info:

[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Redux
The state of the application should be stored in a Redux store. The store is locate in the directory: src/stores
The reducers must be in the container directory and should be added to the rootReducer in the directory src/reducers/index.js
The services should be in the folder "src/services", this can be all kinds of MiddlewareServices. Also the Redux Saga's should be added here. All Saga's should be included in the rootSaga that is defined in the index.js file.

## Styling
Style using [styled-components](https://www.styled-components.com/) as much as possible

Simple example for showing highlighted text:
```javascript
const HighlightedText = styled.span`
  background-color: #FFFF00;
`

const ShowHighligthedText = () => (
  <div>
    <HighlightedText>This will be highligthed</HighlightedText>
  </div>
)
```

## Images
All images should be located in the src/images directory

# Libraries

For the runtime application:
 * [react](https://github.com/facebook/react) *for creating React components*
 * [react-dom](https://www.npmjs.com/package/react-dom) *for generating React components to the DOM*
 * [styled-components](https://www.styled-components.com/) *for styling React components*
 * [redux](http://redux.js.org/docs/introduction/) *cor maintaining the state of the application*
 * [redux-saga](https://redux-saga.js.org/) *cor calling side-affects in Redux (API calls)*
 * [reselect](http://redux.js.org/docs/recipes/ComputingDerivedData.html) *for (cached) selecting from Redux store*
 * [lodash](https://lodash.com/) *handy utilities*
 * [onsenui](https://onsen.io/) *component library*
 * [reacte-onsenui](https://onsen.io/v2/guide/react/) *for using the Onsen library in React*
 * [ sanitize.cs](https://jonathantneal.github.io/sanitize.css/) *for sanitizing the styles in the dom*
 * [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) *this enables the use of es6 functions*
 * [react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) *enables tap-event in React-App*
