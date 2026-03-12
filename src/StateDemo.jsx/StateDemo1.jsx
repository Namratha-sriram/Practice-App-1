import React, { Component } from 'react'

export default class StateDemo1 extends Component {
    constructor(){
        super()
        this.state={id:20,name:"namratha",age:17}
    }
  render() {
    return (
      <div>
      ID={this.state.id}<br/>
      Name={this.state.name}<br/>
      Age={this.state.age}<br/>
      </div>
    )
  }
}
