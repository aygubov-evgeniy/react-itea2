import React, { Component } from 'react';
import './App.css';

import Button from './Button.js';
import ListItem from './list-item.js';

const style = {
  color: '#fff',
  width: '100px',
  height: '100px',
  fontSize: '20px',
  borderRadius: '50%',
  backgroundColor: '#000'
}

class App extends Component {
  state = {
    counter: 0,
    transformedArray: []
  }

  componentDidMount() {
    let url = 'http://www.json-generator.com/api/json/get/ckpOtQbDma?indent=2';

    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        let transformedArray = data.map( user => {
          return({
            interviewed: false,
            user
          });
        });
        
        this.setState({ transformedArray });
      }
    );
  }

  updateCounter = () => {
    let {counter} = this.state;
    counter += 1;

    this.setState({ counter });
  }

  render() {
    const { counter, transformedArray } = this.state;

    return (
      <div className="App">
        <Button
          style={style}
          text={counter}
          action={this.updateCounter}
        />

        {
          transformedArray.length !== 0 ?
          (
            <ul>
              {
                transformedArray.map( ({user}, key) => 
                <ListItem name={user.name} key={key} />)
              }
            </ul>
          ) :
          (
            <p>Loading</p>
          )
        }
      </div>
    );
  }
}

export default App;
