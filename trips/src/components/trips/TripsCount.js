import React from 'react';
import {FaMountain} from 'react-icons/fa';
import {FaSun} from 'react-icons/fa';
import {FaCcDinersClub} from 'react-icons/fa';

// Get percent completed
const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

// Object of width of progress bar
const getProgressBarWidth = (width) => {
    return {width};
}

export const TripsCount = ({total, tropic, trek, club, goal=15}) => (
    <div className="trips-count">
        <div className="content">
            <div className="total"><h1>{total}</h1>trips</div>
            <div className="tropic"><h3>{tropic}</h3><FaSun /></div>
            <div className="trek"><h3>{trek}</h3><FaMountain /></div>
            <div className="club"><h3>{club}</h3><FaCcDinersClub /></div>
            <div className="goal"><div className="progress" style={getProgressBarWidth(getProgress(total,goal))}></div> {getProgress(total, goal)}</div>
        </div>
    </div>
)

