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
                    <option value="AOA">ARS - Argentine Peso</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="AWG">AWG - Aruban Florin</option>
                    <option value="AZN">AZN - Azerbaijani Manat</option>
                    <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
                    <option value="BBD">BBD - Barbadian Dollar</option>
                    <option value="BDT">BDT - Bangladeshi Taka</option>
                    <option value="BGN">BGN - Bulgarian Lev</option>
                    <option value="BHD">BHD - Bahraini Dinar</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BMD">BMD - Bermudan Dollar</option>
                    <option value="BND">BND - Brunei Dollar</option>
                    <option value="BOB">BOB - Bolivian Boliviano</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="BSD">BSD - Bahamian Dollar</option>
                    <option value="BTC">BTC - Bitcoin</option>
                    <option value="BTN">BTN - Bhutanese Ngultrum</option>
                    <option value="BWP">BWP - Botswanan Pula</option>
                    <option value="BYN">BYN - Belarusian Ruble</option>
                    <option value="BZD">BZD - Belize Dollar</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CDF">CDF - Congolese Franc</option>
                    <option value="CHF">CHF - Swiss Franc</option>
                    <option value="CLF">CLF - Chilean Unit of Account (UF)</option>
                    <option value="CLP">CLP - Chilean Peso</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="COP">COP - Colombian Peso</option>
                    <option value="CRC">CRC - Costa Rican Colón</option>
                    <option value="CUC">CUC - Cuban Covertable Peso</option>
                    <option value="CUP">CUP - Cuban Peso</option>
                    <option value="CVE">CVE - Cape Verdean Escudo</option>
                    <option value="CZK">CZK - Czech Republic Koruna</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="BIF">BIF - Burundian Franc</option>



                </select>
                
                <button>Convert!</button>
           </form>
        );
    }
}

export default Input;