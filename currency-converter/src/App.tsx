import * as React from 'react';
import './App.css';
import Input from "./components/Input";
import Results from "./components/Results";
import Title from "./components/Title";

const API_KEY = "4ddcdab68c1cf31066b32b923eefe5ed";

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public getConversion = async () => {
    const apiCall = await fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`);
    const data = await apiCall.json();
    global.console.log(data);
    global.console.log("hello 2");
  }

  public render() {
    // this.getConversion();
    global.console.log("hello 1");
    return (
      <div className="App">
        <Title />
        <Input getConversion={this.getConversion}/>
        <Results />
      </div>
    );
  }
}

export default App;
