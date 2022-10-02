import React, { Component } from 'react'; 
class ClassA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ramesh"
        }
    }
    myStyles = {
        color: 'red'
    }
    render() {
        console.log('class=>',this.props)
        return(
            <>
            <h1>Class Component</h1>
            <h3 style={this.myStyles}>Name : {this.state.name}</h3>
            <h3 style={this.myStyles}>My Name : {this.props.name}</h3>
            </>
        )
        }
}
export default ClassA;