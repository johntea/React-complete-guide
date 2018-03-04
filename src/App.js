import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons:[ 
      {name:'Max', age: '28'},
      {name: 'john',age: '55'},
      {name:'Poorvi',age: '22'}
       ],
otherState: 'some other value'

  }


  switchNameHandler = (newName) => {
   // console.log('was clicked!');
  //Don't do this- this.state.persons[0].name = 'Jonty'; 

this.setState({
  persons:[ 
  {name:'newName', age: '28'},
  {name: 'john',age: '55'},
  {name:'Poorvi',age: '25'}
   ] 
  })

  }

  render() {
          return (
        <div className="App">
        <h1>Hi i am a react app </h1>
        <p>This is really working</p>
        <h1> Another heading </h1>

        <button onClickSwitch={this.switchNameHandler.bind(this, 'Jonty ')}>Switch Name</button>

        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} >

        <Person
         name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>

        <Person
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>
        click={this.switchNameHandler.bind(this , 'john')}My hobbies: Listeing songs </Person>

      </div>
      
          );
          //  return React.createElement('div',null,React.createElement('h1',null,'Does this work now?'))
  }
}

export default App;
