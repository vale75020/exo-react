import React, { Component } from 'react'

export default class List extends Component {
    constructor() {
        super();
        this.state = {
            objects: [
                { id: 0, name: 'object 1'},
                { id: 1, name: 'object 2'},
                { id: 2, name: 'object 3'},
                { id: 3, name: 'object 4'}
            ]
        };
    }
  render() {

   /* const ObjectsList = [
        { id: 0, name: 'object 1'},
        { id: 1, name: 'object 2'},
        { id: 2, name: 'object 3'}
    ] */
    const ObjectsList = this.state.objects
    const ObjectsListJSX = ObjectsList.map((o) => <li key={o.id}>{o.name}</li>)
    console.log(ObjectsListJSX)
    return (
      <div>
      <h3>This is a List</h3>
      <ul>{ObjectsListJSX}</ul>
       {/* <ul>
            <li>ONE</li>
            <li>TWO</li>
            <li>THREE</li> 
        </ul> */}
      </div>
    )
  }
}
