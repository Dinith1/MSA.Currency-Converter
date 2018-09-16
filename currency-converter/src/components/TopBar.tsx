import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import * as React from 'react';


// UI component that uses Material-UI
// The top title bar
class TopBar extends React.Component {
    public render() {
        return(
            <div>
                <AppBar position="static">
                        <Typography variant="title" color="inherit" align="center">
                            Currency Converter
                        </Typography>
                </AppBar>
            </div>
        );
    }
}

export default TopBar;