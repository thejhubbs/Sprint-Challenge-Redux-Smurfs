import React from 'react' 
import {connect} from 'react-redux'
import {createSmurf} from '../actions/index'

class SmurfForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            smurf: {
                name: "",
                age: "",
                height: ""
            }
        }

    }

    handleChange = (e) => {
        this.setState({smurf: {...this.state.smurf, [e.target.name]: e.target.value} })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createSmurf(this.state.smurf)
        this.setState({smurf: {
            name: "",
            age: "",
            height: ""
        }})
    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit} >
                <input type="text" onChange={this.handleChange} value={this.state.smurf.name} name="name" />
                <input type="text" onChange={this.handleChange} value={this.state.smurf.age} name="age" />
                <input type="text" onChange={this.handleChange} value={this.state.smurf.height} name="height" />
                <button type="submit">Submit</button>
            </form>

        </div>
    }


}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

const mapDispatchToProps = {
    createSmurf
}


export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm)