//@flow
import React from 'react';
import { browserHistory } from 'react-router';

import Navbar from '../components/Navbar';
import Player from '../components/Player';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                {React.cloneElement(this.props.children, {...this.props})}
                <Player />
            </div>
        );
    }
}

export default App
