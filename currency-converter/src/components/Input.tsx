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
                    <option value="DJF">DJF - Djiboutian Franc</option>
                    <option value="DKK">DKK - Danish Krone</option>
                    <option value="DOP">DOP - Dominican Peso</option>
                    <option value="DZD">DZD - Algerian Dinar</option>
                    <option value="EGP">EGP - Egyptian Pound</option>
                    <option value="ERN">ERN - Eritrean Nakfa</option>
                    <option value="ETB">ETB - Ethiopian Birr</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="FJD">FJD - Fijian Dollar</option>
                    <option value="FKP">FKP - Falkland Islands Pound</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="GEL">GEL - Georgian Lari</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GHS">GHS - Ghanaian Cedi</option>
                    <option value="GIP">GIP - Gibraltar Pound</option>
                    <option value="GMD">GMD - Gambian Dalasi</option>
                    <option value="GNF">GNF - Guinean Franc</option>
                    <option value="GTQ">GTQ - Guatemalan Quetzal</option>
                    <option value="GYD">GYD - Guyanaese Dollar</option>
                    <option value="HKD">HKD - Hong Kong Dollar</option>
                    <option value="HNL">HNL - Honduran Lempira</option>
                    <option value="HRK">HRK - Croatian Kuna</option>
                    <option value="HTG">HTG - Haitian Gourde</option>
                    <option value="HUF">HUF - Hungarian Forint</option>
                    <option value="IDR">IDR - Indonesian Rupiah</option>
                    <option value="ILS">ILS - Israeli New Sheqel</option>
                    <option value="IMP">IMP - Manx Pound</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="IQD">IQD - Iraqi Dinar</option>
                    <option value="IRR">IRR - Iranian Rial</option>
                    <option value="ISK">ISK - Icelandic Króna</option>
                    <option value="JEP">JEP - Jersey Pounds</option>
                    <option value="JMD">JMD - Jamaican Dollar</option>
                    <option value="JOD">JOD - Jordanian Dinar</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="KES">KES - Kenyan Shilling</option>
                    <option value="KGS">KGS - Kyrgystani Som</option>
                    <option value="KHR">KHR - Cambodian Riel</option>
                    <option value="KMF">KMF - Comorian Franc</option>
                    <option value="KPW">KPW - North Korean Won</option>
                    <option value="KRW">KRW - Korean Won</option>
                    <option value="KWD">KWD - Kuwaiti Dinar</option>
                    <option value="KYD">KYD - Cayman Islands Dollar</option>
                    <option value="KZT">KZT - Kazakhstani Tenge</option>
                    <option value="LAK">LAK - Laotian Kip</option>
                    <option value="LBP">LBP - Lebanese Pound</option>
                    <option value="LKR">LKR - Sri Lankan Rupee</option>
                    <option value="LRD">LRD - Liberian Dollar</option>
                    <option value="LSL">LSL - Lesotho Loti</option>
                    <option value="LTL">LTL - Lithuanian Litas</option>
                    <option value="LVL">LVL - Latvian Lat</option>
                    <option value="LYD">LYD - Libyan Dinar</option>
                    <option value="MAD">MAD - Moroccan Dirham</option>
                    <option value="MDL">MDL - Moldovan Leu</option>
                    <option value="MGA">MGA - Malagasy Ariary</option>
                    <option value="MKD">MKD - Macedonian Denar</option>
                    <option value="MMK">MMK - Myanmar Kyat</option>
                    <option value="MNT">MNT - Mongolian Tugrik</option>
                    <option value="MOP">MOP - Macanese Pataca</option>
                    <option value="MRO">MRO - Mauritanian Ouguiya</option>
                    <option value="MUR">MUR - Mauritian Rupee</option>
                    <option value="MVR">MVR - Maldivian Rufiyaa</option>
                    <option value="MWK">MWK - Malawian Kwacha</option>
                    <option value="MXN">MXN - Mexican Peso</option>
                    <option value="MYR">MYR - Malaysian Ringgit</option>
                    <option value="MZN">MZN - Mozambican Metical</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>
                    <option value="GGP">GGP - Guernsey Pound</option>




                </select>
                
                <button>Convert!</button>
           </form>
        );
    }
}

export default Input;