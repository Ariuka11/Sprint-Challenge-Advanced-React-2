import React from 'react';
import './App.css';
import axios from 'axios'
import Display from './components/Display';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res)
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return (
      <div>
        <h1>World Female Soccer Players</h1>
        <Display users = {this.state.users} />
      </div>
    )
  }
}
export default App;
