import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

state={
  data: null,
}

componentDidMount = () => {
  fetch('http://localhost:3001/users/get')
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => this.setState({ data }))
};
  render() {
    const { data } = this.state;
    if (data === null)
      return <p>Loading ...</p>
    console.log(data)
    return (
      <div className="App">
        {data.map((x, i) =>
        <div key={i}>
          <p>{x.email}</p>
          <p>{x.password}</p>
          <p>{x.company_name}</p>
        </div>)}
      </div>
    );
  }
}

export default App;
