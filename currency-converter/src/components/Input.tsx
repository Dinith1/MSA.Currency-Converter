import * as React from 'react';


const API_KEY = "4ddcdab68c1cf31066b32b923eefe5ed";

// interface IInput {
//     // name: string;
//     // handleChange(event: any): void;
//     getConversion(): void;
// }

class Input extends React.Component {
    constructor(props: any) {
        super(props);
      }

    public getConversion = async (e: any) => {
        e.preventDefault();
        const apiCall = await fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`);
        const data = await apiCall.json();
        global.console.log(data);
        global.console.log("hello 2");
  }
      
    // public render() {
    //     return(
    //        <form onSubmit={this.props.getConversion}>
    //             <input type="text" name="from" placeholder="Convert from"/>
    //             <input type="text" name="to" placeholder="Convert to"/>
    //             <button>Convert!</button>
    //        </form>
    //     );
    // }

    public render() {
        return(
           <form onSubmit={this.getConversion}>
                <select name="sel">
                    <option value="AED">AED - United Arab Emirates Dirham</option>
                    <option value="AFN">AFN - Afghan Afghani</option>
                    <option value="ALL">ALL - Albanian Lek</option>
                    <option value="AMD">AMD - Armenian Dram</option>
                    <option value="ANG">ANG - Netherlands Antillean Guilder</option>
                    <option value="AOA">AOA - Angolan Kwanza</option>

                </select>
                
                <button>Convert!</button>
           </form>
        );
    }
}

export default Input;