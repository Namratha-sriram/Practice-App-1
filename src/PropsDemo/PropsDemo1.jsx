import React, { Component } from 'react'
 import PropsDemo2 from "./PropsDemo2/"
export default class PropsDemo1 extends Component {
  

  render() {
     let a=34, name="Namratha"
    return (
        
      <div>
       
        <h2>Props Demo using Class Component</h2>
         a={this.props.a}<br/>
         name={this.props.Name}<br/>
        STUDENT NAME={this.props.student.name}<br/>
        STUDENT AGE={this.props.student.Age}<br/>
        STUDENT GENDER={this.props.student.gender}
        <PropsDemo2 a={a} name={name}/>
      </div>
    )
  }
}
