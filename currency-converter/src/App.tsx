import * as React from 'react';
import './App.css';
import Input from "./components/Input";
import Results from "./components/Results";
import Title from "./components/Title";


class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    global.console.log("hello 1");
    return (
      <div className="App">
        <Title />
        <Input />
        <Results />
      </div>
    );
  }

}

export default App;
