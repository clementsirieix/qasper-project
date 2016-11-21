// @flow
import React from 'react';

export default class Slider extends React.Component {
    render() {
        return (
            <div className="slider">
                <div className="slider-bar">
                    <div className="bar-bg"></div>
                    <div className="bar-top"></div>
                    <div className="bar-position"></div>
                </div>
                <div className="timer">0:00<span>/3:25</span></div>
            </div>
        );
    }
}
