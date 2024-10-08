import React from 'react';

const WordpressSkillsLoop = (props) => {
  return (
    <div className='items'>
        <div className='skill-icon'><img className='img-fluid' src={props.iconimg} alt="icon"/></div>
        <div className="custom-tooltip custom-tooltip-top">{props.tooltiptext}</div>
    </div>
  )
}

export default WordpressSkillsLoop;