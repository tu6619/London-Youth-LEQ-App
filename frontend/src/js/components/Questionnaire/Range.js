import React, { Component } from 'react'
import Slider from 'material-ui/lib/slider'

export default class SliderExampleSimple extends React.Component {
  constructor () {
    super()
    this.state = { value: 5 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e, value) {
    this.setState({ value: value })
    this.props.changeState(this.props.leqFactor, value)
  }

  render () {
    return (
      <div>
        <Slider
          min={1}
          max={8}
          step={1}
          onChange={this.handleChange}
          required
          defaultValue={5} />
      </div>
    )
  }
}
