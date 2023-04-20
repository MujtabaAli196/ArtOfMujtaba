import React from 'react';

const ExperienceUL = (props) => {
  return (
    <div className={"experience_li " + props.multi_color}>
        <div className="experience_avatar"><img className='img-fluid' src={props.avatar_pic} alt='icon'/></div>
        <h2 className='experience_titleh2 mb-2'><a href={' ' + props.linkgo} target={'_blank'} className={'text-white text-decoration-underline'}>{props.title}</a></h2>
        <h3 className='experience_titleh3'>{props.subtitle}</h3>
        <p className='mx-auto experience_p'>{props.paragraph}</p>
        <div className='experience_date'>{props.date}</div>
    </div>
  )
}

export default ExperienceUL;