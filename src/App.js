import React from 'react';
import './App.css';
import Hello from "./components/hello/Hello";
import SwitchLanguageButton from './components/switch-language-button/SwitchLanguageButton';

export default class App extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      language:"en"
    }
  }

  on_language_change = (language)=>{
    console.log(language);
    this.setState({
      language:language
    });
  }

  render(){
    return <div className="App">
      <SwitchLanguageButton onLanguageChange={(language)=>this.on_language_change(language)} language={this.state.language} />
      <Hello language={this.state.language} />
    </div>
  }
}
