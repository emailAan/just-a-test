# Standards

## General coding standards

### Javascript

## API's
We will be using the es6 fetch library for fetching data from API's. (API's are the REST-services)
For older browsers and IE(...) we will be using the babel polyfill.

All API functions will be located in the src/api directory and should be exported in the index.js file

Info:
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Component and Containers

The React application should be broken in (very) small components and containers.

example of a component:
```javascript
var Component = ({user}) => <span>{`hello${user}`}</span>
```

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
Components and containers should always start with a capital.

Component generally does not contain state, the containers extends components and more likely have state.

Location components: src/components
The components directory should have an index.js in which all components should be listed

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
The state of the application should be stored in a Redux store. 
The reducers must bein the container directory and should be added to the rootReducer in the directory src/reducers/index.js

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

## Testing

## Own utilities

## Images

# Libraries




