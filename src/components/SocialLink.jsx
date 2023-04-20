import React from 'react';
import { NavItem } from 'react-bootstrap';


const SocialLink = (props) => {
  return (
    <>
    <NavItem className=''>
        <a href={props.social_link} rel="" className="has-tooltip">
            <img className='img-fluid' src={props.sociall_img} alt="icon"/>
            <div className='custom-tooltip'>{props.title}</div>
        </a>
    </NavItem>
    </>
  )
}

export default SocialLink;