import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(){
    super()
    this.state={count:0}
  }
    increment =()=>{
        this.setState({count:this.state.count+1})
    }
 Decrement =()=>{
        this.setState({count:this.state.count-1})
    }
  




  render() {
    return (
      <div>
        count={this.state.count}<br/>
<button onClick={this.increment}>Increment</button>
<button onClick={this.Decrement}>Decrement</button>
{
   (this.state.count)>10? "High": "low"

}
      </div>
    )
  }
}
