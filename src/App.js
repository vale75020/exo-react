import React, { Component } from 'react';
import ButtonCounter from './components/ButtonCounter'
import List from './components/List'
import './App.css';


class AppHeader extends Component {
  render() {
    // console.log(this.props)
    const  { title } = this.props
    return (
      <div>
      <h1>{title}</h1>
      </div>
    )
  }
}

{/*
class ButtonCounter extends Component {
  render() {
    // console.log(this.props)
    const { counter, onIncrement, styleIncr } = this.props
    return (
      <div>
      <button style={styleIncr} onClick={onIncrement}> + INCREMENT </button>
        <div>
          <span>COUNTER : </span>
          <span>{counter}</span>  
        </div> 
      </div>
    )
  }
}
*/}

class SingleCounter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      styleSing: { 
        padding: "5px", 
        margin: "10px",
        backgroundColor: "lightgreen"
        }
    };
  }
  increment() {
    this.setState({
      counter : this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter : this.state.counter - 1
    })
  }

  render() {
    const { counter, styleSing } = this.state
    return (
      <div>
        <h3>Single Counter</h3>
      <button style={styleSing} onClick={(event) => this.increment()}> + INCREMENT </button>
      <button style={styleSing} onClick={(event) => this.decrement()}> - DECREMENT </button>
        <div>
          <span>COUNTER : </span>
          <span>{counter}</span> 
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      styleIncr: { 
        padding: "5px", 
        margin: "10px",
        backgroundColor: "lightblue"
        }
    };
  }

  increment() {
    console.log("App.increment()")
    this.setState({
      counter : this.state.counter + 1
    })
  }

  decrement() {
    console.log("App.decrement()")
    this.setState({
      counter : this.state.counter - 1
    })
  }


  render() {
    // console.log(this.props)
    // const titolo = this.props.titolo
    const { titolo, welcome } = this.props
    const { counter , styleIncr} = this.state  // recupero il valore di counter dallo state e lo utilizzo nel componente
    return (
      <div className="App">
        <AppHeader title={titolo} />
        <p>{welcome}</p>
        <SingleCounter />
        <h3>Double Counter</h3>
        <ButtonCounter styleIncr={styleIncr} counter={counter} onIncrement={(event) => this.increment()} onDecrement={(event) => this.decrement()}/>
        <ButtonCounter styleIncr={styleIncr} counter={counter} onIncrement={(event) => this.increment()} onDecrement={(event) => this.decrement()}/>
   {/*  <h1>{titolo}</h1>   
        <p>{welcome}</p>
        <button style={styleIncr} onClick={(event) => this.increment()}> + INCREMENT </button>
        <div>
          <span>COUNTER : </span>
          <span>{counter}</span>  // <span>{this.state.counter}</span>   
        </div> */}
        <List />
      </div>
    );
  }
}

export default App;
