import React from 'react';

import './Styles.scss';

const ProgressBar = ({ barWidth }) => {


    return <div className="progress-bar">
        <div className="progress-bar__background">
            <div className="progress-bar__body" style={{width: `${barWidth}%`}}></div>
            <span className="progress-bar__dot"></span>
        </div>
    </div>
};

export default ProgressBar;
