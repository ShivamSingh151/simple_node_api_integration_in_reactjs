import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name : this.props.name,
    isDataReady : false,
    responseData : [],
  }
  
  componentDidMount(){
    axios.get('http://localhost:8080')
    .then((response) => {
      if(response.status === 200){
        this.setState({
          isDataReady : 1,
          responseData : response.data,
        });
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  renderData = () => {
    return (<ul>
      {this.state.responseData.map(data => (<li>{data.topic}</li>))}
    </ul>);
  }
  
  changeName = element => this.setState({name: element.target.value});
  
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <input type="text" value={this.state.name} name="abc" onChange={this.changeName}   /><br/>
        {this.state.isDataReady && this.renderData()}
      </div>
    );
  }
}

export default App;
