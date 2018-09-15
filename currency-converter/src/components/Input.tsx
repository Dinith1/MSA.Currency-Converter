import * as React from 'react';
import List from './List';

interface IState {
    fromCurr: string,
    numberEntered: number,
    results: number,
    succ: boolean,
    toCurr: string
}

const API_KEY = "4ddcdab68c1cf31066b32b923eefe5ed";

class Input extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            fromCurr: 'AED',
            numberEntered: 0.0,
            results: 0.0,
            succ: false,
            toCurr: 'AED'
        }
        this.numberEntered = this.numberEntered.bind(this);
        this.getConversion = this.getConversion.bind(this);
    }


    public getConversion = async (e: any) => {
        e.preventDefault();
        // There is a fetch call to directly convert between two currencies, but it costs money to use that :(
        const apiCall = await fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`);
        const data = await apiCall.json();
        global.console.log(data);
        global.console.log("hello 2");
        this.setState({
            results: data.rates.USD,
            succ: data.success
        });
        global.console.log(this.state.results);
    }

    public numberEntered(event: { target: {value: any;};}) {
        this.setState({
            numberEntered: event.target.value
        });
        // CURRENTLY CALLS 1 INPUT BEFORE 
        global.console.log(this.state.numberEntered);
    }
      
    public render() {
        return(
           <form onSubmit={this.getConversion}>
                <input id='inputNumber' type="number" value={this.state.numberEntered} onChange={this.numberEntered}/>
                <h2>From</h2>
                <List name="hi"/>
                <h2>To</h2>
                <List name="bye"/>
                <button id='btn' disabled={false}>Convert</button>
           </form>
        );
    }

}

export default Input;