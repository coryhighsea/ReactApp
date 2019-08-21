import React from 'react';
import Todos from'./components/Todos';
import './App.css';
import Paragraph from './components/Paragraph';
import Converter from './components/Converter';


class App extends React.Component {
  state = {
    userInput: '',
    userAge: null,
    oneInput: null,
    twoInput: null

  }

  calcOneChangeHandler = (event) => {
    this.setState({oneInput: event.target.value})
  }
  calcTwoChangeHandler = (event) => {
    this.setState({twoInput: event.target.value})
  }


  inputChangedHandler = (event) =>{
    this.setState({userInput: event.target.value})
    


  }
  ageChangeHandler = (event) =>{
    this.setState({userAge: event.target.value})
  }
  constructor(props){
    super(props)
  }
  render (){

    return( 
      <div className="bodyDiv">
        <div className="myDiv">
    

        <Todos name={this.state.userInput} age={this.state.userAge} />
        </div>
        <div className="input">
        <input onChange={this.inputChangedHandler} value={this.state.userInput} type="text" placeholder="Enter Name"/>
        <input onChange={this.ageChangeHandler} value={this.state.userAge} type="number" placeholder="Enter Age" />
        </div>
        <div className="paragraph">
          <Paragraph />
          
        </div>
        <div className="converter">
        <Converter one={this.state.oneInput} two={this.state.twoInput} />
        <input type="text" onChange={this.calcOneChangeHandler} value={this.state.oneInput} />
        <input type="text" onChange={this.calcTwoChangeHandler} value={this.state.twoInput} />
      <p>multiplied {this.state.oneInput * this.state.twoInput} </p>
        </div>
      
      </div>
    )
  }
}

export default App;
