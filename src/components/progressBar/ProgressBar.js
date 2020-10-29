import React, { useState, useEffect } from 'react';

import './Styles.scss';

const ProgressBar = ({ questionId, questionsTotal }) => {
    const [barWidth, setBarWidth] = useState(25);

    useEffect(() => {
        const result = 100 / (questionsTotal - questionId);
        
        setBarWidth(result);
    }, [questionsTotal, questionId])


    return <div className="progress-bar">
        <div className="progress-bar__background">
            <div className="progress-bar__body" style={{width: `${barWidth}%`}}></div>
        </div>
    </div>
};

export default ProgressBar;
