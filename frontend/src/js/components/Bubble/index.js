import React from 'react'

export default class Bubble extends React.Component {
  render () {
    return (
      // <svg className='bubble'>
      //   <circle cx="90" cy="90" r={this.props.radius} fill={this.props.color} />
      // </svg>
      <div className={'bubble ' + this.props.color + ' size-' + this.props.radius}>
        <p className='score'>{this.props.radius}</p>
      </div>
    )
  }
}
