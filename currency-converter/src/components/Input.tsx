import * as React from 'react';


class Input extends React.Component {
    public render() {
        return(
           <form>
                <input type="text" name="from" placeholder="Convert from"/>
                <input type="text" name="to" placeholder="Convert to"/>
                <button>Convert!</button>
           </form>
        );
    }
}

export default Input;