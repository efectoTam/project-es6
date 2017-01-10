import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
  render(){
    return <div>¡Hola mundo!</div>
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('container')
);