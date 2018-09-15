import * as React from 'react';
import List from './List';


const API_KEY = "4ddcdab68c1cf31066b32b923eefe5ed";

class Input extends React.Component {
    public state = {
        error: undefined,
        fromCurr: undefined,
        results: undefined,
        toCurr: undefined
    }

    public getConversion = async (e: any) => {
        e.preventDefault();
        const apiCall = await fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`);
        const data = await apiCall.json();
        global.console.log(data);
        global.console.log("hello 2");

    }
      
    public render() {
        return(
           <form onSubmit={this.getConversion}>
                <input id='in' type="number"/>
                <h2>From</h2>
                <List />
                <h2>To</h2>
                <List />
                <button id='btn' disabled={true}>Convert!</button>
           </form>
        );
    }

}

export default Input;