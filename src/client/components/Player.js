// @flow
import React from 'react';

import Slider from '../components/Slider';
import BackIcon from '../icons/BackIcon';
import PlayPauseIcon from '../icons/PlayPauseIcon';
import NextIcon from '../icons/NextIcon';

class Player extends React.Component {
    render() {
        return (
            <footer>
                <div className="player">
                    <div className="controls">
                        <BackIcon />
                        <PlayPauseIcon />
                        <NextIcon />
                    </div>
                    <div className="title">
                        SLIMER112
                    </div>
                    <Slider />
                </div>
                <audio>
                </audio>
            </footer>
        );
    }
}

export default Player
