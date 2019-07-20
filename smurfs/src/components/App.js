import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getSmurfs} from '../actions/index'


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {JSON.stringify(this.props.smurfs)}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  getSmurfs
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
