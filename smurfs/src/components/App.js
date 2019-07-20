import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getSmurfs} from '../actions/index'
import SmurfForm from './smurfForm'


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


        {this.props.smurfs.map(item => <div>
          {item.name} {item.age} {item.height}<br />
        </div>)}

      
          <SmurfForm />


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
