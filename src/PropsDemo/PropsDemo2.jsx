import React, { Component } from 'react'

export default class PropsDemo2 extends Component {
  render() {
    return (
      <div>

        a={this.props.a}<br/>
        name={this.props.name}<br/>
      </div>
    )
  }
}
