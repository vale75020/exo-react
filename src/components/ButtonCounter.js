import React, { Component } from 'react';

export default class ButtonCounter extends Component {
    render() {
      // console.log(this.props)
      const { counter, onIncrement, onDecrement, styleIncr } = this.props
      return (
        <div>
        <button style={styleIncr} onClick={onIncrement}> + INCREMENT </button>
        <button style={styleIncr} onClick={onDecrement}> - DECREMENT </button>
          <div>
            <span>COUNTER : </span>
            <span>{counter}</span>  
          </div> 
        </div>
      )
    }
  }

